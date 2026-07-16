export default function AboutPage() {
  const technologies = [
    "Python",
    "Linux",
    "Docker",
    "Next.js",
    "TypeScript",
    "Streamlit",
    "SQLite",
    "PostgreSQL",
    "Redis",
    "AWS",
    "Cloudflare",
    "Git",
  ];

  return (
    <main className="aboutPage">
      <section className="aboutHero">
        <p className="sectionLabel">Profile</p>

        <h1>About</h1>

        <p className="aboutText">
          個人でWebアプリやサーバーの構築・運用を行っています。
        </p>

        <p className="aboutText">
          Pythonを中心に、Linux、Docker、AWSなどを使いながら、
          生活を少し便利にするツールやサービスを開発しています。
        </p>

        <p className="aboutText">
          このサイトでは、制作したアプリや技術記事をまとめています。
        </p>
      </section>

      <section className="aboutSkills">
        <h2>Tech Stack</h2>

        <div className="techGrid">
          {technologies.map((tech) => (
            <span key={tech} className="techChip">
              {tech}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}