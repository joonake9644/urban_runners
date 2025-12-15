import { X, MapPin, TrendingUp, Clock, Star, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

interface RouteDetailsProps {
  onClose: () => void;
  route: {
    name: string;
    distance: string;
    difficulty: string;
    elevation: string;
    time: string;
    rating: number;
    description: string;
    highlights: string[];
  };
}

export default function RouteDetails({ onClose, route }: RouteDetailsProps) {
  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case 'Easy': return 'bg-green-400/10 text-green-400 border-green-400/30';
      case 'Moderate': return 'bg-yellow-400/10 text-yellow-400 border-yellow-400/30';
      case 'Hard': return 'bg-red-400/10 text-red-400 border-red-400/30';
      default: return 'bg-[#3f3f3f] text-[#a3a3a3] border-[#3f3f3f]';
    }
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="relative bg-[#1a1a1a] border-4 border-[#ff6b35] shadow-[16px_16px_0px_rgba(255,107,53,0.3)] max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
      >
        {/* Close Button */}
        <motion.button
          onClick={onClose}
          className="absolute -top-4 -right-4 bg-[#ff6b35] hover:bg-[#ff8554] text-black p-3 border-4 border-black transition-all z-10"
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
        >
          <X className="w-6 h-6" strokeWidth={3} />
        </motion.button>

        {/* Header */}
        <div className="bg-[#ff6b35] p-8 border-b-4 border-black sticky top-0 z-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-black uppercase tracking-[0.2em] text-3xl md:text-4xl font-black" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
              {route.name}
            </h2>
            <div className="flex items-center gap-1 bg-black/20 px-3 py-2">
              <Star className="w-5 h-5 text-black fill-black" />
              <span className="text-black font-bold">{route.rating}</span>
            </div>
          </div>
          <div className="h-1 w-24 bg-black"></div>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Description */}
          <div className="mb-8">
            <p className="text-[#f5f5f5] text-lg leading-relaxed">
              {route.description}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-black/30 border-l-4 border-[#ff6b35] p-6">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-5 h-5 text-[#ff6b35]" />
                <div className="text-[#a3a3a3] text-xs uppercase tracking-wider">Distance</div>
              </div>
              <div className="text-[#f5f5f5] text-2xl font-bold">{route.distance}</div>
            </div>

            <div className="bg-black/30 border-l-4 border-[#ff6b35] p-6">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-[#ff6b35]" />
                <div className="text-[#a3a3a3] text-xs uppercase tracking-wider">Elevation</div>
              </div>
              <div className="text-[#f5f5f5] text-2xl font-bold">{route.elevation}</div>
            </div>

            <div className="bg-black/30 border-l-4 border-[#ff6b35] p-6">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-[#ff6b35]" />
                <div className="text-[#a3a3a3] text-xs uppercase tracking-wider">Avg Time</div>
              </div>
              <div className="text-[#f5f5f5] text-2xl font-bold">{route.time}</div>
            </div>

            <div className="bg-black/30 border-l-4 border-[#ff6b35] p-6">
              <div className="text-[#a3a3a3] text-xs uppercase tracking-wider mb-2">Difficulty</div>
              <div className={`inline-block px-4 py-2 text-sm uppercase tracking-wider border-2 ${getDifficultyColor(route.difficulty)}`}>
                {route.difficulty}
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="mb-8">
            <h3 className="text-[#f5f5f5] uppercase tracking-wider mb-4 text-lg font-bold">루트 특징</h3>
            <div className="flex flex-wrap gap-3">
              {route.highlights.map((highlight, i) => (
                <span
                  key={i}
                  className="px-6 py-3 bg-[#2d2d2d] text-[#ff6b35] border-2 border-[#ff6b35] uppercase tracking-wider text-sm font-bold"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="mb-8">
            <h3 className="text-[#f5f5f5] uppercase tracking-wider mb-4 text-lg font-bold">루트 맵</h3>
            <div className="aspect-video bg-gradient-to-br from-[#2d2d2d] to-[#1a1a1a] border-2 border-[#3f3f3f] flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-[#3f3f3f] mx-auto mb-4" />
                <p className="text-[#a3a3a3]">지도 데이터 준비 중</p>
              </div>
            </div>
          </div>

          {/* Info Box */}
          <div className="bg-black/30 border-l-4 border-[#ff6b35] p-6 mb-8">
            <p className="text-white/70 text-sm leading-relaxed">
              <span className="text-[#ff6b35] font-bold">안내:</span> 이 루트는 크루 멤버들이 공유한 정보입니다.
              실제 러닝 시 날씨와 교통 상황을 확인하시고, 안전에 유의하세요.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="grid md:grid-cols-2 gap-4">
            <button className="bg-[#ff6b35] hover:bg-[#ff8554] text-black py-4 border-4 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] transition-all uppercase tracking-wider font-bold">
              <Calendar className="inline w-5 h-5 mr-2" strokeWidth={3} />
              러닝 예약하기
            </button>
            <button className="bg-[#2d2d2d] hover:bg-[#3f3f3f] text-[#f5f5f5] py-4 border-2 border-[#3f3f3f] hover:border-[#ff6b35] transition-all uppercase tracking-wider">
              루트 공유하기
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
