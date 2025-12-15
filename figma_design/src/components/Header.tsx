import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  onLoginClick?: () => void;
  onSignupClick?: () => void;
}

export default function Header({ onLoginClick, onSignupClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a]/95 backdrop-blur-sm border-b border-[#3f3f3f]">
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#ff6b35] flex items-center justify-center relative">
              <div className="absolute inset-0 bg-black/20"></div>
              <span className="relative z-10 text-white tracking-tighter">UR</span>
            </div>
            <div>
              <div className="text-white uppercase tracking-wider">Urban</div>
              <div className="text-[#ff6b35] uppercase tracking-wider -mt-1">Runners</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#about" className="text-[#a3a3a3] hover:text-[#ff6b35] transition-colors uppercase tracking-wide text-sm">
              About Crew
            </a>
            <a href="#schedule" className="text-[#a3a3a3] hover:text-[#ff6b35] transition-colors uppercase tracking-wide text-sm">
              Schedule
            </a>
            <a href="#routes" className="text-[#a3a3a3] hover:text-[#ff6b35] transition-colors uppercase tracking-wide text-sm">
              Routes
            </a>
            <a href="#gallery" className="text-[#a3a3a3] hover:text-[#ff6b35] transition-colors uppercase tracking-wide text-sm">
              Gallery
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <motion.button 
              onClick={onLoginClick}
              className="relative text-[#f5f5f5] hover:text-[#ff6b35] transition-colors uppercase tracking-wide text-sm px-4 py-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="absolute inset-0 border-2 border-[#ff6b35] opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              ></motion.span>
              <span className="relative z-10">Login</span>
            </motion.button>
            <motion.button 
              onClick={onSignupClick}
              className="relative bg-[#ff6b35] hover:bg-[#e55a2b] text-white px-6 py-3 transition-colors uppercase tracking-wide text-sm border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,0.8)] hover:shadow-[2px_2px_0px_rgba(0,0,0,0.8)] hover:translate-x-[2px] hover:translate-y-[2px] overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Shine effect */}
              <motion.div
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '200%' }}
                transition={{ duration: 0.6 }}
              ></motion.div>
              <span className="relative z-10">Join Crew</span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            className="lg:hidden mt-6 pb-6 border-t-4 border-[#ff6b35] pt-6 bg-black/95 backdrop-blur-md -mx-6 px-6 rounded-b-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col gap-3">
              <motion.a 
                href="#about" 
                className="relative text-white hover:text-[#ff6b35] transition-colors uppercase tracking-wide py-3 px-4 border-l-4 border-transparent hover:border-[#ff6b35] hover:bg-[#ff6b35]/10 group"
                whileHover={{ x: 8 }}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="relative z-10">About Crew</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b35]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.a>
              
              <motion.a 
                href="#schedule" 
                className="relative text-white hover:text-[#ff6b35] transition-colors uppercase tracking-wide py-3 px-4 border-l-4 border-transparent hover:border-[#ff6b35] hover:bg-[#ff6b35]/10 group"
                whileHover={{ x: 8 }}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="relative z-10">Schedule</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b35]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.a>
              
              <motion.a 
                href="#routes" 
                className="relative text-white hover:text-[#ff6b35] transition-colors uppercase tracking-wide py-3 px-4 border-l-4 border-transparent hover:border-[#ff6b35] hover:bg-[#ff6b35]/10 group"
                whileHover={{ x: 8 }}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="relative z-10">Routes</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b35]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.a>
              
              <motion.a 
                href="#gallery" 
                className="relative text-white hover:text-[#ff6b35] transition-colors uppercase tracking-wide py-3 px-4 border-l-4 border-transparent hover:border-[#ff6b35] hover:bg-[#ff6b35]/10 group"
                whileHover={{ x: 8 }}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="relative z-10">Gallery</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b35]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.a>
              
              <div className="h-1 bg-[#ff6b35] my-3 shadow-[0_0_10px_rgba(255,107,53,0.5)]"></div>
              
              <motion.button 
                onClick={() => {
                  onLoginClick?.();
                  setIsMenuOpen(false);
                }}
                className="relative text-white hover:text-black transition-colors uppercase tracking-wide text-left py-3 px-4 border-2 border-white/30 hover:border-[#ff6b35] hover:bg-white group overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-white"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                ></motion.div>
                <span className="relative z-10">Login</span>
              </motion.button>
              
              <motion.button 
                onClick={() => {
                  onSignupClick?.();
                  setIsMenuOpen(false);
                }}
                className="relative bg-[#ff6b35] hover:bg-[#ff8554] text-black px-6 py-4 transition-all uppercase tracking-wide border-4 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div 
                  className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '200%' }}
                  transition={{ duration: 0.6 }}
                ></motion.div>
                <span className="relative z-10">Join Crew</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
}