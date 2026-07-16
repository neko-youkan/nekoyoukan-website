import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="footerWave" aria-hidden="true">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path d="M0,64 C240,140 480,0 720,48 C960,96 1200,128 1440,48 L1440,120 L0,120 Z" />
        </svg>
      </div>

      <footer className="footer">
        <div className="footerInner">
          <div className="footerBrand">
            <Image
              src="/crab.png"
              alt="nekoyoukan"
              width={60}
              height={60}
            />

            <div>
              <h3>nekoyoukan</h3>
              <p>つくることを、楽しむ。</p>
            </div>
          </div>

          <nav className="footerLinks">
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/about">About</Link>
          </nav>

          <div className="footerSocial">
            <a
              href="https://github.com/neko-youkan"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://qiita.com/neko-youkan"
              target="_blank"
              rel="noreferrer"
            >
              Qiita
            </a>

            <a
              href="https://note.com/nekoyoukan"
              target="_blank"
              rel="noreferrer"
            >
              note
            </a>

            <a
              href="https://misskey.nekoyoukan.com"
              target="_blank"
              rel="noreferrer"
            >
              Misskey
            </a>
          </div>

          <p className="footerCopy">
            © 2026 nekoyoukan
          </p>
        </div>
      </footer>
    </>
  );
}