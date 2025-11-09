import React from 'react';
import Link from 'next/link';
import { Clock, TruckIcon, Package } from 'lucide-react';

const services = [
  {
    icon: Clock,
    title: 'Same-Day Delivery',
    description: 'Fast, reliable same-day delivery service for urgent shipments within our service area.',
    price: 'Starting at $89'
  },
  {
    icon: TruckIcon,
    title: 'Freight Transport',
    description: 'Professional freight transportation with our 12ft box trucks. Perfect for business supplies.',
    price: 'Starting at $69'
  },
  {
    icon: Package,
    title: 'Logistics',
    description: 'Comprehensive logistics solutions for furniture, appliances, and large item delivery.',
    price: 'Starting at $149'
  }
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-[hsl(0,0%,96%)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional delivery solutions tailored to your needs with transparent pricing
            and reliable service you can count on.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-8 shadow-card hover:shadow-lg transition-shadow"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-full bg-[hsl(211,71%,58%)]/10 flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-[hsl(211,71%,58%)]" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                <p className="text-[hsl(211,71%,58%)] font-semibold text-lg mb-6">
                  {service.price}
                </p>

                <Link
                  href="/services"
                  className="inline-flex items-center text-[hsl(211,71%,58%)] font-medium hover:text-[hsl(211,71%,48%)] transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-8 py-3 bg-[hsl(36,90%,55%)] text-white rounded font-semibold hover:bg-[hsl(36,90%,50%)] transition-colors"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
