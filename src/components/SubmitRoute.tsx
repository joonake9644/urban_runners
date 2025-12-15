import { useState } from 'react';
import { X, MapPin, TrendingUp, Clock, Save } from 'lucide-react';
import { motion } from 'framer-motion';

interface SubmitRouteProps {
  onClose: () => void;
}

export default function SubmitRoute({ onClose }: SubmitRouteProps) {
  const [formData, setFormData] = useState({
    name: '',
    distance: '',
    difficulty: 'Easy',
    elevation: '',
    time: '',
    description: '',
    location: '',
    highlights: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Submit route logic
    console.log('Submit Route:', formData);
    alert('루트가 성공적으로 제출되었습니다!');
    onClose();
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <motion.div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="relative bg-[#1a1a1a] border-4 border-[#ff6b35] shadow-[16px_16px_0px_rgba(255,107,53,0.3)] max-w-2xl w-full max-h-[90vh] overflow-y-auto"
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
          <h2 className="text-black uppercase tracking-[0.2em] text-center text-4xl md:text-5xl font-black" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>루트 제출</h2>
          <div className="h-1 w-20 bg-black mx-auto mt-4"></div>
          <p className="text-black/70 text-center mt-4 text-base">
            새로운 러닝 루트를 크루와 공유하세요
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {/* Route Name */}
          <div>
            <label className="block text-white/80 uppercase tracking-wider text-sm mb-3">
              루트 이름 *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              className="w-full bg-black/50 border-2 border-[#ff6b35] text-white px-4 py-4 focus:outline-none focus:border-[#ff8554] transition-colors placeholder:text-white/30"
              placeholder="예: 한강 여의도 순환"
              required
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-white/80 uppercase tracking-wider text-sm mb-3">
              <MapPin className="inline w-4 h-4 mr-2 text-[#ff6b35]" />
              위치 *
            </label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => handleChange('location', e.target.value)}
              className="w-full bg-black/50 border-2 border-[#ff6b35] text-white px-4 py-4 focus:outline-none focus:border-[#ff8554] transition-colors placeholder:text-white/30"
              placeholder="예: 서울 여의도"
              required
            />
          </div>

          {/* Grid Layout for Stats */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Distance */}
            <div>
              <label className="block text-white/80 uppercase tracking-wider text-sm mb-3">
                거리 (km) *
              </label>
              <input
                type="text"
                value={formData.distance}
                onChange={(e) => handleChange('distance', e.target.value)}
                className="w-full bg-black/50 border-2 border-[#ff6b35] text-white px-4 py-4 focus:outline-none focus:border-[#ff8554] transition-colors placeholder:text-white/30"
                placeholder="10.5"
                required
              />
            </div>

            {/* Elevation */}
            <div>
              <label className="block text-white/80 uppercase tracking-wider text-sm mb-3">
                <TrendingUp className="inline w-4 h-4 mr-2 text-[#ff6b35]" />
                고도 (m)
              </label>
              <input
                type="text"
                value={formData.elevation}
                onChange={(e) => handleChange('elevation', e.target.value)}
                className="w-full bg-black/50 border-2 border-[#ff6b35] text-white px-4 py-4 focus:outline-none focus:border-[#ff8554] transition-colors placeholder:text-white/30"
                placeholder="+15"
              />
            </div>

            {/* Time */}
            <div>
              <label className="block text-white/80 uppercase tracking-wider text-sm mb-3">
                <Clock className="inline w-4 h-4 mr-2 text-[#ff6b35]" />
                평균 시간
              </label>
              <input
                type="text"
                value={formData.time}
                onChange={(e) => handleChange('time', e.target.value)}
                className="w-full bg-black/50 border-2 border-[#ff6b35] text-white px-4 py-4 focus:outline-none focus:border-[#ff8554] transition-colors placeholder:text-white/30"
                placeholder="55분"
              />
            </div>
          </div>

          {/* Difficulty */}
          <div>
            <label className="block text-white/80 uppercase tracking-wider text-sm mb-3">
              난이도 *
            </label>
            <div className="grid grid-cols-3 gap-4">
              {['Easy', 'Moderate', 'Hard'].map((level) => (
                <button
                  key={level}
                  type="button"
                  onClick={() => handleChange('difficulty', level)}
                  className={`py-4 uppercase tracking-wider text-sm transition-all border-4 ${
                    formData.difficulty === level
                      ? 'bg-[#ff6b35] text-black border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]'
                      : 'bg-black/50 text-white/60 border-white/30 hover:border-[#ff6b35]'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-white/80 uppercase tracking-wider text-sm mb-3">
              설명 *
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => handleChange('description', e.target.value)}
              className="w-full bg-black/50 border-2 border-[#ff6b35] text-white px-4 py-4 focus:outline-none focus:border-[#ff8554] transition-colors placeholder:text-white/30 min-h-[120px]"
              placeholder="루트에 대한 설명을 입력하세요..."
              required
            />
          </div>

          {/* Highlights */}
          <div>
            <label className="block text-white/80 uppercase tracking-wider text-sm mb-3">
              특징 (쉼표로 구분)
            </label>
            <input
              type="text"
              value={formData.highlights}
              onChange={(e) => handleChange('highlights', e.target.value)}
              className="w-full bg-black/50 border-2 border-[#ff6b35] text-white px-4 py-4 focus:outline-none focus:border-[#ff8554] transition-colors placeholder:text-white/30"
              placeholder="예: 야경, 평탄, 안전"
            />
            <p className="text-white/40 text-xs mt-2">
              루트의 주요 특징을 쉼표로 구분하여 입력하세요
            </p>
          </div>

          {/* Info Box */}
          <div className="bg-black/30 border-l-4 border-[#ff6b35] p-6">
            <p className="text-white/70 text-sm leading-relaxed">
              <span className="text-[#ff6b35]">안내:</span> 제출하신 루트는 관리자 검토 후 크루 멤버들과 공유됩니다. 
              정확한 정보를 입력해주세요.
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="group w-full bg-[#ff6b35] hover:bg-[#ff8554] text-black py-6 border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] transition-all uppercase tracking-[0.2em] flex items-center justify-center gap-3"
          >
            <Save className="w-5 h-5" strokeWidth={3} />
            <span>루트 제출하기</span>
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
}