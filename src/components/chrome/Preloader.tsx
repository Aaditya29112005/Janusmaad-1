import React, { useEffect, useRef, useState } from 'react';
import { gsap } from '../../gsap/register';
import { prefersReducedMotion } from '../../gsap/utils';
import { Volume2, VolumeX } from 'lucide-react';

interface PreloaderProps {
  onComplete?: () => void;
}

// Web Audio API Synthesizer for JanusMAAD Preloader
class PreloaderSoundFX {
  private ctx: AudioContext | null = null;
  private muted: boolean = false;
  private lastStep: number = -1;

  public setMuted(val: boolean) {
    this.muted = val;
  }

  public isMuted() {
    return this.muted;
  }

  public initCtx() {
    if (this.muted) return null;
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      }
      window.speechSynthesis.getVoices();
    }
    return this.ctx;
  }

  public playTick(progress: number) {
    if (this.muted) return;
    const step = Math.floor(progress / 7);
    if (step === this.lastStep || progress <= 0) return;
    this.lastStep = step;

    try {
      const ctx = this.initCtx();
      if (!ctx) return;

      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      // Pitch ascends gracefully from 280Hz up to 840Hz as progress moves to 100%
      const freq = 280 + (progress / 100) * 560;
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.exponentialRampToValueAtTime(0.03, now + 0.008);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.05);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.055);
    } catch {
      // Audio safety
    }
  }

  public speakPhrase() {
    if (this.muted || typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    try {
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      }
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance('JanusMAAD gives you growth');
      utterance.rate = 0.8;
      utterance.pitch = 1.0;
      utterance.volume = 1.0;

      const voices = window.speechSynthesis.getVoices();
      if (voices && voices.length > 0) {
        const preferredVoice = voices.find(
          (v) => v.lang.startsWith('en') && (v.name.includes('Google') || v.name.includes('Natural') || v.name.includes('Samantha') || v.name.includes('Daniel') || v.name.includes('Alex') || v.name.includes('Karen') || v.name.includes('Fiona'))
        ) || voices.find((v) => v.lang.startsWith('en'));
        
        if (preferredVoice) {
          utterance.voice = preferredVoice;
        }
      }

      window.speechSynthesis.speak(utterance);
    } catch {
      // Speech safety
    }
  }

  public playGrowthChime() {
    if (this.muted) return;
    this.speakPhrase();
    try {
      const ctx = this.initCtx();
      if (!ctx) return;

      const now = ctx.currentTime;

      // 1. Deep Bass Pulse (65Hz -> 35Hz)
      const bassOsc = ctx.createOscillator();
      const bassGain = ctx.createGain();
      bassOsc.type = 'sine';
      bassOsc.frequency.setValueAtTime(65, now);
      bassOsc.frequency.exponentialRampToValueAtTime(35, now + 0.8);

      bassGain.gain.setValueAtTime(0.08, now);
      bassGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.8);

      bassOsc.connect(bassGain);
      bassGain.connect(ctx.destination);
      bassOsc.start(now);
      bassOsc.stop(now + 0.85);

      // 2. Uplifting "JanusMAAD Growth" Chime Arpeggio: F#4 -> A#4 -> C#5 -> F#5
      const notes = [369.99, 466.16, 554.37, 739.99, 1108.73];
      notes.forEach((freq, i) => {
        if (!ctx) return;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const startTime = now + i * 0.05;

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, startTime);

        gain.gain.setValueAtTime(0.001, startTime);
        gain.gain.exponentialRampToValueAtTime(0.045, startTime + 0.025);
        gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.85);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + 0.9);
      });
    } catch {
      // Audio safety
    }
  }
}

const soundFX = new PreloaderSoundFX();

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const logoWrapperRef = useRef<HTMLDivElement | null>(null);
  const logoImgRef = useRef<HTMLImageElement | null>(null);
  const counterRef = useRef<HTMLSpanElement | null>(null);
  const barRef = useRef<HTMLDivElement | null>(null);
  const subtitleRef = useRef<HTMLDivElement | null>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const [isMuted, setIsMuted] = useState(false);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextState = !isMuted;
    setIsMuted(nextState);
    soundFX.setMuted(nextState);
    if (!nextState) {
      soundFX.initCtx();
      soundFX.speakPhrase();
    }
  };

  useEffect(() => {
    if (prefersReducedMotion()) {
      if (onComplete) onComplete();
      return;
    }

    let hasSpoken = false;

    const triggerAudioAndSpeech = () => {
      soundFX.initCtx();
      if (!hasSpoken) {
        soundFX.speakPhrase();
        hasSpoken = true;
      }
    };

    // Attempt audio context & speech initialization on early user interaction
    const handleUserGesture = () => {
      triggerAudioAndSpeech();
    };

    window.addEventListener('pointerdown', handleUserGesture, { once: true });
    window.addEventListener('touchstart', handleUserGesture, { once: true });
    window.addEventListener('click', handleUserGesture, { once: true });
    window.addEventListener('keydown', handleUserGesture, { once: true });

    // Lock body scroll during intro
    document.body.style.overflow = 'hidden';

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = '';
          if (onComplete) onComplete();
        },
      });
      timelineRef.current = tl;

      // Progress counter object
      const progressObj = { value: 0 };

      // 1. Reveal Official Logo with smooth blur & scale entrance
      if (logoImgRef.current) {
        tl.fromTo(
          logoImgRef.current,
          { opacity: 0, scale: 0.88, filter: 'blur(12px)' },
          { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 1.1, ease: 'power3.out' },
          0.1
        );
      }

      // 2. Numeric Counter 0 -> 100% with audio FX
      tl.to(
        progressObj,
        {
          value: 100,
          duration: 1.4,
          ease: 'power2.inOut',
          onUpdate: () => {
            const val = Math.round(progressObj.value);
            if (counterRef.current) {
              counterRef.current.textContent = `${val.toString().padStart(2, '0')}%`;
            }
            soundFX.playTick(val);
          },
          onComplete: () => {
            soundFX.playGrowthChime();
          },
        },
        0.1
      );

      // 3. Violet-to-Teal Progress Line Bar Fill (matching brand logo)
      if (barRef.current) {
        tl.to(
          barRef.current,
          {
            width: '100%',
            duration: 1.4,
            ease: 'power2.inOut',
          },
          0.1
        );
      }

      // 4. Subtitle Tagline Reveal
      if (subtitleRef.current) {
        tl.fromTo(
          subtitleRef.current,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
          0.6
        );
      }

      // 5. Signature Pulse before reveal
      tl.to(
        logoWrapperRef.current,
        {
          scale: 1.04,
          duration: 0.35,
          ease: 'power2.out',
        },
        1.55
      );

      tl.to(
        logoWrapperRef.current,
        {
          scale: 0.95,
          opacity: 0,
          filter: 'blur(10px)',
          duration: 0.35,
          ease: 'power2.in',
        },
        1.8
      );

      // 6. Curtain Wipe Reveal (Dark screen slides up to reveal site)
      tl.to(
        containerRef.current,
        {
          yPercent: -100,
          duration: 0.85,
          ease: 'power4.inOut',
        },
        2.0
      );
    }, containerRef);

    // Keyboard listener to skip on ESC or Space
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === ' ') {
        handleSkip();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('pointerdown', handleUserGesture);
      ctx.revert();
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  const handleSkip = () => {
    soundFX.initCtx();
    soundFX.speakPhrase();
    if (timelineRef.current) {
      timelineRef.current.timeScale(4);
    }
  };

  if (prefersReducedMotion()) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-[#050914] text-white flex flex-col items-center justify-center p-6 select-none overflow-hidden cursor-pointer"
      onClick={handleSkip}
      title="Click anywhere to skip"
    >
      {/* Background Ambient Radial Glow (Violet & Teal Brand Halo) */}
      <div className="absolute w-[640px] h-[640px] bg-gradient-to-tr from-violet/20 via-teal/15 to-transparent rounded-full blur-[140px] pointer-events-none -z-0 animate-pulse" />

      {/* Centerpiece Container */}
      <div ref={logoWrapperRef} className="relative z-10 flex flex-col items-center gap-8 max-w-lg w-full">
        {/* Official JanusMAAD Logo Showcase */}
        <div className="relative flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-gradient-to-r from-violet/25 via-teal/20 to-transparent blur-3xl rounded-full scale-125 pointer-events-none" />
          <img
            ref={logoImgRef}
            src="/logo.png"
            alt="JanusMAAD Logo"
            className="h-14 sm:h-18 md:h-20 w-auto object-contain relative z-10 drop-shadow-[0_12px_36px_rgba(108,56,165,0.4)]"
          />
        </div>

        {/* Progress System: Violet-to-Teal Line + Percentage */}
        <div className="w-full max-w-xs space-y-3">
          <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden relative">
            <div
              ref={barRef}
              className="h-full w-0 bg-gradient-to-r from-violet via-[#7B43B5] to-teal rounded-full"
              style={{
                boxShadow: '0 0 14px rgba(0, 229, 216, 0.7)',
              }}
            />
          </div>

          <div className="flex items-center justify-between text-xs font-mono">
            <div
              ref={subtitleRef}
              className="text-white/60 tracking-widest uppercase text-[10px] sm:text-xs"
            >
              Future Thinking
            </div>
            <span
              ref={counterRef}
              className="text-teal font-bold tabular-nums text-sm tracking-wider"
            >
              00%
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Controls: Sound Toggle & Skip Button */}
      <div className="absolute bottom-8 left-8 right-8 z-20 flex items-center justify-between pointer-events-auto">
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleSkip();
          }}
          className="px-3.5 py-1.5 rounded-md bg-white/5 hover:bg-white/15 text-white/50 hover:text-white border border-white/10 text-xs font-mono transition-colors cursor-pointer"
        >
          Skip [ESC]
        </button>

        <button
          onClick={toggleMute}
          className="px-3 py-1.5 rounded-md bg-white/5 hover:bg-white/15 text-white/70 hover:text-white border border-white/10 text-xs font-mono transition-colors cursor-pointer flex items-center gap-2"
          title={isMuted ? 'Unmute Loading Sound' : 'Mute Loading Sound'}
        >
          {isMuted ? (
            <>
              <VolumeX className="w-3.5 h-3.5 text-red-400" />
              <span>Sound Off</span>
            </>
          ) : (
            <>
              <Volume2 className="w-3.5 h-3.5 text-teal animate-pulse" />
              <span>Sound On</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

