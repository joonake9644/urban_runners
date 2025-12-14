'use client';

import Image from 'next/image';

export default function DashboardPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* 레이어 1: 콘크리트 배경 */}
      <div className="absolute inset-0">
        <Image
          src="/screens/dashboard.png"
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
          src="/assets/svg/dashboard-ui.svg"
          alt="Dashboard UI"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* 레이어 3: 인터랙티브 요소 (필요시 추가) */}
      <div className="relative z-50 min-h-screen pt-20">
        {/* 추가 인터랙티브 요소는 여기에 */}
      </div>
    </main>
  );
}
