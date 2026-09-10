import React, { useEffect, useRef } from 'react';

interface TypewriterTextProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

export const TypewriterText: React.FC<TypewriterTextProps> = React.memo(({
  words,
  typingSpeed = 220,
  deletingSpeed = 110,
  pauseDuration = 4500,
  className = '',
}) => {
  const textRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!words || words.length === 0) return;

    let wordIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    const tick = () => {
      const currentWord = words[wordIdx % words.length];

      if (isDeleting) {
        charIdx--;
        if (textRef.current) {
          textRef.current.textContent = currentWord.substring(0, charIdx);
        }

        if (charIdx <= 0) {
          isDeleting = false;
          wordIdx = (wordIdx + 1) % words.length;
          timeoutId = setTimeout(tick, typingSpeed);
        } else {
          timeoutId = setTimeout(tick, deletingSpeed);
        }
      } else {
        charIdx++;
        if (textRef.current) {
          textRef.current.textContent = currentWord.substring(0, charIdx);
        }

        if (charIdx >= currentWord.length) {
          isDeleting = true;
          timeoutId = setTimeout(tick, pauseDuration);
        } else {
          timeoutId = setTimeout(tick, typingSpeed);
        }
      }
    };

    timeoutId = setTimeout(tick, 300);

    return () => clearTimeout(timeoutId);
  }, [words, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={`inline-block text-violet font-display font-bold uppercase tracking-tight text-left align-baseline min-w-[12ch] ${className}`}>
      <span ref={textRef} />
      <span className="inline-block w-[3px] sm:w-[5px] h-[0.75em] bg-violet ml-1 animate-pulse align-middle" />
    </span>
  );
});
