import React from 'react';
import { Page } from '../../types';
import { Search, MapPin, Globe, BarChart, ArrowLeft, CheckCircle2, HelpCircle, MessageCircle } from 'lucide-react';

interface Props {
  onNavigate: (page: Page) => void;
}

const SeoPage: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen py-10 md:py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button onClick={() => onNavigate(Page.SERVICES)} className="flex items-center text-slate-400 hover:text-amber-500 mb-6 md:mb-8 transition-colors text-sm">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
        </button>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 mb-16 md:mb-24 items-center">
          <div>
            <div className="inline-block px-3 py-1 mb-3 md:mb-4 border border-amber-500/30 rounded-full bg-amber-500/10">
                <span className="text-amber-400 text-[10px] md:text-xs font-bold tracking-widest uppercase">#1 SEO Agency</span>
            </div>
            <h1 className="text-3xl md:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
              Dominating Search in a <br/><span className="text-gradient-gold">Competitive Market</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-6 md:mb-8 leading-relaxed">
              If you aren't on Page 1, you don't exist. We engineer robust SEO strategies that capture high-intent traffic from local to global.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/971505975089" target="_blank" rel="noopener noreferrer" className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-8 py-3.5 rounded-full font-bold text-base md:text-lg inline-flex items-center justify-center gap-2 transition-all hover:scale-105">
                <MessageCircle className="w-5 h-5"/> Get Free SEO Audit
              </a>
            </div>
          </div>
          <div className="bg-slate-900 rounded-2xl md:rounded-3xl p-6 md:p-8 border border-slate-800 shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-amber-500/10 blur-[40px] md:blur-[50px]"></div>
             <h3 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8 border-l-4 border-amber-500 pl-4">The OptimizeHub Advantage</h3>
             <ul className="space-y-5 md:space-y-6 relative z-10">
               <li className="flex gap-3 md:gap-4">
                 <Globe className="w-8 h-8 md:w-10 md:h-10 text-amber-500 flex-shrink-0" />
                 <div>
                   <h4 className="text-white font-bold text-base md:text-lg">Global Reach</h4>
                   <p className="text-slate-500 text-xs md:text-sm mt-0.5 md:mt-1">We optimize for diverse audiences and languages, ensuring your brand resonates internationally.</p>
                 </div>
               </li>
               <li className="flex gap-3 md:gap-4">
                 <MapPin className="w-8 h-8 md:w-10 md:h-10 text-amber-500 flex-shrink-0" />
                 <div>
                   <h4 className="text-white font-bold text-base md:text-lg">Hyper-Local Map Pack</h4>
                   <p className="text-slate-500 text-xs md:text-sm mt-0.5 md:mt-1">Ranking for "Near Me" searches in specific zones to drive footfall and local inquiries.</p>
                 </div>
               </li>
               <li className="flex gap-3 md:gap-4">
                 <BarChart className="w-8 h-8 md:w-10 md:h-10 text-amber-500 flex-shrink-0" />
                 <div>
                   <h4 className="text-white font-bold text-base md:text-lg">Sustainable ROI</h4>
                   <p className="text-slate-500 text-xs md:text-sm mt-0.5 md:mt-1">Stop renting traffic. Build a long-term asset that generates leads while you sleep.</p>
                 </div>
               </li>
             </ul>
          </div>
        </div>

        {/* Detailed Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16 md:mb-24">
            <div className="md:col-span-2 space-y-10 md:space-y-12">
                
                <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">What We Deliver</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                        {[
                            "Technical SEO Audits",
                            "Strategic Keyword Research",
                            "On-Page Optimization",
                            "Authority Link Building",
                            "GMB Management",
                            "Conversion Rate Optimization"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center text-slate-300 bg-slate-900/50 p-3.5 rounded-lg border border-slate-800 text-sm md:text-base">
                                <CheckCircle2 className="w-4 h-4 md:w-5 h-5 text-amber-500 mr-3 flex-shrink-0" />
                                {item}
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">Industries We Scale</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="bg-slate-900 p-5 rounded-xl border-t-2 border-amber-500">
                            <h3 className="text-white font-bold mb-1.5 text-sm md:text-base">Real Estate</h3>
                            <p className="text-xs text-slate-500">Targeting "Luxury apartments", "Off-plan projects".</p>
                        </div>
                        <div className="bg-slate-900 p-5 rounded-xl border-t-2 border-amber-500">
                            <h3 className="text-white font-bold mb-1.5 text-sm md:text-base">Medical Clinics</h3>
                            <p className="text-xs text-slate-500">Ranking for "Best Specialists", "Cosmetic Surgery".</p>
                        </div>
                        <div className="bg-slate-900 p-5 rounded-xl border-t-2 border-amber-500">
                            <h3 className="text-white font-bold mb-1.5 text-sm md:text-base">Legal Services</h3>
                            <p className="text-xs text-slate-500">Authority building for "Corporate Lawyers".</p>
                        </div>
                    </div>
                </section>

            </div>

            {/* Sidebar FAQ */}
            <div className="space-y-6 md:space-y-8">
                <div className="bg-slate-900 p-6 md:p-8 rounded-2xl border border-slate-800">
                    <h3 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6 flex items-center gap-2"><HelpCircle className="w-5 h-5 text-amber-500"/> FAQ</h3>
                    <div className="space-y-5">
                        <div>
                            <h4 className="text-white font-semibold text-xs md:text-sm mb-1.5">How long does SEO take?</h4>
                            <p className="text-slate-500 text-[10px] md:text-xs leading-relaxed">Usually 3-6 months to see significant movement, depending on competition.</p>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold text-xs md:text-sm mb-1.5">Is GMB important?</h4>
                            <p className="text-slate-500 text-[10px] md:text-xs leading-relaxed">Critical. For mobile searches like "near me", the Map Pack is the top source of calls.</p>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-amber-500 to-amber-600 p-6 md:p-8 rounded-2xl text-center shadow-lg">
                    <h3 className="text-slate-900 font-bold text-lg md:text-xl mb-3">Ready to Rank #1?</h3>
                    <p className="text-slate-900/80 text-xs md:text-sm mb-5">Let's discuss your keywords and growth potential.</p>
                    <a href="https://wa.me/971505975089" target="_blank" rel="noopener noreferrer" className="bg-slate-950 text-white w-full py-3 rounded-lg font-bold hover:bg-slate-900 transition-colors block text-sm">
                        WhatsApp Us
                    </a>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SeoPage;