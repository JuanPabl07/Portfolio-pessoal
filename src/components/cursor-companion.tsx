'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';

type CompanionMotion = {
  x: number;
  y: number;
  turn: number;
  tilt: number;
};

const neutralMotion: CompanionMotion = { x: 0, y: 0, turn: 0, tilt: 0 };

export function CursorCompanion() {
  const companionRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const targetRef = useRef<CompanionMotion>(neutralMotion);
  const currentRef = useRef<CompanionMotion>(neutralMotion);
  const [mounted, setMounted] = useState(false);
  const [isPointerInside, setIsPointerInside] = useState(false);

  useEffect(() => {
    setMounted(true);

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const reducedMotion = mediaQuery.matches;

    const updateTarget = (event: MouseEvent) => {
      const normalizedX = event.clientX / window.innerWidth - 0.5;
      const normalizedY = event.clientY / window.innerHeight - 0.5;
      targetRef.current = {
        x: normalizedX * 8,
        y: normalizedY * 6,
        turn: normalizedX * 24,
        tilt: normalizedY * -16,
      };
      setIsPointerInside(true);
    };

    const resetTarget = () => {
      targetRef.current = neutralMotion;
      setIsPointerInside(false);
    };

    const animate = () => {
      if (companionRef.current) {
        if (!reducedMotion) {
          const easing = 0.11;
          currentRef.current.x += (targetRef.current.x - currentRef.current.x) * easing;
          currentRef.current.y += (targetRef.current.y - currentRef.current.y) * easing;
          currentRef.current.turn += (targetRef.current.turn - currentRef.current.turn) * easing;
          currentRef.current.tilt += (targetRef.current.tilt - currentRef.current.tilt) * easing;
        } else {
          currentRef.current = targetRef.current;
        }

        companionRef.current.style.setProperty('--look-x', `${currentRef.current.x}px`);
        companionRef.current.style.setProperty('--look-y', `${currentRef.current.y}px`);
        companionRef.current.style.setProperty('--head-turn', `${currentRef.current.turn}deg`);
        companionRef.current.style.setProperty('--head-tilt', `${currentRef.current.tilt}deg`);
      }

      frameRef.current = window.requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', updateTarget, { passive: true });
    window.addEventListener('mouseleave', resetTarget);
    frameRef.current = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', updateTarget);
      window.removeEventListener('mouseleave', resetTarget);
      if (frameRef.current) window.cancelAnimationFrame(frameRef.current);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      ref={companionRef}
      className={`cursor-companion ${isPointerInside ? 'cursor-companion--active' : ''}`}
      aria-label="Programinho, mascote interativo do portfólio"
      role="status"
    >

      <div className="cursor-companion__halo" aria-hidden="true" />
      <div className="cursor-companion__orbit cursor-companion__orbit--one" aria-hidden="true" />
      <div className="cursor-companion__orbit cursor-companion__orbit--two" aria-hidden="true" />

      <div className="cursor-companion__robot" aria-hidden="true">
        <div className="cursor-companion__leg cursor-companion__leg--left"><span className="cursor-companion__boot" /></div>
        <div className="cursor-companion__leg cursor-companion__leg--right"><span className="cursor-companion__boot" /></div>

        <div className="cursor-companion__torso">
          <div className="cursor-companion__arm cursor-companion__arm--left"><span className="cursor-companion__hand" /></div>
          <div className="cursor-companion__arm cursor-companion__arm--right"><span className="cursor-companion__hand" /></div>
          <div className="cursor-companion__chest">
            <span className="cursor-companion__chest-label">JS</span>
            <span className="cursor-companion__chest-light" />
          </div>
          <div className="cursor-companion__neck" />
          <div className="cursor-companion__head">
            <div className="cursor-companion__antenna"><span /></div>
            <div className="cursor-companion__face">
              <span className="cursor-companion__eye"><span className="cursor-companion__pupil" /></span>
              <span className="cursor-companion__eye"><span className="cursor-companion__pupil" /></span>
            </div>
            <div className="cursor-companion__ear cursor-companion__ear--left" />
            <div className="cursor-companion__ear cursor-companion__ear--right" />
            <div className="cursor-companion__mouth"><span /></div>
          </div>
        </div>
      </div>
    </div>
  );
}
