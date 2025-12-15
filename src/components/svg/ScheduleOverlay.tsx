'use client';

import type { SVGProps } from 'react';

export function ScheduleOverlay(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2048"
      height="1143"
      viewBox="0 0 2048 1143"
      {...props}
    >
      <defs>
        <filter id="scheduleShadow" x="-300" y="-300" width="2648" height="1743" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#000000" floodOpacity="0.35" />
        </filter>
        <linearGradient id="scheduleOrangeGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ff7a1a" />
          <stop offset="1" stopColor="#d95a0a" />
        </linearGradient>
      </defs>

      <g id="titles" filter="url(#scheduleShadow)">
        <text
          x="90"
          y="350"
          fontFamily="Impact, Haettenschweiler, 'Arial Black', sans-serif"
          fontSize="190"
          fontWeight={900}
          fill="#0b0b0b"
        >
          SCHEDULE
        </text>
        <text
          x="90"
          y="545"
          fontFamily="Impact, Haettenschweiler, 'Arial Black', sans-serif"
          fontSize="190"
          fontWeight={900}
          fill="#0b0b0b"
        >
          SCHEDULE
        </text>
      </g>

      <g id="tags" filter="url(#scheduleShadow)">
        <rect x="860" y="155" rx="6" ry="6" width="190" height="54" fill="url(#scheduleOrangeGrad)" stroke="#0b0b0b" strokeWidth="6" />
        <text x="885" y="193" fontFamily="Arial Black, Arial, sans-serif" fontSize="34" fill="#0b0b0b">
          MONWED
        </text>

        <rect x="900" y="660" rx="6" ry="6" width="190" height="54" fill="url(#scheduleOrangeGrad)" stroke="#0b0b0b" strokeWidth="6" />
        <text x="925" y="698" fontFamily="Arial Black, Arial, sans-serif" fontSize="34" fill="#0b0b0b">
          THUSAT
        </text>
      </g>

      <g id="consistency" filter="url(#scheduleShadow)">
        <text
          x="90"
          y="905"
          fontFamily="Impact, Haettenschweiler, 'Arial Black', sans-serif"
          fontSize="170"
          fontWeight={900}
          fill="#0b0b0b"
        >
          CONSISTENCY
        </text>
      </g>

      <g id="orangeBox" filter="url(#scheduleShadow)">
        <rect x="1140" y="315" width="320" height="260" fill="url(#scheduleOrangeGrad)" stroke="#0b0b0b" strokeWidth="10" />
        <rect x="1170" y="345" width="260" height="200" fill="none" stroke="rgba(0,0,0,0.35)" strokeWidth="8" />
      </g>
    </svg>
  );
}
