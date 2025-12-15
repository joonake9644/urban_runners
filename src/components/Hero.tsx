import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onJoinClick?: () => void;
}

export default function Hero({ onJoinClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Concrete Background */}
      <div className="absolute inset-0">
        <motion.div
          className="w-full h-full bg-gradient-to-br from-zinc-800 via-zinc-900 to-black"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        {/* Subtle gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        ></motion.div>
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        ></motion.div>
      </div>

      {/* Orange Dynamic Stripes - Animated from left */}
      <div className="absolute left-0 top-[26%] w-full z-10">
        <motion.div 
          className="h-8 bg-[#ff6b35] mb-4 shadow-[0_8px_30px_rgba(255,107,53,0.5)]"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        ></motion.div>
        <motion.div 
          className="h-4 bg-[#ff6b35] mb-3 shadow-[0_6px_20px_rgba(255,107,53,0.4)]"
          initial={{ width: 0 }}
          animate={{ width: '70%' }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
        ></motion.div>
        <motion.div 
          className="h-2 bg-[#ff6b35] shadow-[0_4px_15px_rgba(255,107,53,0.3)]"
          initial={{ width: 0 }}
          animate={{ width: '50%' }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
        ></motion.div>
      </div>

      {/* Male Runner - Left Side - Animated from left */}
      <motion.div 
        className="absolute left-[5%] top-[30%] w-[480px] h-[480px] z-25"
        initial={{ x: -500, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
      >
        {/* Ground shadow */}
        <motion.div 
          className="absolute bottom-8 left-[20%] w-[60%] h-12 bg-black/70 rounded-full blur-2xl"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        ></motion.div>
        
        <div className="relative w-full h-full">
          <img
            src="/assets/5fc68dbba94b9f08e7883325e131a45cee442766.png"
            alt="male runner"
            className="absolute top-0 left-0 w-full h-full object-contain object-left-center"
            style={{
              clipPath: 'inset(0 50% 0 0)',
              filter: 'drop-shadow(0px 28px 40px rgba(0,0,0,0.75)) drop-shadow(0px 12px 18px rgba(0,0,0,0.6))'
            }}
          />
        </div>
      </motion.div>

      {/* Female Runner - Right Side - Animated from right */}
      <motion.div 
        className="absolute right-[20%] top-[28%] w-[650px] h-[650px] z-20"
        initial={{ x: 500, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1, ease: "easeOut" }}
      >
        {/* Ground shadow */}
        <motion.div 
          className="absolute bottom-8 left-[25%] w-[50%] h-16 bg-black/90 rounded-full blur-3xl"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        ></motion.div>
        
        <div className="relative w-full h-full">
          <img
            src="/assets/5fc68dbba94b9f08e7883325e131a45cee442766.png"
            alt="female runner"
            className="absolute bottom-0 right-0 w-full h-full object-contain object-right-bottom brightness-105"
            style={{
              clipPath: 'inset(0 0 0 50%)',
              filter: 'drop-shadow(0px 30px 45px rgba(0,0,0,0.85)) drop-shadow(0px 15px 25px rgba(0,0,0,0.7))'
            }}
          />
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-30 max-w-7xl mx-auto px-6 lg:px-12 w-full py-24">
        <div className="max-w-4xl">
          {/* Top Badge - Animated from top */}
          <motion.div 
            className="inline-flex items-center gap-3 bg-[#ff6b35] px-8 py-3 mb-10 shadow-[8px_8px_0px_rgba(0,0,0,1)] border-4 border-black hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] transition-all cursor-pointer"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
            <span className="text-black uppercase tracking-[0.3em]">SEOUL URBAN CREW</span>
          </motion.div>

          {/* Main Title - Brutalist Style - Animated from left */}
          <motion.h1 
            className="mb-8 leading-[0.85] relative"
            style={{ fontSize: 'clamp(4.5rem, 13vw, 10rem)' }}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.span 
              className="block text-white drop-shadow-[8px_8px_0px_rgba(0,0,0,0.9)]"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              URBAN
            </motion.span>
            <motion.span 
              className="block text-[#ff6b35] drop-shadow-[8px_8px_0px_rgba(0,0,0,0.95)] [-webkit-text-stroke:2px_black]"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              RUNNERS
            </motion.span>
          </motion.h1>

          {/* Accent Divider - Animated */}
          <motion.div 
            className="flex items-center gap-4 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <motion.div 
              className="h-2 bg-[#ff6b35] shadow-[0_0_15px_rgba(255,107,53,0.6)]"
              initial={{ width: 0 }}
              animate={{ width: 128 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            ></motion.div>
            <motion.div 
              className="h-2 bg-white/60"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 0.6, delay: 1.3 }}
            ></motion.div>
            <motion.div 
              className="h-2 bg-white/40"
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            ></motion.div>
          </motion.div>

          {/* Feature Lines - Sequential animation */}
          <div className="space-y-5 mb-16">
            {[
              { text: 'CONCRETE JUNGLE', delay: 1.3 },
              { text: 'LIMITLESS SPEED', delay: 1.5 },
              { text: 'RAW ENERGY', delay: 1.7 }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="flex items-center gap-6 group"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: item.delay }}
              >
                <div className="w-1.5 h-10 bg-[#ff6b35] group-hover:h-14 transition-all"></div>
                <h3 className="text-white uppercase tracking-[0.25em] drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)]">
                  {item.text}
                </h3>
              </motion.div>
            ))}
          </div>

          {/* Korean Description Box - Animated from bottom */}
          <motion.div 
            className="mb-16 max-w-2xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.8 }}
          >
            <div className="relative bg-black/70 backdrop-blur-md p-8 border-l-8 border-[#ff6b35] shadow-[12px_12px_30px_rgba(0,0,0,0.6)]">
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-[#ff6b35]"></div>
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-white/30"></div>
              
              <p className="text-white text-lg leading-relaxed mb-3">
                도시를 달리는 자유. 콘크리트 위에서 함께 만드는 러닝 커뮤니티.
              </p>
              <p className="text-[#ff6b35] tracking-wide">
                매일 새벽, 우리는 도시의 리듬에 맞춰 달립니다.
              </p>
            </div>
          </motion.div>

          {/* CTA Buttons - Animated from bottom */}
          <motion.div 
            className="flex flex-wrap gap-7 mb-24"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 2 }}
          >
            <motion.button 
              onClick={onJoinClick}
              className="group relative bg-[#ff6b35] hover:bg-[#ff8554] text-black px-16 py-7 transition-all duration-300 uppercase tracking-[0.25em] border-4 border-black shadow-[12px_12px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:translate-x-[6px] hover:translate-y-[6px] flex items-center gap-4 overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Animated background sweep */}
              <motion.div 
                className="absolute inset-0 bg-black/20"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.5 }}
              ></motion.div>
              <span className="relative z-10">크루 가입</span>
              <motion.div
                className="relative z-10"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
              >
                <ArrowRight className="w-7 h-7" strokeWidth={3} />
              </motion.div>
            </motion.button>
            
            <motion.button 
              className="relative bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-16 py-7 transition-all duration-300 uppercase tracking-[0.25em] border-4 border-white/80 shadow-[12px_12px_0px_rgba(255,107,53,0.5)] hover:shadow-[6px_6px_0px_rgba(255,107,53,0.7)] hover:translate-x-[6px] hover:translate-y-[6px] overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Animated border effect */}
              <motion.div
                className="absolute inset-0 border-4 border-[#ff6b35]"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              ></motion.div>
              <span className="relative z-10">스케줄 보기</span>
            </motion.button>
          </motion.div>

          {/* Stats Grid - Sequential animation from bottom */}
          <motion.div 
            className="grid grid-cols-3 gap-7 max-w-3xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 2.2 }}
          >
            {[
              { number: '500+', label: '러너', delay: 2.3 },
              { number: '24', label: '루트', delay: 2.4 },
              { number: '12/주', label: '세션', delay: 2.5 }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="relative bg-black/85 backdrop-blur-md p-9 border-4 border-[#ff6b35] overflow-hidden group hover:bg-black/95 transition-all cursor-pointer"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: stat.delay }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                {/* Animated fill bar */}
                <div className="absolute top-0 left-0 w-3 h-full bg-[#ff6b35] group-hover:w-full transition-all duration-700 ease-out -z-10"></div>
                
                {/* Top corner decoration */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#ff6b35] opacity-50"></div>
                
                <div className="relative z-10">
                  <div className="text-[#ff6b35] group-hover:text-white transition-colors duration-500 mb-2 text-4xl" style={{ fontVariantNumeric: 'tabular-nums' }}>
                    {stat.number}
                  </div>
                  <div className="text-white/90 uppercase tracking-widest text-xs">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Atmospheric Light Effects - Animated */}
      <motion.div 
        className="absolute right-[15%] top-[25%] w-[500px] h-[500px] bg-[#ff6b35]/8 blur-[120px] rounded-full z-5"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
      ></motion.div>
      <motion.div 
        className="absolute left-[5%] bottom-[15%] w-[400px] h-[400px] bg-black/40 blur-[100px] rounded-full z-5"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 1.2 }}
      ></motion.div>
      
      {/* Gritty Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none z-40" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 500 500' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='5' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`
        }}>
      </div>
    </section>
  );
}