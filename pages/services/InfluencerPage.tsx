import React from 'react';
import { Page } from '../../types';
import { Users, CheckCircle, ShieldCheck, ArrowLeft, Star, MessageCircle, HelpCircle, CheckCircle2 } from 'lucide-react';

interface Props {
  onNavigate: (page: Page) => void;
}

const InfluencerPage: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button onClick={() => onNavigate(Page.SERVICES)} className="flex items-center text-slate-400 hover:text-amber-500 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
        </button>

        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
          <div>
            <div className="inline-block px-4 py-1 mb-4 border border-amber-500/30 rounded-full bg-amber-500/10">
                <span className="text-amber-400 text-xs font-bold tracking-widest uppercase">Trusted Voices Network</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Influencers Who <br/><span className="text-gradient-gold">Actually Sell.</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Word of mouth is digital now. We connect you with vetted, high-impact influencers in the UAE who drive real conversations and conversions, not just vanity metrics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/9717020895818" target="_blank" rel="noopener noreferrer" className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-8 py-4 rounded-full font-bold text-lg inline-flex items-center justify-center gap-2 transition-all hover:scale-105">
                <MessageCircle className="w-5 h-5"/> Connect with Influencers
              </a>
            </div>
          </div>
          <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 blur-[50px]"></div>
             <h3 className="text-2xl font-bold text-white mb-8 border-l-4 border-amber-500 pl-4">Our Vetting Process</h3>
             <ul className="space-y-6 relative z-10">
               <li className="flex gap-4">
                 <ShieldCheck className="w-10 h-10 text-amber-500 flex-shrink-0" />
                 <div>
                   <h4 className="text-white font-bold text-lg">Fake Follower Check</h4>
                   <p className="text-slate-400 text-sm mt-1">We analyze audience authenticity. No bots. No engagement pods. Just real Dubai residents.</p>
                 </div>
               </li>
               <li className="flex gap-4">
                 <Star className="w-10 h-10 text-amber-500 flex-shrink-0" />
                 <div>
                   <h4 className="text-white font-bold text-lg">Niche Relevance</h4>
                   <p className="text-slate-400 text-sm mt-1">We match you with voices that align with your brand values, whether it's Luxury, Tech, or Wellness.</p>
                 </div>
               </li>
               <li className="flex gap-4">
                 <CheckCircle className="w-10 h-10 text-amber-500 flex-shrink-0" />
                 <div>
                   <h4 className="text-white font-bold text-lg">NMC Compliance</h4>
                   <p className="text-slate-400 text-sm mt-1">We ensure all influencers are licensed by the UAE National Media Council to protect your brand legally.</p>
                 </div>
               </li>
             </ul>
          </div>
        </div>

        {/* Deep Dive */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
            <div className="md:col-span-2 space-y-12">
                <section>
                    <h2 className="text-3xl font-bold text-white mb-6">Comprehensive Campaign Management</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {[
                            "Strategic Sourcing & Outreach",
                            "Rate Negotiation & Contracts",
                            "Creative Brief Development",
                            "Content Review & Approval",
                            "Live Campaign Monitoring",
                            "Post-Campaign Analytics"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center text-slate-300 bg-slate-900/50 p-4 rounded-lg border border-slate-800">
                                <CheckCircle2 className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0" />
                                {item}
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-3xl font-bold text-white mb-6">Why Dubai Trusts Influencers</h2>
                    <p className="text-slate-400 mb-6 leading-relaxed">
                        In Dubai, trust is currency. Consumers rely heavily on recommendations from personalities they follow. Whether it's a new restaurant opening or a tech product launch, the "Saw it on Instagram" effect is the most powerful driver of footfall and sales in the region.
                    </p>
                    <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
                        <h3 className="text-white font-bold mb-2">Micro vs. Mega Influencers</h3>
                        <p className="text-slate-400 text-sm">
                            We often recommend a mix. <span className="text-amber-500">Mega influencers</span> (1M+) for brand awareness and prestige. <span className="text-amber-500">Micro-influencers</span> (10k-50k) for high engagement and conversion, as their followers trust them like friends.
                        </p>
                    </div>
                </section>

                <section>
                     <h2 className="text-3xl font-bold text-white mb-6">Ideal Sectors</h2>
                     <div className="space-y-4">
                        <div className="flex items-center bg-slate-900/50 p-4 rounded-lg">
                            <span className="w-3 h-3 bg-amber-500 rounded-full mr-4"></span>
                            <span className="text-white font-bold mr-2">Events & Entertainment:</span>
                            <span className="text-slate-400 text-sm">Driving immediate ticket sales and buzz.</span>
                        </div>
                        <div className="flex items-center bg-slate-900/50 p-4 rounded-lg">
                             <span className="w-3 h-3 bg-amber-500 rounded-full mr-4"></span>
                            <span className="text-white font-bold mr-2">Beauty & Wellness:</span>
                            <span className="text-slate-400 text-sm">Tutorials and reviews that demonstrate product value.</span>
                        </div>
                        <div className="flex items-center bg-slate-900/50 p-4 rounded-lg">
                             <span className="w-3 h-3 bg-amber-500 rounded-full mr-4"></span>
                            <span className="text-white font-bold mr-2">E-Commerce:</span>
                            <span className="text-slate-400 text-sm">Unboxing videos and discount code promotions.</span>
                        </div>
                     </div>
                </section>
            </div>

            {/* Sidebar FAQ */}
            <div className="space-y-8">
                <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2"><HelpCircle className="w-5 h-5 text-amber-500"/> FAQ</h3>
                    <div className="space-y-6">
                        <div>
                            <h4 className="text-white font-semibold text-sm mb-2">Is it expensive?</h4>
                            <p className="text-slate-400 text-xs leading-relaxed">It varies wildly. Barter collaborations work for some micro-influencers, while celebrities charge premium rates. We negotiate to get you the best value.</p>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold text-sm mb-2">Is it legal in UAE?</h4>
                            <p className="text-slate-400 text-xs leading-relaxed">Yes, provided the influencer is licensed. We handle all compliance checks so you don't face any fines.</p>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold text-sm mb-2">How do we measure ROI?</h4>
                            <p className="text-slate-400 text-xs leading-relaxed">We use tracked links, unique discount codes, and sentiment analysis to measure the direct impact on your sales and brand perception.</p>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-amber-500 to-amber-600 p-8 rounded-2xl text-center shadow-lg">
                    <h3 className="text-slate-900 font-bold text-xl mb-4">Amplify Your Brand</h3>
                    <p className="text-slate-900/80 text-sm mb-6">Find your perfect brand ambassadors today.</p>
                    <a href="https://wa.me/9717020895818" target="_blank" rel="noopener noreferrer" className="bg-slate-950 text-white w-full py-3 rounded-lg font-bold hover:bg-slate-900 transition-colors block">
                        WhatsApp Us
                    </a>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default InfluencerPage;