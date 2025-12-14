'use client';

import Image from 'next/image';

export default function SchedulePage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* 전체 배경: schedule.png */}
      <div className="absolute inset-0">
        <Image
          src="/screens/schedule.png"
          alt="Schedule - Concrete background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black/10" aria-hidden />

      {/* 벡터 오버레이 레이어 */}
      <div className="relative z-10 flex min-h-screen items-center justify-center">
        {/* 콘텐츠는 배경 이미지에 포함되어 있음 */}
      </div>
    </main>
  );
}
