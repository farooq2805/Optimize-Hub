import React from 'react';
import { Page } from '../types';
import { ArrowRight, Calendar, User } from 'lucide-react';

interface BlogProps {
  onNavigate: (page: Page) => void;
}

const Blog: React.FC<BlogProps> = ({ onNavigate }) => {
  const posts = [
    {
      title: "SEO Dubai 2024: How to Rank in a Bilingual Market",
      excerpt: "Navigating the complexities of English and Arabic search intent to dominate the UAE Google results.",
      category: "SEO Strategy",
      date: "Oct 12, 2024",
      author: "Nisha Sequeira"
    },
    {
      title: "Influencer Marketing in Dubai: Why Micro-Influencers Convert Better",
      excerpt: "The shift from celebrity endorsements to authentic, niche storytelling in the Luxury and F&B sectors.",
      category: "Influencer Marketing",
      date: "Oct 08, 2024",
      author: "Nisha Sequeira"
    },
    {
      title: "Paid Advertising UAE: Maximizing ROAS During Ramadan",
      excerpt: "Key strategies for timing your ad spend during the Holy Month to capture high-intent traffic.",
      category: "Paid Ads",
      date: "Sept 25, 2024",
      author: "Farooq Syed"
    },
    {
      title: "Real Estate Digital Marketing: Generating Leads for Off-Plan Properties",
      excerpt: "A deep dive into lead generation funnels specifically designed for Dubai's booming property market.",
      category: "Industry Focus",
      date: "Sept 15, 2024",
      author: "Melroy"
    }
  ];

  return (
    <div className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">OptimizeHub <span className="text-gradient-gold">Insights</span></h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Expert analysis, trends, and strategies for the UAE digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {posts.map((post, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-amber-500 transition-colors group cursor-pointer">
              <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                <span className="text-amber-500 font-semibold uppercase tracking-wider">{post.category}</span>
                <span>•</span>
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3"/> {post.date}</span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-500 transition-colors">{post.title}</h2>
              <p className="text-slate-400 mb-6 leading-relaxed">{post.excerpt}</p>
              <div className="flex justify-between items-center border-t border-slate-800 pt-6">
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <User className="w-4 h-4" /> {post.author}
                </div>
                <span className="text-white font-semibold flex items-center gap-2 group-hover:translate-x-2 transition-transform">Read Article <ArrowRight className="w-4 h-4"/></span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-12 text-center border border-slate-700">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Ahead of the Curve</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">Subscribe to our newsletter for the latest Dubai marketing trends delivered straight to your inbox.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-8">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-slate-950 border border-slate-700 rounded-lg px-6 py-3 text-white focus:border-amber-500 focus:outline-none w-full"
            />
            <button className="bg-amber-500 text-slate-950 font-bold px-8 py-3 rounded-lg hover:bg-amber-600 transition-colors">Subscribe</button>
          </div>
          <button onClick={() => onNavigate(Page.CONTACT)} className="text-slate-400 hover:text-white underline text-sm">
            Or book a strategy call directly
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;