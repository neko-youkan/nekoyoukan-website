import Image from "next/image";

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
        <a href="#projects">Projects</a>
        <a href="#blog">Blog</a>
        <a href="#about">About</a>
      </nav>
    </header>
  );
}