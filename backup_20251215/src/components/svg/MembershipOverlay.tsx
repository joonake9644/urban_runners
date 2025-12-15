'use client';

import type { SVGProps } from 'react';

export function MembershipOverlay(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1920 1080"
      width="100%"
      height="100%"
      {...props}
    >
      <defs>
        <filter id="membershipHardShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="8" stdDeviation="0" floodColor="#000000" floodOpacity="0.35" />
        </filter>
      </defs>

      <text
        x="120"
        y="180"
        fontFamily="Oswald, Impact, sans-serif"
        fontWeight={900}
        fontSize="160"
        fill="#111111"
        letterSpacing="2"
      >
        MEMBERSHIP
      </text>
      <text
        x="130"
        y="270"
        fontFamily="Oswald, sans-serif"
        fontWeight={700}
        fontSize="48"
        fill="#222222"
      >
        JOIN THE PACK
      </text>

      <g transform="translate(160,420)" filter="url(#membershipHardShadow)">
        <rect x="0" y="0" rx="6" ry="6" width="280" height="90" fill="#FF7A00" stroke="#111111" strokeWidth="6" />
        <text
          x="140"
          y="60"
          textAnchor="middle"
          fontFamily="Oswald, sans-serif"
          fontWeight={800}
          fontSize="36"
          fill="#111111"
        >
          BASIC TIER
        </text>
      </g>

      <g transform="translate(1120,420)" filter="url(#membershipHardShadow)">
        <rect x="0" y="0" rx="6" ry="6" width="280" height="90" fill="#FF7A00" stroke="#111111" strokeWidth="6" />
        <text
          x="140"
          y="60"
          textAnchor="middle"
          fontFamily="Oswald, sans-serif"
          fontWeight={800}
          fontSize="36"
          fill="#111111"
        >
          BASIC TIER
        </text>
      </g>

      <g transform="translate(1350,300)" filter="url(#membershipHardShadow)">
        <rect x="0" y="0" rx="4" ry="4" width="220" height="120" fill="#E5E5E5" stroke="#111111" strokeWidth="5" />
        <text
          x="110"
          y="70"
          textAnchor="middle"
          fontFamily="Oswald, sans-serif"
          fontWeight={900}
          fontSize="34"
          fill="#111111"
        >
          ELITE
        </text>
        <text
          x="110"
          y="105"
          textAnchor="middle"
          fontFamily="Oswald, sans-serif"
          fontWeight={900}
          fontSize="34"
          fill="#111111"
        >
          CREW
        </text>
      </g>
    </svg>
  );
}
