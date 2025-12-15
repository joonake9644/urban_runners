'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
    router.push('/dashboard');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black flex items-center justify-center">
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

      <div className="relative z-10 w-full max-w-2xl px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Title */}
          <div className="mb-12 text-center">
            <div className="relative inline-block">
              <h1
                className="text-8xl md:text-9xl font-black text-black"
                style={{
                  fontFamily: 'Impact, Haettenschweiler, "Franklin Gothic Bold", sans-serif',
                  textShadow: '4px 4px 0px rgba(0,0,0,0.2)'
                }}
              >
                LOGIN
              </h1>
              <div className="absolute -bottom-2 left-0 right-0 h-2 bg-[#DF650C]" />
            </div>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 origin-center inline-block"
            >
              <div className="bg-black/80 px-6 py-2 border-4 border-black">
                <p className="text-lg font-black text-[#DF650C]" style={{ fontFamily: 'Courier New, monospace' }}>
                  ACCESS SYSTEM
                </p>
              </div>
            </motion.div>
          </div>

          {/* Form Card */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white/95 border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-8 md:p-12"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* USERNAME */}
              <div>
                <label className="block text-sm font-black text-black mb-3 tracking-widest" style={{ fontFamily: 'Courier New, monospace' }}>
                  USERNAME
                </label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full px-6 py-5 bg-white border-4 border-black text-black font-bold text-xl focus:outline-none focus:border-[#DF650C] focus:shadow-[4px_4px_0px_0px_#DF650C] transition-all"
                  style={{ fontFamily: 'Impact, Haettenschweiler, "Franklin Gothic Bold", sans-serif' }}
                  required
                  autoComplete="username"
                />
              </div>

              {/* PASSWORD */}
              <div>
                <label className="block text-sm font-black text-black mb-3 tracking-widest" style={{ fontFamily: 'Courier New, monospace' }}>
                  PASSWORD
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-6 py-5 bg-white border-4 border-black text-black font-bold text-xl focus:outline-none focus:border-[#DF650C] focus:shadow-[4px_4px_0px_0px_#DF650C] transition-all"
                  style={{ fontFamily: 'Impact, Haettenschweiler, "Franklin Gothic Bold", sans-serif' }}
                  required
                  autoComplete="current-password"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <motion.button
                  type="submit"
                  whileHover={{ x: 4, y: -4 }}
                  whileTap={{ x: 8, y: -8 }}
                  className="w-full group"
                >
                  <div className="relative bg-[#DF650C] px-12 py-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all group-hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                    <p className="text-3xl md:text-4xl font-black text-black tracking-wider" style={{ fontFamily: 'Impact, Haettenschweiler, "Franklin Gothic Bold", sans-serif' }}>
                      ENTER
                    </p>
                    <div className="absolute -top-1 -left-1 w-3 h-3 bg-black" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-black" />
                    <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-black" />
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-black" />
                  </div>
                </motion.button>
              </div>

              {/* Links */}
              <div className="pt-4 flex justify-between items-center border-t-4 border-black/10">
                <Link href="/join" className="text-sm font-black text-black/60 hover:text-[#DF650C] transition-colors" style={{ fontFamily: 'Courier New, monospace' }}>
                  CREATE ACCOUNT →
                </Link>
                <button type="button" className="text-sm font-black text-black/60 hover:text-[#DF650C] transition-colors" style={{ fontFamily: 'Courier New, monospace' }}>
                  FORGOT PASSWORD?
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
