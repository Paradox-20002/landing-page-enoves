import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";
import Toggle from "../components/toggle";

export default function Header() {
  return (
    <header className="fixed w-full my-4 rounded-xl bg-navbar text-navbar-foreground border border-border">
      <div className="flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/Enoves.svg"
            alt="Enoves logo"
            width={100}
            height={90}
            priority
          />
        </Link>

        {/* Navigation */}
        <nav className={`flex items-center gap-8 ${styles.nav}`}>
          <Link href="/">Home</Link>
          <Link href="/about">About us</Link>
          <Link href="/services">Services</Link>
          <Link href="/blog">Portfolio</Link>
          <Link href="/careers">Careers</Link>

          {/* Theme Toggle */}
          <Toggle />
        </nav>

        {/* CTA */}
        <Link
          href="/contact-us"
          className="
            rounded-full
            bg-ring
            px-5 py-2
            text-primary-foreground
            hover:bg-contact-us-hover
            transition-colors
          "
        >
          Contact us
        </Link>
      </div>
    </header>
  );
}
