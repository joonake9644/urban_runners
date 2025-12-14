'use client';

import Image from 'next/image';
import { Activity, Flame, Sparkles } from 'lucide-react';

export default function HomePage() {

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* 전체 배경: 스크린샷 PNG 유지 */}
      <div className="absolute inset-0">
        <Image
          src="/screens/home.png"
          alt="Urban Runners homepage full design"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black/15" aria-hidden />

      {/* 벡터 레이어: 로고/아이콘/일러스트 역할 */}
      <div className="relative z-10 flex min-h-screen flex-col justify-between px-6 py-8 md:px-10 lg:px-16">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <svg
              aria-hidden
              viewBox="0 0 120 40"
              className="h-10 w-auto"
              role="img"
            >
              <rect x="0" y="0" width="120" height="40" rx="8" fill="#0D0D0D" />
              <path
                d="M16 30 L10 10 L18 10 L22 22 L26 10 L34 10 L28 30 Z"
                fill="#F9581E"
              />
              <text
                x="42"
                y="26"
                fill="#F2F2F2"
                fontFamily="Anton, sans-serif"
                fontSize="16"
                letterSpacing="1"
              >
                URBAN RUN
              </text>
            </svg>
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Vector mark + PNG bg
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase text-white">
              svg
            </span>
            <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase text-white">
              png
            </span>
            <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase text-white">
              match
            </span>
          </div>
        </header>

        <div className="flex flex-col gap-8 text-white drop-shadow-[0_10px_25px_rgba(0,0,0,0.45)] md:max-w-xl">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur">
              <Activity className="h-6 w-6 text-orange-300" />
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-200">
              Precision vector overlay
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur">
              <Flame className="h-6 w-6 text-orange-400" />
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-100">
              Background locked to PNG
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur">
              <Sparkles className="h-6 w-6 text-orange-200" />
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-100">
              Icons/illustrations remain SVG
            </p>
          </div>
        </div>

        <footer className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.16em] text-white/80">
          <span className="rounded border border-white/20 px-3 py-1">png-bg</span>
          <span className="rounded border border-white/20 px-3 py-1">svg-logo</span>
          <span className="rounded border border-white/20 px-3 py-1">svg-icon</span>
          <span className="rounded border border-white/20 px-3 py-1">overlay</span>
        </footer>
      </div>
    </main>
  );
}
