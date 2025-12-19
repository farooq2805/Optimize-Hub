import React from 'react';
import { Page } from '../types';
import { ArrowRight, Linkedin, Heart, Coffee, ShieldCheck } from 'lucide-react';

interface AboutProps {
  onNavigate: (page: Page) => void;
}

const About: React.FC<AboutProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen pb-20">
      {/* Human Header */}
      <section className="py-24 bg-slate-950 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-8">
            We Started Because We Were <br/>
            <span className="text-gradient-gold">Tired of the Fluff.</span>
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed mb-12">
            OptimizeHub isn't a factory. We are a boutique team of strategists who actually care about whether your business succeeds. Why? Because our reputation is built on your ROI, not our award shelf.
          </p>
        </div>
      </section>

      {/* The Story */}
      <section className="py-20 bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                className="rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" 
                alt="Our Team"
              />
              <div className="absolute -bottom-6 -right-6 bg-amber-500 p-6 rounded-2xl hidden md:block">
                 <p className="text-slate-950 font-black text-2xl">100+</p>
                 <p className="text-slate-900 font-bold text-sm uppercase">Projects Scaled</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Real Humans. Real Strategy.</h2>
              <div className="space-y-6 text-slate-400 text-lg">
                <p>
                  After years in the "big agency" world, our founders realized that most clients were paying for fancy offices and junior account managers who didn't understand their business.
                </p>
                <p>
                  We built **OptimizeHub** to be the opposite. When you work with us, you work directly with the experts. We don't hide behind jargon or complicated reports. We speak the language of growth.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                  <div className="flex items-center gap-3">
                    <Coffee className="w-6 h-6 text-amber-500" />
                    <span className="text-white font-bold">Coffee & Data Driven</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Heart className="w-6 h-6 text-amber-500" />
                    <span className="text-white font-bold">Obsessed with Results</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team - The People */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">The People Behind the Growth</h2>
            <p className="text-slate-400">No interns. No outsourcing. Just senior specialists.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                name: "Nisha Sequeira",
                role: "The Connector",
                bio: "She doesn't just manage influencers; she builds relationships that actually drive sales.",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400"
              },
              {
                name: "Farooq Syed",
                role: "The Strategist",
                bio: "If there's a dollar to be saved in your ad budget, Farooq will find it and reinvest it for profit.",
                image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400"
              },
              {
                name: "Melroy",
                role: "The Creative",
                bio: "He turns boring business concepts into viral content that people actually want to share.",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400"
              }
            ].map((member, i) => (
              <div key={i} className="bg-slate-900/50 p-8 rounded-3xl border border-slate-800 text-center hover:border-amber-500 transition-colors">
                <img src={member.image} className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-2 border-slate-700" alt={member.name} />
                <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-amber-500 font-bold text-sm uppercase mb-4">{member.role}</p>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{member.bio}</p>
                <a href="#" className="inline-flex items-center gap-2 text-slate-500 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" /> <span>LinkedIn</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Let's Talk About Your Business.</h2>
        <p className="text-slate-400 mb-10 text-lg">We're not interested in just another client. We're interested in another success story. Is your business the next one?</p>
        <button 
          onClick={() => onNavigate(Page.CONTACT)}
          className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-10 py-5 rounded-full font-bold text-xl transition-all flex items-center gap-3 mx-auto shadow-2xl shadow-amber-500/20"
        >
          Book a Human Consultation <ArrowRight className="w-6 h-6" />
        </button>
      </section>
    </div>
  );
};

export default About;