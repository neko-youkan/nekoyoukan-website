import type { Metadata } from "next";

import ArticleCard from "../../components/ArticleCard";
import Header from "../../components/Header";
import {
  getNoteArticles,
  getQiitaArticles,
} from "../../lib/articles";

export const metadata: Metadata = {
  title: "Blog | nekoyoukan",
  description:
    "noteとQiitaで公開している記事を紹介しています。",
};

export default async function BlogPage() {
  const [noteArticles, qiitaArticles] = await Promise.all([
    getNoteArticles(),
    getQiitaArticles(),
  ]);

  return (
    <>
      <Header />

      <main className="blogPage">
        <section className="blogHero">
          <div className="blogHeroInner">
            <p className="sectionLabel">Blog</p>

            <h1>つくったこと、学んだこと。</h1>

            <p className="blogHeroText">
              個人開発の背景や日々の記録はnoteに、
              実装やサーバー構築の技術記事はQiitaにまとめています。
            </p>
          </div>
        </section>

        <section className="articlePlatformSection noteSection">
          <div className="articleSectionInner">
            <div className="articleSectionHeading">
              <div>
                <p className="sectionLabel">
                  Development Notes
                </p>

                <h2>note</h2>

                <p>
                  個人開発を始めたきっかけや、
                  制作中に考えたことなどを記録しています。
                </p>
              </div>

              <a
                href="https://note.com/nekoyoukan"
                target="_blank"
                rel="noreferrer"
                className="platformLink"
              >
                noteをすべて見る
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            {noteArticles.length > 0 ? (
              <div className="articleGrid">
                {noteArticles.map((article) => (
                  <ArticleCard
                    key={article.url}
                    article={article}
                  />
                ))}
              </div>
            ) : (
              <div className="emptyArticles">
                <p>noteの記事は、これから追加していきます。</p>

                <a
                  href="https://note.com/nekoyoukan"
                  target="_blank"
                  rel="noreferrer"
                >
                  noteを見る ↗
                </a>
              </div>
            )}
          </div>
        </section>

        <section className="articlePlatformSection qiitaSection">
          <div className="articleSectionInner">
            <div className="articleSectionHeading">
              <div>
                <p className="sectionLabel">
                  Technical Articles
                </p>

                <h2>Qiita</h2>

                <p>
                  Python、Docker、Linux、AWSなど、
                  実装やインフラ構築で学んだことをまとめています。
                </p>
              </div>

              <a
                href="https://qiita.com/neko-youkan"
                target="_blank"
                rel="noreferrer"
                className="platformLink"
              >
                Qiitaをすべて見る
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            {qiitaArticles.length > 0 ? (
              <div className="articleGrid">
                {qiitaArticles.map((article) => (
                  <ArticleCard
                    key={article.url}
                    article={article}
                  />
                ))}
              </div>
            ) : (
              <div className="emptyArticles">
                <p>Qiitaの記事は、これから追加していきます。</p>

                <a
                  href="https://qiita.com/neko-youkan"
                  target="_blank"
                  rel="noreferrer"
                >
                  Qiitaを見る ↗
                </a>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}