import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="brand">
        <Image
          src="/crab.png"
          alt="Logo"
          width={42}
          height={42}
        />
        <span>nekoyoukan</span>
      </div>

      <nav className="navigation">
        <Link href="/#projects">Projects</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
}