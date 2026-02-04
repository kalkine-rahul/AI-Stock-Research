"use client";
import { Mail, Phone, MapPin, ArrowRight, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0b1e33] text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Top Section: Branding & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          <div className="lg:col-span-4 space-y-6">
            <div className="text-3xl font-black text-white tracking-tighter">KALKINE</div>
            <p className="text-sm leading-relaxed text-gray-400">
              Kalkine is a leading financial media and technology company providing independent research and analysis 
              across various asset classes. Our goal is to empower investors with data-driven insights.
            </p>
            <div className="flex gap-4">
              <div className="bg-white/5 p-2 rounded-full hover:bg-[#00D09C] cursor-pointer transition-all"><Facebook size={18}/></div>
              <div className="bg-white/5 p-2 rounded-full hover:bg-[#00D09C] cursor-pointer transition-all"><Twitter size={18}/></div>
              <div className="bg-white/5 p-2 rounded-full hover:bg-[#00D09C] cursor-pointer transition-all"><Linkedin size={18}/></div>
            </div>
          </div>

          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Our Company</h4>
              <ul className="space-y-3 text-sm">
                <li className="hover:text-[#00D09C] cursor-pointer">About Us</li>
                <li className="hover:text-[#00D09C] cursor-pointer">Contact Us</li>
                <li className="hover:text-[#00D09C] cursor-pointer">Kalkine Media</li>
                <li className="hover:text-[#00D09C] cursor-pointer">Vision & Mission</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Useful Links</h4>
              <ul className="space-y-3 text-sm">
                <li className="hover:text-[#00D09C] cursor-pointer">FAQs</li>
                <li className="hover:text-[#00D09C] cursor-pointer">Pricing</li>
                <li className="hover:text-[#00D09C] cursor-pointer">Past Performance</li>
                <li className="hover:text-[#00D09C] cursor-pointer">Research Overview</li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest">Stay Updated</h4>
            <p className="text-xs text-gray-400">Never miss latest news and offers. Subscribe to our newsletter.</p>
            <div className="relative">
              <input 
                className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-6 text-sm focus:outline-none focus:border-[#00D09C]" 
                placeholder="Enter your email"
              />
              <button className="absolute right-1 top-1 bg-gradient-to-r from-orange-500 to-orange-600 p-2 rounded-full text-white">
                <ArrowRight size={18}/>
              </button>
            </div>
          </div>
        </div>

        {/* Contact & Certifications */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-white/10">
          <div className="flex items-start gap-4">
            <MapPin className="text-[#00D09C] shrink-0" size={20}/>
            <div>
              <p className="text-white font-bold text-sm">Our Location</p>
              <p className="text-xs text-gray-400 mt-1">Suite 202, 234 George Street, Sydney, NSW 2000, Australia</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Phone className="text-[#00D09C] shrink-0" size={20}/>
            <div>
              <p className="text-white font-bold text-sm">Call Us</p>
              <p className="text-xs text-gray-400 mt-1">(02) 9055 9490, (02) 9055 9496</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Mail className="text-[#00D09C] shrink-0" size={20}/>
            <div>
              <p className="text-white font-bold text-sm">Email Support</p>
              <p className="text-xs text-gray-400 mt-1">info@kalkine.com.au</p>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer (SEO & Compliance) */}
        <div className="pt-8 text-[10px] text-gray-500 leading-relaxed text-justify">
          <p className="mb-4">
            <strong>Disclaimer:</strong> The information on this website is provided by Kalkine Pty Ltd (ABN 34 117 608 312). 
            Kalkine is an authorized representative of Kalkine Solutions Private Limited, an authorized representative 
            of Kalkine Pty Ltd. Investing in financial products involves risk. Past performance is not an indicator 
            of future performance.
          </p>
          <div className="flex flex-wrap gap-4 text-gray-400 uppercase font-bold tracking-wider mb-8">
            <span className="hover:text-white cursor-pointer">Complaints Handling</span>
            <span className="hover:text-white cursor-pointer">T&C</span>
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Financial Services Guide</span>
          </div>
          <p className="text-center text-xs">Copyright © 2026 Kalkine Pty Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}