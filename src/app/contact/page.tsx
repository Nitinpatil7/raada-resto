import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata = {
  title: "Contact Us | Raada Resto & Cafe",
  description: "Get in touch with Raada Resto & Cafe. Connect with us on WhatsApp or visit our cafe in Vesu, Surat.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-brand-beige">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-5xl font-bold text-brand-darkBrown mb-6">Contact Us</h1>
          <p className="text-lg text-brand-darkBrown/70">
            We&apos;d love to hear from you. Drop by, give us a call, or send us a message.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-3xl overflow-hidden shadow-xl max-w-6xl mx-auto">
          <div className="p-10 md:p-14 bg-brand-darkBrown text-brand-beige flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-brand-green shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white text-lg">Location</h4>
                  <p className="text-brand-beige/80 mt-1">123, Vesu Main Road<br/>Surat, Gujarat 395007</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-brand-green shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white text-lg">Opening Hours</h4>
                  <p className="text-brand-beige/80 mt-1">Mon - Fri: 10:00 AM - 11:00 PM<br/>Sat - Sun: 09:00 AM - 12:00 AM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-brand-green shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white text-lg">Phone</h4>
                  <p className="text-brand-beige/80 mt-1">+91 82389 59529</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-brand-green shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white text-lg">Email</h4>
                  <p className="text-brand-beige/80 mt-1">hello@raadacafe.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[400px] lg:h-auto min-h-[500px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14882.260598835497!2d72.76014454999999!3d21.1493064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be05273752e2a09%3A0xe7bc3222a7f5bc65!2sVesu%2C%20Surat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1715421255877!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
