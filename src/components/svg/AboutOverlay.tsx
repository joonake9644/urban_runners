'use client';

import type { SVGProps } from 'react';

export function AboutOverlay(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1920 1080"
      width="100%"
      height="100%"
      {...props}
    >
      <defs>
        <filter id="aboutHardShadow">
          <feDropShadow dx="0" dy="10" stdDeviation="0" floodColor="#000000" floodOpacity="0.35" />
        </filter>
      </defs>

      <g filter="url(#aboutHardShadow)">
        <text
          x="140"
          y="430"
          fontFamily="Oswald, Impact, sans-serif"
          fontWeight={900}
          fontSize="190"
          fill="#111111"
          letterSpacing="2"
        >
          ABOUT
        </text>
        <text
          x="140"
          y="600"
          fontFamily="Oswald, Impact, sans-serif"
          fontWeight={900}
          fontSize="190"
          fill="#111111"
          letterSpacing="2"
        >
          CREW
        </text>
      </g>

      <g transform="translate(140,650)">
        <g>
          <rect width="260" height="56" fill="#D6D6D6" />
          <text
            x="130"
            y="38"
            textAnchor="middle"
            fontFamily="Oswald, sans-serif"
            fontWeight={800}
            fontSize="32"
            fill="#FF7A00"
          >
            EST. 2020
          </text>
        </g>

        <g transform="translate(280,0)">
          <rect width="300" height="56" fill="#D6D6D6" />
          <text
            x="150"
            y="38"
            textAnchor="middle"
            fontFamily="Oswald, sans-serif"
            fontWeight={800}
            fontSize="32"
            fill="#FF7A00"
          >
            248 MEMBERS
          </text>
        </g>

        <g transform="translate(600,0)">
          <rect width="360" height="56" fill="#D6D6D6" />
          <text
            x="180"
            y="38"
            textAnchor="middle"
            fontFamily="Oswald, sans-serif"
            fontWeight={800}
            fontSize="32"
            fill="#FF7A00"
          >
            STEEL COMMITMENT
          </text>
        </g>
      </g>

      <g transform="translate(1080,360) scale(1.35)" fill="#111111" filter="url(#aboutHardShadow)">
        <circle cx="40" cy="18" r="16" />
        <path
          d="
            M40 36
            L54 72
            L90 72
            L74 98
            L104 142
            L86 150
            L62 108
            L50 154
            L28 154
            L40 106
            L14 126
            L4 110
            L36 88
            L26 60
            Z
          "
        />
        <path
          d="
            M58 86
            C74 70 98 64 118 70
            L112 90
            C98 86 84 90 70 102
            Z
          "
        />
      </g>

      <g transform="translate(1200,930)" fill="#111111" fontFamily="Oswald, sans-serif">
        <rect x="0" y="-46" rx="4" ry="4" width="360" height="52" fill="#E5E5E5" filter="url(#aboutHardShadow)" />
        <text x="20" y="-12" fontSize="26" fontWeight={800}>
          WE RUN THE CITY // NO LIMITS
        </text>
      </g>
    </svg>
  );
}
