'use client';

import { ConcreteTexture } from '@/components/brutal/ConcreteTexture';
import { RunnerSilhouette } from '@/components/brutal/RunnerSilhouette';
import { StatCard } from '@/components/brutal/BrutalCard';
import { BrutalButton } from '@/components/brutal/BrutalButton';

export default function DashboardPage() {
  // TODO: 실제 사용자 데이터로 대체
  const stats = {
    totalRuns: 24,
    thisWeek: '5KM',
    bestTime: '22:15',
    rank: '#12',
  };

  return (
    <div className="relative min-h-screen bg-brutal-gray overflow-hidden">
      {/* 콘크리트 텍스처 배경 */}
      <ConcreteTexture />

      {/* 메인 콘텐츠 */}
      <div className="relative z-10 flex flex-col items-start justify-center min-h-screen px-6 md:px-12 lg:px-16 py-12">
        {/* 메인 타이틀 */}
        <h1 className="font-brutal text-[4rem] md:text-[8rem] lg:text-[10rem] leading-none text-black uppercase font-black mb-2">
          DASHBOARD
        </h1>

        <p className="font-brutal text-2xl md:text-4xl font-black text-black uppercase mb-12">
          MEMBER STATUS
        </p>

        {/* 통계 카드들 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-5xl mb-8">
          {/* TOTAL RUNS - 오렌지 */}
          <StatCard label="TOTAL RUNS" value={stats.totalRuns} color="orange" />

          {/* THIS WEEK - 녹색 */}
          <StatCard label="THIS WEEK" value={stats.thisWeek} color="green" />

          {/* BEST TIME - 파란색 */}
          <StatCard label="BEST TIME" value={stats.bestTime} color="blue" />

          {/* RANK - 빨간색 */}
          <StatCard label="RANK" value={stats.rank} color="red" />
        </div>

        {/* NEXT RUN 버튼 */}
        <div className="mt-8">
          <BrutalButton variant="primary" size="xl" href="/schedule">
            NEXT RUN
          </BrutalButton>
        </div>

        {/* 추가 정보 (선택사항) */}
        <div className="mt-12 max-w-2xl">
          <p className="font-brutal text-lg md:text-xl font-black text-black uppercase leading-relaxed">
            KEEP PUSHING. KEEP RUNNING.
            <br />
            YOUR NEXT GOAL IS WAITING.
          </p>
        </div>
      </div>

      {/* 러너 실루엣 애니메이션 */}
      <RunnerSilhouette />
    </div>
  );
}
