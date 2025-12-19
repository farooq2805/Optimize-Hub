import React from 'react';
import { Page } from '../types';
import { Instagram, Linkedin, Twitter, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-3xl font-bold text-white mb-4">Optimize<span className="text-amber-500">Hub</span></h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Optimization Meets Ambition. Your Digital Growth Partner in Dubai.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-amber-500 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-amber-500 transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-amber-500 transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Explore</h4>
            <ul className="space-y-3">
              <li><button onClick={() => onNavigate(Page.ABOUT)} className="text-slate-400 hover:text-amber-500 text-sm transition-colors">About Us</button></li>
              <li><button onClick={() => onNavigate(Page.SERVICES)} className="text-slate-400 hover:text-amber-500 text-sm transition-colors">Our Services</button></li>
              <li><button onClick={() => onNavigate(Page.CONTACT)} className="text-slate-400 hover:text-amber-500 text-sm transition-colors">Contact</button></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><button onClick={() => onNavigate(Page.SERVICE_SEO)} className="text-slate-400 hover:text-amber-500 text-sm transition-colors text-left">SEO Optimization</button></li>
              <li><button onClick={() => onNavigate(Page.SERVICE_PAID)} className="text-slate-400 hover:text-amber-500 text-sm transition-colors text-left">Paid Marketing (PPC)</button></li>
              <li><button onClick={() => onNavigate(Page.SERVICE_INFLUENCER)} className="text-slate-400 hover:text-amber-500 text-sm transition-colors text-left">Influencer Management</button></li>
              <li><button onClick={() => onNavigate(Page.SERVICE_SOCIAL)} className="text-slate-400 hover:text-amber-500 text-sm transition-colors text-left">Social Media Strategy</button></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6">Visit Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start text-slate-400 text-sm">
                <MapPin className="w-5 h-5 mr-3 text-amber-500 shrink-0" />
                <span>Level 42, Marina Plaza,<br/>Dubai Marina, Dubai, UAE</span>
              </li>
              <li className="flex items-center text-slate-400 text-sm">
                <Mail className="w-5 h-5 mr-3 text-amber-500 shrink-0" />
                <span>hello@optimizehub.co</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-600 text-sm">© {new Date().getFullYear()} OptimizeHub. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="text-slate-600 text-sm cursor-pointer hover:text-slate-400">Privacy Policy</span>
            <span className="text-slate-600 text-sm cursor-pointer hover:text-slate-400">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;