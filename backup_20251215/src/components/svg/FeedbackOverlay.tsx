'use client';

import type { SVGProps } from 'react';

export function FeedbackOverlay(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1920 1080"
      width="100%"
      height="100%"
      {...props}
    >
      <defs>
        <filter id="feedbackHardShadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="10" stdDeviation="4" floodColor="#000000" floodOpacity="0.35" />
        </filter>
        <filter id="feedbackEmbossText" x="-20%" y="-20%" width="140%" height="140%">
          <feOffset dx="-2" dy="-2" result="light" />
          <feOffset dx="2" dy="2" result="shadow" />
          <feGaussianBlur in="shadow" stdDeviation="2" />
          <feMerge>
            <feMergeNode in="light" />
            <feMergeNode in="shadow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="feedbackSuccessGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4EEA84" />
          <stop offset="100%" stopColor="#1E8F52" />
        </linearGradient>
      </defs>

      <g filter="url(#feedbackHardShadow)">
        <text
          x="120"
          y="210"
          fontFamily="Oswald, Impact, sans-serif"
          fontWeight={900}
          fontSize="120"
          fill="#111111"
        >
          MICRO
        </text>
        <text
          x="120"
          y="340"
          fontFamily="Oswald, Impact, sans-serif"
          fontWeight={900}
          fontSize="120"
          fill="#111111"
        >
          FEEDBACK
        </text>
      </g>

      <g transform="translate(300,460)" filter="url(#feedbackHardShadow)">
        <rect width="420" height="140" rx="10" ry="10" fill="#2FAE66" stroke="#0B3D1F" strokeWidth="8" />

        <g transform="translate(130,95)">
          <text x="3" y="3" fontFamily="Oswald, sans-serif" fontWeight={900} fontSize="64" fill="#0B3D1F">
            SUCCESS
          </text>
          <text x="0" y="0" fontFamily="Oswald, sans-serif" fontWeight={900} fontSize="64" fill="url(#feedbackSuccessGrad)">
            SUCCESS
          </text>
        </g>

        <path d="M40 78 L80 112 L150 30" fill="none" stroke="#0B3D1F" strokeWidth="18" strokeLinecap="round" />
      </g>

      <g filter="url(#feedbackHardShadow)">
        <text
          x="1180"
          y="260"
          fontFamily="Oswald, Impact, sans-serif"
          fontWeight={900}
          fontSize="120"
          fill="#111111"
        >
          SYSTEM
        </text>
        <text
          x="1180"
          y="390"
          fontFamily="Oswald, Impact, sans-serif"
          fontWeight={900}
          fontSize="120"
          fill="#111111"
        >
          RESPONSE
        </text>
      </g>

      <g transform="translate(1080,430)" filter="url(#feedbackHardShadow)">
        <rect width="320" height="190" rx="12" ry="12" fill="#C7C1B8" stroke="#6E6A63" strokeWidth="8" />

        <g filter="url(#feedbackEmbossText)">
          <text
            x="160"
            y="90"
            textAnchor="middle"
            fontFamily="Oswald, sans-serif"
            fontWeight={900}
            fontSize="42"
            fill="#4A463F"
          >
            PROCESS...
          </text>
        </g>

        <g transform="translate(70,125)">
          <circle cx="0" cy="0" r="6" fill="#3A372F" />
          <circle cx="30" cy="0" r="6" fill="#3A372F" />
          <circle cx="60" cy="0" r="6" fill="#3A372F" />
          <circle cx="90" cy="0" r="6" fill="#3A372F" />
          <circle cx="120" cy="0" r="6" fill="#3A372F" />
        </g>
      </g>

      <g transform="translate(1300,720)" filter="url(#feedbackEmbossText)">
        <text fontFamily="Oswald, Impact, sans-serif" fontWeight={900} fontSize="64" fill="#3A372F">
          NOTIFICATION
        </text>
      </g>
    </svg>
  );
}
