'use client';
import { MapPin } from 'lucide-react';

const activities = [
  { id: 1, name: "Kalsubai Trek", price: "₹1,200", location: "Sahyadri" },
  { id: 2, name: "Bhandardara Camping", price: "₹2,500", location: "Ahmednagar" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 p-6 md:p-12">
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
          Maharashtra Adventure Marketplace
        </h1>
        <p className="text-slate-400 text-lg">Connecting local operators to thrill-seekers.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {activities.map((act) => (
          <div key={act.id} className="relative group bg-slate-900 rounded-3xl p-1 shadow-2xl hover:scale-[1.02] transition-all duration-300">
            <div className="bg-slate-800 rounded-[22px] p-6 h-full flex flex-col">
              <div className="h-40 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-2xl mb-6 flex items-center justify-center text-4xl shadow-inner">
                🏔️
              </div>
              <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">{act.name}</h2>
              <div className="flex items-center gap-2 text-slate-400 mb-6 font-medium">
                <MapPin size={16} /> {act.location}
              </div>
              <div className="mt-auto flex justify-between items-center">
                <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  {act.price}
                </span>
                <button 
                  onClick={() => alert('Redirecting to Booking...')}
                  className="bg-white text-slate-900 px-6 py-2.5 rounded-xl font-bold hover:bg-cyan-400 transition-colors shadow-lg"
                >
                  Reserve
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
