import { MapPin, TrendingUp, Clock, Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface Route {
  name: string;
  distance: string;
  difficulty: string;
  elevation: string;
  time: string;
  rating: number;
  description: string;
  highlights: string[];
}

interface RoutesProps {
  onSubmitRouteClick?: () => void;
  onViewRouteDetails?: (route: Route) => void;
}

export default function Routes({ onSubmitRouteClick, onViewRouteDetails }: RoutesProps) {
  const routes = [
    {
      name: '한강 여의도 순환',
      distance: '10.5km',
      difficulty: 'Easy',
      elevation: '+15m',
      time: '55min',
      rating: 4.8,
      description: '평탄한 코스로 초보자에게 완벽한 루트',
      highlights: ['야경', '평탄', '안전']
    },
    {
      name: '남산순환로',
      distance: '8.2km',
      difficulty: 'Moderate',
      elevation: '+180m',
      time: '52min',
      rating: 4.9,
      description: '도심 속 자연을 느낄 수 있는 코스',
      highlights: ['경치', '트레일', '힐워크']
    },
    {
      name: '북악스카이웨이',
      distance: '12.3km',
      difficulty: 'Hard',
      elevation: '+320m',
      time: '78min',
      rating: 4.7,
      description: '도전적인 업힐과 최고의 전망',
      highlights: ['업힐', '전망', '도전']
    },
    {
      name: '청계천 야간 런',
      distance: '7.8km',
      difficulty: 'Easy',
      elevation: '+8m',
      time: '42min',
      rating: 4.6,
      description: '조명이 아름다운 도심 러닝 코스',
      highlights: ['야경', '도심', '조명']
    },
    {
      name: '올림픽공원 인터벌',
      distance: '6.5km',
      difficulty: 'Moderate',
      elevation: '+45m',
      time: '38min',
      rating: 4.8,
      description: '인터벌 훈련에 최적화된 코스',
      highlights: ['트랙', '공원', '훈련']
    },
    {
      name: '한강 마라톤 코스',
      distance: '21.0km',
      difficulty: 'Hard',
      elevation: '+28m',
      time: '125min',
      rating: 4.9,
      description: '하프 마라톤 준비를 위한 장거리 코스',
      highlights: ['장거리', '평탄', '마라톤']
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case 'Easy': return 'bg-green-400/10 text-green-400';
      case 'Moderate': return 'bg-yellow-400/10 text-yellow-400';
      case 'Hard': return 'bg-red-400/10 text-red-400';
      default: return 'bg-[#3f3f3f] text-[#a3a3a3]';
    }
  };

  return (
    <section id="routes" className="relative py-20 bg-black concrete-texture">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff6b35] to-transparent"></div>
      
      {/* Decorative runner */}
      <div className="absolute bottom-20 right-10 w-60 h-72 opacity-5 mix-blend-luminosity">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1642506539297-6021bf65badc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkeW5hbWljJTIwcnVubmVyJTIwYWN0aW9ufGVufDF8fHx8MTc2NTcwODMzMnww&ixlib=rb-4.1.0&q=80&w=1080')`
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 bg-[#ff6b35] px-6 py-2 mb-6 text-sm uppercase tracking-wider font-bold border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            <span className="text-black">ROUTES</span>
          </div>
          <h2 className="text-[#f5f5f5] mb-6 text-5xl md:text-6xl lg:text-7xl font-black leading-tight" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
            추천
            <br />
            <span className="text-[#ff6b35]">러닝 루트</span>
          </h2>
          <div className="h-1 w-24 bg-[#ff6b35] mb-8"></div>
          <p className="text-[#a3a3a3] max-w-3xl text-xl">
            서울 곳곳의 엄선된 러닝 루트. 초보자부터 마라토너까지 
            모두를 위한 다양한 코스를 경험해보세요.
          </p>
        </div>

        {/* Routes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {routes.map((route, index) => (
            <div 
              key={index}
              className="group bg-[#1a1a1a] border-l-4 border-[#ff6b35] hover:shadow-[8px_8px_0px_rgba(255,107,53,0.2)] transition-all duration-300 overflow-hidden"
            >
              {/* Header */}
              <div className="p-6 border-b border-[#3f3f3f]">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h4 className="text-[#f5f5f5] mb-2">{route.name}</h4>
                    <p className="text-[#a3a3a3] text-sm">{route.description}</p>
                  </div>
                  <div className="flex items-center gap-1 ml-4">
                    <Star className="w-4 h-4 text-[#ff6b35] fill-[#ff6b35]" />
                    <span className="text-[#f5f5f5]">{route.rating}</span>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="p-6">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <MapPin className="w-4 h-4 text-[#ff6b35]" />
                    </div>
                    <div className="text-[#f5f5f5]">{route.distance}</div>
                    <div className="text-[#737373] text-xs uppercase">Distance</div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingUp className="w-4 h-4 text-[#ff6b35]" />
                    </div>
                    <div className="text-[#f5f5f5]">{route.elevation}</div>
                    <div className="text-[#737373] text-xs uppercase">Elevation</div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Clock className="w-4 h-4 text-[#ff6b35]" />
                    </div>
                    <div className="text-[#f5f5f5]">{route.time}</div>
                    <div className="text-[#737373] text-xs uppercase">Avg Time</div>
                  </div>
                </div>

                {/* Difficulty Badge */}
                <div className={`inline-block px-4 py-2 text-xs uppercase tracking-wider mb-4 ${getDifficultyColor(route.difficulty)}`}>
                  {route.difficulty}
                </div>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2">
                  {route.highlights.map((highlight, i) => (
                    <span 
                      key={i}
                      className="text-xs px-3 py-1 bg-[#2d2d2d] text-[#a3a3a3] border border-[#3f3f3f]"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 pb-6">
                <button
                  onClick={() => onViewRouteDetails?.(route)}
                  className="w-full bg-[#2d2d2d] hover:bg-[#ff6b35] text-[#f5f5f5] py-3 transition-colors uppercase tracking-wider text-sm border border-[#3f3f3f] hover:border-[#ff6b35]"
                >
                  View Route Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 bg-gradient-to-r from-[#1a1a1a] to-[#2d2d2d] p-12 border-l-4 border-[#ff6b35]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-[#f5f5f5] mb-3">나만의 루트를 공유하세요</h3>
              <p className="text-[#a3a3a3]">
                새로운 러닝 루트를 발견했나요? 크루 멤버들과 함께 공유해보세요.
              </p>
            </div>
            <motion.button 
              onClick={onSubmitRouteClick}
              className="group relative bg-[#ff6b35] hover:bg-[#e55a2b] text-white px-10 py-4 whitespace-nowrap transition-colors uppercase tracking-wide border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,0.8)] hover:shadow-[4px_4px_0px_rgba(0,0,0,0.8)] hover:translate-x-[4px] hover:translate-y-[4px] overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Pulse effect */}
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ 
                  scale: 1.5, 
                  opacity: [0, 0.5, 0],
                  transition: { duration: 0.6, repeat: Infinity }
                }}
              ></motion.div>
              <span className="relative z-10">Submit Route</span>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}