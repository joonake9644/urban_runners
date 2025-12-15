'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const facts = [
    { label: 'FOUNDED', value: '2024', desc: 'SEOUL, KOREA' },
    { label: 'MEMBERS', value: '247+', desc: 'ACTIVE RUNNERS' },
    { label: 'DISTANCE', value: '15.2K', desc: 'TOTAL KILOMETERS' },
    { label: 'ROUTES', value: '38', desc: 'URBAN PATHS' },
  ];

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/new/home1.webp"
          alt="Concrete"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')] opacity-40" />
      </div>

      <div className="relative z-10 min-h-screen px-6 md:px-12 lg:px-16 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Title */}
          <div className="mb-16">
            <div className="relative inline-block">
              <div className="absolute -left-6 top-0 w-3 h-full bg-[#DF650C]" />
              <h1
                className="text-7xl md:text-8xl lg:text-9xl font-black text-black leading-tight"
                style={{
                  fontFamily: 'Impact, Haettenschweiler, "Franklin Gothic Bold", sans-serif',
                  textShadow: '4px 4px 0px rgba(0,0,0,0.2)'
                }}
              >
                ABOUT
              </h1>
            </div>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 origin-left"
            >
              <div className="bg-[#DF650C] px-6 py-3 border-4 border-black inline-block transform -skew-x-6">
                <p className="text-xl md:text-2xl font-black text-black transform skew-x-6" style={{ fontFamily: 'Courier New, monospace' }}>
                  WHO WE ARE
                </p>
              </div>
            </motion.div>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            {/* Mission Statement */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/95 border-4 border-black p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-[#DF650C] border-4 border-black flex items-center justify-center flex-shrink-0">
                  <p className="text-3xl font-black text-black" style={{ fontFamily: 'Impact, Haettenschweiler, "Franklin Gothic Bold", sans-serif' }}>
                    01
                  </p>
                </div>
                <div>
                  <h2 className="text-4xl md:text-5xl font-black text-black mb-4" style={{ fontFamily: 'Impact, Haettenschweiler, "Franklin Gothic Bold", sans-serif' }}>
                    URBAN RUNNERS COLLECTIVE
                  </h2>
                  <p className="text-xl md:text-2xl text-black leading-relaxed font-bold">
                    We run on concrete. We chase speed through city streets. Every mile is earned on raw pavement. No limits, no excuses—just pure urban running.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Quick Facts Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {facts.map((fact, index) => (
                  <motion.div
                    key={fact.label}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="bg-black/90 border-4 border-black p-6 text-center"
                  >
                    <p className="text-xs text-gray-400 font-black tracking-widest mb-2" style={{ fontFamily: 'Courier New, monospace' }}>
                      {fact.label}
                    </p>
                    <p className="text-4xl md:text-5xl font-black text-[#DF650C] mb-1" style={{ fontFamily: 'Impact, Haettenschweiler, "Franklin Gothic Bold", sans-serif' }}>
                      {fact.value}
                    </p>
                    <p className="text-xs text-gray-500 font-bold" style={{ fontFamily: 'Courier New, monospace' }}>
                      {fact.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Values */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-[#DF650C] border-4 border-black p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            >
              <h3 className="text-3xl md:text-4xl font-black text-black mb-6" style={{ fontFamily: 'Impact, Haettenschweiler, "Franklin Gothic Bold", sans-serif' }}>
                OUR VALUES
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <p className="text-6xl font-black text-black mb-2" style={{ fontFamily: 'Impact, Haettenschweiler, "Franklin Gothic Bold", sans-serif' }}>
                    01
                  </p>
                  <p className="text-xl font-black text-black">
                    CONCRETE FIRST
                  </p>
                </div>
                <div>
                  <p className="text-6xl font-black text-black mb-2" style={{ fontFamily: 'Impact, Haettenschweiler, "Franklin Gothic Bold", sans-serif' }}>
                    02
                  </p>
                  <p className="text-xl font-black text-black">
                    NO LIMITS
                  </p>
                </div>
                <div>
                  <p className="text-6xl font-black text-black mb-2" style={{ fontFamily: 'Impact, Haettenschweiler, "Franklin Gothic Bold", sans-serif' }}>
                    03
                  </p>
                  <p className="text-xl font-black text-black">
                    RAW SPEED
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
