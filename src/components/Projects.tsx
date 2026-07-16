export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        background: "#ffffff",
        padding: "120px 8vw",
      }}
    >
      <p
        style={{
          color: "#2a7ab4",
          letterSpacing: "0.2em",
          marginBottom: "12px",
        }}
      >
        SELECTED WORKS
      </p>

      <h2
        style={{
          fontSize: "64px",
          fontWeight: 400,
          marginBottom: "60px",
        }}
      >
        Projects
      </h2>

      <ProjectCard
        number="01"
        title="Home+"
        description="生活を少し便利にするWebアプリ"
      />

      <ProjectCard
        number="02"
        title="My-Home"
        description="ライフログ・勉強・家計簿ダッシュボード"
      />

      <ProjectCard
        number="03"
        title="Misskey Server"
        description="個人サーバーの構築・運用"
      />

      <ProjectCard
        number="04"
        title="Server Status"
        description="Uptime Kumaによる監視環境"
      />
    </section>
  );
}

function ProjectCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "34px 0",
        borderTop: "1px solid #d9e3e9",
      }}
    >
      <span>{number}</span>

      <div style={{ flex: 1, marginLeft: "40px" }}>
        <h3 style={{ margin: 0 }}>{title}</h3>

        <p
          style={{
            marginTop: "8px",
            color: "#627789",
          }}
        >
          {description}
        </p>
      </div>

      <span>↗</span>
    </div>
  );
}