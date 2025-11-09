import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Michael Rodriguez',
    title: 'Restaurant Supply Manager',
    image: '/generated/testimonial-1.png',
    rating: 5,
    text: 'SwiftRoute has been handling our monthly inventory deliveries for over a year now. Their reliability and professionalism are unmatched. Highly recommend for business supply delivery!'
  },
  {
    name: 'Sarah Thompson',
    title: 'Homeowner',
    image: '/generated/testimonial-2.png',
    rating: 5,
    text: 'Moving furniture across town was stress-free thanks to SwiftRoute. The team was professional, careful with our items, and delivered everything on time. Great service at a fair price!'
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-[hsl(0,0%,96%)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[hsl(207,73%,63%)] text-white rounded-lg p-8 shadow-lg relative"
            >
              {/* Quote Bubble Tail */}
              <div className="absolute -bottom-3 left-12 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[15px] border-t-[hsl(207,73%,63%)]" />

              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-300 text-yellow-300" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-white/95 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4 mt-6">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-white/20 flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-lg">{testimonial.name}</p>
                  <p className="text-white/80 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-[hsl(211,71%,58%)] mb-2">10+</div>
            <p className="text-gray-600">Years Experience</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[hsl(211,71%,58%)] mb-2">5,000+</div>
            <p className="text-gray-600">Deliveries</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[hsl(211,71%,58%)] mb-2">98%</div>
            <p className="text-gray-600">On-Time Rate</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[hsl(211,71%,58%)] mb-2">4.9/5</div>
            <p className="text-gray-600">Customer Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}
