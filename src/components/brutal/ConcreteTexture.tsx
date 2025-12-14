'use client';

export function ConcreteTexture() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden opacity-20">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="concrete-pattern"
            x="0"
            y="0"
            width="200"
            height="200"
            patternUnits="userSpaceOnUse"
          >
            {/* 콘크리트 균열 효과 */}
            <path
              d="M10,50 Q30,40 50,50 T90,50"
              stroke="#000"
              fill="none"
              strokeWidth="1"
              opacity="0.3"
            />
            <path
              d="M150,80 L120,100 L140,120"
              stroke="#000"
              fill="none"
              strokeWidth="1"
              opacity="0.2"
            />
            <path
              d="M30,150 L50,140 L60,160"
              stroke="#000"
              fill="none"
              strokeWidth="0.5"
              opacity="0.25"
            />

            {/* 노이즈 점들 */}
            {Array.from({ length: 30 }).map((_, i) => (
              <circle
                key={i}
                cx={Math.random() * 200}
                cy={Math.random() * 200}
                r={Math.random() * 1.5}
                fill="#666"
                opacity={Math.random() * 0.4}
              />
            ))}

            {/* 작은 균열들 */}
            <line
              x1="80"
              y1="30"
              x2="90"
              y2="45"
              stroke="#000"
              strokeWidth="0.5"
              opacity="0.2"
            />
            <line
              x1="140"
              y1="150"
              x2="155"
              y2="165"
              stroke="#000"
              strokeWidth="0.5"
              opacity="0.15"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#concrete-pattern)" />
      </svg>
    </div>
  );
}
