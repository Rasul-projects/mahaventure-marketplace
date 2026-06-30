'use client';
import { useState } from 'react';

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <main className="min-h-screen bg-slate-950 text-white font-sans p-6 md:p-12">
      {/* Navbar */}
      <nav className="max-w-6xl mx-auto flex justify-between items-center mb-12">
        <h1 className="text-2xl font-black text-blue-500">MahaVenture</h1>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto mb-12">
        <h2 className="text-5xl md:text-6xl font-black mb-4 tracking-tight">Explore Maharashtra.</h2>
        <p className="text-slate-400 text-xl">Verified operators. Secure bookings. Real adventures.</p>
      </section>

      {/* Grid Section - Images forced to render with object-cover */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {[
          { title: "Kalsubai Trek", img: "https://images.unsplash.com/photo-1542262967-175510928236?auto=format&fit=crop&q=80&w=800" },
          { title: "Bhandardara Camping", img: "https://images.unsplash.com/photo-1504280390367-361c6d8e38f4?auto=format&fit=crop&q=80&w=800" }
        ].map((item, idx) => (
          <div key={idx} className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
            {/* Added explicit height and block display to ensure image renders */}
            <div className="w-full h-64 overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <button 
                onClick={() => setShowModal(true)}
                className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-blue-400 transition"
              >
                Reserve Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <div className="bg-slate-900 p-8 rounded-3xl w-full max-w-md border border-blue-500">
            <h3 className="text-2xl font-bold mb-6">Confirm Booking</h3>
            <button onClick={() => setShowModal(false)} className="w-full bg-blue-600 py-4 rounded-xl font-bold">Close</button>
          </div>
        </div>
      )}
    </main>
  );
}
