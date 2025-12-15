'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function DashboardPage() {
  const stats = [
    { label: 'TOTAL RUNS', value: '1,247', change: '+12%', trend: 'up' },
    { label: 'ACTIVE MEMBERS', value: '247', change: '+8%', trend: 'up' },
    { label: 'AVG DISTANCE', value: '8.4 KM', change: '+3%', trend: 'up' },
    { label: 'AVG PACE', value: '5:12', change: '-4%', trend: 'down' },
  ];

  const recentRuns = [
    { id: 1, runner: 'RUNNER_047', distance: '12.3 KM', time: '58:42', pace: '4:46' },
    { id: 2, runner: 'RUNNER_128', distance: '8.7 KM', time: '42:15', pace: '4:51' },
    { id: 3, runner: 'RUNNER_092', distance: '15.2 KM', time: '1:18:20', pace: '5:09' },
    { id: 4, runner: 'RUNNER_203', distance: '6.5 KM', time: '34:12', pace: '5:16' },
  ];

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/new/home1.webp"
          alt="Concrete"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')] opacity-40" />
      </div>

      <div className="relative z-10 min-h-screen px-6 md:px-12 lg:px-16 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          {/* Title */}
          <div className="mb-12">
            <div className="relative inline-block">
              <div className="absolute -left-6 top-0 w-3 h-full bg-[#DF650C]" />
              <h1
                className="text-7xl md:text-8xl lg:text-9xl font-black text-black leading-tight"
                style={{
                  fontFamily: 'Impact, Haettenschweiler, "Franklin Gothic Bold", sans-serif',
                  textShadow: '4px 4px 0px rgba(0,0,0,0.2)'
                }}
              >
                STATS
              </h1>
            </div>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 origin-left"
            >
              <div className="bg-black/90 px-6 py-3 border-4 border-black inline-block">
                <p className="text-xl md:text-2xl font-black text-[#DF650C]" style={{ fontFamily: 'Courier New, monospace' }}>
                  LIVE DASHBOARD / REALTIME
                </p>
              </div>
            </motion.div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="bg-white/95 border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
              >
                <p className="text-xs text-black/60 font-black tracking-widest mb-2" style={{ fontFamily: 'Courier New, monospace' }}>
                  {stat.label}
                </p>
                <p className="text-4xl md:text-5xl font-black text-black mb-2" style={{ fontFamily: 'Impact, Haettenschweiler, "Franklin Gothic Bold", sans-serif' }}>
                  {stat.value}
                </p>
                <div className="flex items-center gap-2">
                  <span className={`text-sm font-black ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`} style={{ fontFamily: 'Courier New, monospace' }}>
                    {stat.change}
                  </span>
                  <span className="text-xs text-black/40 font-bold" style={{ fontFamily: 'Courier New, monospace' }}>
                    VS LAST WEEK
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Recent Runs Table */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-black/90 border-4 border-black p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
          >
            <h2 className="text-3xl md:text-4xl font-black text-[#DF650C] mb-6" style={{ fontFamily: 'Impact, Haettenschweiler, "Franklin Gothic Bold", sans-serif' }}>
              RECENT RUNS
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-[#DF650C]">
                    <th className="text-left py-3 text-xs font-black text-gray-400 tracking-widest" style={{ fontFamily: 'Courier New, monospace' }}>RUNNER</th>
                    <th className="text-left py-3 text-xs font-black text-gray-400 tracking-widest" style={{ fontFamily: 'Courier New, monospace' }}>DISTANCE</th>
                    <th className="text-left py-3 text-xs font-black text-gray-400 tracking-widest" style={{ fontFamily: 'Courier New, monospace' }}>TIME</th>
                    <th className="text-left py-3 text-xs font-black text-gray-400 tracking-widest" style={{ fontFamily: 'Courier New, monospace' }}>PACE</th>
                  </tr>
                </thead>
                <tbody>
                  {recentRuns.map((run) => (
                    <tr key={run.id} className="border-b border-gray-700">
                      <td className="py-4 text-lg font-black text-white" style={{ fontFamily: 'Courier New, monospace' }}>{run.runner}</td>
                      <td className="py-4 text-lg font-black text-[#DF650C]" style={{ fontFamily: 'Impact, Haettenschweiler, "Franklin Gothic Bold", sans-serif' }}>{run.distance}</td>
                      <td className="py-4 text-lg font-black text-white" style={{ fontFamily: 'Courier New, monospace' }}>{run.time}</td>
                      <td className="py-4 text-lg font-black text-white" style={{ fontFamily: 'Courier New, monospace' }}>{run.pace}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
