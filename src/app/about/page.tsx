import Header from "@/components/Header";

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="aboutPage">
        <section className="aboutHero">
          <p className="sectionLabel">About</p>

          <h1>つくることを、楽しむ。</h1>

          <p className="aboutText">
            インフラ構築や個人開発を通して、
            日々新しいことを学びながら、
            便利なものを形にしています。
          </p>

          <p className="aboutText">
            Linux、Docker、AWS、Pythonなどを使い、
            Webアプリや自宅サーバーの構築・運用に取り組んでいます。
          </p>
        </section>

        <section className="aboutSkills">
          <p className="sectionLabel">Skills</p>
          <h2>興味のある技術</h2>

          <div className="techGrid">
            <span className="techChip">Linux</span>
            <span className="techChip">AWS</span>
            <span className="techChip">Docker</span>
            <span className="techChip">Python</span>
            <span className="techChip">Next.js</span>
            <span className="techChip">Streamlit</span>
            <span className="techChip">SQLite</span>
            <span className="techChip">Cloudflare</span>
          </div>
        </section>
      </main>
    </>
  );
}