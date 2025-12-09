import React from 'react';
import { Page } from '../../types';
import { Users, CheckCircle, ShieldCheck, ArrowLeft, Star } from 'lucide-react';

interface Props {
  onNavigate: (page: Page) => void;
}

const InfluencerPage: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button onClick={() => onNavigate(Page.SERVICES)} className="flex items-center text-slate-400 hover:text-amber-500 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Influencer Marketing <span className="text-gradient-gold">Dubai</span></h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Word of mouth is digital now. We connect you with vetted, high-impact influencers in the UAE who actually influence purchasing decisions.
            </p>
            <div className="space-y-6">
              {[
                "Strategic Influencer Sourcing",
                "Campaign Management & Briefing",
                "Legal Contracts & Compliance",
                "Performance Tracking & Reporting"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span className="text-slate-300 text-lg">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <a href="https://wa.me/9717020895818" className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-8 py-4 rounded-full font-bold text-lg inline-flex items-center gap-2">
                Connect with Influencers
              </a>
            </div>
          </div>
          <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 relative">
             <div className="absolute top-4 right-4 bg-amber-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-full">TRUSTED NETWORK</div>
             <h3 className="text-2xl font-bold text-white mb-6">Our Approach</h3>
             <ul className="space-y-6">
               <li className="flex gap-4">
                 <ShieldCheck className="w-8 h-8 text-amber-500 flex-shrink-0" />
                 <div>
                   <h4 className="text-white font-bold">Vetted Profiles</h4>
                   <p className="text-slate-400 text-sm">We analyze fake followers and engagement rates. No wasted budget on bots.</p>
                 </div>
               </li>
               <li className="flex gap-4">
                 <Star className="w-8 h-8 text-amber-500 flex-shrink-0" />
                 <div>
                   <h4 className="text-white font-bold">Niche Expertise</h4>
                   <p className="text-slate-400 text-sm">From luxury lifestyle and tech to parenting and food. We find the right voice for your brand.</p>
                 </div>
               </li>
               <li className="flex gap-4">
                 <CheckCircle className="w-8 h-8 text-amber-500 flex-shrink-0" />
                 <div>
                   <h4 className="text-white font-bold">Compliance</h4>
                   <p className="text-slate-400 text-sm">We ensure all campaigns adhere to NMC (National Media Council) regulations in the UAE.</p>
                 </div>
               </li>
             </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfluencerPage;