import React, { useState, useEffect } from 'react';
import { Page, GeneratedStrategy } from '../types';
import { TrendingUp, Users, Target, BarChart3, Bot, Sparkles, CheckCircle2, ArrowRight, Star, Quote, Zap, ShieldCheck } from 'lucide-react';
import { generateMarketingStrategy } from '../services/geminiService';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [strategy, setStrategy] = useState<GeneratedStrategy | null>(null);
  const [loading, setLoading] = useState(false);

  // Hero Animation Logic
  const bitterTruths = [
    "Likes Don't Pay Your Rent.",
    "Impressions Won't Scale You.",
    "Engagement Isn't Revenue.",
    "Fluff Reporting Is A Lie."
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % bitterTruths.length);
        setFade(true);
      }, 500);
    }, 3500);
    return () => clearInterval(interval);
  }, [bitterTruths.length]);

  return (
    <div className="min-h-screen">
      {/* Hero Section: The Bitter Truth */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-slate-950">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/20 via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <div className="inline-block px-4 py-1 mb-6 border border-amber-500/30 rounded-full bg-amber-500/10 backdrop-blur-sm">
            <span className="text-amber-400 text-sm font-bold tracking-widest uppercase">The Performance Agency</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black text-white mb-6 leading-tight tracking-tighter">
            <span className={`block transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
              {bitterTruths[currentWordIndex]}
            </span>
            <span className="text-gradient-gold">We Deliver Profits.</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto font-medium leading-relaxed">
            Most agencies report on "Reach." We report on "Bank Transfers." We fix the gap between your marketing spend and your actual revenue.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <button 
              onClick={() => onNavigate(Page.CONTACT)}
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-10 py-5 rounded-full font-bold text-xl transition-all hover:scale-105 shadow-2xl shadow-amber-500/20 flex items-center gap-2"
            >
              Book a Free Profit Audit <ArrowRight className="w-6 h-6" />
            </button>
            <a 
              href="https://wa.me/971505975089"
              className="text-white hover:text-amber-500 px-10 py-5 rounded-full font-bold text-lg transition-all border border-slate-700 hover:border-amber-500 bg-slate-900/40 backdrop-blur-md"
            >
              Chat with a Human
            </a>
          </div>
        </div>
      </section>

      {/* Trust & Real Results */}
      <section className="py-20 bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-white mb-4">Actual Results, <br/><span className="text-amber-500">No Fluff.</span></h2>
              <p className="text-slate-400">While others show you charts of 'Followers', we show you charts of 'Qualified Leads'.</p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: "Real Estate Developer", result: "420% Increase in Direct Bookings", sub: "Via targeted intent-based ads" },
                { label: "Dental Clinic Chain", result: "180 New Patients / Month", sub: "Via Local SEO & Map Domination" }
              ].map((res, i) => (
                <div key={i} className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col justify-center">
                   <div className="text-amber-500 font-bold text-xs uppercase mb-2">{res.label}</div>
                   <div className="text-2xl font-bold text-white mb-1">{res.result}</div>
                   <div className="text-slate-500 text-sm">{res.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Simple Services: What's in it for you? */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">How We Make You Money</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">Marketing is simple when you focus on the right things.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Target className="w-10 h-10" />, 
                title: "Get Found When They Search", 
                benefit: "SEO isn't just ranking; it's being the first answer when a customer has a problem. We put you in front of people ready to buy today.",
                cta: "Own Google" 
              },
              { 
                icon: <Zap className="w-10 h-10" />, 
                title: "Scale Your Sales with Ads", 
                benefit: "Don't 'boost posts'. We build high-precision systems that turn $1 of ad spend into $4+ of revenue. Predictable. Scalable. Profitable.",
                cta: "Start Scaling" 
              },
              { 
                icon: <ShieldCheck className="w-10 h-10" />, 
                title: "Build A Brand They Trust", 
                benefit: "If your social media looks cheap, your product feels cheap. We create premium content that makes customers choose you over the competition.",
                cta: "Upgrade Brand" 
              },
            ].map((s, idx) => (
              <div key={idx} className="bg-slate-900 p-10 rounded-3xl border border-slate-800 hover:border-amber-500 transition-all group">
                <div className="mb-6 text-amber-500 group-hover:scale-110 transition-transform inline-block">
                  {s.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{s.title}</h3>
                <p className="text-slate-400 mb-8 leading-relaxed">{s.benefit}</p>
                <button onClick={() => onNavigate(Page.CONTACT)} className="flex items-center gap-2 text-amber-500 font-bold group-hover:gap-4 transition-all uppercase text-sm tracking-widest">
                  {s.cta} <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Human Proof: Testimonials */}
      <section className="py-24 bg-slate-900 border-t border-slate-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Word on the Street</h2>
            <div className="flex justify-center gap-1">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />)}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                quote: "I was tired of agencies sending me 50-page reports that meant nothing. OptimizeHub just focused on my sales. My revenue doubled in 4 months.",
                author: "Ahmed R.",
                role: "Real Estate Founder"
              },
              { 
                quote: "The team is actually available. I don't talk to a 'junior account manager', I talk to the people doing the work. Best decision for my clinic.",
                author: "Dr. Sarah L.",
                role: "Clinic Owner"
              },
              { 
                quote: "They took our Instagram from looking like a hobby to looking like a luxury brand. The influencer connections they have are insane.",
                author: "James W.",
                role: "Hospitality CEO"
              }
            ].map((t, i) => (
              <div key={i} className="bg-slate-950 p-8 rounded-2xl border border-slate-800 relative">
                <Quote className="absolute top-6 right-6 w-8 h-8 text-amber-500/20" />
                <p className="text-slate-300 italic mb-6 leading-relaxed">"{t.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center font-bold text-amber-500">
                    {t.author[0]}
                  </div>
                  <div>
                    <div className="text-white font-bold">{t.author}</div>
                    <div className="text-slate-500 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to Stop Guessing?</h2>
          <p className="text-xl text-slate-400 mb-12">
            Most agencies will ask for a 12-month contract. We just ask for 30 minutes. Let’s look at your numbers and see where you're losing money.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
               onClick={() => onNavigate(Page.CONTACT)}
               className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-12 py-5 rounded-full font-bold text-xl shadow-xl shadow-amber-500/30 transition-transform hover:scale-105"
            >
              Request Free Consultation
            </button>
          </div>
          <p className="mt-8 text-slate-500 text-sm">No sales pitch. Just data and a strategy you can use with or without us.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;