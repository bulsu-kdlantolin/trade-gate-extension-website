import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable on touch screens or mobile
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseDown = () => setIsPressed(true);
    const onMouseUp = () => setIsPressed(false);

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const checkHoverables = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      
      const isInteractive = target.closest('button, a, input, [role="button"], .theme-swatch, .card-glow, .btn-cta, .btn-ghost');
      setIsHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousemove', checkHoverables);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousemove', checkHoverables);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden">
      {/* Outer Follower Ring */}
      <div
        className={`fixed top-0 left-0 rounded-full pointer-events-none transition-transform duration-150 ease-out flex items-center justify-center ${
          isHovered
            ? 'w-9 h-9 border-2 border-brand-gold bg-brand-gold/15 shadow-[0_0_15px_rgba(229,184,42,0.35)]'
            : isPressed
            ? 'w-5 h-5 border border-brand-gold/70 bg-brand-gold/20'
            : 'w-7 h-7 border border-brand-gold/40'
        }`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%) ${
            isHovered ? 'scale(1.25)' : isPressed ? 'scale(0.85)' : 'scale(1)'
          }`,
        }}
      />

      {/* Center Precision Dot */}
      <div
        className={`fixed top-0 left-0 rounded-full bg-brand-gold pointer-events-none transition-all duration-75 shadow-[0_0_8px_rgba(229,184,42,0.8)] ${
          isHovered ? 'w-2 h-2 opacity-90' : isPressed ? 'w-1 h-1' : 'w-1.5 h-1.5'
        }`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        }}
      />
    </div>
  );
}
