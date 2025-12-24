"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";
import Toggle from "../components/toggle";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-[999] w-full bg-background text-navbar-foreground border-b border-border">
      <div className="mx-auto flex items-center justify-between px-4 py-4 lg:px-8">
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

        {/* Desktop Navigation */}
        <nav className={`hidden lg:flex items-center gap-8 ${styles.nav}`}>
          <Link href="/#home">Home</Link>
          <Link href="/#about">About us</Link>
          <Link href="/#services">Services</Link>
          <Link href="/#portfolio">Portfolio</Link>
          <Link href="/#careers">Careers</Link>
          <Toggle />
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/#contact"
          className="
            hidden lg:inline-flex
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

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden flex flex-col gap-1"
          aria-label="Toggle menu"
        >
          <span className="h-0.5 w-6 bg-foreground" />
          <span className="h-0.5 w-6 bg-foreground" />
          <span className="h-0.5 w-6 bg-foreground" />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="flex flex-col lg:hidden bg-background border-t border-border px-6 py-6 space-y-4">
          <Link href="/#home" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link href="/#about" onClick={() => setOpen(false)}>
            About us
          </Link>
          <Link href="/#services" onClick={() => setOpen(false)}>
            Services
          </Link>
          <Link href="/#portfolio" onClick={() => setOpen(false)}>
            Portfolio
          </Link>
          <Link href="/#careers" onClick={() => setOpen(false)}>
            Careers
          </Link>

          <div className="flex items-center justify-between pt-4 border-t border-border">
            <Toggle />
            <Link
              href="/#contact"
              className="
                rounded-full
                bg-ring
                px-5 py-2
                text-primary-foreground
                hover:bg-contact-us-hover
                transition-colors
              "
              onClick={() => setOpen(false)}
            >
              Contact us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
