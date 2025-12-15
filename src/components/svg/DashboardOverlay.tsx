'use client';

import type { SVGProps } from 'react';

export function DashboardOverlay(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1920 1080"
      width="100%"
      height="100%"
      {...props}
    >
      <defs>
        <filter id="dashHardShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="10" stdDeviation="0" floodColor="#000000" floodOpacity="0.35" />
        </filter>
      </defs>

      <g filter="url(#dashHardShadow)">
        <text
          x="140"
          y="200"
          fontFamily="Oswald, Impact, sans-serif"
          fontWeight={900}
          fontSize="160"
          letterSpacing="2"
          fill="#111111"
        >
          DASHBOARD
        </text>
        <text
          x="150"
          y="260"
          fontFamily="Oswald, sans-serif"
          fontWeight={800}
          fontSize="46"
          fill="#222222"
        >
          MEMBER STATUS
        </text>
      </g>

      <g transform="translate(140,300)">
        <g filter="url(#dashHardShadow)">
          <rect width="260" height="220" rx="6" ry="6" fill="#F28C28" stroke="#111111" strokeWidth="7" />
          <text
            x="130"
            y="52"
            textAnchor="middle"
            fontFamily="Oswald, sans-serif"
            fontWeight={900}
            fontSize="32"
            fill="#111111"
          >
            TOTAL RUNS
          </text>
          <text
            x="130"
            y="155"
            textAnchor="middle"
            fontFamily="Oswald, sans-serif"
            fontWeight={900}
            fontSize="120"
            fill="#111111"
          >
            24
          </text>
        </g>

        <g transform="translate(290,0)" filter="url(#dashHardShadow)">
          <rect width="260" height="220" rx="6" ry="6" fill="#43C46B" stroke="#111111" strokeWidth="7" />
          <text
            x="130"
            y="52"
            textAnchor="middle"
            fontFamily="Oswald, sans-serif"
            fontWeight={900}
            fontSize="32"
            fill="#111111"
          >
            THIS WEEK
          </text>
          <text
            x="130"
            y="155"
            textAnchor="middle"
            fontFamily="Oswald, sans-serif"
            fontWeight={900}
            fontSize="72"
            fill="#111111"
          >
            5KM
          </text>
        </g>

        <g transform="translate(580,0)" filter="url(#dashHardShadow)">
          <rect width="260" height="220" rx="6" ry="6" fill="#2EA0D6" stroke="#111111" strokeWidth="7" />
          <text
            x="130"
            y="52"
            textAnchor="middle"
            fontFamily="Oswald, sans-serif"
            fontWeight={900}
            fontSize="32"
            fill="#111111"
          >
            BEST TIME
          </text>
          <text
            x="130"
            y="155"
            textAnchor="middle"
            fontFamily="Oswald, sans-serif"
            fontWeight={900}
            fontSize="72"
            fill="#111111"
          >
            22:15
          </text>
        </g>

        <g transform="translate(870,0)" filter="url(#dashHardShadow)">
          <rect width="260" height="220" rx="6" ry="6" fill="#E74C3C" stroke="#111111" strokeWidth="7" />
          <text
            x="130"
            y="52"
            textAnchor="middle"
            fontFamily="Oswald, sans-serif"
            fontWeight={900}
            fontSize="32"
            fill="#111111"
          >
            RANK
          </text>
          <text
            x="130"
            y="155"
            textAnchor="middle"
            fontFamily="Oswald, sans-serif"
            fontWeight={900}
            fontSize="96"
            fill="#111111"
          >
            #12
          </text>
        </g>
      </g>

      <g transform="translate(140,550)" filter="url(#dashHardShadow)">
        <rect width="460" height="90" rx="6" ry="6" fill="#FF7A00" stroke="#111111" strokeWidth="7" />
        <text
          x="230"
          y="60"
          textAnchor="middle"
          fontFamily="Oswald, sans-serif"
          fontWeight={900}
          fontSize="40"
          fill="#111111"
        >
          NEXT RUN
        </text>
      </g>

      <g transform="translate(1240,440) scale(1.2)" fill="#111111" filter="url(#dashHardShadow)">
        <path
          d="
            M40 0
            C33 0 28 6 28 12
            C28 18 33 24 40 24
            C47 24 52 18 52 12
            C52 6 47 0 40 0
            Z
            M36 24
            C34 30 34 36 34 42
            C34 50 36 56 38 62
            L30 74
            C28 78 28 82 31 85
            L46 98
            C49 101 54 101 57 98
            L74 82
            L68 98
            L94 124
            L82 136
            L60 112
            L52 148
            L30 148
            L42 108
            L18 122
            L8 106
            L34 90
            L26 64
            Z
          "
        />
      </g>
    </svg>
  );
}
