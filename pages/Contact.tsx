
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Calendar, ShieldCheck, Download, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    revenue: 'new',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd trigger your email API here (e.g. Resend or SendGrid)
    setSubmitted(true);
    
    // Fallback: Open WhatsApp for immediate conversion
    const msg = `Profit Audit Request: ${formData.name} (${formData.phone}). Current Stage: ${formData.revenue}. Message: ${formData.message}`;
    setTimeout(() => {
        window.open(`https://wa.me/971505975089?text=${encodeURIComponent(msg)}`, '_blank');
    }, 2000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white px-4">
        <div className="max-w-xl w-full text-center space-y-8 fade-in">
          <div className="w-24 h-24 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-12 h-12 text-primary-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Audit Request <br/><span className="text-primary-600">Received.</span></h1>
          <p className="text-xl text-slate-500 font-medium leading-relaxed">
            Your strategy is being prepared. To avoid spam filters, we've generated a secure link for your initial **Growth Blueprint**.
          </p>
          
          <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 space-y-6">
            <p className="text-sm font-black text-slate-400 uppercase tracking-widest">Immediate Access</p>
            <a 
              href="#" 
              className="flex items-center justify-center gap-3 bg-white border border-slate-200 p-5 rounded-2xl text-slate-900 font-bold hover:shadow-xl transition-all group"
            >
              <Download className="w-6 h-6 text-primary-600 group-hover:bounce" />
              Download Agency Brochure.pdf
            </a>
            <p className="text-xs text-slate-400 italic">Link expires in 24 hours for security.</p>
          </div>

          <p className="text-slate-400 text-sm">Redirecting you to WhatsApp for a direct consultant chat...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Soft Decorative Blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-50 rounded-full blur-[120px] opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          
          {/* Direct Value Side */}
          <div>
            <h1 className="text-4xl md:text-7xl font-black text-slate-900 mb-8 leading-tight">
              Let's Fix Your <br/>
              <span className="text-gradient-brand">Growth Engine.</span>
            </h1>
            <p className="text-xl text-slate-500 mb-12 leading-relaxed">
              Don't fill out a form to get a generic sales deck. Get a direct audit of your current marketing channels from a senior specialist.
            </p>

            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <div className="bg-primary-50 p-4 rounded-2xl">
                  <Calendar className="w-8 h-8 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-slate-900 font-bold text-xl">Quick Call (15-30 min)</h3>
                  <p className="text-slate-500 mt-2">No hard sales. We look at your goals, your current spend, and tell you if we can help.</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-primary-50 p-4 rounded-2xl">
                  <ShieldCheck className="w-8 h-8 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-slate-900 font-bold text-xl">Audit included</h3>
                  <p className="text-slate-500 mt-2">We'll identify at least 3 areas where you're wasting budget right now.</p>
                </div>
              </div>

              <div className="pt-10 border-t border-slate-100">
                <div className="flex flex-col sm:flex-row gap-6 md:gap-10 text-slate-400 font-bold uppercase tracking-widest text-xs">
                  <div className="flex items-center gap-2 text-slate-700"><Phone className="w-4 h-4 text-primary-500"/> +971 50 597 5089</div>
                  <a href="mailto:hello@optimizehub.co" className="flex items-center gap-2 text-slate-700 hover:text-brand-gold transition-colors font-semibold">
                    <Mail className="w-4 h-4 text-primary-500"/> hello@optimizehub.co
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Clean Form */}
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-slate-200/50 relative">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Request Your Free Audit</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 mb-2 uppercase tracking-widest">Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-4 text-slate-900 focus:outline-none focus:border-primary-500 focus:bg-white transition-all shadow-inner"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 mb-2 uppercase tracking-widest">Phone</label>
                  <input
                    type="tel"
                    required
                    placeholder="+971..."
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-4 text-slate-900 focus:outline-none focus:border-primary-500 focus:bg-white transition-all shadow-inner"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-400 mb-2 uppercase tracking-widest">Business Stage</label>
                <select
                  value={formData.revenue}
                  onChange={(e) => setFormData({...formData, revenue: e.target.value})}
                  className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-4 text-slate-900 focus:outline-none focus:border-primary-500 focus:bg-white transition-all shadow-inner"
                >
                  <option value="new">New Business / Startup</option>
                  <option value="scaling">Existing Business Scaling</option>
                  <option value="rebranding">Rebranding / Expansion</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-400 mb-2 uppercase tracking-widest">What's your biggest hurdle?</label>
                <textarea
                  rows={3}
                  placeholder="e.g. Getting traffic but no leads..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-4 text-slate-900 focus:outline-none focus:border-primary-500 focus:bg-white transition-all shadow-inner resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-5 rounded-xl transition-all shadow-lg shadow-primary-500/20 flex items-center justify-center gap-3 text-lg"
              >
                Book My Audit Now <Send className="w-5 h-5" />
              </button>
              <div className="flex items-center justify-center gap-2 mt-4">
                 <MessageCircle className="w-4 h-4 text-[#25D366]" />
                 <span className="text-slate-400 text-xs italic">Submits directly to our WhatsApp</span>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
