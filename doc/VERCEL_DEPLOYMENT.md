# Vercel 배포 가이드

## 📋 목차
1. [Vercel 프로젝트 설정](#vercel-프로젝트-설정)
2. [환경변수 설정](#환경변수-설정)
3. [빌드 설정](#빌드-설정)
4. [배포 확인](#배포-확인)
5. [도메인 연결](#도메인-연결)

---

## 1. Vercel 프로젝트 설정

### 1.1 Vercel 회원가입
1. [Vercel 웹사이트](https://vercel.com) 접속
2. GitHub 계정으로 로그인
3. "Continue with GitHub" 클릭

### 1.2 프로젝트 Import
1. Vercel 대시보드에서 "Add New..." → "Project" 클릭
2. GitHub 저장소 선택 (urban-runners)
3. "Import" 클릭

### 1.3 프로젝트 설정 확인
```yaml
Framework Preset: Next.js
Root Directory: ./
Build Command: npm run build (자동 감지)
Output Directory: .next (자동 감지)
Install Command: npm install (자동 감지)
```

---

## 2. 환경변수 설정

### 2.1 Vercel 대시보드에서 설정
1. 프로젝트 선택
2. "Settings" 탭 클릭
3. 사이드바에서 "Environment Variables" 클릭
4. 아래 환경변수들을 하나씩 추가

### 2.2 필수 환경변수 목록

#### Supabase 설정
```bash
# Variable Name: NEXT_PUBLIC_SUPABASE_URL
# Value: https://your-project.supabase.co
# Environments: ✅ Production ✅ Preview ✅ Development

# Variable Name: NEXT_PUBLIC_SUPABASE_ANON_KEY
# Value: your-supabase-anon-key-here
# Environments: ✅ Production ✅ Preview ✅ Development

# Variable Name: SUPABASE_SERVICE_ROLE_KEY
# Value: your-supabase-service-role-key-here
# Environments: ✅ Production ✅ Preview ✅ Development
```

#### NextAuth.js 설정
```bash
# Variable Name: NEXTAUTH_URL
# Value: https://your-domain.vercel.app (또는 커스텀 도메인)
# Environments: ✅ Production

# Variable Name: NEXTAUTH_URL
# Value: https://your-preview-url.vercel.app
# Environments: ✅ Preview

# Variable Name: NEXTAUTH_URL
# Value: http://localhost:3000
# Environments: ✅ Development

# Variable Name: NEXTAUTH_SECRET
# Value: (openssl rand -base64 32로 생성한 값)
# Environments: ✅ Production ✅ Preview ✅ Development
```

#### Google OAuth 설정
```bash
# Variable Name: GOOGLE_CLIENT_ID
# Value: your-google-client-id.apps.googleusercontent.com
# Environments: ✅ Production ✅ Preview ✅ Development

# Variable Name: GOOGLE_CLIENT_SECRET
# Value: your-google-client-secret
# Environments: ✅ Production ✅ Preview ✅ Development
```

#### Kakao OAuth 설정
```bash
# Variable Name: KAKAO_CLIENT_ID
# Value: your-kakao-client-id
# Environments: ✅ Production ✅ Preview ✅ Development

# Variable Name: KAKAO_CLIENT_SECRET
# Value: your-kakao-client-secret
# Environments: ✅ Production ✅ Preview ✅ Development
```

#### 앱 설정
```bash
# Variable Name: NEXT_PUBLIC_APP_URL
# Value: https://your-domain.vercel.app
# Environments: ✅ Production

# Variable Name: NEXT_PUBLIC_APP_URL
# Value: https://your-preview-url.vercel.app
# Environments: ✅ Preview

# Variable Name: NODE_ENV
# Value: production
# Environments: ✅ Production
```

### 2.3 환경변수 추가 방법

**UI에서 추가**:
1. "Key" 필드에 변수명 입력 (예: `NEXT_PUBLIC_SUPABASE_URL`)
2. "Value" 필드에 실제 값 입력
3. Environment 선택 (Production, Preview, Development)
4. "Save" 클릭

**CLI로 추가** (선택사항):
```bash
# Vercel CLI 설치
npm i -g vercel

# 로그인
vercel login

# 프로젝트 연결
vercel link

# 환경변수 추가
vercel env add NEXT_PUBLIC_SUPABASE_URL production
vercel env add NEXT_PUBLIC_SUPABASE_URL preview
vercel env add NEXT_PUBLIC_SUPABASE_URL development

# 환경변수 확인
vercel env ls
```

---

## 3. 빌드 설정

### 3.1 vercel.json 파일 생성 (선택사항)
```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "regions": ["icn1"],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

### 3.2 빌드 최적화
```javascript
// next.config.ts
const config = {
  // 이미지 최적화
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },

  // 압축 활성화
  compress: true,

  // 프로덕션 소스맵 (선택사항, 디버깅 필요 시)
  productionBrowserSourceMaps: false,
};

export default config;
```

---

## 4. 배포 확인

### 4.1 자동 배포
- `main` 브랜치에 push하면 자동으로 프로덕션 배포
- PR 생성 시 자동으로 Preview 배포 생성

### 4.2 수동 배포
```bash
# CLI로 배포
vercel --prod

# 특정 브랜치 배포
vercel --prod --target production
```

### 4.3 배포 확인 체크리스트
- [ ] 홈페이지 정상 로드
- [ ] 모든 페이지 접근 가능
- [ ] 환경변수 정상 작동
- [ ] OAuth 로그인 정상 작동
- [ ] 이미지 정상 표시
- [ ] 모바일 반응형 정상
- [ ] Lighthouse 점수 90+ 확인

### 4.4 Lighthouse 검사
1. Chrome DevTools 열기 (F12)
2. "Lighthouse" 탭 선택
3. "Analyze page load" 클릭
4. 점수 확인:
   - Performance: 90+
   - Accessibility: 90+
   - Best Practices: 90+
   - SEO: 90+

---

## 5. 도메인 연결

### 5.1 커스텀 도메인 추가
1. Vercel 프로젝트 → "Settings" → "Domains"
2. "Add" 버튼 클릭
3. 도메인 입력 (예: `urbanrunners.com`)
4. DNS 설정 지침 따라하기

### 5.2 DNS 설정

**방법 1: A 레코드** (Recommended)
```
Type: A
Name: @
Value: 76.76.21.21
```

**방법 2: CNAME 레코드**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### 5.3 SSL 인증서
- Vercel에서 자동으로 Let's Encrypt SSL 인증서 발급
- 보통 5-10분 내 완료

---

## 6. 환경별 OAuth 리디렉션 URI 설정

### 6.1 Google OAuth
**Google Cloud Console** → **OAuth 2.0 클라이언트 ID** → **승인된 리디렉션 URI**

```
개발:
http://localhost:3000/api/auth/callback/google

Preview:
https://your-preview-url.vercel.app/api/auth/callback/google

프로덕션:
https://your-domain.vercel.app/api/auth/callback/google
https://www.your-domain.com/api/auth/callback/google
```

### 6.2 Kakao OAuth
**Kakao Developers** → **내 애플리케이션** → **카카오 로그인** → **Redirect URI**

```
개발:
http://localhost:3000/api/auth/callback/kakao

Preview:
https://your-preview-url.vercel.app/api/auth/callback/kakao

프로덕션:
https://your-domain.vercel.app/api/auth/callback/kakao
https://www.your-domain.com/api/auth/callback/kakao
```

---

## 7. CI/CD with GitHub Actions (선택사항)

### 7.1 `.github/workflows/deploy.yml`
```yaml
name: Deploy to Vercel

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run linter
        run: npm run lint

      - name: Run type check
        run: npx tsc --noEmit

      - name: Build project
        run: npm run build
        env:
          NEXT_PUBLIC_SUPABASE_URL: ${{ secrets.NEXT_PUBLIC_SUPABASE_URL }}
          NEXT_PUBLIC_SUPABASE_ANON_KEY: ${{ secrets.NEXT_PUBLIC_SUPABASE_ANON_KEY }}

      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: ${{ github.ref == 'refs/heads/main' && '--prod' || '' }}
```

---

## 8. 트러블슈팅

### 8.1 빌드 실패
**문제**: `Error: Process completed with exit code 1`

**해결**:
1. 로컬에서 `npm run build` 실행하여 에러 확인
2. TypeScript 에러 수정
3. ESLint 경고 해결
4. 환경변수 누락 확인

### 8.2 환경변수 미작동
**문제**: OAuth 로그인 실패, API 호출 실패

**해결**:
1. Vercel 대시보드에서 환경변수 재확인
2. `NEXT_PUBLIC_` 접두사 확인 (클라이언트에서 사용 시)
3. 배포 후 환경변수 변경 시 재배포 필요

### 8.3 OAuth 리디렉션 에러
**문제**: `redirect_uri_mismatch`

**해결**:
1. Google/Kakao 콘솔에서 리디렉션 URI 확인
2. `https://` 프로토콜 사용 확인
3. 도메인 정확히 일치하는지 확인

### 8.4 이미지 로딩 실패
**문제**: 이미지가 표시되지 않음

**해결**:
```javascript
// next.config.ts
const config = {
  images: {
    domains: ['your-supabase-project.supabase.co'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.supabase.co',
      },
    ],
  },
};
```

---

## 9. 모니터링 및 분석

### 9.1 Vercel Analytics
1. 프로젝트 → "Analytics" 탭
2. 실시간 방문자, 페이지 뷰 확인
3. Core Web Vitals 점수 확인

### 9.2 Vercel Speed Insights
```bash
# 설치
npm install @vercel/speed-insights

# app/layout.tsx에 추가
import { SpeedInsights } from '@vercel/speed-insights/next'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
```

---

## 10. 체크리스트

### 배포 전
- [ ] 모든 환경변수 설정 완료
- [ ] 로컬에서 `npm run build` 성공
- [ ] TypeScript 에러 없음
- [ ] ESLint 경고 해결
- [ ] OAuth 리디렉션 URI 등록

### 배포 후
- [ ] 프로덕션 URL 정상 접근
- [ ] 모든 페이지 로딩 확인
- [ ] OAuth 로그인 테스트
- [ ] 모바일 반응형 확인
- [ ] Lighthouse 점수 확인
- [ ] 커스텀 도메인 연결 (선택)

---

**문서 버전**: 1.0
**최종 수정일**: 2024-12-14
**작성자**: Development Team
