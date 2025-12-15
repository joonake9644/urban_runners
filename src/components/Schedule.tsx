import { Calendar, Clock, MapPin, Users } from 'lucide-react';

export default function Schedule() {
  const runs = [
    {
      day: 'Monday',
      time: '06:00 AM',
      name: 'Dawn City Run',
      location: '한강공원 여의도',
      distance: '10km',
      pace: 'Easy',
      participants: 24
    },
    {
      day: 'Tuesday',
      time: '07:00 PM',
      name: 'Interval Training',
      location: '올림픽공원',
      distance: '8km',
      pace: 'Tempo',
      participants: 18
    },
    {
      day: 'Wednesday',
      time: '06:00 AM',
      name: 'Morning Steady',
      location: '남산순환로',
      distance: '12km',
      pace: 'Moderate',
      participants: 32
    },
    {
      day: 'Thursday',
      time: '07:00 PM',
      name: 'Hill Workout',
      location: '북악스카이웨이',
      distance: '6km',
      pace: 'Hard',
      participants: 15
    },
    {
      day: 'Friday',
      time: '06:00 AM',
      name: 'Recovery Run',
      location: '청계천',
      distance: '7km',
      pace: 'Easy',
      participants: 28
    },
    {
      day: 'Saturday',
      time: '07:00 AM',
      name: 'Long Run',
      location: '한강공원 반포',
      distance: '20km',
      pace: 'Easy',
      participants: 45
    }
  ];

  const getPaceColor = (pace: string) => {
    switch(pace) {
      case 'Easy': return 'text-green-400 bg-green-400/10';
      case 'Moderate': return 'text-yellow-400 bg-yellow-400/10';
      case 'Tempo': return 'text-orange-400 bg-orange-400/10';
      case 'Hard': return 'text-red-400 bg-red-400/10';
      default: return 'text-[#a3a3a3] bg-[#3f3f3f]';
    }
  };

  return (
    <section id="schedule" className="relative py-20 bg-black concrete-texture">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff6b35] to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 bg-[#ff6b35] px-6 py-2 mb-6 text-sm uppercase tracking-wider font-bold border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            <span className="text-black">SCHEDULE</span>
          </div>
          <h2 className="text-[#f5f5f5] mb-6 text-5xl md:text-6xl lg:text-7xl font-black leading-tight" style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}>
            주간
            <br />
            <span className="text-[#ff6b35]">러닝 스케줄</span>
          </h2>
          <div className="h-1 w-24 bg-[#ff6b35] mb-8"></div>
          <p className="text-[#a3a3a3] max-w-3xl text-xl">
            체계적인 훈련 프로그램으로 실력을 향상시키고, 다양한 루트에서 
            새로운 러닝 경험을 만들어보세요.
          </p>
        </div>

        {/* Schedule Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {runs.map((run, index) => (
            <div 
              key={index}
              className="group bg-[#2d2d2d] border-2 border-[#3f3f3f] hover:border-[#ff6b35] transition-all duration-300 p-6 relative overflow-hidden"
            >
              {/* Day Label */}
              <div className="absolute top-0 right-0 bg-[#ff6b35] text-white px-4 py-2 uppercase tracking-wider text-xs">
                {run.day}
              </div>

              {/* Content */}
              <div className="mt-8">
                <h4 className="text-[#f5f5f5] mb-4">{run.name}</h4>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-[#a3a3a3]">
                    <Clock className="w-4 h-4 text-[#ff6b35]" />
                    <span>{run.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-[#a3a3a3]">
                    <MapPin className="w-4 h-4 text-[#ff6b35]" />
                    <span>{run.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-[#a3a3a3]">
                    <Users className="w-4 h-4 text-[#ff6b35]" />
                    <span>{run.participants} participants</span>
                  </div>
                </div>

                {/* Details */}
                <div className="flex items-center justify-between pt-4 border-t border-[#3f3f3f]">
                  <div>
                    <div className="text-[#a3a3a3] text-xs uppercase tracking-wider mb-1">Distance</div>
                    <div className="text-[#f5f5f5]">{run.distance}</div>
                  </div>
                  <div className={`px-3 py-1 text-xs uppercase tracking-wider ${getPaceColor(run.pace)}`}>
                    {run.pace}
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#ff6b35] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-[#a3a3a3] mb-6">
            크루에 가입하고 모든 러닝 세션에 참여하세요
          </p>
          <button className="bg-[#ff6b35] hover:bg-[#e55a2b] text-white px-10 py-4 transition-colors uppercase tracking-wide">
            Join the Crew
          </button>
        </div>
      </div>
    </section>
  );
}
