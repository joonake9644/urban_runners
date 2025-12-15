import { Instagram, Image as ImageIcon } from 'lucide-react';

export default function Gallery() {
  // Mock gallery images - in production these would come from a backend
  const galleryItems = [
    {
      type: 'image',
      caption: '새벽 한강 러닝',
      date: '2024.12.10'
    },
    {
      type: 'image',
      caption: '북악스카이웨이 정복',
      date: '2024.12.08'
    },
    {
      type: 'image',
      caption: '크루 멤버 모임',
      date: '2024.12.05'
    },
    {
      type: 'image',
      caption: '마라톤 완주 기념',
      date: '2024.12.01'
    },
    {
      type: 'image',
      caption: '남산 야간 러닝',
      date: '2024.11.28'
    },
    {
      type: 'image',
      caption: '훈련 후 스트레칭',
      date: '2024.11.25'
    }
  ];

  return (
    <section id="gallery" className="relative py-32 bg-[#2d2d2d] concrete-texture">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff6b35] to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 bg-[#ff6b35] px-6 py-2 mb-6 text-sm uppercase tracking-wider">
            Gallery
          </div>
          <h2 className="text-[#f5f5f5] mb-6">
            크루의
            <br />
            <span className="text-[#ff6b35]">순간들</span>
          </h2>
          <div className="h-1 w-24 bg-[#ff6b35] mb-8"></div>
          <p className="text-[#a3a3a3] max-w-3xl text-xl">
            함께 달리며 만들어온 특별한 순간들. 
            크루 멤버들의 열정과 성취를 공유합니다.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
          {galleryItems.map((item, index) => (
            <div 
              key={index}
              className="group relative aspect-square bg-[#1a1a1a] border-2 border-[#3f3f3f] hover:border-[#ff6b35] transition-all duration-300 overflow-hidden"
            >
              {/* Placeholder for image */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#2d2d2d] to-[#1a1a1a]">
                <ImageIcon className="w-16 h-16 text-[#3f3f3f] group-hover:text-[#ff6b35] transition-colors" />
              </div>

              {/* Runner silhouette overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
                <svg width="120" height="140" viewBox="0 0 120 140" fill="none">
                  <circle cx="60" cy="25" r="15" fill="#000" />
                  <path d="M60 40 L60 90" stroke="#000" strokeWidth="10" strokeLinecap="round" />
                  <path d="M60 55 L40 75" stroke="#000" strokeWidth="8" strokeLinecap="round" />
                  <path d="M60 55 L80 70" stroke="#000" strokeWidth="8" strokeLinecap="round" />
                  <path d="M60 90 L45 120" stroke="#000" strokeWidth="9" strokeLinecap="round" />
                  <path d="M60 90 L75 125" stroke="#000" strokeWidth="9" strokeLinecap="round" />
                </svg>
              </div>

              {/* Overlay with info */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="text-[#f5f5f5] mb-2">{item.caption}</div>
                <div className="text-[#a3a3a3] text-sm">{item.date}</div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-12 h-12 bg-[#ff6b35] opacity-0 group-hover:opacity-100 transition-opacity" 
                   style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }}>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a] p-12 border-y-4 border-[#ff6b35]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-[#ff6b35] flex items-center justify-center">
                <Instagram className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-[#f5f5f5] mb-2">Follow Us on Instagram</h3>
                <p className="text-[#a3a3a3]">
                  @urbanrunners_seoul에서 더 많은 사진을 확인하세요
                </p>
              </div>
            </div>
            <button className="bg-[#ff6b35] hover:bg-[#e55a2b] text-white px-10 py-4 transition-colors uppercase tracking-wide whitespace-nowrap">
              Follow Now
            </button>
          </div>
        </div>

        {/* Share your moment */}
        <div className="mt-12 text-center">
          <p className="text-[#a3a3a3] mb-4">
            당신의 러닝 순간을 공유해주세요
          </p>
          <p className="text-[#737373] text-sm">
            #urbanrunners #서울러닝크루 해시태그와 함께 게시하면 갤러리에 소개됩니다
          </p>
        </div>
      </div>
    </section>
  );
}
