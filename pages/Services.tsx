import React from 'react';
import { Target, TrendingUp, Users, BarChart3, Search, Share2, ArrowRight, ShieldCheck, Gem } from 'lucide-react';
import { Page } from '../types';

interface ServicesProps {
  onNavigate: (page: Page) => void;
}

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  const services = [
    {
      id: 'seo',
      title: 'SEO Optimization',
      icon: <Search className="w-12 h-12 text-amber-500" />,
      description: 'Dominating search results for your target market. We optimize for search intent and technical performance to capture maximum organic traffic.',
      features: ['Technical SEO Audits', 'Local & Global SEO', 'Keyword Strategy', 'Authority Link Building'],
      link: Page.SERVICE_SEO
    },
    {
      id: 'paid-media',
      title: 'Paid Marketing (PPC)',
      icon: <Target className="w-12 h-12 text-amber-500" />,
      description: 'Precision-targeted campaigns on Google, YouTube, and Display networks. We maximize your ROAS by targeting high-intent buyers.',
      features: ['Google Ads Management', 'Retargeting Strategies', 'Programmatic Advertising', 'Conversion Rate Optimization'],
      link: Page.SERVICE_PAID
    },
    {
      id: 'influencer',
      title: 'Influencer Marketing',
      icon: <Users className="w-12 h-12 text-amber-500" />,
      description: 'Leverage our network of top lifestyle, tech, and business influencers to amplify your brand message authentically.',
      features: ['Influencer Sourcing & Vetting', 'Campaign Management', 'Contract Negotiation', 'Performance Tracking'],
      link: Page.SERVICE_INFLUENCER
    },
    {
      id: 'social',
      title: 'Social Media Marketing',
      icon: <Share2 className="w-12 h-12 text-amber-500" />,
      description: 'End-to-end social management for Instagram, TikTok, LinkedIn, and SnapChat. We create content that stops the scroll.',
      features: ['Content Creation & Production', 'Community Management', 'Social Strategy', 'Reels & TikTok Trends'],
      link: Page.SERVICE_SOCIAL
    }
  ];

  return (
    <div className="pt-10 pb-20">
      {/* Header */}
      <div className="bg-slate-950 py-16 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our <span className="text-gradient-gold">Services</span></h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          Comprehensive digital solutions designed to elevate your brand's presence in the global market.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24 mb-24">
          {services.map((service, index) => (
            <div key={service.id} className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Image/Icon Area */}
              <div className="flex-1 w-full">
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-3xl p-12 flex items-center justify-center relative overflow-hidden group cursor-pointer" onClick={() => onNavigate(service.link)}>
                  <div className="absolute inset-0 bg-amber-500/5 group-hover:bg-amber-500/10 transition-colors duration-500"></div>
                  <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>
                </div>
              </div>

              {/* Content Area */}
              <div className="flex-1 space-y-6">
                <h2 className="text-3xl font-bold text-white">{service.title}</h2>
                <div className="w-20 h-1 bg-amber-500 rounded-full"></div>
                <p className="text-slate-300 text-lg leading-relaxed">
                  {service.description}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-400">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="pt-6">
                  <button 
                    onClick={() => onNavigate(service.link)}
                    className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-8 py-3 rounded-full font-bold flex items-center gap-2 transition-all"
                  >
                    Explore Strategy <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing & Philosophy Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            <div className="bg-slate-900 p-10 rounded-3xl border border-slate-800 relative overflow-hidden group hover:border-amber-500/50 transition-colors">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                    <BarChart3 className="w-32 h-32 text-amber-500" />
                </div>
                <div className="relative z-10">
                    <ShieldCheck className="w-10 h-10 text-amber-500 mb-6" />
                    <h3 className="text-2xl font-bold text-white mb-4">Our Pricing Philosophy</h3>
                    <p className="text-slate-400 leading-relaxed text-lg">
                        We believe in value-based pricing. You don't pay for "hours"; you pay for <strong>results</strong>. 
                        Every dollar spent is tracked against tangible KPIs—whether that's leads generated, ROAS achieved, or market share gained. 
                        No hidden fees, no retainer bloat. Just clear, performance-driven investment.
                    </p>
                </div>
            </div>
             <div className="bg-slate-900 p-10 rounded-3xl border border-slate-800 relative overflow-hidden group hover:border-amber-500/50 transition-colors">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Gem className="w-32 h-32 text-amber-500" />
                </div>
                <div className="relative z-10">
                    <TrendingUp className="w-10 h-10 text-amber-500 mb-6" />
                    <h3 className="text-2xl font-bold text-white mb-4">The Premium Standard</h3>
                    <p className="text-slate-400 leading-relaxed text-lg">
                       In a market flooded with low-cost, low-quality agencies, OptimizeHub stands for premium execution. 
                       We invest in the best tools, top talent, and data sources to ensure your brand is represented 
                       at the highest level. Quality is not an expense; it's an asset.
                    </p>
                </div>
            </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Need a custom package?</h3>
             <a 
              href="https://wa.me/971505975089" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-slate-600 hover:border-amber-500 hover:bg-amber-500 hover:text-slate-950 text-slate-300 px-8 py-4 rounded-full transition-all font-semibold"
            >
                Contact us on WhatsApp (+971 50 597 5089)
            </a>
        </div>
      </div>
    </div>
  );
};

export default Services;