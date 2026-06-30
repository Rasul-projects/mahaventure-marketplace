'use client';
import { useState } from 'react';
import { MapPin, Star, Calendar } from 'lucide-react';

const activities = [
  { id: 1, name: "Kalsubai Trek", price: "₹1,200", location: "Sahyadri", rating: 4.9 },
  { id: 2, name: "Bhandardara Camping", price: "₹2,500", location: "Ahmednagar", rating: 4.8 },
];

export default function Home() {
  return (
    <main className="p-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Discover Maharashtra Adventures</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {activities.map((act) => (
          <div key={act.id} className="border rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <h2 className="text-2xl font-semibold">{act.name}</h2>
            <div className="flex items-center gap-2 text-gray-600 my-2">
              <MapPin size={18} /> {act.location}
            </div>
            <p className="text-xl font-bold text-blue-600">{act.price}</p>
            <button 
              onClick={() => alert('Redirecting to Booking...')}
              className="mt-4 w-full bg-black text-white py-2 rounded-lg"
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
