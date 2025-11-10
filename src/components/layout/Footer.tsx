import React from 'react';
import Link from 'next/link';
import { Truck, Facebook, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[hsl(214,53%,25%)] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Contact */}
          <div>
            <div className="flex items-center gap-2 text-xl font-bold mb-4 !text-white">
              <Truck className="w-6 h-6" />
              <span>SwiftRoute</span>
            </div>
            <p className="!text-white text-sm mb-4">
              Licensed and Insured<br />
              Serving the Tri-City area since 2015
            </p>
            <p className="!text-white text-sm">
              123 Industrial Drive<br />
              Suite 100<br />
              Metro City, MC 12345
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 !text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/80 hover:text-[hsl(211,71%,58%)] transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/80 hover:text-[hsl(211,71%,58%)] transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-white/80 hover:text-[hsl(211,71%,58%)] transition-colors text-sm">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-[hsl(211,71%,58%)] transition-colors text-sm">
                  Get Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4 !text-white">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-white/80 text-sm">Local Delivery</li>
              <li className="text-white/80 text-sm">Furniture Moving</li>
              <li className="text-white/80 text-sm">Business Supply</li>
              <li className="text-white/80 text-sm">Same-Day Delivery</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4 !text-white">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="tel:555-TRANSPORT" className="text-white/80 hover:text-[hsl(211,71%,58%)] transition-colors text-sm">
                  📞 555-TRANSPORT
                </a>
              </li>
              <li>
                <a href="mailto:quotes@swiftroute.com" className="text-white/80 hover:text-[hsl(211,71%,58%)] transition-colors text-sm">
                  ✉️ quotes@swiftroute.com
                </a>
              </li>
              <li className="text-white/80 text-sm mt-4">
                <strong>Hours:</strong><br />
                Mon-Fri: 7am - 7pm<br />
                Sat: 8am - 5pm<br />
                Sun: Closed
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[hsl(214,53%,30%)] pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="!text-white text-sm">
            © {new Date().getFullYear()} SwiftRoute Transportation. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-white/80 hover:text-[hsl(211,71%,58%)] transition-colors" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/80 hover:text-[hsl(211,71%,58%)] transition-colors" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/80 hover:text-[hsl(211,71%,58%)] transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
