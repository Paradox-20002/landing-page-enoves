"use client";
import Image from "next/image";
import { Mail, Linkedin, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-navbar text-navbar-foreground border-t border-border py-6">
      {/* Top Row */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-start px-4 md:px-12 gap-8 md:gap-0 mb-8">
        {/* Logo */}
        <div className="flex justify-center md:justify-start">
          <Image
            src="/Enoves.svg"
            alt="Enoves logo"
            width={100}
            height={90}
            priority
          />
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center md:justify-between gap-4 md:gap-8">
          <Link href="/#home" className="hover:text-ring transition-colors">
            Home
          </Link>
          <Link href="/#about" className="hover:text-ring transition-colors">
            About us
          </Link>
          <Link href="/#services" className="hover:text-ring transition-colors">
            Services
          </Link>
          <Link
            href="/#portfolio"
            className="hover:text-ring transition-colors"
          >
            Portfolio
          </Link>
          <Link href="/#careers" className="hover:text-ring transition-colors">
            Careers
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-end gap-4">
          <a href="mailto:enovesoffical@gmail.com">
            <Mail className="w-6 h-6 hover:text-ring transition-colors" />
          </a>
          <a href="tel:+923216013698">
            <Phone className="w-6 h-6 hover:text-ring transition-colors" />
          </a>
          <a href="https://www.linkedin.com/">
            <Linkedin className="w-6 h-6 hover:text-ring transition-colors" />
          </a>
        </div>
      </div>

      {/* Second Row */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-start px-4 md:px-12 gap-6 md:gap-0 mb-6">
        {/* Contact Info */}
        <div className="flex flex-col md:flex-row md:gap-12 gap-4">
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-chart-1" />
            <p>enovesoffical@gmail.com</p>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-chart-1" />
            <p>+92-321-6013698</p>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-chart-1" />
            <p>123 Main Street, Lahore, Pakistan</p>
          </div>
        </div>

        {/* Policies */}
        <div className="flex gap-4 justify-center md:justify-end">
          <Link href="/#privacy" className="hover:text-ring transition-colors">
            Privacy Policy
          </Link>
          <Link href="/#terms" className="hover:text-ring transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>

      {/* Copyright */}
      <div>
        <p className="text-center text-sm border-t border-border pt-4">
          © 2024 Enoves. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
