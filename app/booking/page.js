'use client';
import { useState } from 'react';

export default function Booking() {
  const [status, setStatus] = useState('idle');

  const handleBooking = (e) => {
    e.preventDefault();
    setStatus('processing');
    // Simulate API call
    setTimeout(() => setStatus('success'), 2000);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-xl">
      <h2 className="text-2xl font-bold mb-4">Complete Your Booking</h2>
      {status === 'success' ? (
        <div className="text-green-600 font-bold">Booking Confirmed! Operator assigned.</div>
      ) : (
        <form onSubmit={handleBooking} className="flex flex-col gap-4">
          <input type="text" placeholder="Full Name" className="border p-2 rounded" required />
          <input type="date" className="border p-2 rounded" required />
          <button 
            disabled={status === 'processing'}
            className="bg-blue-600 text-white py-2 rounded"
          >
            {status === 'processing' ? 'Processing...' : 'Pay Securely'}
          </button>
        </form>
      )}
    </div>
  );
}
