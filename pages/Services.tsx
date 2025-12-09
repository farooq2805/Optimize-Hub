import React from 'react';
import { Target, TrendingUp, Users, BarChart3, Search, Share2, ArrowRight } from 'lucide-react';
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
      description: 'Dominating search results specifically for the UAE market. We optimize for bilingual (Arabic/English) search intent to capture maximum local traffic.',
      features: ['Technical SEO Audits', 'Local SEO (Google Maps)', 'Multilingual Keyword Strategy', 'Authority Link Building'],
      link: Page.SERVICE_SEO
    },
    {
      id: 'paid-media',
      title: 'Paid Marketing (PPC)',
      icon: <Target className="w-12 h-12 text-amber-500" />,
      description: 'Precision-targeted campaigns on Google, YouTube, and Display networks. We maximize your ROAS by targeting high-intent buyers in the region.',
      features: ['Google Ads Management', 'Retargeting Strategies', 'Programmatic Advertising', 'Conversion Rate Optimization'],
      link: Page.SERVICE_PAID
    },
    {
      id: 'influencer',
      title: 'Influencer Marketing',
      icon: <Users className="w-12 h-12 text-amber-500" />,
      description: 'Leverage our network of Dubai’s top lifestyle, tech, and business influencers to amplify your brand message authentically.',
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
          Comprehensive digital solutions designed to elevate your brand's presence in the Middle East.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
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
        
        <div className="mt-24 text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Need a custom package?</h3>
             <a 
              href="https://wa.me/9717020895818" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-slate-600 hover:border-amber-500 text-slate-300 hover:text-amber-500 px-8 py-4 rounded-full transition-all"
            >
                Contact us on WhatsApp (+971 7020895818)
            </a>
        </div>
      </div>
    </div>
  );
};

export default Services;