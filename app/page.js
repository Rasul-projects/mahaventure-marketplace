'use client';
import { useState } from 'react';
import { MapPin } from 'lucide-react';

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <main className="min-h-screen bg-slate-950 text-white font-sans p-6 md:p-12">
      {/* Navbar */}
      <nav className="max-w-6xl mx-auto flex justify-between items-center mb-12">
        <h1 className="text-2xl font-black text-blue-500">MahaVenture</h1>
        <button className="bg-blue-600 px-6 py-2 rounded-full font-bold hover:bg-blue-500 transition">
          Dashboard
        </button>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto mb-12">
        <h2 className="text-5xl md:text-6xl font-black mb-4 tracking-tight">Explore Maharashtra.</h2>
        <p className="text-slate-400 text-xl">Verified operators. Secure bookings. Real adventures.</p>
      </section>

      {/* Grid Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {[
          { title: "Kalsubai Trek", desc: "Summit the highest peak in Maharashtra with expert guides.", img: "https://images.unsplash.com/photo-1542262967-175510928236?auto=format&fit=crop&q=80&w=800" },
          { title: "Bhandardara Camping", desc: "Stargazing by the lake in the heart of Sahyadri.", img: "https://images.unsplash.com/photo-1504280390367-361c6d8e38f4?auto=format&fit=crop&q=80&w=800" }
        ].map((item, idx) => (
          <div key={idx} className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
            <img src={item.img} alt={item.title} className="w-full h-64 object-cover" />
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-slate-400 mb-6">{item.desc}</p>
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

      {/* Booking Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <div className="bg-slate-900 p-8 rounded-3xl w-full max-w-md border border-blue-500">
            <h3 className="text-2xl font-bold mb-6">Confirm Booking</h3>
            <input type="text" placeholder="Your Name" className="w-full bg-slate-800 p-4 rounded-xl mb-4 text-white border border-slate-700" />
            <button 
              onClick={() => { alert('Booking Successful!'); setShowModal(false); }} 
              className="w-full bg-blue-600 py-4 rounded-xl font-bold mb-4"
            >
              Pay & Confirm
            </button>
            <button onClick={() => setShowModal(false)} className="w-full text-slate-500">Cancel</button>
          </div>
        </div>
      )}
    </main>
  );
}
