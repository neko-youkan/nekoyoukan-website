import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerInner">

        <div className="footerBrand">
          <Image
            src="/crab.png"
            alt="nekoyoukan"
            width={54}
            height={54}
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
  );
}