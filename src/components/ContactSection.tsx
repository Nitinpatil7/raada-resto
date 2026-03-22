"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-24 bg-brand-beige">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-darkBrown">
              Visit Us
            </h2>
            <p className="text-lg text-brand-darkBrown/70 mb-10">
              Whether you&apos;re looking for a quiet corner to work, a place to catch up with friends, or a memorable dining experience, Raada is where you want to be.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
                  <MapPin className="w-6 h-6 text-brand-green" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-brand-darkBrown mb-1">Location</h4>
                  <p className="text-brand-darkBrown/70">123, Vesu Main Road, Surat, Gujarat 395007</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
                  <Clock className="w-6 h-6 text-brand-green" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-brand-darkBrown mb-1">Opening Hours</h4>
                  <p className="text-brand-darkBrown/70">Mon - Fri: 10:00 AM - 11:00 PM</p>
                  <p className="text-brand-darkBrown/70">Sat - Sun: 09:00 AM - 12:00 AM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
                  <Phone className="w-6 h-6 text-brand-green" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-brand-darkBrown mb-1">Contact</h4>
                  <p className="text-brand-darkBrown/70">+91 82389 59529</p>
                  <p className="text-brand-darkBrown/70">hello@raadacafe.com</p>
                </div>
              </div>
            </div>

            <a 
              href="https://wa.me/918238959529?text=Hi,%20I%20have%20an%20inquiry"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-10 px-8 py-4 bg-brand-green text-white rounded-full font-medium hover:bg-brand-darkGreen transition-all hover:scale-105"
            >
              Chat on WhatsApp
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-[500px] w-full rounded-2xl overflow-hidden shadow-lg border-4 border-white"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14882.260598835497!2d72.76014454999999!3d21.1493064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be05273752e2a09%3A0xe7bc3222a7f5bc65!2sVesu%2C%20Surat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1715421255877!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
