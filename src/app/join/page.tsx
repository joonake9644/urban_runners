'use client';

import Image from 'next/image';
import { useState } from 'react';

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
      {/* 레이어 1: 콘크리트 배경 */}
      <div className="absolute inset-0">
        <Image
          src="/screens/joincrew.png"
          alt="Concrete background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* 레이어 2: UI 오버레이 SVG */}
      <div className="absolute inset-0">
        <Image
          src="/assets/svg/joincrew-ui.svg"
          alt="Join form UI"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* 레이어 3: 실제 입력 가능한 폼 */}
      <div className="relative z-50 min-h-screen pt-32 pb-20 flex items-center justify-center px-4">
        <div className="w-full max-w-4xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* NAME */}
              <input
                type="text"
                name="name"
                placeholder="NAME"
                value={formData.name}
                onChange={handleChange}
                className="px-6 py-5 bg-white/90 border-4 border-black text-black font-bold text-lg placeholder-gray-500 focus:outline-none focus:bg-white focus:ring-4 focus:ring-orange-500 transition-all"
                required
              />

              {/* EMAIL */}
              <input
                type="email"
                name="email"
                placeholder="EMAIL"
                value={formData.email}
                onChange={handleChange}
                className="px-6 py-5 bg-white/90 border-4 border-black text-black font-bold text-lg placeholder-gray-500 focus:outline-none focus:bg-white focus:ring-4 focus:ring-orange-500 transition-all"
                required
              />

              {/* PASSWORD */}
              <input
                type="password"
                name="password"
                placeholder="PASSWORD"
                value={formData.password}
                onChange={handleChange}
                className="px-6 py-5 bg-white/90 border-4 border-black text-black font-bold text-lg placeholder-gray-500 focus:outline-none focus:bg-white focus:ring-4 focus:ring-orange-500 transition-all"
                required
              />

              {/* RUNNING LEVEL */}
              <select
                name="runningLevel"
                value={formData.runningLevel}
                onChange={handleChange}
                className="px-6 py-5 bg-white/90 border-4 border-black text-black font-bold text-lg focus:outline-none focus:bg-white focus:ring-4 focus:ring-orange-500 cursor-pointer transition-all"
                required
              >
                <option value="">RUNNING LEVEL</option>
                <option value="beginner">BEGINNER</option>
                <option value="intermediate">INTERMEDIATE</option>
                <option value="advanced">ADVANCED</option>
                <option value="elite">ELITE</option>
              </select>
            </div>

            {/* CREATE ACCOUNT 버튼 */}
            <div className="flex justify-center mt-10">
              <button
                type="submit"
                className="group relative px-20 md:px-32 py-8 bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-black font-black text-2xl uppercase border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] active:translate-x-[8px] active:translate-y-[8px] transition-all duration-100 cursor-pointer"
              >
                CREATE ACCOUNT
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
