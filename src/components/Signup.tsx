import { useState } from 'react';
import { ArrowRight, Mail, Lock, User, Phone, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface SignupProps {
  onClose: () => void;
  onSwitchToLogin: () => void;
}

export default function Signup({ onClose, onSwitchToLogin }: SignupProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    // TODO: 회원가입 로직 구현
    console.log('Signup:', formData);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <motion.div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="relative bg-[#1a1a1a] border-4 border-[#ff6b35] shadow-[16px_16px_0px_rgba(255,107,53,0.3)] max-w-md w-full max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
      >
        {/* Close Button */}
        <motion.button
          onClick={onClose}
          className="absolute -top-4 -right-4 bg-[#ff6b35] hover:bg-[#ff8554] text-black p-3 border-4 border-black transition-all z-10"
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
        >
          <X className="w-6 h-6" strokeWidth={3} />
        </motion.button>

        {/* Header */}
        <div className="bg-[#ff6b35] p-8 border-b-4 border-black sticky top-0 z-10">
          <h2 className="text-black uppercase tracking-[0.3em] text-center">회원가입</h2>
          <div className="h-1 w-20 bg-black mx-auto mt-4"></div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {/* Name Field */}
          <div>
            <label className="block text-white/80 uppercase tracking-wider text-sm mb-3">
              이름
            </label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#ff6b35]" />
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className="w-full bg-black/50 border-2 border-[#ff6b35] text-white pl-12 pr-4 py-4 focus:outline-none focus:border-[#ff8554] transition-colors placeholder:text-white/30"
                placeholder="홍길동"
                required
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-white/80 uppercase tracking-wider text-sm mb-3">
              이메일
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#ff6b35]" />
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="w-full bg-black/50 border-2 border-[#ff6b35] text-white pl-12 pr-4 py-4 focus:outline-none focus:border-[#ff8554] transition-colors placeholder:text-white/30"
                placeholder="your@email.com"
                required
              />
            </div>
          </div>

          {/* Phone Field */}
          <div>
            <label className="block text-white/80 uppercase tracking-wider text-sm mb-3">
              전화번호
            </label>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#ff6b35]" />
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                className="w-full bg-black/50 border-2 border-[#ff6b35] text-white pl-12 pr-4 py-4 focus:outline-none focus:border-[#ff8554] transition-colors placeholder:text-white/30"
                placeholder="010-1234-5678"
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
                value={formData.password}
                onChange={(e) => handleChange('password', e.target.value)}
                className="w-full bg-black/50 border-2 border-[#ff6b35] text-white pl-12 pr-4 py-4 focus:outline-none focus:border-[#ff8554] transition-colors placeholder:text-white/30"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          {/* Confirm Password Field */}
          <div>
            <label className="block text-white/80 uppercase tracking-wider text-sm mb-3">
              비밀번호 확인
            </label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#ff6b35]" />
              <input
                type="password"
                value={formData.confirmPassword}
                onChange={(e) => handleChange('confirmPassword', e.target.value)}
                className="w-full bg-black/50 border-2 border-[#ff6b35] text-white pl-12 pr-4 py-4 focus:outline-none focus:border-[#ff8554] transition-colors placeholder:text-white/30"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-start gap-3 p-4 bg-black/30 border-l-4 border-[#ff6b35]">
            <input
              type="checkbox"
              id="terms"
              required
              className="mt-1 w-5 h-5 accent-[#ff6b35]"
            />
            <label htmlFor="terms" className="text-white/70 text-sm leading-relaxed">
              <span className="text-[#ff6b35]">이용약관</span> 및{' '}
              <span className="text-[#ff6b35]">개인정보처리방침</span>에 동의합니다.
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="group w-full bg-[#ff6b35] hover:bg-[#ff8554] text-black py-5 border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] transition-all uppercase tracking-[0.2em] flex items-center justify-center gap-3"
          >
            <span>가입하기</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={3} />
          </button>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-[#1a1a1a] px-4 text-white/60 uppercase text-sm tracking-wider">
                이미 회원이신가요?
              </span>
            </div>
          </div>

          {/* Switch to Login */}
          <button
            type="button"
            onClick={onSwitchToLogin}
            className="w-full bg-white/5 hover:bg-white/10 text-white py-5 border-2 border-white/30 hover:border-[#ff6b35] transition-all uppercase tracking-[0.2em]"
          >
            로그인
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
}