import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

type BrutalButtonVariant = 'primary' | 'secondary' | 'accent-green' | 'accent-blue' | 'accent-red';
type BrutalButtonSize = 'sm' | 'md' | 'lg' | 'xl';

interface BaseBrutalButtonProps {
  children: React.ReactNode;
  variant?: BrutalButtonVariant;
  size?: BrutalButtonSize;
  className?: string;
  fullWidth?: boolean;
}

type BrutalButtonAsButton = BaseBrutalButtonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseBrutalButtonProps> & {
    href?: never;
  };

type BrutalButtonAsLink = BaseBrutalButtonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseBrutalButtonProps> & {
    href: string;
  };

type BrutalButtonProps = BrutalButtonAsButton | BrutalButtonAsLink;

const variantClasses: Record<BrutalButtonVariant, string> = {
  primary: 'bg-brutal-orange text-white hover:bg-white hover:text-black',
  secondary: 'bg-black text-white hover:bg-brutal-orange hover:text-white',
  'accent-green': 'bg-green-500 text-black hover:bg-black hover:text-green-500',
  'accent-blue': 'bg-blue-500 text-white hover:bg-white hover:text-blue-500',
  'accent-red': 'bg-red-500 text-white hover:bg-black hover:text-white',
};

const sizeClasses: Record<BrutalButtonSize, string> = {
  sm: 'px-4 py-2 text-sm border-3',
  md: 'px-6 py-3 text-base border-4',
  lg: 'px-8 py-4 text-lg border-5',
  xl: 'px-12 py-6 text-2xl border-6',
};

export function BrutalButton({
  children,
  variant = 'primary',
  size = 'md',
  className,
  fullWidth = false,
  href,
  ...props
}: BrutalButtonProps) {
  const baseClasses = cn(
    'font-brutal font-black uppercase border-black',
    'transition-all duration-300 ease-out',
    'hover:scale-105 active:scale-95',
    'shadow-brutal hover:shadow-brutal-sm',
    'inline-block text-center',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100',
    variantClasses[variant],
    sizeClasses[size],
    fullWidth && 'w-full',
    className
  );

  if (href) {
    return (
      <Link href={href} className={baseClasses} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={baseClasses} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
