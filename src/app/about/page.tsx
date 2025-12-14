'use client';

import { ConcreteTexture } from '@/components/brutal/ConcreteTexture';
import { RunnerSilhouette } from '@/components/brutal/RunnerSilhouette';

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-brutal-gray overflow-hidden">
      {/* 콘크리트 텍스처 배경 */}
      <ConcreteTexture />

      {/* 메인 콘텐츠 */}
      <div className="relative z-10 flex flex-col items-start justify-center min-h-screen px-6 md:px-12 lg:px-16 py-12">
        {/* 메인 타이틀 */}
        <h1 className="font-brutal text-[4rem] md:text-[8rem] lg:text-[10rem] leading-none text-black uppercase font-black mb-16">
          ABOUT
          <br />
          CREW
        </h1>

        {/* 정보 카드들 */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-8">
          {/* EST. 2020 */}
          <div className="bg-brutal-orange border-4 border-black shadow-brutal p-6 md:p-8">
            <p className="font-brutal text-3xl md:text-4xl font-black text-black uppercase">
              EST. 2020
            </p>
          </div>

          {/* 248 MEMBERS */}
          <div className="bg-brutal-orange border-4 border-black shadow-brutal p-6 md:p-8">
            <p className="font-brutal text-3xl md:text-4xl font-black text-black uppercase">
              248 MEMBERS
            </p>
          </div>

          {/* STEEL COMMITMENT */}
          <div className="bg-brutal-orange border-4 border-black shadow-brutal p-6 md:p-8">
            <p className="font-brutal text-3xl md:text-4xl font-black text-black uppercase">
              STEEL COMMITMENT
            </p>
          </div>
        </div>

        {/* 크루 소개 텍스트 */}
        <div className="max-w-3xl mt-8">
          <p className="font-brutal text-xl md:text-2xl font-black text-black uppercase leading-relaxed">
            WE RUN THE CONCRETE JUNGLE.
            <br />
            NO EXCUSES. NO LIMITS.
            <br />
            JUST PURE DETERMINATION.
          </p>
        </div>
      </div>

      {/* 러너 실루엣 애니메이션 */}
      <RunnerSilhouette />
    </div>
  );
}
