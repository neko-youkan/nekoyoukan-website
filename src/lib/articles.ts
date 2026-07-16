import { XMLParser } from "fast-xml-parser";

export type Article = {
  title: string;
  url: string;
  publishedAt: string;
  description: string;
  source: "note" | "qiita";
  tags?: string[];
};

type NoteRssItem = {
  title?: string;
  link?: string;
  pubDate?: string;
  description?: string;
  "content:encoded"?: string;
};

type QiitaItem = {
  id: string;
  title: string;
  url: string;
  created_at: string;
  updated_at: string;
  rendered_body?: string;
  body?: string;
  tags?: {
    name: string;
  }[];
};

const NOTE_RSS_URL = "https://note.com/nekoyoukan/rss";

const QIITA_API_URL =
  "https://qiita.com/api/v2/users/neko-youkan/items?page=1&per_page=6";

/**
 * HTMLタグなどを取り除き、
 * 記事カードに表示できる短い文章へ整える
 */
function createDescription(
  value: string | undefined,
  maxLength = 120,
): string {
  if (!value) {
    return "";
  }

  const plainText = value
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();

  if (plainText.length <= maxLength) {
    return plainText;
  }

  return `${plainText.slice(0, maxLength)}…`;
}

/**
 * noteの最新記事をRSSから取得する
 */
export async function getNoteArticles(): Promise<Article[]> {
  try {
    const response = await fetch(NOTE_RSS_URL, {
      next: {
        revalidate: 3600,
      },
    });

    if (!response.ok) {
      throw new Error(
        `note RSSの取得に失敗しました: ${response.status}`,
      );
    }

    const xml = await response.text();

    const parser = new XMLParser({
      ignoreAttributes: false,
      processEntities: true,
      trimValues: true,
    });

    const parsed = parser.parse(xml);

    const rawItems = parsed?.rss?.channel?.item;

    if (!rawItems) {
      return [];
    }

    const items: NoteRssItem[] = Array.isArray(rawItems)
      ? rawItems
      : [rawItems];

    return items.slice(0, 6).map((item) => {
      const descriptionSource =
        item.description ?? item["content:encoded"];

      return {
        title: item.title ?? "タイトルなし",
        url: item.link ?? "https://note.com/nekoyoukan",
        publishedAt: item.pubDate ?? "",
        description: createDescription(descriptionSource),
        source: "note",
      };
    });
  } catch (error) {
    console.error("noteの記事取得エラー:", error);
    return [];
  }
}

/**
 * Qiitaの最新記事を公式APIから取得する
 */
export async function getQiitaArticles(): Promise<Article[]> {
  try {
    const response = await fetch(QIITA_API_URL, {
      headers: {
        Accept: "application/json",
      },
      next: {
        revalidate: 3600,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Qiita APIの取得に失敗しました: ${response.status}`,
      );
    }

    const items: QiitaItem[] = await response.json();

    return items.map((item) => ({
      title: item.title,
      url: item.url,
      publishedAt: item.created_at,
      description: createDescription(
        item.rendered_body ?? item.body,
      ),
      source: "qiita",
      tags: item.tags?.map((tag) => tag.name) ?? [],
    }));
  } catch (error) {
    console.error("Qiitaの記事取得エラー:", error);
    return [];
  }
}