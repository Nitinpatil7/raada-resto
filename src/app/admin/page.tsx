"use client";

import { useState, useEffect } from "react";
import { Coffee, CheckCircle, XCircle, Clock } from "lucide-react";

type Booking = {
  id: string;
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  status: 'pending' | 'confirmed' | 'rejected';
  createdAt: string;
};

export default function AdminPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const res = await fetch('/api/bookings');
      const data: Booking[] = await res.json();
      // Sort by newest first
      setBookings(data.sort((a: Booking, b: Booking) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()));
    } catch (error) {
      console.error("Failed to fetch bookings:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (booking: Booking, status: string) => {
    try {
      await fetch('/api/bookings', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: booking.id, status })
      });
      fetchBookings();

      let message = "";
      if (status === 'confirmed') {
        message = `Hi ${booking.name}, your table reservation at Raada Resto & Cafe for ${new Date(booking.date).toLocaleDateString()} at ${booking.time} for ${booking.guests} guests has been CONFIRMED! We look forward to hosting you.`;
      } else if (status === 'rejected') {
        message = `Hi ${booking.name}, we're sorry but we cannot accommodate your table reservation at Raada Resto & Cafe for ${booking.time} on ${new Date(booking.date).toLocaleDateString()}. Please contact us for alternative times.`;
      }
      
      const phoneClean = booking.phone.replace(/\D/g, '');
      const waUrl = `https://wa.me/91${phoneClean.startsWith('91') ? phoneClean.slice(2) : phoneClean}?text=${encodeURIComponent(message)}`;
      window.open(waUrl, "_blank");

    } catch (error) {
      console.error("Failed to update booking:", error);
    }
  };

  if (loading) return <div className="p-20 text-center font-medium">Loading bookings...</div>;

  return (
    <div className="pt-32 pb-16 min-h-screen bg-brand-light">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="flex items-center gap-4 mb-8">
          <div className="bg-brand-green/20 p-3 rounded-2xl">
            <Coffee className="w-8 h-8 text-brand-green" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-brand-darkBrown">Cafe Admin Dashboard</h1>
            <p className="text-brand-darkBrown/60">Manage your reservations and bookings</p>
          </div>
        </div>
        
        <div className="bg-white rounded-3xl shadow-sm border border-brand-brown/10 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse whitespace-nowrap">
              <thead>
                <tr className="bg-brand-beige border-b border-brand-brown/10 text-brand-darkBrown">
                  <th className="p-5 font-semibold">Date Received</th>
                  <th className="p-5 font-semibold">Guest Details</th>
                  <th className="p-5 font-semibold">Reservation Time</th>
                  <th className="p-5 font-semibold">Status</th>
                  <th className="p-5 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {bookings.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="p-10 text-center text-brand-darkBrown/60 italic font-medium">
                      No bookings found yet.
                    </td>
                  </tr>
                ) : (
                  bookings.map((booking) => (
                    <tr key={booking.id} className="border-b last:border-0 border-brand-brown/5 hover:bg-brand-light/50 transition-colors">
                      <td className="p-5 text-sm text-brand-darkBrown/80">
                        {new Date(booking.createdAt).toLocaleString()}
                      </td>
                      <td className="p-5">
                        <div className="font-bold text-brand-darkBrown text-base">{booking.name}</div>
                        <div className="text-sm text-brand-darkBrown/60 mt-1">{booking.phone}</div>
                        <div className="inline-flex items-center bg-brand-brown/10 text-brand-darkBrown px-2 py-0.5 rounded text-xs mt-2 font-medium">
                          {booking.guests} Guests
                        </div>
                      </td>
                      <td className="p-5">
                        <div className="font-bold text-brand-darkBrown">{new Date(booking.date).toLocaleDateString()}</div>
                        <div className="text-sm font-medium text-brand-darkBrown/70 mt-1">{booking.time}</div>
                      </td>
                      <td className="p-5">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                          booking.status === 'confirmed' ? 'bg-green-100 text-green-800 border border-green-200' :
                          booking.status === 'rejected' ? 'bg-red-100 text-red-800 border border-red-200' :
                          'bg-yellow-100 text-yellow-800 border border-yellow-200'
                        }`}>
                          {booking.status === 'confirmed' && <CheckCircle className="w-3.5 h-3.5" />}
                          {booking.status === 'rejected' && <XCircle className="w-3.5 h-3.5" />}
                          {booking.status === 'pending' && <Clock className="w-3.5 h-3.5" />}
                          {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                        </span>
                      </td>
                      <td className="p-5">
                        {booking.status === 'pending' && (
                          <div className="flex gap-2">
                            <button 
                              onClick={() => updateStatus(booking, 'confirmed')}
                              className="text-sm bg-brand-green text-white font-medium px-4 py-2 rounded-lg hover:bg-brand-darkGreen transition-all hover:scale-105 active:scale-95 shadow-sm"
                            >
                              Approve
                            </button>
                            <button 
                              onClick={() => updateStatus(booking, 'rejected')}
                              className="text-sm border-2 border-brand-brown/20 text-brand-darkBrown font-medium px-4 py-2 rounded-lg hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-all hover:scale-105 active:scale-95"
                            >
                              Reject
                            </button>
                          </div>
                        )}
                        {booking.status !== 'pending' && (
                          <span className="text-sm text-brand-darkBrown/40 italic">Handled</span>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
