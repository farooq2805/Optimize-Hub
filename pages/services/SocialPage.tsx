import React from 'react';
import { Page } from '../../types';
import { Share2, Image, Heart, ArrowLeft, PenTool, CheckCircle2, HelpCircle, MessageCircle, Instagram } from 'lucide-react';

interface Props {
  onNavigate: (page: Page) => void;
}

const SocialPage: React.FC<Props> = ({ onNavigate }) => {
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
                <span className="text-amber-400 text-xs font-bold tracking-widest uppercase">Creative & Strategy</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Social Media That <br/><span className="text-gradient-gold">Captivates Audiences.</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              In a world driven by aesthetics and status, your social presence is your digital storefront. We build premium, engaging brands on Instagram, TikTok, Snapchat, and LinkedIn.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/971505975089" target="_blank" rel="noopener noreferrer" className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-8 py-4 rounded-full font-bold text-lg inline-flex items-center justify-center gap-2 transition-all hover:scale-105">
                <MessageCircle className="w-5 h-5"/> Start Your Growth
              </a>
            </div>
          </div>
          <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 blur-[50px]"></div>
             <h3 className="text-2xl font-bold text-white mb-8 border-l-4 border-amber-500 pl-4">The Premium Standard</h3>
             <ul className="space-y-6 relative z-10">
               <li className="flex gap-4">
                 <Image className="w-10 h-10 text-amber-500 flex-shrink-0" />
                 <div>
                   <h4 className="text-white font-bold text-lg">Visual Excellence</h4>
                   <p className="text-slate-400 text-sm mt-1">Modern audiences expect high-production value. We deliver cinema-quality reels, photography, and motion graphics.</p>
                 </div>
               </li>
               <li className="flex gap-4">
                 <Heart className="w-10 h-10 text-amber-500 flex-shrink-0" />
                 <div>
                   <h4 className="text-white font-bold text-lg">Community Building</h4>
                   <p className="text-slate-400 text-sm mt-1">Turning followers into advocates. We manage comments, DMs, and engagement to build real loyalty.</p>
                 </div>
               </li>
               <li className="flex gap-4">
                 <PenTool className="w-10 h-10 text-amber-500 flex-shrink-0" />
                 <div>
                   <h4 className="text-white font-bold text-lg">Platform Expertise</h4>
                   <p className="text-slate-400 text-sm mt-1">Knowing that platform nuance is key, whether for LinkedIn B2B or Instagram lifestyle.</p>
                 </div>
               </li>
             </ul>
          </div>
        </div>

        {/* Deep Dive */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
            <div className="md:col-span-2 space-y-12">
                <section>
                    <h2 className="text-3xl font-bold text-white mb-6">Full-Service Management</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {[
                            "Social Strategy & Content Calendars",
                            "Reels & TikTok Video Production",
                            "Community Management (Reply/Engage)",
                            "Graphic Design & Branding",
                            "Paid Social Ad Integration",
                            "Monthly Performance Reporting"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center text-slate-300 bg-slate-900/50 p-4 rounded-lg border border-slate-800">
                                <CheckCircle2 className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0" />
                                {item}
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-3xl font-bold text-white mb-6">Why It Matters</h2>
                    <p className="text-slate-400 mb-6 leading-relaxed">
                        Social media penetration rates are skyrocketing. Your customers are scrolling right now. If your feed looks outdated or inactive, they assume your business is too. We turn your social channels into a dynamic portfolio that sells 24/7.
                    </p>
                    <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 flex gap-4 items-center">
                        <Instagram className="w-12 h-12 text-pink-500" />
                        <div>
                            <h3 className="text-white font-bold">The "Instagrammable" Standard</h3>
                            <p className="text-slate-400 text-sm">We ensure your brand fits the luxury, high-end aesthetic that defines the modern lifestyle, making your business desirable.</p>
                        </div>
                    </div>
                </section>

                <section>
                     <h2 className="text-3xl font-bold text-white mb-6">Industries We Elevate</h2>
                     <div className="space-y-4">
                        <div className="flex items-center bg-slate-900/50 p-4 rounded-lg">
                            <span className="w-3 h-3 bg-amber-500 rounded-full mr-4"></span>
                            <span className="text-white font-bold mr-2">Luxury F&B:</span>
                            <span className="text-slate-400 text-sm">Showcasing ambiance and culinary art.</span>
                        </div>
                        <div className="flex items-center bg-slate-900/50 p-4 rounded-lg">
                             <span className="w-3 h-3 bg-amber-500 rounded-full mr-4"></span>
                            <span className="text-white font-bold mr-2">Fashion & Beauty:</span>
                            <span className="text-slate-400 text-sm">Visual storytelling and trend-based content.</span>
                        </div>
                        <div className="flex items-center bg-slate-900/50 p-4 rounded-lg">
                             <span className="w-3 h-3 bg-amber-500 rounded-full mr-4"></span>
                            <span className="text-white font-bold mr-2">Hospitality:</span>
                            <span className="text-slate-400 text-sm">Hotels, beach clubs, and tourism experiences.</span>
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
                            <h4 className="text-white font-semibold text-sm mb-2">How often do you post?</h4>
                            <p className="text-slate-400 text-xs leading-relaxed">Typically 3-5 times a week on the feed, plus daily stories to keep the algorithm happy and your audience engaged.</p>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold text-sm mb-2">Do you create the content?</h4>
                            <p className="text-slate-400 text-xs leading-relaxed">Yes! We have an in-house team of photographers, videographers, and editors. You don't need to lift a finger.</p>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold text-sm mb-2">What about regional content?</h4>
                            <p className="text-slate-400 text-xs leading-relaxed">We provide full multilingual management with native copywriters who understand local dialects and tone.</p>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-amber-500 to-amber-600 p-8 rounded-2xl text-center shadow-lg">
                    <h3 className="text-slate-900 font-bold text-xl mb-4">Let's Get Creative</h3>
                    <p className="text-slate-900/80 text-sm mb-6">Book a consultation to see our portfolio.</p>
                    <a href="https://wa.me/971505975089" target="_blank" rel="noopener noreferrer" className="bg-slate-950 text-white w-full py-3 rounded-lg font-bold hover:bg-slate-900 transition-colors block">
                        WhatsApp Us
                    </a>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SocialPage;