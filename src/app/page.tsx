'use client';

import { BrutalButton } from '@/components/brutal/BrutalButton';
import { ConcreteTexture } from '@/components/brutal/ConcreteTexture';
import { RunnerSilhouette } from '@/components/brutal/RunnerSilhouette';

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-brutal-gray overflow-hidden">
      {/* 콘크리트 텍스처 배경 */}
      <ConcreteTexture />

      {/* 메인 콘텐츠 */}
      <div className="relative z-10 flex flex-col items-start justify-center min-h-screen px-6 md:px-12 lg:px-16">
        {/* NO LIMITS - 우측 상단 */}
        <div className="absolute top-8 right-8 md:top-12 md:right-12">
          <p className="font-brutal text-2xl md:text-4xl font-black text-brutal-orange uppercase">
            NO LIMITS
          </p>
        </div>

        {/* URBAN RUNNERS 메인 타이틀 */}
        <h1 className="font-brutal text-[4rem] md:text-[8rem] lg:text-[12rem] leading-none text-black uppercase font-black mb-4">
          URBAN
          <br />
          RUNNERS
        </h1>

        {/* CONCRETE MILES / RAW SPEED */}
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 mb-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-1 bg-brutal-orange"></div>
            <span className="font-brutal text-xl md:text-2xl font-black text-black uppercase">
              CONCRETE MILES
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-1 bg-brutal-orange"></div>
            <span className="font-brutal text-xl md:text-2xl font-black text-black uppercase">
              RAW SPEED
            </span>
          </div>
        </div>

        {/* CTA 버튼들 */}
        <div className="flex flex-col gap-4 mt-12 w-full md:w-auto">
          <BrutalButton href="/join" variant="primary" size="lg" className="min-w-[200px]">
            JOIN CREW
          </BrutalButton>
          <BrutalButton href="/about" variant="primary" size="md" className="min-w-[200px]">
            ADVISORY
          </BrutalButton>
          <BrutalButton href="/about#facts" variant="primary" size="md" className="min-w-[200px]">
            QUICK FACTS
          </BrutalButton>
          <BrutalButton href="/dashboard" variant="primary" size="md" className="min-w-[200px]">
            STATISTICS
          </BrutalButton>
          <BrutalButton href="#contact" variant="primary" size="md" className="min-w-[200px]">
            CONTACT US
          </BrutalButton>
        </div>
      </div>

      {/* 러너 실루엣 애니메이션 */}
      <RunnerSilhouette />
    </div>
  );
}
