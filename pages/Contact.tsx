import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Calendar, ShieldCheck } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    revenue: 'new',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Profit Audit Request: ${formData.name} (${formData.phone}). Current Stage: ${formData.revenue}. Message: ${formData.message}`;
    window.open(`https://wa.me/971505975089?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="min-h-screen py-24 bg-slate-950 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Direct Value Side */}
          <div>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight">
              Let's Fix Your <br/>
              <span className="text-gradient-gold">Growth Engine.</span>
            </h1>
            <p className="text-xl text-slate-300 mb-12 leading-relaxed">
              Don't fill out a form to get a generic sales deck. Fill this out to get a direct audit of your current marketing channels from a senior specialist.
            </p>

            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <div className="bg-amber-500/10 p-4 rounded-2xl">
                  <Calendar className="w-8 h-8 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl">Quick Call (15-30 min)</h3>
                  <p className="text-slate-400 mt-2">No hard sales. We look at your goals, your current spend, and tell you if we can help.</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-amber-500/10 p-4 rounded-2xl">
                  <ShieldCheck className="w-8 h-8 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl">Audit included</h3>
                  <p className="text-slate-400 mt-2">We'll identify at least 3 areas where you're wasting budget right now.</p>
                </div>
              </div>

              <div className="pt-10 border-t border-slate-800">
                <div className="flex items-center gap-6 mb-6">
                  <div className="flex -space-x-3">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-950 bg-slate-800"></div>
                    ))}
                  </div>
                  <p className="text-slate-400 text-sm">Join 50+ businesses scaling in Dubai.</p>
                </div>
                <div className="flex flex-wrap gap-8 text-slate-500 font-bold uppercase tracking-widest text-xs">
                  <div className="flex items-center gap-2"><Phone className="w-4 h-4"/> +971 50 597 5089</div>
                  <div className="flex items-center gap-2"><Mail className="w-4 h-4"/> hello@optimizehub.co</div>
                </div>
              </div>
            </div>
          </div>

          {/* High-Impact Form */}
          <div className="bg-slate-900 p-10 rounded-[2.5rem] border border-slate-800 shadow-2xl relative">
            <h2 className="text-2xl font-bold text-white mb-8">Request Your Free Audit</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest">Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest">Phone</label>
                  <input
                    type="tel"
                    required
                    placeholder="+971..."
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest">Business Stage</label>
                <select
                  value={formData.revenue}
                  onChange={(e) => setFormData({...formData, revenue: e.target.value})}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-amber-500 transition-colors"
                >
                  <option value="new">New Business / Startup</option>
                  <option value="scaling">Existing Business Scaling</option>
                  <option value="rebranding">Rebranding / Expansion</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest">What's your biggest hurdle?</label>
                <textarea
                  rows={3}
                  placeholder="e.g. Getting traffic but no leads..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-amber-500 transition-colors resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-black py-5 rounded-xl transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-3 text-lg"
              >
                Book My Audit Now <Send className="w-5 h-5" />
              </button>
              <div className="flex items-center justify-center gap-2 mt-4">
                 <MessageCircle className="w-4 h-4 text-[#25D366]" />
                 <span className="text-slate-500 text-sm italic">Submits directly to our WhatsApp</span>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;