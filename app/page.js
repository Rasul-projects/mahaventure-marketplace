'use client';
import { useState } from 'react';

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-8">MahaVenture</h1>
      
      <div className="max-w-4xl">
        <h2 className="text-5xl font-black mb-4">Explore Maharashtra.</h2>
        <p className="text-slate-400 mb-12">Verified operators. Secure bookings.</p>

        {/* The Grid - Simplified to prevent smashing */}
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Card 1 */}
          <div className="bg-slate-900 rounded-2xl p-4 border border-slate-800 flex-1">
            <div className="bg-slate-800 h-48 w-full rounded-xl mb-4">
              <img src="https://images.unsplash.com/photo-1542262967-175510928236?w=500" className="w-full h-full object-cover rounded-xl" />
            </div>
            <h3 className="text-xl font-bold mb-4">Kalsubai Trek</h3>
            <button onClick={() => setShowModal(true)} className="w-full bg-blue-600 py-3 rounded-lg font-bold">Reserve Now</button>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-900 rounded-2xl p-4 border border-slate-800 flex-1">
            <div className="bg-slate-800 h-48 w-full rounded-xl mb-4">
              <img src="https://images.unsplash.com/photo-1504280390367-361c6d8e38f4?w=500" className="w-full h-full object-cover rounded-xl" />
            </div>
            <h3 className="text-xl font-bold mb-4">Bhandardara Camping</h3>
            <button onClick={() => setShowModal(true)} className="w-full bg-blue-600 py-3 rounded-lg font-bold">Reserve Now</button>
          </div>

        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center p-4">
          <div className="bg-slate-900 p-8 rounded-2xl w-full max-w-sm border border-blue-500">
            <h3 className="text-xl font-bold mb-4">Confirm Booking</h3>
            <button onClick={() => setShowModal(false)} className="w-full bg-blue-600 py-3 rounded-lg font-bold">Close</button>
          </div>
        </div>
      )}
    </main>
  );
}
