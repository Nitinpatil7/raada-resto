"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Calendar, Users, Clock, User, Phone } from "lucide-react";

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { name, phone, date, time, guests } = formData;
    
    try {
      // Save to server-side JSON database
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (!res.ok) throw new Error("Failed to save booking");

      const message = `Hi, I would like to book a table.\n\nName: ${name}\nPhone: ${phone}\nDate: ${date}\nTime: ${time}\nGuests: ${guests}`;
      const waUrl = `https://wa.me/918238959529?text=${encodeURIComponent(message)}`;
      
      setFormData({ name: "", phone: "", date: "", time: "", guests: "2" });
      window.location.href = waUrl;
    } catch {
      alert("There was an error saving your booking. Please try again later.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-brand-light flex items-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="bg-brand-darkBrown p-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-brand-beige mb-2">Book a Table</h1>
            <p className="text-brand-light/80">Reserve your spot at Raada Cafe</p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 md:p-10 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-brand-darkBrown block">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-brown/50" />
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-brand-beige/30 border border-brand-brown/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-brand-darkBrown block">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-brown/50" />
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-brand-beige/30 border border-brand-brown/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green"
                    placeholder="+91 82389 59529"
                  />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-brand-darkBrown block">Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-brown/50" />
                  <input
                    type="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-brand-beige/30 border border-brand-brown/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-brand-darkBrown block">Time</label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-brown/50" />
                  <input
                    type="time"
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-brand-beige/30 border border-brand-brown/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-brand-darkBrown block">Number of Guests</label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-brown/50" />
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 bg-brand-beige/30 border border-brand-brown/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green appearance-none"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, "8+"].map(num => (
                    <option key={num} value={num}>{num} Person{num !== 1 && 's'}</option>
                  ))}
                </select>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-4 bg-brand-green text-white rounded-xl font-bold text-lg shadow-lg hover:bg-brand-darkGreen transition-colors mt-8"
            >
              Confirm Reservation
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  );
}
