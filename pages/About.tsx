import React from 'react';
import { Page } from '../types';
import { ArrowRight, Linkedin, Heart, Coffee, ShieldCheck } from 'lucide-react';

interface AboutProps {
  onNavigate: (page: Page) => void;
}

const About: React.FC<AboutProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen pb-12 md:pb-20 bg-white">
      {/* Human Header */}
      <section className="py-12 md:py-24 bg-slate-50 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-6xl font-black text-slate-900 mb-6 md:mb-8 leading-tight">
            We Started Because We Were <br/>
            <span className="text-gradient-brand">Tired of the Fluff.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 md:mb-12">
            OptimizeHub isn't a factory. We are a boutique team of strategists who actually care about whether your business succeeds. Why? Because our reputation is built on your ROI, not our award shelf.
          </p>
        </div>
      </section>

      {/* The Story */}
      <section className="py-12 md:py-20 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="relative order-2 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                className="rounded-3xl shadow-xl grayscale hover:grayscale-0 transition-all duration-700 w-full" 
                alt="Our Team"
              />
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-primary-600 p-4 md:p-6 rounded-2xl shadow-lg">
                 <p className="text-white font-black text-xl md:text-2xl">100+</p>
                 <p className="text-white font-bold text-[10px] md:text-sm uppercase">Projects Scaled</p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 md:mb-6">Real Humans. Real Strategy.</h2>
              <div className="space-y-4 md:space-y-6 text-slate-500 text-base md:text-lg">
                <p>
                  After years in the "big agency" world, our founders realized that most clients were paying for fancy offices and junior account managers who didn't understand their business.
                </p>
                <p>
                  We built **OptimizeHub** to be the opposite. When you work with us, you work directly with the experts. We don't hide behind jargon or complicated reports.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 pt-4 md:pt-6">
                  <div className="flex items-center gap-3">
                    <Coffee className="w-5 h-5 md:w-6 md:h-6 text-primary-600" />
                    <span className="text-slate-900 font-bold text-sm md:text-base">Coffee & Data Driven</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Heart className="w-5 h-5 md:w-6 md:h-6 text-primary-600" />
                    <span className="text-slate-900 font-bold text-sm md:text-base">Obsessed with Results</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team - The People */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3 md:mb-4">The People Behind the Growth</h2>
            <p className="text-slate-500 text-sm md:text-base">No interns. No outsourcing. Just senior specialists.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                name: "Nisha Sequeira",
                role: "The Connector",
                bio: "She doesn't just manage influencers; she builds relationships that actually drive sales.",
                // Updated with Nisha's photo representation
                image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400&h=400"
              },
              {
                name: "Farooq Syed",
                role: "The Strategist",
                bio: "If there's a dollar to be saved in your ad budget, Farooq will find it and reinvest it for profit.",
                // Updated with Farooq's photo representation (glasses, white shirt)
                image: "https://images.unsplash.com/photo-1556157382-97dee2dcb9d9?auto=format&fit=crop&q=80&w=400&h=400"
              },
              {
                name: "Melroy",
                role: "The Creative",
                bio: "He turns boring business concepts into viral content that people actually want to share.",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400"
              }
            ].map((member, i) => (
              <div key={i} className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 text-center hover:border-primary-400 transition-colors shadow-sm group">
                <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 md:mb-6">
                  <div className="absolute inset-0 bg-primary-500 rounded-full blur-xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  <img src={member.image} className="relative w-full h-full rounded-full object-cover border-4 border-white shadow-md" alt={member.name} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-primary-600 font-bold text-[10px] md:text-sm uppercase mb-3 md:mb-4 tracking-widest">{member.role}</p>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-4 md:mb-6">{member.bio}</p>
                <a href="#" className="inline-flex items-center gap-2 text-slate-400 hover:text-primary-600 transition-colors text-sm font-semibold">
                  <Linkedin className="w-4 h-4 md:w-5 h-5" /> <span>LinkedIn</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 md:py-24 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 md:mb-6">Let's Talk About Your Business.</h2>
        <p className="text-slate-500 mb-8 md:mb-10 text-base md:text-lg">We're not interested in just another client. We're interested in another success story. Is your business the next one?</p>
        <button 
          onClick={() => onNavigate(Page.CONTACT)}
          className="w-full sm:w-auto bg-primary-600 hover:bg-primary-700 text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-lg md:text-xl transition-all flex items-center justify-center gap-3 mx-auto shadow-xl shadow-primary-500/20"
        >
          Book a Human Consultation <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </section>
    </div>
  );
};

export default About;