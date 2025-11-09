'use client';

import React, { useState } from 'react';
import { Search } from 'lucide-react';

export default function TrackingSection() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingResult, setTrackingResult] = useState<any>(null);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();

    if (!trackingNumber.trim()) {
      return;
    }

    // Mock tracking result
    setTrackingResult({
      id: trackingNumber,
      status: 'In Transit',
      location: 'Metro Distribution Center',
      estimatedDelivery: 'Today, 4:30 PM',
      progress: [
        { step: 'Order Received', completed: true, time: '9:15 AM' },
        { step: 'Out for Delivery', completed: true, time: '2:30 PM' },
        { step: 'Delivered', completed: false, time: 'Est. 4:30 PM' }
      ]
    });
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Track Your Package</h2>
            <p className="text-lg text-gray-600">
              Enter your tracking number to see real-time delivery status
            </p>
          </div>

          {/* Tracking Form */}
          <form onSubmit={handleTrack} className="flex gap-3 mb-8">
            <input
              type="text"
              placeholder="Enter tracking number"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              className="flex-1 px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[hsl(211,71%,58%)] focus:ring-2 focus:ring-[hsl(211,71%,58%)]/20"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-[hsl(211,71%,58%)] text-white rounded font-semibold hover:bg-[hsl(211,71%,50%)] transition-colors flex items-center gap-2"
            >
              <Search className="w-5 h-5" />
              Track
            </button>
          </form>

          {/* Tracking Result */}
          {trackingResult && (
            <div className="bg-[hsl(0,0%,96%)] rounded-lg p-8 border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-semibold mb-1">Tracking #{trackingResult.id}</h3>
                  <p className="text-gray-600">{trackingResult.location}</p>
                </div>
                <div className="text-right">
                  <span className="inline-block px-4 py-2 bg-[hsl(211,71%,58%)] text-white rounded-full font-medium text-sm">
                    {trackingResult.status}
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-gray-600">
                  <strong>Estimated Delivery:</strong> {trackingResult.estimatedDelivery}
                </p>
              </div>

              {/* Progress Steps */}
              <div className="space-y-4">
                {trackingResult.progress.map((step: any, index: number) => (
                  <div key={index} className="flex items-start gap-4">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        step.completed
                          ? 'bg-[hsl(211,71%,58%)] text-white'
                          : 'bg-gray-300 text-gray-600'
                      }`}
                    >
                      {step.completed ? '✓' : index + 1}
                    </div>
                    <div className="flex-1">
                      <p className={`font-medium ${step.completed ? 'text-gray-900' : 'text-gray-500'}`}>
                        {step.step}
                      </p>
                      <p className="text-sm text-gray-500">{step.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Quick Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="text-3xl mb-2">📦</div>
              <h4 className="font-semibold mb-1">Secure Handling</h4>
              <p className="text-sm text-gray-600">Your items are handled with care</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🚚</div>
              <h4 className="font-semibold mb-1">Real-Time Updates</h4>
              <p className="text-sm text-gray-600">Track your delivery every step</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">⏱️</div>
              <h4 className="font-semibold mb-1">On-Time Delivery</h4>
              <p className="text-sm text-gray-600">98% on-time delivery rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
