'use client';

import { BrutalButton } from '@/components/brutal/BrutalButton';
import { BrutalInput } from '@/components/brutal/BrutalInput';
import { ConcreteTexture } from '@/components/brutal/ConcreteTexture';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface JoinFormData {
  name: string;
  email: string;
  password: string;
  runningLevel: string;
}

export default function JoinCrewPage() {
  const { register, handleSubmit, formState: { errors } } = useForm<JoinFormData>();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: JoinFormData) => {
    setIsLoading(true);
    console.log('Join data:', data);
    // TODO: Implement signup logic
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
          JOIN CREW
        </h1>

        <p className="font-brutal text-2xl md:text-4xl font-black text-black uppercase mb-12">
          SIGN UP
        </p>

        {/* 회원가입 폼 */}
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl">
          {/* 2열 그리드 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* NAME */}
            <div>
              <label className="font-brutal text-sm font-black uppercase text-black mb-2 block">
                NAME
              </label>
              <input
                {...register('name', { required: 'Name is required' })}
                type="text"
                className="brutal-input w-full"
                placeholder=""
              />
              {errors.name && (
                <p className="font-brutal text-xs font-black uppercase text-red-500 mt-2">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* EMAIL */}
            <div>
              <label className="font-brutal text-sm font-black uppercase text-black mb-2 block">
                EMAIL
              </label>
              <input
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
                type="email"
                className="brutal-input w-full"
                placeholder=""
              />
              {errors.email && (
                <p className="font-brutal text-xs font-black uppercase text-red-500 mt-2">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* PASSWORD */}
            <div>
              <label className="font-brutal text-sm font-black uppercase text-black mb-2 block">
                PASSWORD
              </label>
              <input
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters'
                  }
                })}
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

            {/* RUNNING LEVEL */}
            <div>
              <label className="font-brutal text-sm font-black uppercase text-black mb-2 block">
                RUNNING LEVEL
              </label>
              <input
                {...register('runningLevel', { required: 'Running level is required' })}
                type="text"
                className="brutal-input w-full"
                placeholder=""
              />
              {errors.runningLevel && (
                <p className="font-brutal text-xs font-black uppercase text-red-500 mt-2">
                  {errors.runningLevel.message}
                </p>
              )}
            </div>
          </div>

          {/* CREATE ACCOUNT 버튼 */}
          <BrutalButton
            type="submit"
            variant="primary"
            size="xl"
            fullWidth
            disabled={isLoading}
            className="mb-6"
          >
            {isLoading ? 'CREATING...' : 'CREATE ACCOUNT'}
          </BrutalButton>

          {/* OAuth 로그인 버튼들 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <BrutalButton
              type="button"
              variant="secondary"
              size="md"
              fullWidth
              onClick={() => console.log('Google sign up')}
            >
              SIGN UP WITH GOOGLE
            </BrutalButton>

            <BrutalButton
              type="button"
              variant="secondary"
              size="md"
              fullWidth
              onClick={() => console.log('Kakao sign up')}
            >
              SIGN UP WITH KAKAO
            </BrutalButton>
          </div>

          {/* 로그인 링크 */}
          <div className="mt-8 text-center">
            <p className="font-brutal text-sm font-black uppercase text-black">
              ALREADY A MEMBER?{' '}
              <a href="/login" className="text-brutal-orange hover:underline">
                LOGIN
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
