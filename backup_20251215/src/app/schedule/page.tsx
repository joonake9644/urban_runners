'use client';

import Image from 'next/image';

export default function SchedulePage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* 레이어 1: 깨끗한 콘크리트 배경 */}
      <div className="absolute inset-0">
        <Image
          src="/new/home1.webp"
          alt="Concrete background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* 레이어 2: 페이지 콘텐츠 */}
      <div className="relative z-50 min-h-screen pt-20 px-6 md:px-12 lg:px-16">
        <div className="pt-16">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-[#111111] tracking-wider drop-shadow-[0_10px_8px_rgba(0,0,0,0.35)]">
            SCHEDULE
          </h1>
          <div className="mt-8 max-w-4xl">
            <div className="bg-[#DF650C] px-8 py-4 mb-4">
              <h2 className="text-3xl md:text-4xl font-black text-[#111111]">RUN TIMES</h2>
            </div>
            <p className="text-2xl md:text-3xl font-bold text-[#111111] leading-relaxed drop-shadow-lg">
              Join us on the concrete. Every run counts.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
