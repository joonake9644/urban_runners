'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HomePage() {
  const buttons = [
    { href: '/join', label: 'JOIN CREW', svg: '/assets/svg/btn_join_crew.svg', delay: 0.1 },
    { href: '/about', label: 'ADVISORY', svg: '/assets/svg/btn_advisory.svg', delay: 0.2 },
    { href: '/about#facts', label: 'QUICK FACTS', svg: '/assets/svg/btn_quick_facts.svg', delay: 0.3 },
    { href: '/dashboard', label: 'STATISTICS', svg: '/assets/svg/btn_statistics.svg', delay: 0.4 },
    { href: '#contact', label: 'CONTACT US', svg: '/assets/svg/btn_contact_us.svg', delay: 0.5 },
  ];

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* 레이어 1: 콘크리트 배경 */}
      <div className="absolute inset-0">
        <Image
          src="/screens/home.png"
          alt="Concrete background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* 레이어 2: UI 오버레이 SVG - 애니메이션 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0"
      >
        <Image
          src="/assets/svg/overlay-ui-excluding-people.svg"
          alt="UI overlay"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* 레이어 3: 화려한 인터랙티브 버튼들 */}
      <div className="relative z-50 min-h-screen pt-20">
        <div className="absolute left-6 md:left-12 lg:left-16 bottom-20 md:bottom-32 lg:bottom-36 flex flex-col gap-4">
          {buttons.map((button, index) => (
            <motion.div
              key={button.href}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: button.delay,
                type: 'spring',
                stiffness: 100,
                damping: 15,
              }}
            >
              <Link
                href={button.href}
                className="group relative block w-40 md:w-52 h-14 md:h-16"
              >
                {/* SVG 버튼 이미지 */}
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    rotate: 2,
                    x: 5,
                    y: -5,
                  }}
                  whileTap={{
                    scale: 0.95,
                    rotate: -2,
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={button.svg}
                    alt={button.label}
                    fill
                    className="object-contain drop-shadow-[0_0_10px_rgba(245,158,11,0.5)] group-hover:drop-shadow-[0_0_20px_rgba(245,158,11,0.8)] transition-all duration-300"
                  />

                  {/* Glow 효과 */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />

                  {/* 반짝이는 효과 */}
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    animate={{
                      opacity: [0, 0.3, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  />
                </motion.div>

                {/* 호버 시 나타나는 화살표 */}
                <motion.div
                  initial={{ x: -10, opacity: 0 }}
                  whileHover={{ x: 0, opacity: 1 }}
                  className="absolute -right-8 top-1/2 -translate-y-1/2"
                >
                  <span className="text-orange-500 text-2xl font-black">→</span>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* 우측 상단 NO LIMITS 텍스트 - 애니메이션 */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 100 }}
          className="absolute top-24 right-8 md:right-16"
        >
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Image
              src="/assets/svg/text-no-limits.svg"
              alt="No Limits"
              width={180}
              height={60}
              className="drop-shadow-[0_0_15px_rgba(245,158,11,0.6)]"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* 파티클/그래인 효과 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMDAwIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMyMjIiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-20" />
      </div>
    </main>
  );
}
