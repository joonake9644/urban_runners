# Urban Runners 종합 개발 계획서

## 📋 프로젝트 개요

**프로젝트명**: Urban Runners 러닝 크루 홈페이지
**디자인 컨셉**: 네오 브루탈리즘 (Neo-Brutalism)
**기술 스택**: Next.js 15.1 + TypeScript + Supabase + next-auth
**개발 기간**: 4-5주 (Phase 1-4)

---

## 🎯 핵심 요구사항 정리

### 1. PRD 분석 요약

#### 우선순위별 페이지 구성
- 🔴 **최우선**: HOME
- 🟠 **높음**: ABOUT, SCHEDULE, JOIN CREW, LOGIN
- 🟡 **중간**: MEMBERSHIP, ROUTES, DASHBOARD, LOADING
- 🟢 **낮음**: GALLERY, FEEDBACK

#### 디자인 시스템 핵심 요소
- **컬러**: 오렌지(#FF6B00), 블랙(#000000), 콘크리트 그레이(#CCCCCC)
- **타이포그래피**: Impact/Arial Black, 900 weight, UPPERCASE
- **테두리**: 4-6px 굵은 검은 테두리
- **그림자**: box-shadow: 8px 8px 0 0 black
- **모서리**: border-radius: 0 (날카로운 모서리)
- **배경**: 콘크리트 텍스처, 균열 효과

### 2. TRD 분석 요약

#### 기술 스택
```yaml
Frontend:
  - Next.js 15.1 (App Router)
  - TypeScript 5.0+
  - shadcn/ui
  - Tailwind CSS 3.4+
  - framer-motion (애니메이션)

Backend:
  - Supabase (PostgreSQL)
  - Supabase Auth
  - Supabase Storage

Authentication:
  - next-auth v4
  - Google OAuth ✅ (추가 필요)
  - Kakao OAuth ✅ (이미 설정됨)

Deployment:
  - Vercel
  - GitHub Actions (CI/CD)
```

#### 데이터베이스 스키마
- **users**: 사용자 정보
- **runs**: 러닝 기록
- **memberships**: 멤버십 정보
- **routes**: 러닝 코스
- **schedules**: 러닝 일정

### 3. 현재 프로젝트 상태 분석

#### ✅ 이미 완료된 항목
- Next.js 15.1 프로젝트 초기화
- Tailwind CSS 설정
- shadcn/ui 컴포넌트 설치
- Supabase 클라이언트 설정
- next-auth 기본 설정
- Kakao OAuth 설정

#### ⚠️ 수정/추가 필요 항목
- Google OAuth 설정 및 활성화
- Brutalism 디자인 시스템 Tailwind 설정
- 모든 페이지 디자인 구현
- Supabase 데이터베이스 마이그레이션
- 컴포넌트 재사용성 최적화

---

## 📊 단계별 개발 계획

### Phase 0: 사전 준비 (1일)

#### 목표
- 개발 환경 검증
- 디자인 시스템 구축
- 프로젝트 구조 최적화

#### 작업 목록
1. ✅ **환경변수 확인**
   - `.env.local` 파일 검증
   - Google OAuth 키 추가
   - Supabase 연결 테스트

2. ✅ **Tailwind 설정 확장**
   - Brutalism 디자인 토큰 추가
   - 커스텀 색상, 폰트, 그림자 정의
   - 애니메이션 키프레임 추가

3. ✅ **globals.css 수정**
   - 콘크리트 텍스처 CSS
   - 타이포그래피 기본 설정
   - 리셋 스타일

4. ✅ **프로젝트 폴더 구조 정리**
```
src/
├── app/
│   ├── (auth)/          # 인증 관련 페이지 그룹
│   │   ├── login/
│   │   └── join/
│   ├── (main)/          # 메인 페이지 그룹
│   │   ├── about/
│   │   ├── schedule/
│   │   ├── membership/
│   │   ├── routes/
│   │   └── gallery/
│   ├── (dashboard)/     # 보호된 페이지 그룹
│   │   └── dashboard/
│   └── api/
├── components/
│   ├── brutal/          # Brutalism 컴포넌트
│   │   ├── BrutalButton.tsx
│   │   ├── BrutalInput.tsx
│   │   ├── BrutalCard.tsx
│   │   ├── ConcreteTexture.tsx
│   │   └── RunnerSilhouette.tsx
│   ├── layout/
│   │   ├── Navigation.tsx
│   │   └── Footer.tsx
│   └── ui/              # shadcn 컴포넌트 (기존 유지)
├── lib/
│   ├── supabase/
│   ├── auth/
│   └── utils/
└── types/
```

---

### Phase 1: 디자인 시스템 + 공통 컴포넌트 (3-4일)

#### 목표
- 재사용 가능한 Brutalism 컴포넌트 개발
- 디자인 일관성 확보
- 중복 코드 최소화

#### 작업 목록

##### 1.1 Tailwind Config 확장
```typescript
// tailwind.config.ts
extend: {
  colors: {
    'brutal-orange': '#FF6B00',
    'brutal-gray': '#CCCCCC',
    concrete: {
      100: '#F5F5F5',
      200: '#E5E5E5',
      300: '#D4D4D4',
      400: '#A3A3A3',
      500: '#737373',
    },
  },
  fontFamily: {
    brutal: ['Impact', 'Arial Black', 'sans-serif'],
  },
  boxShadow: {
    brutal: '8px 8px 0px 0px rgba(0,0,0,1)',
    'brutal-sm': '4px 4px 0px 0px rgba(0,0,0,1)',
    'brutal-lg': '12px 12px 0px 0px rgba(0,0,0,1)',
  },
  borderWidth: {
    '3': '3px',
    '5': '5px',
    '6': '6px',
  },
}
```

##### 1.2 BrutalButton 컴포넌트
- variant: primary, secondary, accent-green, accent-blue, accent-red
- size: sm, md, lg
- hover 효과: scale + 색상 반전
- 재사용성 극대화

##### 1.3 BrutalInput 컴포넌트
- 흰색 배경 + 굵은 검은 테두리
- 포커스 시 오렌지 테두리
- label, error 메시지 통합

##### 1.4 BrutalCard 컴포넌트
- StatCard: 통계 표시용 (Dashboard)
- InfoCard: 정보 표시용 (About, Membership)

##### 1.5 ConcreteTexture 컴포넌트
- SVG 패턴 기반
- 콘크리트 균열 효과
- 노이즈 점 추가

##### 1.6 RunnerSilhouette 컴포넌트
- framer-motion 애니메이션
- 좌→우 이동 루프
- 다양한 포즈 변형 가능

##### 1.7 Navigation 컴포넌트
- 고정 상단 네비게이션
- 반응형 햄버거 메뉴 (모바일)
- 로그인 상태 표시

##### 1.8 LoadingBar 컴포넌트
- 3단계 메시지: CONNECTING → SYNCING DATA → READY TO RUN
- 프로그레스 바 애니메이션
- 글로우 효과

#### 완료 기준
- [ ] 모든 컴포넌트 Storybook 테스트 (선택)
- [ ] TypeScript 타입 정의 완료
- [ ] 반응형 디자인 검증
- [ ] 재사용성 검토 (3회 이상 사용 가능)

---

### Phase 2: 인증 시스템 구축 (2-3일)

#### 목표
- Google + Kakao OAuth 로그인 구현
- Supabase Auth 연동
- 세션 관리 및 Protected Routes

#### 작업 목록

##### 2.1 Google OAuth 설정
1. **Google Cloud Console**
   - 프로젝트 생성
   - OAuth 2.0 클라이언트 ID 생성
   - 승인된 리디렉션 URI 설정

2. **환경변수 추가**
```bash
# .env.local
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

3. **next-auth 설정 수정**
```typescript
// src/lib/auth.ts
GoogleProvider({
  clientId: process.env.GOOGLE_CLIENT_ID || '',
  clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
})
```

##### 2.2 Supabase 연동
1. **Users 테이블 생성**
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) UNIQUE NOT NULL,
  username VARCHAR(100) UNIQUE NOT NULL,
  full_name VARCHAR(255),
  running_level VARCHAR(50) CHECK (running_level IN ('beginner', 'intermediate', 'advanced')),
  avatar_url TEXT,
  provider VARCHAR(50), -- 'google', 'kakao', 'credentials'
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

2. **RLS 정책 설정**
```sql
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own data"
  ON users FOR SELECT
  USING (auth.uid() = id);
```

##### 2.3 회원가입/로그인 흐름
```
[JOIN CREW 페이지]
  ↓
사용자 정보 입력 (Name, Email, Password, Running Level)
  ↓
next-auth signUp → Supabase users 테이블 insert
  ↓
자동 로그인 → Dashboard 리디렉트

[LOGIN 페이지]
  ↓
옵션 1: 아이디/비밀번호 로그인
옵션 2: Google OAuth 로그인
옵션 3: Kakao OAuth 로그인
  ↓
세션 생성 → Dashboard 리디렉트
```

##### 2.4 Protected Routes 미들웨어
```typescript
// middleware.ts
export { default } from "next-auth/middleware"

export const config = {
  matcher: ["/dashboard/:path*"]
}
```

#### 완료 기준
- [ ] Google 로그인 정상 작동
- [ ] Kakao 로그인 정상 작동
- [ ] 회원가입 후 DB 저장 확인
- [ ] 세션 유지 확인
- [ ] 로그아웃 정상 작동

---

### Phase 3: 정적 페이지 구현 (5-6일)

#### 우선순위 1: HOME 페이지 (1일)

**화면 구성** (`public/screens/home.png` 참조)
- 콘크리트 배경 텍스처
- "URBAN RUNNERS" 대제목 (Impact 폰트)
- "NO LIMITS" 태그라인 (오렌지)
- "CONCRETE MILES / RAW SPEED" 서브카피
- 5개 CTA 버튼:
  - JOIN CREW → `/join`
  - ADVISORY → `/about`
  - QUICK FACTS → `/about#facts`
  - STATISTICS → `/dashboard`
  - CONTACT US → `#footer`
- 러너 실루엣 애니메이션

**구현 파일**: `src/app/page.tsx`

**핵심 코드**:
```tsx
export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-concrete-200 overflow-hidden">
      <ConcreteTexture />

      <div className="relative z-10 flex flex-col items-start justify-center min-h-screen px-8 md:px-16">
        <h1 className="font-brutal text-8xl md:text-[12rem] leading-none text-black uppercase">
          URBAN<br />RUNNERS
        </h1>

        <p className="text-brutal-orange font-brutal text-4xl mt-4">
          NO LIMITS
        </p>

        <div className="flex gap-4 mt-2 text-black font-brutal text-xl">
          <span>CONCRETE MILES</span>
          <span className="text-brutal-orange">/</span>
          <span>RAW SPEED</span>
        </div>

        <div className="flex flex-col gap-4 mt-12">
          <BrutalButton href="/join" variant="primary" size="lg">
            JOIN CREW
          </BrutalButton>
          <BrutalButton href="/about" variant="primary" size="md">
            ADVISORY
          </BrutalButton>
          {/* ... 나머지 버튼 */}
        </div>
      </div>

      <RunnerSilhouette />
    </div>
  );
}
```

#### 우선순위 2: JOIN CREW 페이지 (1일)

**화면 구성** (`public/screens/joincrew.png` 참조)
- "JOIN CREW" 대제목
- "SIGN UP" 서브타이틀
- 2열 그리드 레이아웃:
  - NAME, EMAIL
  - PASSWORD, RUNNING LEVEL (Select)
- "CREATE ACCOUNT" 버튼 (전체 폭)
- OAuth 로그인 버튼:
  - "Sign up with Google"
  - "Sign up with Kakao"

**구현 파일**: `src/app/(auth)/join/page.tsx`

**핵심 기능**:
- react-hook-form + zod 유효성 검사
- next-auth signIn 연동
- 회원가입 성공 시 Dashboard 리디렉트

#### 우선순위 3: LOGIN 페이지 (1일)

**화면 구성** (`public/screens/login.png` 참조)
- "MEMBER LOGIN" 대제목
- "ACCESS CREW" 서브타이틀
- USERNAME, PASSWORD 입력
- "ENTER SYSTEM" 버튼
- "FORGOT" / "ACCESS?" 링크
- OAuth 로그인 버튼

**구현 파일**: `src/app/(auth)/login/page.tsx`

#### 우선순위 4: ABOUT 페이지 (1일)

**화면 구성** (`public/screens/about.png` 참조)
- EST. 2020
- 248 MEMBERS
- STEEL COMMITMENT 메시지
- 러너 실루엣

**구현 파일**: `src/app/(main)/about/page.tsx`

#### 우선순위 5: SCHEDULE 페이지 (1일)

**화면 구성** (`public/screens/schedule.png` 참조)
- "WCHEDULE SCHEDULE" 타이포 효과
- MON-WED 그룹 (오렌지 박스)
- THU-SAT 그룹 (오렌지 박스)
- "CONSISTENCY" 메시지

**구현 파일**: `src/app/(main)/schedule/page.tsx`

#### 우선순위 6: DASHBOARD 페이지 (1일)

**화면 구성** (`public/screens/dashboard.png` 참조)
- "DASHBOARD" 대제목
- "MEMBER STATUS" 서브타이틀
- 4개 통계 카드:
  - TOTAL RUNS: 24 (오렌지)
  - THIS WEEK: 5KM (녹색)
  - BEST TIME: 22:15 (파란색)
  - RANK: #12 (빨간색)
- "NEXT RUN" 버튼

**구현 파일**: `src/app/(dashboard)/dashboard/page.tsx`

**데이터**: 초기에는 모킹 데이터, Phase 4에서 실제 DB 연동

#### 완료 기준
- [ ] 모든 페이지 public/screens 이미지와 일치
- [ ] 반응형 디자인 검증 (모바일, 태블릿, 데스크톱)
- [ ] 네비게이션 연결 확인
- [ ] 애니메이션 정상 작동

---

### Phase 4: 동적 기능 + DB 연동 (4-5일)

#### 4.1 Supabase 마이그레이션 (1일)

**작업 목록**:
1. runs 테이블 생성
2. memberships 테이블 생성
3. routes 테이블 생성
4. schedules 테이블 생성
5. 초기 시드 데이터 삽입

**파일**: `supabase/migrations/`

##### runs 테이블
```sql
CREATE TABLE runs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  distance_km DECIMAL(5,2) NOT NULL CHECK (distance_km > 0),
  duration_minutes INTEGER NOT NULL CHECK (duration_minutes > 0),
  route_name VARCHAR(255),
  pace_per_km DECIMAL(4,2),
  run_date TIMESTAMP WITH TIME ZONE NOT NULL,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_runs_user_id ON runs(user_id);
CREATE INDEX idx_runs_run_date ON runs(run_date DESC);
```

##### memberships 테이블
```sql
CREATE TABLE memberships (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  tier VARCHAR(50) NOT NULL CHECK (tier IN ('basic', 'elite')),
  start_date DATE NOT NULL,
  end_date DATE,
  status VARCHAR(50) DEFAULT 'active',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

##### routes 테이블
```sql
CREATE TABLE routes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  distance_km DECIMAL(5,2) NOT NULL,
  difficulty VARCHAR(50) CHECK (difficulty IN ('easy', 'medium', 'hard')),
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 초기 데이터
INSERT INTO routes (name, distance_km, difficulty, description) VALUES
  ('5KM LOOP', 5.0, 'easy', '초급자용 5km 코스'),
  ('10KM CHALLENGE', 10.0, 'medium', '중급자용 10km 코스'),
  ('MARATHON PREP', 21.1, 'hard', '하프 마라톤 코스');
```

##### schedules 테이블
```sql
CREATE TABLE schedules (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  day_of_week VARCHAR(20) NOT NULL CHECK (day_of_week IN ('MON-WED', 'THU-SAT')),
  time TIME NOT NULL,
  route_id UUID REFERENCES routes(id),
  capacity INTEGER DEFAULT 30,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### 4.2 API Routes 구현 (2일)

##### GET /api/users/[id]/stats
```typescript
// 사용자 통계 조회
{
  totalRuns: number,
  totalDistance: number,
  thisWeekDistance: number,
  bestTime: string,
  rank: number
}
```

##### GET/POST /api/runs
```typescript
// 러닝 기록 조회/생성
```

##### GET /api/schedules
```typescript
// 러닝 일정 조회
```

#### 4.3 Dashboard 실제 데이터 연동 (1일)

**작업**:
- useAuth 훅으로 현재 사용자 정보 가져오기
- Supabase 쿼리로 통계 계산
- StatCard 컴포넌트에 실제 데이터 바인딩

#### 4.4 MEMBERSHIP, ROUTES, GALLERY 페이지 (1일)

**MEMBERSHIP** (`public/screens/membership.png`)
- BASIC TIER, ELITE CREW 카드
- 혜택 리스트
- CONTACT 링크

**ROUTES** (`public/screens/routes.png`)
- 5KM LOOP, 10KM CHALLENGE, MARATHON PREP 카드
- 난이도 표시

**GALLERY** (`public/screens/gallery.png`)
- RECENT RUNS, ACHIEVEMENTS, EVENT PHOTOS
- 이미지 그리드 레이아웃

#### 완료 기준
- [ ] Dashboard에 실제 통계 표시
- [ ] 러닝 기록 생성/조회 가능
- [ ] 일정 DB에서 로드
- [ ] 에러 핸들링 구현

---

### Phase 5: 최종 검증 + 배포 준비 (2-3일)

#### 5.1 코드 품질 검증 (1일)

**작업 목록**:
1. **중복 코드 제거**
   - 공통 컴포넌트 추출
   - 유틸리티 함수 통합
   - 스타일 중복 제거

2. **TypeScript 타입 정의**
   - 모든 props 타입 명시
   - API 응답 타입 정의
   - Database 타입 생성 (`supabase gen types`)

3. **ESLint/Prettier 검증**
   - `npm run lint` 오류 수정
   - 코드 포맷팅 일관성 확인

4. **성능 최적화**
   - 이미지 최적화 (Next.js Image)
   - 코드 스플리팅 확인
   - Lazy loading 적용

#### 5.2 반응형 테스트 (0.5일)

**테스트 환경**:
- 모바일: 375px, 414px
- 태블릿: 768px, 1024px
- 데스크톱: 1440px, 1920px

**확인 사항**:
- [ ] 모든 페이지 반응형 동작
- [ ] 햄버거 메뉴 (모바일)
- [ ] 타이포그래피 크기 조정
- [ ] 버튼 터치 영역 충분

#### 5.3 브라우저 호환성 테스트 (0.5일)

**테스트 브라우저**:
- Chrome (최신)
- Firefox (최신)
- Safari (최신)
- Edge (최신)

#### 5.4 환경변수 보안 검증 (0.5일)

**체크리스트**:
- [ ] `.env.local`이 `.gitignore`에 포함
- [ ] 모든 키가 환경변수로 관리
- [ ] Vercel 환경변수 설정 준비
- [ ] NEXTAUTH_SECRET 생성 (`openssl rand -base64 32`)

#### 5.5 배포 설정 (0.5일)

**Vercel 배포**:
1. GitHub 저장소 연결
2. 환경변수 설정
3. 빌드 설정 확인
4. 도메인 연결 (선택)

**환경변수 설정**:
```bash
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY
NEXTAUTH_URL
NEXTAUTH_SECRET
GOOGLE_CLIENT_ID
GOOGLE_CLIENT_SECRET
KAKAO_CLIENT_ID
KAKAO_CLIENT_SECRET
```

#### 완료 기준
- [ ] 모든 테스트 통과
- [ ] 빌드 에러 없음 (`npm run build`)
- [ ] Lighthouse 점수 90+ (Performance, Accessibility)
- [ ] Vercel 배포 성공

---

## 🔄 개발 프로세스 (각 단계별)

### 단계별 워크플로우

```
1. 사전 확인 (Pre-Development)
   ↓
   - 요구사항 명확화
   - 디자인 참조 이미지 확인
   - 필요한 컴포넌트/API 파악
   - 의존성 확인

2. 개발 (Development)
   ↓
   - 기능 구현
   - 컴포넌트 작성
   - API 연동

3. 코드 오류 수정 (Bug Fixing)
   ↓
   - TypeScript 에러 수정
   - ESLint 경고 해결
   - 런타임 에러 디버깅

4. 자체 테스트 (Self Testing)
   ↓
   - 기능 동작 확인
   - 반응형 확인
   - 브라우저 테스트

5. 보고 (Report)
   ↓
   - 완료된 기능 체크리스트
   - 발견된 이슈 목록
   - 스크린샷/영상 (선택)

6. 다음 단계 보고 (Next Step Report)
   ↓
   - 다음 작업 항목
   - 예상 소요 시간
   - 필요한 리소스

7. 다음 단계 개발
   ↓
   (1번으로 돌아감)
```

### 코드 품질 기준

#### TypeScript 규칙
- `any` 타입 사용 금지
- 모든 함수에 반환 타입 명시
- Props 인터페이스 정의 필수

#### 컴포넌트 규칙
- 하나의 컴포넌트는 하나의 책임
- 100줄 이상 → 분할 고려
- Props는 5개 이하 권장

#### 재사용성 규칙
- 3회 이상 사용되는 코드는 컴포넌트/함수로 추출
- 매직 넘버/문자열 → 상수로 정의
- 중복 스타일 → Tailwind 유틸리티 클래스

---

## 📈 진행 상황 체크리스트

### Phase 0: 사전 준비
- [ ] 환경변수 설정 완료
- [ ] Tailwind Config 확장
- [ ] globals.css 수정
- [ ] 프로젝트 구조 정리

### Phase 1: 디자인 시스템
- [ ] BrutalButton 컴포넌트
- [ ] BrutalInput 컴포넌트
- [ ] BrutalCard 컴포넌트
- [ ] ConcreteTexture 컴포넌트
- [ ] RunnerSilhouette 컴포넌트
- [ ] Navigation 컴포넌트
- [ ] LoadingBar 컴포넌트

### Phase 2: 인증 시스템
- [ ] Google OAuth 설정
- [ ] Supabase Users 테이블
- [ ] next-auth 콜백 수정
- [ ] Protected Routes 미들웨어

### Phase 3: 정적 페이지
- [ ] HOME 페이지
- [ ] JOIN CREW 페이지
- [ ] LOGIN 페이지
- [ ] ABOUT 페이지
- [ ] SCHEDULE 페이지
- [ ] DASHBOARD 페이지 (모킹)

### Phase 4: 동적 기능
- [ ] Supabase 마이그레이션
- [ ] API Routes 구현
- [ ] Dashboard 실제 데이터 연동
- [ ] MEMBERSHIP, ROUTES, GALLERY 페이지

### Phase 5: 최종 검증
- [ ] 코드 품질 검증
- [ ] 반응형 테스트
- [ ] 브라우저 호환성 테스트
- [ ] 배포 준비

---

## 🚨 주의사항 및 리스크 관리

### 1. 디자인 일관성 유지
**문제**: 페이지마다 스타일이 달라질 위험
**해결**:
- 공통 컴포넌트 우선 사용
- Tailwind 유틸리티 클래스 재사용
- 디자인 토큰 엄격히 준수

### 2. 성능 이슈
**문제**: 콘크리트 텍스처 SVG로 인한 성능 저하
**해결**:
- SVG 최적화 (SVGO)
- CSS `will-change` 속성 사용
- 애니메이션 하드웨어 가속

### 3. OAuth 인증 에러
**문제**: 리디렉션 URI 불일치, CORS 에러
**해결**:
- 개발/프로덕션 환경 분리
- 정확한 리디렉션 URI 설정
- 에러 로깅 강화

### 4. Supabase RLS 정책 오류
**문제**: 데이터 접근 권한 문제
**해결**:
- RLS 정책 단계별 테스트
- Supabase Dashboard에서 쿼리 실행 확인
- 에러 메시지 상세히 분석

---

## 📚 참고 문서

### 내부 문서
- [PRD_Urban_Runners.md](./PRD_Urban_Runners.md)
- [TRD_Urban_Runners.md](./TRD_Urban_Runners.md)

### 외부 문서
- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [next-auth Documentation](https://next-auth.js.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com/)

---

## 📞 연락처 및 지원

**이슈 발생 시**:
1. GitHub Issues에 등록
2. 에러 로그 첨부
3. 재현 방법 명시

**질문 사항**:
1. 개발 팀 채널 활용
2. 문서 우선 참조
3. Stack Overflow 검색

---

## 🎉 마일스톤

| Phase | 완료 예정일 | 주요 산출물 |
|-------|------------|------------|
| Phase 0 | Day 1 | 개발 환경 설정 |
| Phase 1 | Day 4-5 | 공통 컴포넌트 7개 |
| Phase 2 | Day 7-8 | 인증 시스템 |
| Phase 3 | Day 13-14 | 6개 페이지 |
| Phase 4 | Day 18-19 | DB 연동, API |
| Phase 5 | Day 21-22 | 배포 완료 |

---

**문서 버전**: 1.0
**최종 수정일**: 2024-12-14
**작성자**: Development Team
