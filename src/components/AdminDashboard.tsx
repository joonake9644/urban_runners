import { useState } from 'react';
import { Users, Calendar, Trash2, Edit, Plus, X, Save, MapPin } from 'lucide-react';

interface Member {
  id: number;
  name: string;
  email: string;
  phone: string;
  joinDate: string;
  status: 'active' | 'inactive';
}

interface ScheduleItem {
  id: number;
  date: string;
  time: string;
  location: string;
  distance: string;
  description: string;
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'members' | 'schedule'>('members');
  const [members, setMembers] = useState<Member[]>([
    {
      id: 1,
      name: '김러너',
      email: 'runner1@example.com',
      phone: '010-1234-5678',
      joinDate: '2024-01-15',
      status: 'active'
    },
    {
      id: 2,
      name: '이달리기',
      email: 'runner2@example.com',
      phone: '010-2345-6789',
      joinDate: '2024-02-20',
      status: 'active'
    },
    {
      id: 3,
      name: '박스피드',
      email: 'runner3@example.com',
      phone: '010-3456-7890',
      joinDate: '2024-03-10',
      status: 'inactive'
    }
  ]);

  const [schedules, setSchedules] = useState<ScheduleItem[]>([
    {
      id: 1,
      date: '2024-12-18',
      time: '06:00',
      location: '한강 반포',
      distance: '10km',
      description: '한강 새벽 러닝'
    },
    {
      id: 2,
      date: '2024-12-20',
      time: '19:00',
      location: '올림픽공원',
      distance: '5km',
      description: '저녁 회복 러닝'
    }
  ]);

  const [editingMember, setEditingMember] = useState<Member | null>(null);
  const [editingSchedule, setEditingSchedule] = useState<ScheduleItem | null>(null);
  const [isAddingMember, setIsAddingMember] = useState(false);
  const [isAddingSchedule, setIsAddingSchedule] = useState(false);

  // Member CRUD Functions
  const handleDeleteMember = (id: number) => {
    if (confirm('정말 삭제하시겠습니까?')) {
      setMembers(members.filter(m => m.id !== id));
    }
  };

  const handleSaveMember = (member: Member) => {
    if (member.id === 0) {
      // New member
      setMembers([...members, { ...member, id: Date.now() }]);
      setIsAddingMember(false);
    } else {
      // Update existing
      setMembers(members.map(m => m.id === member.id ? member : m));
      setEditingMember(null);
    }
  };

  const handleToggleMemberStatus = (id: number) => {
    setMembers(members.map(m => 
      m.id === id ? { ...m, status: m.status === 'active' ? 'inactive' : 'active' } : m
    ));
  };

  // Schedule CRUD Functions
  const handleDeleteSchedule = (id: number) => {
    if (confirm('정말 삭제하시겠습니까?')) {
      setSchedules(schedules.filter(s => s.id !== id));
    }
  };

  const handleSaveSchedule = (schedule: ScheduleItem) => {
    if (schedule.id === 0) {
      // New schedule
      setSchedules([...schedules, { ...schedule, id: Date.now() }]);
      setIsAddingSchedule(false);
    } else {
      // Update existing
      setSchedules(schedules.map(s => s.id === schedule.id ? schedule : s));
      setEditingSchedule(null);
    }
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-block bg-[#ff6b35] px-6 py-2 mb-6 border-4 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)]">
            <span className="text-black uppercase tracking-[0.3em] text-sm">ADMIN</span>
          </div>
          <h1 className="text-white uppercase tracking-wider mb-4" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>
            관리자 대시보드
          </h1>
          <div className="h-1 w-32 bg-[#ff6b35]"></div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveTab('members')}
            className={`flex items-center gap-3 px-8 py-4 border-4 transition-all uppercase tracking-wider ${
              activeTab === 'members'
                ? 'bg-[#ff6b35] text-black border-black shadow-[6px_6px_0px_rgba(0,0,0,1)]'
                : 'bg-black/50 text-white border-white/30 hover:border-[#ff6b35]'
            }`}
          >
            <Users className="w-5 h-5" />
            <span>회원 관리</span>
          </button>
          <button
            onClick={() => setActiveTab('schedule')}
            className={`flex items-center gap-3 px-8 py-4 border-4 transition-all uppercase tracking-wider ${
              activeTab === 'schedule'
                ? 'bg-[#ff6b35] text-black border-black shadow-[6px_6px_0px_rgba(0,0,0,1)]'
                : 'bg-black/50 text-white border-white/30 hover:border-[#ff6b35]'
            }`}
          >
            <Calendar className="w-5 h-5" />
            <span>스케줄 관리</span>
          </button>
        </div>

        {/* Members Tab */}
        {activeTab === 'members' && (
          <div className="bg-black/50 border-4 border-[#ff6b35] p-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-white uppercase tracking-wider">회원 목록</h2>
              <button
                onClick={() => setIsAddingMember(true)}
                className="flex items-center gap-2 bg-[#ff6b35] hover:bg-[#ff8554] text-black px-6 py-3 border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all uppercase tracking-wider text-sm"
              >
                <Plus className="w-4 h-4" />
                추가
              </button>
            </div>

            {/* Members Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-[#ff6b35]">
                    <th className="text-left text-white/80 uppercase tracking-wider text-sm py-4 px-4">이름</th>
                    <th className="text-left text-white/80 uppercase tracking-wider text-sm py-4 px-4">이메일</th>
                    <th className="text-left text-white/80 uppercase tracking-wider text-sm py-4 px-4">전화번호</th>
                    <th className="text-left text-white/80 uppercase tracking-wider text-sm py-4 px-4">가입일</th>
                    <th className="text-left text-white/80 uppercase tracking-wider text-sm py-4 px-4">상태</th>
                    <th className="text-right text-white/80 uppercase tracking-wider text-sm py-4 px-4">관리</th>
                  </tr>
                </thead>
                <tbody>
                  {members.map(member => (
                    <tr key={member.id} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                      <td className="py-4 px-4 text-white">{member.name}</td>
                      <td className="py-4 px-4 text-white/70">{member.email}</td>
                      <td className="py-4 px-4 text-white/70">{member.phone}</td>
                      <td className="py-4 px-4 text-white/70">{member.joinDate}</td>
                      <td className="py-4 px-4">
                        <button
                          onClick={() => handleToggleMemberStatus(member.id)}
                          className={`px-3 py-1 text-xs uppercase tracking-wider border-2 ${
                            member.status === 'active'
                              ? 'bg-[#ff6b35] text-black border-[#ff6b35]'
                              : 'bg-transparent text-white/50 border-white/30'
                          }`}
                        >
                          {member.status === 'active' ? '활성' : '비활성'}
                        </button>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex gap-2 justify-end">
                          <button
                            onClick={() => setEditingMember(member)}
                            className="p-2 bg-white/10 hover:bg-[#ff6b35] hover:text-black text-white transition-colors border-2 border-white/30 hover:border-[#ff6b35]"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteMember(member.id)}
                            className="p-2 bg-white/10 hover:bg-red-600 text-white transition-colors border-2 border-white/30 hover:border-red-600"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Schedule Tab */}
        {activeTab === 'schedule' && (
          <div className="bg-black/50 border-4 border-[#ff6b35] p-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-white uppercase tracking-wider">스케줄 목록</h2>
              <button
                onClick={() => setIsAddingSchedule(true)}
                className="flex items-center gap-2 bg-[#ff6b35] hover:bg-[#ff8554] text-black px-6 py-3 border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all uppercase tracking-wider text-sm"
              >
                <Plus className="w-4 h-4" />
                추가
              </button>
            </div>

            {/* Schedule Grid */}
            <div className="grid gap-6">
              {schedules.map(schedule => (
                <div key={schedule.id} className="bg-black/70 border-l-4 border-[#ff6b35] p-6 flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="text-[#ff6b35]">{schedule.date}</div>
                      <div className="text-white/60">|</div>
                      <div className="text-white">{schedule.time}</div>
                    </div>
                    <h3 className="text-white mb-2">{schedule.description}</h3>
                    <div className="flex gap-6 text-sm text-white/70">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {schedule.location}
                      </div>
                      <div>{schedule.distance}</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setEditingSchedule(schedule)}
                      className="p-2 bg-white/10 hover:bg-[#ff6b35] hover:text-black text-white transition-colors border-2 border-white/30 hover:border-[#ff6b35]"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteSchedule(schedule.id)}
                      className="p-2 bg-white/10 hover:bg-red-600 text-white transition-colors border-2 border-white/30 hover:border-red-600"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Edit Member Modal */}
        {(editingMember || isAddingMember) && (
          <MemberEditModal
            member={editingMember || {
              id: 0,
              name: '',
              email: '',
              phone: '',
              joinDate: new Date().toISOString().split('T')[0],
              status: 'active'
            }}
            onSave={handleSaveMember}
            onClose={() => {
              setEditingMember(null);
              setIsAddingMember(false);
            }}
          />
        )}

        {/* Edit Schedule Modal */}
        {(editingSchedule || isAddingSchedule) && (
          <ScheduleEditModal
            schedule={editingSchedule || {
              id: 0,
              date: '',
              time: '',
              location: '',
              distance: '',
              description: ''
            }}
            onSave={handleSaveSchedule}
            onClose={() => {
              setEditingSchedule(null);
              setIsAddingSchedule(false);
            }}
          />
        )}
      </div>
    </div>
  );
}

// Member Edit Modal Component
function MemberEditModal({ member, onSave, onClose }: {
  member: Member;
  onSave: (member: Member) => void;
  onClose: () => void;
}) {
  const [formData, setFormData] = useState(member);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative bg-[#1a1a1a] border-4 border-[#ff6b35] shadow-[16px_16px_0px_rgba(255,107,53,0.3)] max-w-md w-full">
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 bg-[#ff6b35] hover:bg-[#ff8554] text-black p-3 border-4 border-black transition-all"
        >
          <X className="w-6 h-6" strokeWidth={3} />
        </button>

        <div className="bg-[#ff6b35] p-6 border-b-4 border-black">
          <h3 className="text-black uppercase tracking-[0.3em] text-center">
            {member.id === 0 ? '회원 추가' : '회원 수정'}
          </h3>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-white/80 uppercase tracking-wider text-sm mb-2">이름</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-black/50 border-2 border-[#ff6b35] text-white px-4 py-3 focus:outline-none focus:border-[#ff8554]"
              required
            />
          </div>
          <div>
            <label className="block text-white/80 uppercase tracking-wider text-sm mb-2">이메일</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-black/50 border-2 border-[#ff6b35] text-white px-4 py-3 focus:outline-none focus:border-[#ff8554]"
              required
            />
          </div>
          <div>
            <label className="block text-white/80 uppercase tracking-wider text-sm mb-2">전화번호</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full bg-black/50 border-2 border-[#ff6b35] text-white px-4 py-3 focus:outline-none focus:border-[#ff8554]"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-[#ff6b35] hover:bg-[#ff8554] text-black px-6 py-4 border-4 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] transition-all uppercase tracking-wider"
          >
            <Save className="w-5 h-5" />
            저장
          </button>
        </form>
      </div>
    </div>
  );
}

// Schedule Edit Modal Component
function ScheduleEditModal({ schedule, onSave, onClose }: {
  schedule: ScheduleItem;
  onSave: (schedule: ScheduleItem) => void;
  onClose: () => void;
}) {
  const [formData, setFormData] = useState(schedule);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative bg-[#1a1a1a] border-4 border-[#ff6b35] shadow-[16px_16px_0px_rgba(255,107,53,0.3)] max-w-md w-full">
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 bg-[#ff6b35] hover:bg-[#ff8554] text-black p-3 border-4 border-black transition-all"
        >
          <X className="w-6 h-6" strokeWidth={3} />
        </button>

        <div className="bg-[#ff6b35] p-6 border-b-4 border-black">
          <h3 className="text-black uppercase tracking-[0.3em] text-center">
            {schedule.id === 0 ? '스케줄 추가' : '스케줄 수정'}
          </h3>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-white/80 uppercase tracking-wider text-sm mb-2">날짜</label>
            <input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="w-full bg-black/50 border-2 border-[#ff6b35] text-white px-4 py-3 focus:outline-none focus:border-[#ff8554]"
              required
            />
          </div>
          <div>
            <label className="block text-white/80 uppercase tracking-wider text-sm mb-2">시간</label>
            <input
              type="time"
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
              className="w-full bg-black/50 border-2 border-[#ff6b35] text-white px-4 py-3 focus:outline-none focus:border-[#ff8554]"
              required
            />
          </div>
          <div>
            <label className="block text-white/80 uppercase tracking-wider text-sm mb-2">장소</label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="w-full bg-black/50 border-2 border-[#ff6b35] text-white px-4 py-3 focus:outline-none focus:border-[#ff8554]"
              required
            />
          </div>
          <div>
            <label className="block text-white/80 uppercase tracking-wider text-sm mb-2">거리</label>
            <input
              type="text"
              value={formData.distance}
              onChange={(e) => setFormData({ ...formData, distance: e.target.value })}
              className="w-full bg-black/50 border-2 border-[#ff6b35] text-white px-4 py-3 focus:outline-none focus:border-[#ff8554]"
              placeholder="예: 10km"
              required
            />
          </div>
          <div>
            <label className="block text-white/80 uppercase tracking-wider text-sm mb-2">설명</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full bg-black/50 border-2 border-[#ff6b35] text-white px-4 py-3 focus:outline-none focus:border-[#ff8554] min-h-[100px]"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-[#ff6b35] hover:bg-[#ff8554] text-black px-6 py-4 border-4 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] transition-all uppercase tracking-wider"
          >
            <Save className="w-5 h-5" />
            저장
          </button>
        </form>
      </div>
    </div>
  );
}
