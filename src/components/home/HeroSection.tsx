import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative h-[600px] flex items-center justify-start overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/generated/hero-truck.png"
          alt="Professional delivery truck on highway"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold !text-white mb-6 leading-tight">
            Reliable Delivery Solutions
          </h1>
          <p className="text-xl !text-white mb-8 leading-relaxed">
            Professional box truck delivery services for businesses and individuals.
            Same-day and scheduled delivery options across the tri-city metropolitan area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[hsl(36,90%,55%)] !text-white rounded font-semibold text-lg hover:bg-[hsl(36,90%,50%)] transition-colors shadow-lg"
            >
              Get Quote
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded font-semibold text-lg hover:bg-white/20 transition-colors border border-white/30"
            >
              View Services
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap gap-6 !text-white">
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span className="text-sm">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              <span className="text-sm">4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🚚</span>
              <span className="text-sm">Same-Day Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
