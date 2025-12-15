import { Target, Heart, Zap, Shield } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Consistency',
      description: '꾸준함이 만드는 변화. 매일 아침 함께 달리며 성장합니다.'
    },
    {
      icon: Heart,
      title: 'Community',
      description: '혼자가 아닌 함께. 서로를 응원하고 격려하는 크루입니다.'
    },
    {
      icon: Zap,
      title: 'Energy',
      description: '도시의 에너지를 느끼며 활력을 얻는 러닝 경험을 제공합니다.'
    },
    {
      icon: Shield,
      title: 'Safety',
      description: '안전한 러닝을 위한 체계적인 시스템과 가이드를 운영합니다.'
    }
  ];

  return (
    <section id="about" className="relative py-20 bg-black concrete-texture overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ff6b35] to-transparent"></div>
      
      {/* Decorative runner image */}
      <div className="absolute top-20 left-10 w-48 h-60 opacity-5 mix-blend-luminosity">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1695918425801-41dd27ed8277?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydW5uaW5nJTIwYXRobGV0ZSUyMG1vdGlvbnxlbnwxfHx8fDE3NjU3MDgzMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080')`
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 bg-[#ff6b35] px-6 py-2 mb-6 text-sm uppercase tracking-wider font-bold border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            <span className="text-black">ABOUT CREW</span>
          </div>
          <h2 className="text-[#f5f5f5] mb-6 text-5xl md:text-6xl lg:text-7xl font-black leading-tight" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
            우리는
            <br />
            <span className="text-[#ff6b35]">도시 러너</span>입니다
          </h2>
          <div className="h-1 w-24 bg-[#ff6b35] mb-8"></div>
          <p className="text-[#a3a3a3] max-w-3xl text-xl">
            서울의 콘크리트 정글을 달리는 러닝 크루. 새벽의 고요함부터 저녁의 활기까지, 
            도시 곳곳을 함께 달리며 건강한 라이프스타일과 진정한 커뮤니티를 만들어갑니다.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div 
                key={index}
                className="group bg-[#1a1a1a] p-8 border-l-4 border-[#ff6b35] hover:border-[#e55a2b] transition-all duration-300 relative overflow-hidden"
              >
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b35]/0 to-[#ff6b35]/0 group-hover:from-[#ff6b35]/5 group-hover:to-[#ff6b35]/10 transition-all duration-300"></div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-[#ff6b35]/10 flex items-center justify-center mb-6 group-hover:bg-[#ff6b35]/20 transition-colors">
                    <Icon className="w-7 h-7 text-[#ff6b35]" />
                  </div>
                  <h3 className="text-[#f5f5f5] mb-4">{value.title}</h3>
                  <p className="text-[#a3a3a3]">{value.description}</p>
                </div>

                {/* Decorative line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#ff6b35] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-24 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a] p-12 border-t-4 border-b-4 border-[#ff6b35]">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-[#ff6b35] mb-2">2020</div>
              <div className="text-[#a3a3a3] uppercase tracking-wider">Since</div>
            </div>
            <div>
              <div className="text-[#ff6b35] mb-2">15,000km+</div>
              <div className="text-[#a3a3a3] uppercase tracking-wider">Total Distance</div>
            </div>
            <div>
              <div className="text-[#ff6b35] mb-2">500+</div>
              <div className="text-[#a3a3a3] uppercase tracking-wider">Active Members</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}