'use client';

import { ConcreteTexture } from '@/components/brutal/ConcreteTexture';
import { RunnerSilhouette } from '@/components/brutal/RunnerSilhouette';

export default function SchedulePage() {
  return (
    <div className="relative min-h-screen bg-brutal-gray overflow-hidden">
      {/* 콘크리트 텍스처 배경 */}
      <ConcreteTexture />

      {/* 메인 콘텐츠 */}
      <div className="relative z-10 flex flex-col items-start justify-center min-h-screen px-6 md:px-12 lg:px-16 py-12">
        {/* WCHEDULE SCHEDULE 타이포 효과 */}
        <h1 className="font-brutal text-[4rem] md:text-[8rem] lg:text-[12rem] leading-none text-black uppercase font-black mb-8">
          WCHEDULE
          <br />
          SCHEDULE
        </h1>

        {/* 일정 그룹들 */}
        <div className="flex flex-col gap-8 w-full max-w-4xl">
          {/* MON-WED 그룹 */}
          <div className="flex flex-col gap-4">
            <div className="bg-brutal-orange border-4 border-black shadow-brutal p-6 md:p-8 inline-block self-start">
              <p className="font-brutal text-2xl md:text-4xl font-black text-black uppercase">
                MON-WED
              </p>
            </div>

            {/* MON-WED 일정 박스 */}
            <div className="bg-brutal-orange border-4 border-black shadow-brutal-lg p-8 md:p-12 relative">
              <div className="flex flex-col gap-4">
                <p className="font-brutal text-xl md:text-2xl font-black text-black uppercase">
                  MORNING RUN: 6:00 AM
                </p>
                <p className="font-brutal text-xl md:text-2xl font-black text-black uppercase">
                  EVENING RUN: 7:00 PM
                </p>
                <p className="font-brutal text-lg md:text-xl font-black text-black uppercase">
                  CAPACITY: 30 RUNNERS
                </p>
              </div>

              {/* 러너 실루엣 (박스 안) */}
              <div className="absolute bottom-4 right-4">
                <svg viewBox="0 0 64 64" fill="currentColor" className="w-16 h-16 md:w-20 md:h-20 text-black opacity-50">
                  <path d="M32 8c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm-8 16c-1.1 0-2 .9-2 2v12l-6 18h4l5-15v15h4V42l5 14h4l-6-18V26c0-1.1-.9-2-2-2h-6z" />
                </svg>
              </div>
            </div>
          </div>

          {/* THU-SAT 그룹 */}
          <div className="flex flex-col gap-4">
            <div className="bg-brutal-orange border-4 border-black shadow-brutal p-6 md:p-8 inline-block self-start">
              <p className="font-brutal text-2xl md:text-4xl font-black text-black uppercase">
                THU-SAT
              </p>
            </div>

            {/* THU-SAT 일정 정보 */}
            <div className="bg-white border-4 border-black shadow-brutal p-8">
              <div className="flex flex-col gap-4">
                <p className="font-brutal text-xl md:text-2xl font-black text-black uppercase">
                  LONG RUN: 7:00 AM
                </p>
                <p className="font-brutal text-xl md:text-2xl font-black text-black uppercase">
                  TRACK WORKOUT: 6:00 PM
                </p>
                <p className="font-brutal text-lg md:text-xl font-black text-black uppercase">
                  CAPACITY: 25 RUNNERS
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CONSISTENCY 메시지 */}
        <div className="mt-16">
          <h2 className="font-brutal text-4xl md:text-6xl lg:text-8xl font-black text-black uppercase">
            CONSISTENCY
          </h2>
        </div>
      </div>

      {/* 러너 실루엣 애니메이션 */}
      <RunnerSilhouette />
    </div>
  );
}
