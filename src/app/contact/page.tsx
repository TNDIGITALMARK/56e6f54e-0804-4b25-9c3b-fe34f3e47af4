'use client';

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    pickupAddress: '',
    deliveryAddress: '',
    itemDescription: '',
    weight: 'light',
    distance: '10',
    deliveryTime: 'standard',
    preferredDate: '',
    additionalNotes: ''
  });

  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null);

  const calculatePrice = () => {
    let basePrice = 69;

    // Distance calculation
    const distance = parseInt(formData.distance);
    if (distance <= 10) basePrice = 69;
    else if (distance <= 25) basePrice = 89;
    else if (distance <= 50) basePrice = 119;

    // Weight adjustment
    if (formData.weight === 'medium') basePrice += 30;
    if (formData.weight === 'heavy') basePrice += 60;

    // Delivery time adjustment
    if (formData.deliveryTime === 'same-day') basePrice += 40;
    if (formData.deliveryTime === 'express') basePrice += 60;

    return basePrice;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const price = calculatePrice();
    setEstimatedPrice(price);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setEstimatedPrice(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[hsl(214,53%,25%)] text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4">Get Your Free Quote</h1>
            <p className="text-xl text-white/90">
              Fill out the form below for an instant preliminary quote. Final price confirmed upon inspection.
            </p>
          </div>
        </section>

        <section className="py-16 bg-[hsl(0,0%,96%)]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-card p-8">
                  <h2 className="text-3xl font-bold mb-6">Request a Quote</h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[hsl(211,71%,58%)] focus:ring-2 focus:ring-[hsl(211,71%,58%)]/20"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[hsl(211,71%,58%)] focus:ring-2 focus:ring-[hsl(211,71%,58%)]/20"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[hsl(211,71%,58%)] focus:ring-2 focus:ring-[hsl(211,71%,58%)]/20"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    {/* Delivery Details */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Pickup Address *
                      </label>
                      <input
                        type="text"
                        name="pickupAddress"
                        value={formData.pickupAddress}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[hsl(211,71%,58%)] focus:ring-2 focus:ring-[hsl(211,71%,58%)]/20"
                        placeholder="123 Main St, City, State ZIP"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Delivery Address *
                      </label>
                      <input
                        type="text"
                        name="deliveryAddress"
                        value={formData.deliveryAddress}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[hsl(211,71%,58%)] focus:ring-2 focus:ring-[hsl(211,71%,58%)]/20"
                        placeholder="456 Oak Ave, City, State ZIP"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Item Description *
                      </label>
                      <textarea
                        name="itemDescription"
                        value={formData.itemDescription}
                        onChange={handleChange}
                        required
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[hsl(211,71%,58%)] focus:ring-2 focus:ring-[hsl(211,71%,58%)]/20"
                        placeholder="Describe what you're shipping..."
                      />
                    </div>

                    {/* Quote Calculator Inputs */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Estimated Distance
                        </label>
                        <select
                          name="distance"
                          value={formData.distance}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[hsl(211,71%,58%)] focus:ring-2 focus:ring-[hsl(211,71%,58%)]/20"
                        >
                          <option value="10">0-10 miles</option>
                          <option value="25">11-25 miles</option>
                          <option value="50">26-50 miles</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Item Weight
                        </label>
                        <select
                          name="weight"
                          value={formData.weight}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[hsl(211,71%,58%)] focus:ring-2 focus:ring-[hsl(211,71%,58%)]/20"
                        >
                          <option value="light">Light (0-500 lbs)</option>
                          <option value="medium">Medium (500-1500 lbs)</option>
                          <option value="heavy">Heavy (1500+ lbs)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Delivery Timeframe
                        </label>
                        <select
                          name="deliveryTime"
                          value={formData.deliveryTime}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[hsl(211,71%,58%)] focus:ring-2 focus:ring-[hsl(211,71%,58%)]/20"
                        >
                          <option value="standard">Standard (2-3 days)</option>
                          <option value="same-day">Same Day (+$40)</option>
                          <option value="express">Express (4 hours) (+$60)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[hsl(211,71%,58%)] focus:ring-2 focus:ring-[hsl(211,71%,58%)]/20"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Additional Notes
                      </label>
                      <textarea
                        name="additionalNotes"
                        value={formData.additionalNotes}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[hsl(211,71%,58%)] focus:ring-2 focus:ring-[hsl(211,71%,58%)]/20"
                        placeholder="Any special requirements or instructions..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full px-8 py-4 bg-[hsl(36,90%,55%)] text-white rounded font-semibold text-lg hover:bg-[hsl(36,90%,50%)] transition-colors"
                    >
                      Calculate Estimated Price
                    </button>

                    {/* Price Estimate */}
                    {estimatedPrice !== null && (
                      <div className="bg-[hsl(211,71%,58%)] text-white rounded-lg p-6 text-center">
                        <p className="text-lg mb-2">Estimated Price</p>
                        <p className="text-5xl font-bold mb-2">${estimatedPrice}</p>
                        <p className="text-sm text-white/80">
                          *Preliminary quote. Final price confirmed upon inspection.
                        </p>
                        <p className="text-sm text-white/80 mt-2">
                          We'll contact you within 24 hours to confirm details.
                        </p>
                      </div>
                    )}
                  </form>
                </div>
              </div>

              {/* Contact Information Sidebar */}
              <div className="space-y-6">
                {/* Contact Details */}
                <div className="bg-white rounded-lg shadow-card p-6">
                  <h3 className="text-xl font-semibold mb-6">Contact Information</h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-[hsl(211,71%,58%)] mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <a href="tel:555-TRANSPORT" className="text-[hsl(211,71%,58%)] hover:underline">
                          555-TRANSPORT
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-[hsl(211,71%,58%)] mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Email</p>
                        <a href="mailto:quotes@swiftroute.com" className="text-[hsl(211,71%,58%)] hover:underline">
                          quotes@swiftroute.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[hsl(211,71%,58%)] mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Address</p>
                        <p className="text-gray-600">
                          123 Industrial Drive<br />
                          Suite 100<br />
                          Metro City, MC 12345
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-[hsl(211,71%,58%)] mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Business Hours</p>
                        <p className="text-gray-600">
                          Mon-Fri: 7:00 AM - 7:00 PM<br />
                          Saturday: 8:00 AM - 5:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FAQ */}
                <div className="bg-white rounded-lg shadow-card p-6">
                  <h3 className="text-xl font-semibold mb-6">Frequently Asked Questions</h3>

                  <div className="space-y-4">
                    <div>
                      <p className="font-medium mb-1">How quickly will I get a response?</p>
                      <p className="text-sm text-gray-600">
                        We respond to all quotes within 24 hours, usually much faster during business hours.
                      </p>
                    </div>

                    <div>
                      <p className="font-medium mb-1">Is the quote binding?</p>
                      <p className="text-sm text-gray-600">
                        The online quote is an estimate. Final price is confirmed after inspection of items.
                      </p>
                    </div>

                    <div>
                      <p className="font-medium mb-1">Do you offer same-day service?</p>
                      <p className="text-sm text-gray-600">
                        Yes! Same-day delivery is available for an additional $40 when requested before noon.
                      </p>
                    </div>

                    <div>
                      <p className="font-medium mb-1">What payment methods do you accept?</p>
                      <p className="text-sm text-gray-600">
                        We accept cash, credit cards, and offer invoice billing for businesses.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
