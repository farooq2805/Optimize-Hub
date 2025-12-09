import React from 'react';
import { Page } from '../../types';
import { Target, Zap, MousePointer2, ArrowLeft, CheckCircle2, HelpCircle, MessageCircle, BarChart3 } from 'lucide-react';

interface Props {
  onNavigate: (page: Page) => void;
}

const PaidPage: React.FC<Props> = ({ onNavigate }) => {
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
                <span className="text-amber-400 text-xs font-bold tracking-widest uppercase">Performance Marketing Experts</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Instant Traffic. <br/><span className="text-gradient-gold">Measurable ROI.</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Stop wasting budget on clicks that don't convert. We engineer high-precision PPC campaigns on Google, YouTube, and Social Platforms that target high-intent buyers in the UAE.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/9717020895818" target="_blank" rel="noopener noreferrer" className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-8 py-4 rounded-full font-bold text-lg inline-flex items-center justify-center gap-2 transition-all hover:scale-105">
                <MessageCircle className="w-5 h-5"/> Launch Campaigns
              </a>
            </div>
          </div>
          <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 blur-[50px]"></div>
             <h3 className="text-2xl font-bold text-white mb-8 border-l-4 border-amber-500 pl-4">The Dubai Ad Landscape</h3>
             <ul className="space-y-6 relative z-10">
               <li className="flex gap-4">
                 <MousePointer2 className="w-10 h-10 text-amber-500 flex-shrink-0" />
                 <div>
                   <h4 className="text-white font-bold text-lg">Cost Efficiency</h4>
                   <p className="text-slate-400 text-sm mt-1">Dubai CPCs can be high. We use negative keywords and Quality Score optimization to slash your acquisition costs.</p>
                 </div>
               </li>
               <li className="flex gap-4">
                 <Target className="w-10 h-10 text-amber-500 flex-shrink-0" />
                 <div>
                   <h4 className="text-white font-bold text-lg">Audience Precision</h4>
                   <p className="text-slate-400 text-sm mt-1">Target by nationality, income level, and interest to reach the affluent Dubai demographic you actually want.</p>
                 </div>
               </li>
               <li className="flex gap-4">
                 <Zap className="w-10 h-10 text-amber-500 flex-shrink-0" />
                 <div>
                   <h4 className="text-white font-bold text-lg">Seasonal Mastery</h4>
                   <p className="text-slate-400 text-sm mt-1">From Ramadan spikes to Dubai Summer Surprises (DSS), we adjust bids to capitalize on market peaks.</p>
                 </div>
               </li>
             </ul>
          </div>
        </div>

        {/* Deep Dive */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
            <div className="md:col-span-2 space-y-12">
                <section>
                    <h2 className="text-3xl font-bold text-white mb-6">Our Paid Media Ecosystem</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {[
                            "Google Search Ads (PPC)",
                            "Google Shopping & Performance Max",
                            "YouTube Video Ads",
                            "Instagram & Facebook Ads",
                            "LinkedIn B2B Lead Gen",
                            "Remarketing & Display"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center text-slate-300 bg-slate-900/50 p-4 rounded-lg border border-slate-800">
                                <CheckCircle2 className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0" />
                                {item}
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-3xl font-bold text-white mb-6">Why Dubai Businesses Need This</h2>
                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
                        <p className="text-slate-400 leading-relaxed mb-6">
                            Dubai is a "now" economy. Decisions are made fast. Paid ads put you directly in front of customers exactly when they are searching for your service. Whether it's an expat looking for a new apartment or a tourist searching for fine dining, we ensure you are the first click.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                            <div>
                                <div className="text-3xl font-bold text-amber-500 mb-1">Top 3</div>
                                <div className="text-xs text-slate-500 uppercase tracking-widest">Ad Positions</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-amber-500 mb-1">Instant</div>
                                <div className="text-xs text-slate-500 uppercase tracking-widest">Lead Generation</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-amber-500 mb-1">100%</div>
                                <div className="text-xs text-slate-500 uppercase tracking-widest">Trackable ROI</div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                     <h2 className="text-3xl font-bold text-white mb-6">High-Value Targets</h2>
                     <div className="space-y-4">
                        <div className="flex items-start">
                            <BarChart3 className="w-6 h-6 text-amber-500 mr-4 mt-1" />
                            <div>
                                <h4 className="text-white font-bold">E-Commerce</h4>
                                <p className="text-slate-400 text-sm">Shopping ads for fashion, electronics, and beauty products targeting UAE & KSA.</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <BarChart3 className="w-6 h-6 text-amber-500 mr-4 mt-1" />
                            <div>
                                <h4 className="text-white font-bold">Real Estate</h4>
                                <p className="text-slate-400 text-sm">Lead generation forms for off-plan property launches and investor visas.</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <BarChart3 className="w-6 h-6 text-amber-500 mr-4 mt-1" />
                            <div>
                                <h4 className="text-white font-bold">B2B Services</h4>
                                <p className="text-slate-400 text-sm">LinkedIn campaigns targeting decision-makers in Dubai Media City and DIFC.</p>
                            </div>
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
                            <h4 className="text-white font-semibold text-sm mb-2">What is the minimum budget?</h4>
                            <p className="text-slate-400 text-xs leading-relaxed">For Dubai, we recommend starting with at least AED 5,000/month in ad spend to get statistically significant data and results.</p>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold text-sm mb-2">Google Ads or Social Ads?</h4>
                            <p className="text-slate-400 text-xs leading-relaxed">Google is for "Intent" (someone searching for you). Social is for "Awareness" (you finding them). We usually recommend a mix.</p>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold text-sm mb-2">How do you handle click fraud?</h4>
                            <p className="text-slate-400 text-xs leading-relaxed">We monitor IP addresses and use automated scripts to block suspicious traffic and competitors clicking your ads.</p>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-amber-500 to-amber-600 p-8 rounded-2xl text-center shadow-lg">
                    <h3 className="text-slate-900 font-bold text-xl mb-4">Need Fast Results?</h3>
                    <p className="text-slate-900/80 text-sm mb-6">Let's calculate your potential ROAS today.</p>
                    <a href="https://wa.me/9717020895818" target="_blank" rel="noopener noreferrer" className="bg-slate-950 text-white w-full py-3 rounded-lg font-bold hover:bg-slate-900 transition-colors block">
                        Get a Proposal
                    </a>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PaidPage;