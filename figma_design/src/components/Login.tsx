import { useState } from 'react';
import { ArrowRight, Mail, Lock, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface LoginProps {
  onClose: () => void;
  onSwitchToSignup: () => void;
}

export default function Login({ onClose, onSwitchToSignup }: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 로그인 로직 구현
    console.log('Login:', { email, password });
  };

  return (
    <motion.div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="relative bg-[#1a1a1a] border-4 border-[#ff6b35] shadow-[16px_16px_0px_rgba(255,107,53,0.3)] max-w-md w-full"
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
      >
        {/* Close Button */}
        <motion.button
          onClick={onClose}
          className="absolute -top-4 -right-4 bg-[#ff6b35] hover:bg-[#ff8554] text-black p-3 border-4 border-black transition-all"
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
        >
          <X className="w-6 h-6" strokeWidth={3} />
        </motion.button>

        {/* Header */}
        <div className="bg-[#ff6b35] p-8 border-b-4 border-black">
          <h2 className="text-black uppercase tracking-[0.3em] text-center">로그인</h2>
          <div className="h-1 w-20 bg-black mx-auto mt-4"></div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {/* Email Field */}
          <div>
            <label className="block text-white/80 uppercase tracking-wider text-sm mb-3">
              이메일
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#ff6b35]" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-black/50 border-2 border-[#ff6b35] text-white pl-12 pr-4 py-4 focus:outline-none focus:border-[#ff8554] transition-colors placeholder:text-white/30"
                placeholder="your@email.com"
                required
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-white/80 uppercase tracking-wider text-sm mb-3">
              비밀번호
            </label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#ff6b35]" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-black/50 border-2 border-[#ff6b35] text-white pl-12 pr-4 py-4 focus:outline-none focus:border-[#ff8554] transition-colors placeholder:text-white/30"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <button
              type="button"
              className="text-[#ff6b35] hover:text-[#ff8554] text-sm uppercase tracking-wider transition-colors"
            >
              비밀번호 찾기
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="group w-full bg-[#ff6b35] hover:bg-[#ff8554] text-black py-5 border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] transition-all uppercase tracking-[0.2em] flex items-center justify-center gap-3"
          >
            <span>로그인</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={3} />
          </button>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-[#1a1a1a] px-4 text-white/60 uppercase text-sm tracking-wider">
                또는
              </span>
            </div>
          </div>

          {/* Switch to Signup */}
          <button
            type="button"
            onClick={onSwitchToSignup}
            className="w-full bg-white/5 hover:bg-white/10 text-white py-5 border-2 border-white/30 hover:border-[#ff6b35] transition-all uppercase tracking-[0.2em]"
          >
            회원가입
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
}