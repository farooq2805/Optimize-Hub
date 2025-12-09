import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'seo',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    const msg = `New Lead: ${formData.name} (${formData.phone}) interested in ${formData.service}. Message: ${formData.message}`;
    // In a real app, send to backend.
    // For now, redirect to WhatsApp
    window.open(`https://wa.me/9717020895818?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h1 className="text-4xl font-bold text-white mb-6">Let's Build Something <span className="text-gradient-gold">Extraordinary</span></h1>
            <p className="text-slate-400 text-lg mb-12">
              Ready to scale your business in Dubai? Reach out to us for a consultation. We reply within 24 hours.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-amber-500/10 p-4 rounded-lg mr-4">
                  <MapPin className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Visit Our Office</h3>
                  <p className="text-slate-400 mt-1">
                    Level 42, Marina Plaza<br />
                    Dubai Marina, Dubai, UAE
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-amber-500/10 p-4 rounded-lg mr-4">
                  <Mail className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Email Us</h3>
                  <p className="text-slate-400 mt-1">hello@optimizehub.com</p>
                  <p className="text-slate-400">careers@optimizehub.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-amber-500/10 p-4 rounded-lg mr-4">
                  <Phone className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Call Us</h3>
                  <p className="text-slate-400 mt-1">7020895818</p>
                  <p className="text-slate-400">Mon - Fri, 9am - 6pm</p>
                  <p className="text-slate-500 text-sm mt-2">WhatsApp Available 24/7</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
                <a 
                  href="https://wa.me/9717020895818"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#20bd5a] transition-colors"
                >
                    <MessageCircle className="w-6 h-6" />
                    Chat on WhatsApp
                </a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-6">Book a Strategy Call</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Phone Number</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Interested Service</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                >
                  <option value="seo">SEO Optimization</option>
                  <option value="paid">Paid Marketing</option>
                  <option value="influencer">Influencer Marketing</option>
                  <option value="social">Social Media</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2"
              >
                Send Request <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;