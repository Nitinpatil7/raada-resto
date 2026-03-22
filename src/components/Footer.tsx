import Link from "next/link";
import { Coffee, MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-darkBrown text-brand-beige pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Coffee className="w-8 h-8 text-brand-green" />
              <span className="text-2xl font-bold tracking-tight text-white">
                Raada
              </span>
            </Link>
            <p className="text-brand-beige/80 mb-6">
              Experience the best coffee and culinary delights in Vesu, Surat. A cozy aesthetic cafe designed for your comfort.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-brand-green transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-brand-green transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-brand-green transition-colors">Home</Link></li>
              <li><Link href="/menu" className="hover:text-brand-green transition-colors">Menu</Link></li>
              <li><Link href="/booking" className="hover:text-brand-green transition-colors">Book a Table</Link></li>
              <li><Link href="/contact" className="hover:text-brand-green transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 shrink-0 text-brand-green" />
                <span>123, Vesu Main Road, Surat, Gujarat 395007</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 shrink-0 text-brand-green" />
                <span>+91 82389 59529</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 shrink-0 text-brand-green" />
                <span>hello@raadacafe.com</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Opening Hours</h3>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span>Mon - Fri:</span>
                <span>10:00 AM - 11:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sat - Sun:</span>
                <span>09:00 AM - 12:00 AM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-beige/20 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-brand-beige/60">
          <p>&copy; {new Date().getFullYear()} Raada Resto & Cafe. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
