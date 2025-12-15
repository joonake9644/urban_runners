'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HomePage() {
  const menuItems = [
    { href: '/join', label: 'JOIN CREW', sublabel: '01', color: '#DF650C' },
    { href: '/about', label: 'ADVISORY', sublabel: '02', color: '#84592A' },
    { href: '/about#facts', label: 'QUICK FACTS', sublabel: '03', color: '#84592A' },
    { href: '/dashboard', label: 'STATISTICS', sublabel: '04', color: '#84592A' },
    { href: '#contact', label: 'CONTACT US', sublabel: '05', color: '#84592A' },
  ];

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background Layer */}
      <div className="absolute inset-0">
        <Image
          src="/new/home1.webp"
          alt="Concrete"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Grain texture overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')] opacity-40" />
        {/* Vignette */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/60" />
      </div>

      {/* Grid Overlay - Industrial aesthetic */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col">

        {/* Top Right - NO LIMITS Badge */}
        <motion.div
          initial={{ x: 100, opacity: 0, rotate: 0 }}
          animate={{ x: 0, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute top-8 right-8 md:top-12 md:right-16"
        >
          <motion.div
            animate={{
              rotate: [0, 2, 0, -2, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative"
          >
            <div className="relative bg-[#DF650C] px-6 py-3 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="absolute -top-1 -left-1 w-3 h-3 bg-black" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-black" />
              <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-black" />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-black" />
              <p className="font-black text-2xl md:text-3xl tracking-[0.2em] text-black" style={{ fontFamily: 'Impact, Haettenschweiler, "Franklin Gothic Bold", sans-serif' }}>
                NO LIMITS
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Hero Title Section - Left Aligned */}
        <div className="flex-1 flex items-center px-6 md:px-12 lg:px-16 pt-32 pb-20">
          <div className="max-w-7xl w-full">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* Main Title */}
              <div className="relative mb-8">
                <motion.h1
                  className="text-[15vw] md:text-[12vw] lg:text-[180px] leading-[0.85] font-black text-black tracking-tight"
                  style={{
                    fontFamily: 'Impact, Haettenschweiler, "Franklin Gothic Bold", sans-serif',
                    textShadow: '4px 4px 0px rgba(0,0,0,0.2), 8px 8px 0px rgba(0,0,0,0.1)'
                  }}
                >
                  URBAN
                </motion.h1>
                <div className="absolute -left-4 top-0 w-2 h-full bg-[#DF650C]" />
              </div>

              <div className="relative mb-12">
                <motion.h1
                  className="text-[15vw] md:text-[12vw] lg:text-[180px] leading-[0.85] font-black text-black tracking-tight"
                  style={{
                    fontFamily: 'Impact, Haettenschweiler, "Franklin Gothic Bold", sans-serif',
                    textShadow: '4px 4px 0px rgba(0,0,0,0.2), 8px 8px 0px rgba(0,0,0,0.1)'
                  }}
                >
                  RUNNERS
                </motion.h1>
                <div className="absolute -left-4 top-0 w-2 h-full bg-[#DF650C]" />
              </div>

              {/* Taglines with Orange Bars */}
              <div className="space-y-4 mb-16">
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="relative inline-block origin-left"
                >
                  <div className="bg-[#DF650C] px-8 py-4 border-4 border-black transform -skew-x-6">
                    <p className="text-3xl md:text-5xl lg:text-6xl font-black text-black tracking-wider transform skew-x-6" style={{ fontFamily: 'Impact, Haettenschweiler, "Franklin Gothic Bold", sans-serif' }}>
                      CONCRETE MILES
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.75 }}
                  className="relative inline-block origin-left ml-12"
                >
                  <div className="bg-[#DF650C] px-8 py-4 border-4 border-black transform -skew-x-6">
                    <p className="text-3xl md:text-5xl lg:text-6xl font-black text-black tracking-wider transform skew-x-6" style={{ fontFamily: 'Impact, Haettenschweiler, "Franklin Gothic Bold", sans-serif' }}>
                      RAW SPEED
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Menu Navigation - Brutalist Industrial Style */}
              <div className="space-y-3">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.9 + index * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                  >
                    <Link href={item.href} className="group block">
                      <div className="relative flex items-center gap-4 overflow-hidden">
                        {/* Number Badge */}
                        <div
                          className="w-12 h-12 border-4 border-black flex items-center justify-center font-black text-xl bg-white transition-colors duration-200 group-hover:bg-[#DF650C]"
                          style={{ fontFamily: 'Courier New, monospace' }}
                        >
                          {item.sublabel}
                        </div>

                        {/* Button */}
                        <div className="relative flex-1">
                          <motion.div
                            whileHover={{ x: 8, y: -4 }}
                            whileTap={{ x: 4, y: -2 }}
                            className="relative"
                          >
                            <div
                              className="relative px-8 py-4 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 group-hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]"
                              style={{ backgroundColor: item.color }}
                            >
                              <p className="text-2xl md:text-3xl font-black text-black tracking-wider" style={{ fontFamily: 'Impact, Haettenschweiler, "Franklin Gothic Bold", sans-serif' }}>
                                {item.label}
                              </p>

                              {/* Hover Arrow */}
                              <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileHover={{ opacity: 1, x: 0 }}
                                className="absolute right-6 top-1/2 -translate-y-1/2"
                              >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-black">
                                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="3" strokeLinecap="square"/>
                                </svg>
                              </motion.div>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Stats Bar - Technical Details */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="relative border-t-4 border-black bg-black/80 backdrop-blur-sm"
        >
          <div className="px-6 md:px-12 lg:px-16 py-6">
            <div className="grid grid-cols-3 gap-8 max-w-7xl">
              <div>
                <p className="text-xs text-gray-400 font-bold tracking-widest mb-1" style={{ fontFamily: 'Courier New, monospace' }}>
                  ACTIVE RUNNERS
                </p>
                <p className="text-3xl md:text-4xl font-black text-[#DF650C]" style={{ fontFamily: 'Impact, Haettenschweiler, "Franklin Gothic Bold", sans-serif' }}>
                  247+
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-bold tracking-widest mb-1" style={{ fontFamily: 'Courier New, monospace' }}>
                  TOTAL DISTANCE
                </p>
                <p className="text-3xl md:text-4xl font-black text-[#DF650C]" style={{ fontFamily: 'Impact, Haettenschweiler, "Franklin Gothic Bold", sans-serif' }}>
                  15.2K KM
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-bold tracking-widest mb-1" style={{ fontFamily: 'Courier New, monospace' }}>
                  EST. 2024
                </p>
                <p className="text-3xl md:text-4xl font-black text-[#DF650C]" style={{ fontFamily: 'Impact, Haettenschweiler, "Franklin Gothic Bold", sans-serif' }}>
                  SEOUL
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
