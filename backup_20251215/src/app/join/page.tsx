'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function JoinPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    runningLevel: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Welcome to Urban Runners!');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
          className="max-w-4xl mx-auto"
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
                JOIN
              </h1>
              <h1
                className="text-7xl md:text-8xl lg:text-9xl font-black text-black leading-tight"
                style={{
                  fontFamily: 'Impact, Haettenschweiler, "Franklin Gothic Bold", sans-serif',
                  textShadow: '4px 4px 0px rgba(0,0,0,0.2)'
                }}
              >
                CREW
              </h1>
            </div>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 origin-left"
            >
              <div className="bg-[#DF650C] px-6 py-3 border-4 border-black inline-block">
                <p className="text-xl md:text-2xl font-black text-black" style={{ fontFamily: 'Courier New, monospace' }}>
                  REGISTRATION FORM / 01
                </p>
              </div>
            </motion.div>
          </div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* NAME */}
              <div className="relative">
                <label className="block text-sm font-black text-black mb-2 tracking-widest" style={{ fontFamily: 'Courier New, monospace' }}>
                  NAME
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-6 py-5 bg-white/95 border-4 border-black text-black font-bold text-xl focus:outline-none focus:border-[#DF650C] focus:shadow-[4px_4px_0px_0px_#DF650C] transition-all"
                  style={{ fontFamily: 'Impact, Haettenschweiler, "Franklin Gothic Bold", sans-serif' }}
                  required
                />
              </div>

              {/* EMAIL */}
              <div className="relative">
                <label className="block text-sm font-black text-black mb-2 tracking-widest" style={{ fontFamily: 'Courier New, monospace' }}>
                  EMAIL
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-6 py-5 bg-white/95 border-4 border-black text-black font-bold text-xl focus:outline-none focus:border-[#DF650C] focus:shadow-[4px_4px_0px_0px_#DF650C] transition-all"
                  style={{ fontFamily: 'Impact, Haettenschweiler, "Franklin Gothic Bold", sans-serif' }}
                  required
                />
              </div>

              {/* PASSWORD */}
              <div className="relative">
                <label className="block text-sm font-black text-black mb-2 tracking-widest" style={{ fontFamily: 'Courier New, monospace' }}>
                  PASSWORD
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-6 py-5 bg-white/95 border-4 border-black text-black font-bold text-xl focus:outline-none focus:border-[#DF650C] focus:shadow-[4px_4px_0px_0px_#DF650C] transition-all"
                  style={{ fontFamily: 'Impact, Haettenschweiler, "Franklin Gothic Bold", sans-serif' }}
                  required
                />
              </div>

              {/* RUNNING LEVEL */}
              <div className="relative">
                <label className="block text-sm font-black text-black mb-2 tracking-widest" style={{ fontFamily: 'Courier New, monospace' }}>
                  RUNNING LEVEL
                </label>
                <select
                  name="runningLevel"
                  value={formData.runningLevel}
                  onChange={handleChange}
                  className="w-full px-6 py-5 bg-white/95 border-4 border-black text-black font-bold text-xl focus:outline-none focus:border-[#DF650C] focus:shadow-[4px_4px_0px_0px_#DF650C] cursor-pointer transition-all appearance-none"
                  style={{ fontFamily: 'Impact, Haettenschweiler, "Franklin Gothic Bold", sans-serif' }}
                  required
                >
                  <option value="">SELECT LEVEL</option>
                  <option value="beginner">BEGINNER</option>
                  <option value="intermediate">INTERMEDIATE</option>
                  <option value="advanced">ADVANCED</option>
                  <option value="elite">ELITE</option>
                </select>
                <div className="absolute right-6 top-[52px] pointer-events-none">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M5 7L10 12L15 7" stroke="black" strokeWidth="3" strokeLinecap="square"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-8">
              <motion.button
                type="submit"
                whileHover={{ x: 4, y: -4 }}
                whileTap={{ x: 8, y: -8 }}
                className="group relative w-full md:w-auto"
              >
                <div className="relative bg-[#DF650C] px-16 py-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all group-hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                  <p className="text-3xl md:text-4xl font-black text-black tracking-wider" style={{ fontFamily: 'Impact, Haettenschweiler, "Franklin Gothic Bold", sans-serif' }}>
                    CREATE ACCOUNT
                  </p>
                  <div className="absolute -top-1 -left-1 w-3 h-3 bg-black" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-black" />
                  <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-black" />
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-black" />
                </div>
              </motion.button>
            </div>

            {/* Additional Info */}
            <div className="pt-6 border-t-4 border-black/20">
              <p className="text-sm text-black/60 font-bold" style={{ fontFamily: 'Courier New, monospace' }}>
                BY JOINING, YOU AGREE TO RUN HARD, PUSH LIMITS, AND CHASE CONCRETE MILES.
              </p>
            </div>
          </motion.form>
        </motion.div>
      </div>
    </main>
  );
}
