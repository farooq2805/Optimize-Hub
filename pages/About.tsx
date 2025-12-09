import React from 'react';
import { Globe2, MapPin, Target, ArrowRight, Linkedin } from 'lucide-react';
import { Page } from '../types';

interface AboutProps {
  onNavigate: (page: Page) => void;
}

const About: React.FC<AboutProps> = ({ onNavigate }) => {
  const team = [
    {
      name: "Nisha Sequeira",
      role: "Founder & Influencer Marketing Head",
      desc: "The strategic force behind OptimizeHub. Driving authentic connections that convert.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400",
      linkedin: "https://www.linkedin.com/in/nisha-sequeira"
    },
    {
      name: "Farooq Syed",
      role: "Co-Founder & Head of Paid Media",
      desc: "Expert in delivering high ROAS campaigns across major platforms, maximizing immediate returns.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400",
      linkedin: "https://www.linkedin.com/in/farooq-syed"
    },
    {
      name: "Melroy",
      role: "Head of Social Media",
      desc: "10 years of experience crafting winning strategies for F&B, Luxury Watches, Real Estate, and Clinics.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400",
      linkedin: "https://www.linkedin.com/in/melroy-social"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="relative py-24 bg-slate-950 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-amber-500/10 rounded-full blur-[100px]"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Optimization Meets Ambition: <br/>
            We Are <span className="text-gradient-gold">OptimizeHub</span>,<br/>
            Your Digital Growth Partner in Dubai.
          </h1>
        </div>
      </div>

      {/* Core Identity */}
      <section className="py-20 bg-slate-900 border-y border-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-6">The Core Identity</h2>
          <p className="text-lg text-slate-300 leading-8">
            OptimizeHub was founded on one simple principle: <span className="text-amber-500 font-semibold">Marketing spend should always generate measurable profit.</span> In a vibrant, fast-paced market like Dubai and the wider UAE, standing still means falling behind. We are a team of data scientists, creative strategists, and performance marketers dedicated to turning digital potential into tangible ROI.
          </p>
          <div className="mt-10 flex justify-center gap-4 text-sm font-bold uppercase tracking-widest text-slate-400">
            <span>Data-Driven</span> • <span>Performance-Focused</span> • <span>Dubai-Centric</span>
          </div>
        </div>
      </section>

      {/* Unique Dubai Edge */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Our Unique Dubai Edge</h2>
          <p className="text-slate-400 max-w-3xl mx-auto">
            What makes OptimizeHub different is our deep understanding of the local ecosystem. We don't just run global campaigns; we build strategies that resonate here, understanding the nuances of:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Edge 1 */}
          <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-amber-500/50 transition-colors">
            <Globe2 className="w-10 h-10 text-amber-500 mb-6" />
            <h3 className="text-xl font-bold text-white mb-4">GCC Media Landscape</h3>
            <p className="text-slate-400 leading-relaxed">
              Expertise in platforms and influencers specific to the UAE/GCC region, ensuring cultural relevance and maximum reach.
            </p>
          </div>
          
          {/* Edge 2 */}
          <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-amber-500/50 transition-colors">
            <MapPin className="w-10 h-10 text-amber-500 mb-6" />
            <h3 className="text-xl font-bold text-white mb-4">Local Search Authority</h3>
            <p className="text-slate-400 leading-relaxed">
              Mastering local SEO strategies, including Google My Business optimization, crucial for businesses targeting specific Dubai neighborhoods and emirates.
            </p>
          </div>

          {/* Edge 3 */}
          <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-amber-500/50 transition-colors">
            <Target className="w-10 h-10 text-amber-500 mb-6" />
            <h3 className="text-xl font-bold text-white mb-4">High-Intent Market</h3>
            <p className="text-slate-400 leading-relaxed">
              Focusing on high-value keywords and lead generation strategies essential for local industries (Real Estate, Hospitality, Finance, etc.).
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Meet the OptimizeHub Team</h2>
            <p className="text-slate-400">Our leadership is driven by measurable results and deep local insight.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all duration-300">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full border-2 border-slate-700 group-hover:border-amber-500 transition-colors overflow-hidden relative">
                   <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                   />
                </div>
                <h3 className="text-xl font-bold text-white text-center">{member.name}</h3>
                <p className="text-amber-500 text-sm text-center mb-4 font-medium">{member.role}</p>
                <div className="flex justify-center">
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-500 hover:text-amber-500 transition-colors text-sm font-semibold border border-slate-800 px-4 py-2 rounded-full hover:border-amber-500"
                  >
                    <Linkedin className="w-4 h-4"/>
                    <span>Connect</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy & Services Link */}
      <section className="py-24 max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Our Philosophy</h2>
        <p className="text-lg text-slate-300 leading-relaxed mb-12">
          We combine the power of <span className="text-amber-500">SEO</span> for long-term foundation, <span className="text-amber-500">Paid Marketing</span> for immediate impact, <span className="text-amber-500">Social Media</span> for brand love, and <span className="text-amber-500">Influencer Marketing</span> for authentic reach.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-16">
            <div className="bg-slate-900/30 p-8 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors">
                <h3 className="text-amber-500 font-bold text-xl mb-4">Our Mission</h3>
                <p className="text-slate-400">To empower local businesses with precision digital marketing solutions, transforming advertising spend into measurable, sustainable growth and maximizing Return on Investment.</p>
            </div>
            <div className="bg-slate-900/30 p-8 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors">
                <h3 className="text-amber-500 font-bold text-xl mb-4">Our Vision</h3>
                <p className="text-slate-400">To be recognized as the gold standard for performance-based digital marketing in the UAE and GCC, setting new benchmarks for transparency, innovation, and client success.</p>
            </div>
        </div>

        <div className="inline-block">
          <button 
            onClick={() => onNavigate(Page.CONTACT)}
            className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-10 py-5 rounded-full font-bold text-xl transition-all hover:scale-105 flex items-center gap-3 shadow-lg shadow-amber-500/20"
          >
            Book a Free Performance Audit <ArrowRight className="w-6 h-6"/>
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;