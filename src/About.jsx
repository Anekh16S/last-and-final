import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function About() {
  return (
    <div className="py-8">
      <div className="max-w-4xl mx-auto">
        <div className="card">
          <h1 className="text-4xl font-bold mb-6">About EarthMart</h1>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
        We promote eco-friendly handicrafts made from natural fibers, supporting artisans and sustainability.
      </p>

          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
      
          <div className="space-y-4 text-gray-700">
            <div className="flex items-center space-x-3">
              <FaPhoneAlt className="text-green-600 flex-shrink-0" size={20} />
              <span>+91 1234567810</span>
        </div>
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-green-600 flex-shrink-0" size={20} />
              <span>lokaheartmart@gmail.com</span>
        </div>
            <div className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-green-600 flex-shrink-0" size={20} />
              <span>Chemperi, Kannur, India</span>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
}
