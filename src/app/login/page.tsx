'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
    // TODO: 실제 로그인 로직
    router.push('/dashboard');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
          src="/screens/login.png"
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
          src="/assets/svg/login-ui.svg"
          alt="Login form UI"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* 레이어 3: 실제 입력 가능한 로그인 폼 */}
      <div className="relative z-50 min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="w-full max-w-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* USERNAME */}
            <input
              type="text"
              name="username"
              placeholder="USERNAME"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-6 py-5 bg-white/90 border-4 border-black text-black font-bold text-lg placeholder-gray-500 focus:outline-none focus:bg-white focus:ring-4 focus:ring-orange-500 transition-all"
              required
            />

            {/* PASSWORD */}
            <input
              type="password"
              name="password"
              placeholder="PASSWORD"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-6 py-5 bg-white/90 border-4 border-black text-black font-bold text-lg placeholder-gray-500 focus:outline-none focus:bg-white focus:ring-4 focus:ring-orange-500 transition-all"
              required
            />

            {/* LOGIN 버튼 */}
            <button
              type="submit"
              className="w-full px-12 py-6 bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-black font-black text-2xl uppercase border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] active:translate-x-[8px] active:translate-y-[8px] transition-all duration-100 cursor-pointer"
            >
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
