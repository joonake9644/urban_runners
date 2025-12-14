'use client';

import Image from 'next/image';

export default function JoinPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* 전체 배경: joincrew.png */}
      <div className="absolute inset-0">
        <Image
          src="/screens/joincrew.png"
          alt="Join Crew - Concrete background"
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
