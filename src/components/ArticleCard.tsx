import type { Article } from "../lib/articles";

type ArticleCardProps = {
  article: Article;
};

function formatArticleDate(value: string): string {
  if (!value) {
    return "";
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "";
  }

  return new Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

export default function ArticleCard({
  article,
}: ArticleCardProps) {
  const formattedDate = formatArticleDate(
    article.publishedAt,
  );

  return (
    <article
      className={`articleCard articleCard-${article.source}`}
    >
      <a
        href={article.url}
        target="_blank"
        rel="noreferrer"
        className="articleCardLink"
      >
        <div className="articleCardTop">
          <span
            className={`articleSource articleSource-${article.source}`}
          >
            {article.source === "note" ? "note" : "Qiita"}
          </span>

          {formattedDate && (
            <time dateTime={article.publishedAt}>
              {formattedDate}
            </time>
          )}
        </div>

        <h3>{article.title}</h3>

        {article.description && (
          <p className="articleDescription">
            {article.description}
          </p>
        )}

        {article.tags && article.tags.length > 0 && (
          <div className="articleTags">
            {article.tags.slice(0, 4).map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        )}

        <div className="articleCardBottom">
          <span>記事を読む</span>
          <span aria-hidden="true">↗</span>
        </div>
      </a>
    </article>
  );
}