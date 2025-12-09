import React, { useState } from 'react';
import { Page, GeneratedStrategy } from '../types';
import { TrendingUp, Users, Target, BarChart3, Bot, Sparkles, CheckCircle2, ArrowRight, Building2, Trophy, Star } from 'lucide-react';
import { generateMarketingStrategy } from '../services/geminiService';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [businessName, setBusinessName] = useState('');
  const [industry, setIndustry] = useState('');
  const [audience, setAudience] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [marketingSpend, setMarketingSpend] = useState('');
  const [loading, setLoading] = useState(false);
  const [strategy, setStrategy] = useState<GeneratedStrategy | null>(null);

  const handleGenerateStrategy = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessName || !industry || !phoneNumber) return;

    setLoading(true);
    const result = await generateMarketingStrategy(
      businessName, 
      industry, 
      audience || 'General Public',
      marketingSpend || 'Not specified'
    );
    setStrategy(result);
    setLoading(false);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1512453979798-5ea904ac6605?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/40"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div className="inline-block px-4 py-1 mb-6 border border-amber-500/30 rounded-full bg-amber-500/10 backdrop-blur-sm">
            <span className="text-amber-400 text-sm font-semibold tracking-wide uppercase">Premier Digital Marketing Agency Dubai</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 leading-tight tracking-tight">
            Dominate the <br/>
            <span className="text-gradient-gold">Dubai Market</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            We transform local businesses into industry leaders through data-driven SEO, Paid Media, and Influencer strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => {
                const element = document.getElementById('strategy-generator');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-lg shadow-amber-500/20"
            >
              Get Free Strategy
            </button>
            <a 
              href="https://wa.me/9717020895818"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-slate-600 hover:border-amber-500 bg-slate-900/50 backdrop-blur-md text-white hover:text-amber-500 px-8 py-4 rounded-full font-semibold text-lg transition-all flex items-center gap-2"
            >
              WhatsApp Us
            </a>
          </div>
          <p className="mt-8 text-slate-500 text-sm tracking-widest uppercase animate-bounce">Scroll to Explore</p>
        </div>
      </section>

      {/* Trust Indicators */}
      <div className="bg-slate-950 border-y border-slate-900 py-10">
        <div className="max-w-7xl mx-auto px-4">
            <p className="text-center text-slate-500 text-sm uppercase tracking-widest mb-8">Trusted by Dubai's Leading Sectors</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                {['Real Estate', 'Luxury Hospitality', 'FinTech', 'Healthcare', 'E-Commerce'].map((item) => (
                    <span key={item} className="text-xl font-bold text-slate-300">{item}</span>
                ))}
            </div>
        </div>
      </div>

      {/* Quick Services Intro */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Holistic Digital Growth</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-400 max-w-2xl mx-auto">Comprehensive solutions tailored for the UAE's unique digital landscape.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Target className="w-8 h-8" />, title: "SEO Dubai", desc: "Dominate local search rankings and Google Maps.", link: Page.SERVICE_SEO },
              { icon: <TrendingUp className="w-8 h-8" />, title: "Paid Ads", desc: "High-intent PPC campaigns for instant leads.", link: Page.SERVICE_PAID },
              { icon: <Users className="w-8 h-8" />, title: "Influencers", desc: "Access the UAE's most trusted voices.", link: Page.SERVICE_INFLUENCER },
              { icon: <BarChart3 className="w-8 h-8" />, title: "Social Media", desc: "Build a community that loves your brand.", link: Page.SERVICE_SOCIAL },
            ].map((s, idx) => (
              <div 
                key={idx} 
                className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-amber-500/50 transition-colors group cursor-pointer relative overflow-hidden" 
                onClick={() => onNavigate(s.link)}
              >
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-5 h-5 text-amber-500 -rotate-45 group-hover:rotate-0 transition-transform" />
                </div>
                <div className="mb-6 p-4 bg-slate-800 rounded-xl w-fit group-hover:bg-amber-500 group-hover:text-slate-900 transition-colors text-amber-500">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{s.desc}</p>
                <span className="text-amber-500 text-sm font-semibold group-hover:underline">Explore Service</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose OptimizeHub */}
      <section className="py-24 bg-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Why Dubai Businesses Choose <span className="text-gradient-gold">OptimizeHub</span></h2>
                    <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                        In a city of noise, we create clarity. Our deep understanding of the UAE market—from local consumer behavior to the GCC media landscape—allows us to craft strategies that don't just reach audiences, but convert them.
                    </p>
                    <ul className="space-y-4">
                        {[
                            "Deep Local Expertise (UAE & GCC)",
                            "Bilingual Strategy (Arabic & English)",
                            "Performance-Based ROI Focus",
                            "Premium, Luxury-First Approach"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center text-slate-300">
                                <CheckCircle2 className="w-6 h-6 text-amber-500 mr-3 flex-shrink-0" />
                                <span className="text-lg">{item}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-10">
                        <button onClick={() => onNavigate(Page.ABOUT)} className="text-white border-b border-amber-500 pb-1 hover:text-amber-500 transition-colors">Read our story</button>
                    </div>
                </div>
                <div className="relative">
                    <div className="absolute -inset-4 bg-amber-500/20 rounded-3xl blur-xl"></div>
                    <img 
                        src="https://images.unsplash.com/photo-1550505193-272cb647a7b8?q=80&w=1000&auto=format&fit=crop" 
                        alt="Dubai Skyline" 
                        className="relative rounded-2xl shadow-2xl border border-slate-700 grayscale hover:grayscale-0 transition-all duration-700"
                    />
                </div>
            </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Industries We Scale</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                    {name: "Real Estate", icon: <Building2 className="w-8 h-8"/>},
                    {name: "Luxury Hospitality", icon: <Star className="w-8 h-8"/>},
                    {name: "Medical Clinics", icon: <TrendingUp className="w-8 h-8"/>},
                    {name: "E-Commerce", icon: <Trophy className="w-8 h-8"/>}
                ].map((ind, idx) => (
                    <div key={idx} className="bg-slate-900 border border-slate-800 p-6 rounded-xl text-center hover:border-amber-500 transition-colors group">
                        <div className="text-slate-500 group-hover:text-amber-500 mb-4 flex justify-center transition-colors">
                            {ind.icon}
                        </div>
                        <h3 className="text-white font-semibold">{ind.name}</h3>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Case Study Highlights */}
      <section className="py-24 bg-slate-900">
         <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Proven Results</h2>
                    <p className="text-slate-400">See how we've transformed businesses across Dubai.</p>
                </div>
                <button onClick={() => onNavigate(Page.CONTACT)} className="mt-4 md:mt-0 text-amber-500 font-bold hover:text-white transition-colors">Start your project &rarr;</button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { title: "Luxury Real Estate", metric: "+400%", desc: "Increase in qualified leads for a Downtown Dubai developer within 3 months via Google Ads." },
                    { title: "Premium Dental Clinic", metric: "#1 Ranking", desc: "Achieved top local SEO positions for 'Veneers Dubai' and 'Implants' keywords." },
                    { title: "Fashion Retailer", metric: "12x ROAS", desc: "Generated exceptional returns through a targeted Influencer & Instagram strategy." }
                ].map((study, idx) => (
                    <div key={idx} className="bg-slate-950 p-8 rounded-2xl border-l-4 border-amber-500 shadow-xl">
                        <div className="text-4xl font-bold text-white mb-2">{study.metric}</div>
                        <h3 className="text-xl font-bold text-amber-500 mb-4">{study.title}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">{study.desc}</p>
                    </div>
                ))}
            </div>
         </div>
      </section>

      {/* Instant Strategy Generator */}
      <section id="strategy-generator" className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-800">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-amber-500/5 blur-[120px]"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Side */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Bot className="w-8 h-8 text-amber-500" />
                <h2 className="text-3xl md:text-4xl font-bold text-white">Instant Strategy Generator</h2>
              </div>
              <h3 className="text-xl text-amber-500 mb-4">Complimentary Dubai-focused growth strategy</h3>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Experience the power of AI-driven insights. Enter your business details to receive a complimentary, high-level marketing strategy tailored for the Dubai market specifically for your niche.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Tailored to Dubai market trends",
                  "Identifies key growth channels",
                  "Provides actionable initial steps"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg">
                <p className="text-sm text-slate-400 mb-2">Prefer to chat directly?</p>
                <p className="text-white font-bold text-lg">WhatsApp: +971 7020895818</p>
              </div>
            </div>

            {/* Interactive Form Side */}
            <div className="bg-slate-900/80 border border-slate-700 rounded-2xl p-8 shadow-2xl relative backdrop-blur-sm">
              {!strategy ? (
                <form onSubmit={handleGenerateStrategy} className="space-y-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">Business Name</label>
                    <input 
                      type="text" 
                      required
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors placeholder-slate-600"
                      placeholder="e.g. Marina Luxury Real Estate"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">Industry</label>
                      <input 
                        type="text" 
                        required
                        value={industry}
                        onChange={(e) => setIndustry(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors placeholder-slate-600"
                        placeholder="e.g. Hospitality"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">Target Audience</label>
                      <input 
                        type="text" 
                        value={audience}
                        onChange={(e) => setAudience(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors placeholder-slate-600"
                        placeholder="e.g. Expats, Tourists"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">Phone Number</label>
                      <input 
                        type="tel" 
                        required
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors placeholder-slate-600"
                        placeholder="+971..."
                      />
                    </div>
                    <div>
                       <label className="block text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">Monthly Budget (AED)</label>
                       <input 
                        type="text" 
                        value={marketingSpend}
                        onChange={(e) => setMarketingSpend(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors placeholder-slate-600"
                        placeholder="e.g. 10,000"
                      />
                    </div>
                  </div>

                  <button 
                    type="submit"
                    disabled={loading}
                    className="w-full bg-amber-500 hover:bg-amber-600 disabled:bg-slate-700 text-slate-950 font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 mt-2"
                  >
                    {loading ? (
                      <>
                        <Sparkles className="w-5 h-5 animate-spin" /> Analyzing Market...
                      </>
                    ) : (
                      <>
                        Generate Strategy <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="animate-fade-in">
                  <div className="mb-6 flex justify-between items-start">
                    <h3 className="text-xl font-bold text-amber-500">{strategy.title}</h3>
                    <button onClick={() => setStrategy(null)} className="text-xs text-slate-500 hover:text-white underline">Reset</button>
                  </div>
                  <div className="space-y-4 mb-6">
                    {strategy.points.map((point, i) => (
                      <div key={i} className="flex items-start gap-3 bg-slate-950 p-4 rounded-lg border border-slate-800">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-500/20 text-amber-500 flex items-center justify-center text-sm font-bold">
                          {i + 1}
                        </span>
                        <p className="text-sm text-slate-300">{point}</p>
                      </div>
                    ))}
                  </div>
                  <div className="bg-slate-950 p-6 rounded-xl border border-amber-500/30 text-center">
                    <p className="text-white font-semibold mb-3">Ready to execute this plan?</p>
                    <button 
                      onClick={() => window.open('https://wa.me/9717020895818', '_blank')}
                      className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 rounded-lg transition-colors flex justify-center items-center gap-2"
                    >
                      Book Strategy Call on WhatsApp
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;