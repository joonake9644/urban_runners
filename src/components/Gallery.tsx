import { Instagram } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Gallery() {
  const galleryItems = [
    {
      image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80',
      caption: '새벽 한강 러닝',
      date: '2024.12.10'
    },
    {
      image: 'https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=800&q=80',
      caption: '북악스카이웨이 정복',
      date: '2024.12.08'
    },
    {
      image: 'https://images.unsplash.com/photo-1483721310020-03333e577078?w=800&q=80',
      caption: '크루 멤버 모임',
      date: '2024.12.05'
    },
    {
      image: 'https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?w=800&q=80',
      caption: '마라톤 완주 기념',
      date: '2024.12.01'
    },
    {
      image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80',
      caption: '남산 야간 러닝',
      date: '2024.11.28'
    },
    {
      image: 'https://images.unsplash.com/photo-1485727749690-d091e8284ef3?w=800&q=80',
      caption: '훈련 후 스트레칭',
      date: '2024.11.25'
    }
  ];

  return (
    <section id="gallery" className="relative py-20 bg-black concrete-texture">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff6b35] to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 bg-[#ff6b35] px-6 py-2 mb-6 text-sm uppercase tracking-wider font-bold border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            <span className="text-black">GALLERY</span>
          </div>
          <h2 className="text-[#f5f5f5] mb-6 text-5xl md:text-6xl lg:text-7xl font-black leading-tight" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
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
            <motion.div
              key={index}
              className="group relative aspect-square bg-[#1a1a1a] border-2 border-[#3f3f3f] hover:border-[#ff6b35] transition-all duration-300 overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Image */}
              <motion.div
                className="absolute inset-0"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Image
                  src={item.image}
                  alt={item.caption}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover"
                />
              </motion.div>

              {/* Dark overlay for readability */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300"></div>

              {/* Overlay with info */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"
                initial={{ y: 20 }}
                whileHover={{ y: 0 }}
              >
                <motion.div
                  className="text-[#f5f5f5] mb-2 font-bold"
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {item.caption}
                </motion.div>
                <motion.div
                  className="text-[#a3a3a3] text-sm"
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  {item.date}
                </motion.div>
              </motion.div>

              {/* Corner accent with animation */}
              <motion.div
                className="absolute top-0 right-0 w-12 h-12 bg-[#ff6b35]"
                style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }}
                initial={{ opacity: 0, scale: 0 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
              </motion.div>

              {/* Pulse effect on hover */}
              <motion.div
                className="absolute inset-0 border-2 border-[#ff6b35]"
                initial={{ opacity: 0, scale: 0.95 }}
                whileHover={{
                  opacity: [0, 0.5, 0],
                  scale: 1.05,
                  transition: { duration: 0.6 }
                }}
              ></motion.div>
            </motion.div>
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
