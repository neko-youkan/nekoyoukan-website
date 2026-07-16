export default function Hero() {
  return (
    <section className="hero">
      <div className="heroContent">
        <h1>ねこ羊羹</h1>

        <p className="jobTitle">
          Infrastructure Engineer
          <br />
          &amp; Personal Developer
        </p>

        <p className="message">
          つくることを、楽しむ。
        </p>

        <a href="#projects" className="projectButton">
          <span>Explore Projects</span>
          <span className="buttonArrow" aria-hidden="true">
            →
          </span>
        </a>
      </div>
    </section>
  );
}