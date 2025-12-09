import React from 'react';
import { Page } from '../../types';
import { Search, MapPin, Globe, BarChart, ArrowLeft } from 'lucide-react';

interface Props {
  onNavigate: (page: Page) => void;
}

const SeoPage: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button onClick={() => onNavigate(Page.SERVICES)} className="flex items-center text-slate-400 hover:text-amber-500 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">SEO Services <span className="text-gradient-gold">Dubai</span></h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              We don't just optimize for algorithms; we optimize for Dubai's unique search behavior. From Arabic keyword domination to Local Map Pack authority.
            </p>
            <div className="space-y-6">
              {[
                "Technical Site Audits",
                "Bilingual (Arabic/English) SEO",
                "Google Maps (Local SEO) Optimization",
                "High-Authority Link Building"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span className="text-slate-300 text-lg">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <a href="https://wa.me/9717020895818" className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-8 py-4 rounded-full font-bold text-lg inline-flex items-center gap-2">
                Get a Free SEO Audit
              </a>
            </div>
          </div>
          <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 relative">
             <div className="absolute top-4 right-4 bg-amber-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-full">ROI FOCUSED</div>
             <h3 className="text-2xl font-bold text-white mb-6">Why It Matters in UAE</h3>
             <ul className="space-y-6">
               <li className="flex gap-4">
                 <Globe className="w-8 h-8 text-amber-500 flex-shrink-0" />
                 <div>
                   <h4 className="text-white font-bold">The Bilingual Advantage</h4>
                   <p className="text-slate-400 text-sm">Ignoring Arabic search terms means missing 40% of the market. We target both.</p>
                 </div>
               </li>
               <li className="flex gap-4">
                 <MapPin className="w-8 h-8 text-amber-500 flex-shrink-0" />
                 <div>
                   <h4 className="text-white font-bold">Hyper-Local Intent</h4>
                   <p className="text-slate-400 text-sm">Dubai consumers search by neighborhood (e.g., "Dentist in JLT"). We ensure you own these micro-markets.</p>
                 </div>
               </li>
               <li className="flex gap-4">
                 <BarChart className="w-8 h-8 text-amber-500 flex-shrink-0" />
                 <div>
                   <h4 className="text-white font-bold">Sustainable Growth</h4>
                   <p className="text-slate-400 text-sm">Unlike ads which stop when you stop paying, SEO builds a long-term asset for your brand.</p>
                 </div>
               </li>
             </ul>
          </div>
        </div>

        {/* Pricing Philosophy */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-12 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">Our Pricing Philosophy</h2>
          <p className="text-slate-400 text-lg mb-8">
            We don't sell "packages"; we sell outcomes. Our SEO retainers are custom-built based on your industry competition, current authority, and growth speed.
          </p>
          <button onClick={() => onNavigate(Page.CONTACT)} className="text-amber-500 font-bold hover:text-white underline">
            Request a Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default SeoPage;