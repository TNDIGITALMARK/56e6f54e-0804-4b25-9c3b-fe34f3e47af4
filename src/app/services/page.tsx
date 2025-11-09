import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { Clock, TruckIcon, Package, MapPin, Shield, DollarSign } from 'lucide-react';

const services = [
  {
    icon: Clock,
    title: 'Local Delivery (Within 50 Miles)',
    price: '$89',
    features: [
      'Same-day delivery available',
      'Scheduled delivery options',
      'Professional handling',
      'Real-time tracking',
      'Insurance included'
    ]
  },
  {
    icon: Package,
    title: 'Furniture & Appliance Delivery',
    price: '$149',
    features: [
      'Heavy item specialists',
      'White glove service available',
      'Assembly assistance',
      'Careful handling',
      'Damage protection'
    ]
  },
  {
    icon: TruckIcon,
    title: 'Business Supply Delivery',
    price: '$69',
    features: [
      'Regular route service',
      'Volume discounts',
      'Flexible scheduling',
      'Priority delivery',
      'Invoice billing'
    ]
  }
];

const specifications = [
  {
    label: 'Cargo Area',
    value: '12 feet long × 8 feet wide'
  },
  {
    label: 'Payload Capacity',
    value: '3,500 pounds'
  },
  {
    label: 'Service Area',
    value: 'Tri-city metropolitan area'
  },
  {
    label: 'Operating Hours',
    value: 'Mon-Fri: 7am-7pm, Sat: 8am-5pm'
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[hsl(214,53%,25%)] text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6">Our Services & Pricing</h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Professional box truck delivery services with transparent pricing.
                Whether you need same-day delivery or scheduled service, we have a solution for you.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-[hsl(0,0%,96%)]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-8 shadow-card hover:shadow-lg transition-shadow"
                  >
                    <div className="w-16 h-16 rounded-full bg-[hsl(211,71%,58%)]/10 flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-[hsl(211,71%,58%)]" />
                    </div>

                    <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-4xl font-bold text-[hsl(211,71%,58%)] mb-6">
                      {service.price}
                      <span className="text-base font-normal text-gray-600"> starting</span>
                    </p>

                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[hsl(211,71%,58%)] mt-1">✓</span>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contact"
                      className="block w-full text-center px-6 py-3 bg-[hsl(36,90%,55%)] text-white rounded font-semibold hover:bg-[hsl(36,90%,50%)] transition-colors"
                    >
                      Get Quote
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Box Truck Specifications */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12">Box Truck Specifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {specifications.map((spec, index) => (
                  <div key={index} className="bg-[hsl(0,0%,96%)] rounded-lg p-6">
                    <p className="text-sm text-gray-600 mb-2">{spec.label}</p>
                    <p className="text-xl font-semibold">{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Service Area & Features */}
        <section className="py-20 bg-[hsl(0,0%,96%)]">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12">Why Choose SwiftRoute?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-[hsl(211,71%,58%)]/10 flex items-center justify-center mb-4">
                    <Shield className="w-8 h-8 text-[hsl(211,71%,58%)]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Licensed & Insured</h3>
                  <p className="text-gray-600">
                    Fully licensed and insured for your peace of mind. All deliveries covered by comprehensive insurance.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-[hsl(211,71%,58%)]/10 flex items-center justify-center mb-4">
                    <DollarSign className="w-8 h-8 text-[hsl(211,71%,58%)]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Transparent Pricing</h3>
                  <p className="text-gray-600">
                    No hidden fees or surprise charges. Get an instant quote and know exactly what you'll pay.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-[hsl(211,71%,58%)]/10 flex items-center justify-center mb-4">
                    <MapPin className="w-8 h-8 text-[hsl(211,71%,58%)]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Wide Service Area</h3>
                  <p className="text-gray-600">
                    Serving the entire tri-city metropolitan area with same-day and scheduled delivery options.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Special Handling */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12">Special Handling Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Fragile Items</h3>
                  <p className="text-gray-600 mb-4">
                    Extra care for delicate items like glass, electronics, and artwork.
                    Professional packing materials available.
                  </p>
                  <p className="text-[hsl(211,71%,58%)] font-medium">+$25 per delivery</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">White Glove Service</h3>
                  <p className="text-gray-600 mb-4">
                    Inside delivery, unpacking, assembly, and debris removal.
                    Perfect for furniture and appliances.
                  </p>
                  <p className="text-[hsl(211,71%,58%)] font-medium">+$50 per delivery</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">After-Hours Delivery</h3>
                  <p className="text-gray-600 mb-4">
                    Need delivery outside regular hours? We offer evening and weekend delivery options.
                  </p>
                  <p className="text-[hsl(211,71%,58%)] font-medium">+$40 per delivery</p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Multiple Stops</h3>
                  <p className="text-gray-600 mb-4">
                    Delivering to multiple locations? We can handle multiple pickup and drop-off points.
                  </p>
                  <p className="text-[hsl(211,71%,58%)] font-medium">+$20 per additional stop</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[hsl(211,71%,58%)] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get an instant quote for your delivery needs. No commitment required.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[hsl(36,90%,55%)] text-white rounded font-semibold text-lg hover:bg-[hsl(36,90%,50%)] transition-colors shadow-lg"
            >
              Get Your Free Quote
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
