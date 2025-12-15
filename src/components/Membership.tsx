import { Check, Zap, Crown, Rocket } from 'lucide-react';

export default function Membership() {
  const plans = [
    {
      name: 'Starter',
      icon: Zap,
      price: '50,000',
      period: '월',
      description: '러닝을 시작하는 분들을 위한 기본 플랜',
      features: [
        '주 3회 그룹 러닝',
        '기본 러닝 가이드',
        '크루 커뮤니티 접근',
        '월간 러닝 리포트',
        '러닝 장비 할인 (10%)'
      ],
      popular: false
    },
    {
      name: 'Runner',
      icon: Crown,
      price: '80,000',
      period: '월',
      description: '진지하게 훈련하는 러너를 위한 프리미엄 플랜',
      features: [
        '무제한 그룹 러닝',
        '1:1 개인 코칭 (월 2회)',
        '맞춤형 훈련 프로그램',
        '전문 러닝 분석',
        '크루 이벤트 우선 참가',
        '러닝 장비 할인 (20%)',
        '월간 체력 테스트'
      ],
      popular: true
    },
    {
      name: 'Elite',
      icon: Rocket,
      price: '150,000',
      period: '월',
      description: '최고의 퍼포먼스를 추구하는 엘리트 러너',
      features: [
        '무제한 그룹 러닝',
        '1:1 개인 코칭 (주 1회)',
        '프로 선수급 훈련 프로그램',
        '전문 러닝 분석 + 영양 컨설팅',
        '크루 이벤트 무료 참가',
        '러닝 장비 할인 (30%)',
        '주간 체력 테스트',
        '대회 참가 지원',
        '전용 러닝 파트너 배정'
      ],
      popular: false
    }
  ];

  return (
    <section id="membership" className="relative py-20 bg-black concrete-texture">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff6b35] to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <div className="inline-flex items-center gap-2 bg-[#ff6b35] px-6 py-2 mb-6 text-sm uppercase tracking-wider font-bold border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            <span className="text-black">MEMBERSHIP</span>
          </div>
          <h2 className="text-[#f5f5f5] mb-6 text-5xl md:text-6xl lg:text-7xl font-black leading-tight" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
            <span className="text-[#ff6b35]">멤버십</span> 플랜
          </h2>
          <div className="h-1 w-24 bg-[#ff6b35] mb-8 mx-auto"></div>
          <p className="text-[#a3a3a3] max-w-3xl mx-auto text-xl">
            당신의 러닝 레벨과 목표에 맞는 최적의 플랜을 선택하세요.
            <br />
            모든 플랜은 언제든지 변경 가능합니다.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div 
                key={index}
                className={`relative bg-[#2d2d2d] border-2 transition-all duration-300 ${
                  plan.popular 
                    ? 'border-[#ff6b35] shadow-[0_0_40px_rgba(255,107,53,0.2)] scale-105' 
                    : 'border-[#3f3f3f] hover:border-[#ff6b35]'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#ff6b35] text-white px-6 py-2 text-xs uppercase tracking-wider">
                    Most Popular
                  </div>
                )}

                <div className="p-8">
                  {/* Icon */}
                  <div className={`w-16 h-16 flex items-center justify-center mb-6 ${
                    plan.popular ? 'bg-[#ff6b35]/20' : 'bg-[#3f3f3f]'
                  }`}>
                    <Icon className={`w-8 h-8 ${
                      plan.popular ? 'text-[#ff6b35]' : 'text-[#a3a3a3]'
                    }`} />
                  </div>

                  {/* Plan Name */}
                  <h3 className="text-[#f5f5f5] mb-3">{plan.name}</h3>
                  <p className="text-[#a3a3a3] text-sm mb-6">{plan.description}</p>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-end gap-2">
                      <span className="text-[#f5f5f5]">₩{plan.price}</span>
                      <span className="text-[#a3a3a3] mb-1">/ {plan.period}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          plan.popular ? 'text-[#ff6b35]' : 'text-[#a3a3a3]'
                        }`} />
                        <span className="text-[#a3a3a3] text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button className={`w-full py-4 uppercase tracking-wider transition-all duration-300 ${
                    plan.popular
                      ? 'bg-[#ff6b35] hover:bg-[#e55a2b] text-white'
                      : 'bg-[#3f3f3f] hover:bg-[#ff6b35] text-[#f5f5f5]'
                  }`}>
                    Choose Plan
                  </button>
                </div>

                {/* Bottom accent */}
                {plan.popular && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#ff6b35]"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-[#2d2d2d] border border-[#3f3f3f]">
            <div className="text-[#ff6b35] mb-2">무료 체험</div>
            <p className="text-[#a3a3a3] text-sm">
              첫 2주간 무료로 크루를 경험해보세요
            </p>
          </div>
          <div className="p-6 bg-[#2d2d2d] border border-[#3f3f3f]">
            <div className="text-[#ff6b35] mb-2">언제든 변경</div>
            <p className="text-[#a3a3a3] text-sm">
              플랜은 언제든지 변경 및 취소 가능합니다
            </p>
          </div>
          <div className="p-6 bg-[#2d2d2d] border border-[#3f3f3f]">
            <div className="text-[#ff6b35] mb-2">할인 혜택</div>
            <p className="text-[#a3a3a3] text-sm">
              6개월/12개월 결제 시 추가 할인 적용
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
