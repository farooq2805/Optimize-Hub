import React from 'react';
import { Page } from '../../types';
import { Target, Zap, DollarSign, ArrowLeft, MousePointer2 } from 'lucide-react';

interface Props {
  onNavigate: (page: Page) => void;
}

const PaidPage: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button onClick={() => onNavigate(Page.SERVICES)} className="flex items-center text-slate-400 hover:text-amber-500 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Paid Marketing <span className="text-gradient-gold">Dubai</span></h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Stop wasting budget on clicks that don't convert. We engineer high-precision PPC campaigns that target high-intent buyers in the UAE.
            </p>
            <div className="space-y-6">
              {[
                "Google Search & Display Ads",
                "YouTube Advertising",
                "Programmatic Advertising",
                "Advanced Retargeting Funnels"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span className="text-slate-300 text-lg">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <a href="https://wa.me/9717020895818" className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-8 py-4 rounded-full font-bold text-lg inline-flex items-center gap-2">
                Launch High-ROI Ads
              </a>
            </div>
          </div>
          <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 relative">
             <div className="absolute top-4 right-4 bg-amber-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-full">FAST RESULTS</div>
             <h3 className="text-2xl font-bold text-white mb-6">The Dubai Ad Landscape</h3>
             <ul className="space-y-6">
               <li className="flex gap-4">
                 <MousePointer2 className="w-8 h-8 text-amber-500 flex-shrink-0" />
                 <div>
                   <h4 className="text-white font-bold">Cost-Per-Click Efficiency</h4>
                   <p className="text-slate-400 text-sm">Dubai CPCs can be high. We use negative keywords and quality score optimization to reduce your costs.</p>
                 </div>
               </li>
               <li className="flex gap-4">
                 <Target className="w-8 h-8 text-amber-500 flex-shrink-0" />
                 <div>
                   <h4 className="text-white font-bold">Audience Precision</h4>
                   <p className="text-slate-400 text-sm">Targeting by nationality, income level, and interest to reach the affluent Dubai demographic.</p>
                 </div>
               </li>
               <li className="flex gap-4">
                 <Zap className="w-8 h-8 text-amber-500 flex-shrink-0" />
                 <div>
                   <h4 className="text-white font-bold">Instant Leads</h4>
                   <p className="text-slate-400 text-sm">Ideal for Real Estate launches, E-commerce sales, and Event promotion.</p>
                 </div>
               </li>
             </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaidPage;