import React from 'react';
import { useMagneticButton } from '../../gsap/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  magnetic?: boolean;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  magnetic = true,
  href,
  className = '',
  onClick,
  ...props
}) => {
  const magneticRef = useMagneticButton<HTMLButtonElement>();
  const linkMagneticRef = useMagneticButton<HTMLAnchorElement>();

  const baseStyles = 'relative inline-flex items-center justify-center font-display font-bold transition-all duration-300 cursor-pointer focus-visible:outline-2 focus-visible:outline-violet focus-visible:outline-offset-2 overflow-hidden group';
  
  const variantStyles = {
    primary: 'bg-violet text-bone hover:bg-violet-deep shadow-lg shadow-violet/15 active:scale-95 border border-transparent',
    outline: 'border border-ink/20 text-ink hover:border-violet hover:text-violet bg-white/60 backdrop-blur-sm active:scale-95',
    ghost: 'text-ink hover:text-violet',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-xs uppercase tracking-wider rounded-lg',
    md: 'px-6 py-3.5 text-sm uppercase tracking-wider rounded-xl',
    lg: 'px-8 py-4 text-base uppercase tracking-wider rounded-2xl',
  };

  const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <a
        ref={magnetic ? linkMagneticRef : undefined}
        href={href}
        className={combinedClasses}
        onClick={onClick as any}
      >
        <span className="relative z-10 flex items-center">{children}</span>
      </a>
    );
  }

  return (
    <button
      ref={magnetic ? magneticRef : undefined}
      className={combinedClasses}
      onClick={onClick}
      {...props}
    >
      <span className="relative z-10 flex items-center">{children}</span>
    </button>
  );
};
