'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Truck } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[hsl(214,53%,25%)] text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-xl font-bold hover:opacity-90 transition-opacity">
            <Truck className="w-6 h-6" />
            <span>SwiftRoute</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="hover:text-[hsl(211,71%,58%)] transition-colors">
              Home
            </Link>
            <Link href="/services" className="hover:text-[hsl(211,71%,58%)] transition-colors">
              Services
            </Link>
            <Link href="/pricing" className="hover:text-[hsl(211,71%,58%)] transition-colors">
              Pricing
            </Link>
            <Link href="/tracking" className="hover:text-[hsl(211,71%,58%)] transition-colors">
              Tracking
            </Link>
            <Link href="/contact" className="hover:text-[hsl(211,71%,58%)] transition-colors">
              Contact
            </Link>
          </nav>

          {/* Phone Number */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:555-TRANSPORT"
              className="flex items-center gap-2 px-4 py-2 bg-[hsl(36,90%,55%)] text-white rounded hover:bg-[hsl(36,90%,50%)] transition-colors font-medium"
            >
              <span>📞</span>
              <span>555-TRANSPORT</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[hsl(214,53%,30%)]">
            <nav className="flex flex-col gap-4">
              <Link
                href="/"
                className="hover:text-[hsl(211,71%,58%)] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className="hover:text-[hsl(211,71%,58%)] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/pricing"
                className="hover:text-[hsl(211,71%,58%)] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/tracking"
                className="hover:text-[hsl(211,71%,58%)] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Tracking
              </Link>
              <Link
                href="/contact"
                className="hover:text-[hsl(211,71%,58%)] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <a
                href="tel:555-TRANSPORT"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-[hsl(36,90%,55%)] text-white rounded hover:bg-[hsl(36,90%,50%)] transition-colors font-medium mt-2"
              >
                <span>📞</span>
                <span>555-TRANSPORT</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
