import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">
      <div className="heroContent">
        <h1>nekoyoukan</h1>

        <p className="jobTitle">
          Infrastructure Engineer × Developer
        </p>

        <div className="divider" />

        <p className="message">
          つくることを、楽しむ。
        </p>

        <Link href="/#projects" className="projectButton">
          Explore Projects
          <span className="buttonArrow">↓</span>
        </Link>
      </div>

      {/* <div className="scrollGuide">
        <span />
      </div> */}
    </section>
  );
}