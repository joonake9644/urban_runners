import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative bg-[#1a1a1a] border-t border-[#3f3f3f] concrete-texture">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff6b35] to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#ff6b35] flex items-center justify-center">
                <span className="text-white tracking-tighter">UR</span>
              </div>
              <div>
                <div className="text-white uppercase tracking-wider">Urban</div>
                <div className="text-[#ff6b35] uppercase tracking-wider -mt-1">Runners</div>
              </div>
            </div>
            <p className="text-[#a3a3a3] text-sm mb-6">
              도시를 달리는 자유.
              <br />
              함께 만드는 러닝 커뮤니티.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-[#2d2d2d] hover:bg-[#ff6b35] flex items-center justify-center transition-colors border border-[#3f3f3f] hover:border-[#ff6b35]">
                <Instagram className="w-5 h-5 text-[#f5f5f5]" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#2d2d2d] hover:bg-[#ff6b35] flex items-center justify-center transition-colors border border-[#3f3f3f] hover:border-[#ff6b35]">
                <Facebook className="w-5 h-5 text-[#f5f5f5]" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#2d2d2d] hover:bg-[#ff6b35] flex items-center justify-center transition-colors border border-[#3f3f3f] hover:border-[#ff6b35]">
                <Twitter className="w-5 h-5 text-[#f5f5f5]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#f5f5f5] mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-[#a3a3a3] hover:text-[#ff6b35] transition-colors text-sm">
                  About Crew
                </a>
              </li>
              <li>
                <a href="#schedule" className="text-[#a3a3a3] hover:text-[#ff6b35] transition-colors text-sm">
                  Schedule
                </a>
              </li>
              <li>
                <a href="#routes" className="text-[#a3a3a3] hover:text-[#ff6b35] transition-colors text-sm">
                  Running Routes
                </a>
              </li>
              <li>
                <a href="#membership" className="text-[#a3a3a3] hover:text-[#ff6b35] transition-colors text-sm">
                  Membership
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-[#a3a3a3] hover:text-[#ff6b35] transition-colors text-sm">
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-[#f5f5f5] mb-6 uppercase tracking-wider">Support</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[#a3a3a3] hover:text-[#ff6b35] transition-colors text-sm">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-[#a3a3a3] hover:text-[#ff6b35] transition-colors text-sm">
                  Safety Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="text-[#a3a3a3] hover:text-[#ff6b35] transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-[#a3a3a3] hover:text-[#ff6b35] transition-colors text-sm">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-[#a3a3a3] hover:text-[#ff6b35] transition-colors text-sm">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#f5f5f5] mb-6 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#ff6b35] flex-shrink-0 mt-0.5" />
                <span className="text-[#a3a3a3] text-sm">
                  서울시 영등포구 여의도동
                  <br />
                  한강공원 여의도
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#ff6b35] flex-shrink-0 mt-0.5" />
                <a href="mailto:info@urbanrunners.kr" className="text-[#a3a3a3] hover:text-[#ff6b35] transition-colors text-sm">
                  info@urbanrunners.kr
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#ff6b35] flex-shrink-0 mt-0.5" />
                <a href="tel:+82-2-1234-5678" className="text-[#a3a3a3] hover:text-[#ff6b35] transition-colors text-sm">
                  +82-2-1234-5678
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#3f3f3f]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#737373] text-sm">
              © 2024 Urban Runners Seoul. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-[#737373] hover:text-[#ff6b35] transition-colors text-sm">
                Privacy
              </a>
              <a href="#" className="text-[#737373] hover:text-[#ff6b35] transition-colors text-sm">
                Terms
              </a>
              <a href="#" className="text-[#737373] hover:text-[#ff6b35] transition-colors text-sm">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bottom accent */}
      <div className="h-2 bg-gradient-to-r from-[#1a1a1a] via-[#ff6b35] to-[#1a1a1a]"></div>
    </footer>
  );
}