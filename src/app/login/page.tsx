'use client';

import { BrutalButton } from '@/components/brutal/BrutalButton';
import { ConcreteTexture } from '@/components/brutal/ConcreteTexture';
import { RunnerSilhouette } from '@/components/brutal/RunnerSilhouette';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface LoginFormData {
  username: string;
  password: string;
}

export default function LoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    console.log('Login data:', data);
    // TODO: Implement login logic
    setIsLoading(false);
  };

  return (
    <div className="relative min-h-screen bg-brutal-gray overflow-hidden">
      {/* 콘크리트 텍스처 배경 */}
      <ConcreteTexture />

      {/* 메인 콘텐츠 */}
      <div className="relative z-10 flex flex-col items-start justify-center min-h-screen px-6 md:px-12 lg:px-16 py-12">
        {/* 메인 타이틀 */}
        <h1 className="font-brutal text-[4rem] md:text-[8rem] lg:text-[10rem] leading-none text-black uppercase font-black mb-2">
          MEMBER
          <br />
          LOGIN
        </h1>

        <p className="font-brutal text-2xl md:text-4xl font-black text-black uppercase mb-12">
          ACCESS CREW
        </p>

        {/* 로그인 폼 */}
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-2xl">
          {/* USERNAME */}
          <div className="mb-6">
            <label className="font-brutal text-sm font-black uppercase text-black mb-2 block">
              USERNAME
            </label>
            <input
              {...register('username', { required: 'Username is required' })}
              type="text"
              className="brutal-input w-full"
              placeholder=""
            />
            {errors.username && (
              <p className="font-brutal text-xs font-black uppercase text-red-500 mt-2">
                {errors.username.message}
              </p>
            )}
          </div>

          {/* PASSWORD */}
          <div className="mb-6">
            <label className="font-brutal text-sm font-black uppercase text-black mb-2 block">
              PASSWORD
            </label>
            <input
              {...register('password', { required: 'Password is required' })}
              type="password"
              className="brutal-input w-full"
              placeholder=""
            />
            {errors.password && (
              <p className="font-brutal text-xs font-black uppercase text-red-500 mt-2">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* PASSWORD 재확인 - 디자인 참조 이미지에 있음 */}
          <div className="mb-8">
            <label className="font-brutal text-sm font-black uppercase text-black mb-2 block">
              PASSWORD
            </label>
            <input
              type="password"
              className="brutal-input w-full"
              placeholder=""
            />
          </div>

          {/* ENTER SYSTEM 버튼 */}
          <BrutalButton
            type="submit"
            variant="primary"
            size="xl"
            fullWidth
            disabled={isLoading}
            className="mb-6"
          >
            {isLoading ? 'LOGGING IN...' : 'ENTER SYSTEM'}
          </BrutalButton>

          {/* OAuth 로그인 버튼들 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <BrutalButton
              type="button"
              variant="secondary"
              size="md"
              fullWidth
              onClick={() => console.log('Google login')}
            >
              LOGIN WITH GOOGLE
            </BrutalButton>

            <BrutalButton
              type="button"
              variant="secondary"
              size="md"
              fullWidth
              onClick={() => console.log('Kakao login')}
            >
              LOGIN WITH KAKAO
            </BrutalButton>
          </div>

          {/* FORGOT / ACCESS? 링크 */}
          <div className="flex justify-between items-center mt-8">
            <a href="/forgot-password" className="font-brutal text-sm font-black uppercase text-black hover:text-brutal-orange transition-colors">
              FORGOT
            </a>
            <a href="/join" className="font-brutal text-sm font-black uppercase text-black hover:text-brutal-orange transition-colors">
              ACCESS?
            </a>
          </div>
        </form>
      </div>

      {/* MEMBER LOGIN 박스 (우측 상단) */}
      <div className="absolute top-1/4 right-12 md:right-24 hidden lg:block">
        <div className="brutal-card bg-white p-8 rotate-3">
          <p className="font-brutal text-4xl font-black text-black uppercase text-center">
            MEMBER
            <br />
            LOGIN
          </p>
        </div>
      </div>

      {/* 러너 실루엣 애니메이션 */}
      <RunnerSilhouette />
    </div>
  );
}
