import { cn } from '@/lib/utils';
import { InputHTMLAttributes, forwardRef } from 'react';

export interface BrutalInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
}

export const BrutalInput = forwardRef<HTMLInputElement, BrutalInputProps>(
  ({ className, label, error, fullWidth = false, ...props }, ref) => {
    return (
      <div className={cn('flex flex-col gap-2', fullWidth && 'w-full')}>
        {label && (
          <label className="font-brutal text-sm font-black uppercase text-black">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            'brutal-input',
            'w-full',
            error && 'border-red-500',
            className
          )}
          {...props}
        />
        {error && (
          <p className="font-brutal text-xs font-black uppercase text-red-500">
            {error}
          </p>
        )}
      </div>
    );
  }
);

BrutalInput.displayName = 'BrutalInput';
