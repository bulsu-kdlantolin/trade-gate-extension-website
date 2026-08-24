import { TerminalMock } from '../ui/TerminalMock';
import { exchangeThemes } from '../../data/themes';

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16 scroll-mt-16">
      {/* Background glow */}
      <div className="absolute inset-0 hero-glow"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-brand-gold/5 blur-3xl animate-pulse-gold pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-14 items-center">

          {/* Left: Copy */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-brand-goldDim border border-brand-gold/25 rounded-full px-4 py-1.5 text-sm text-brand-gold font-semibold animate-fade-in">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              100% Local-First · Zero Tracking · Offline Ready
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-txt-primary animate-slide-up">
              Stop Gambling.<br/>
              <span className="text-brand-gold">Start Trading.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-txt-secondary leading-relaxed max-w-lg mx-auto lg:mx-0 animate-slide-up" style={{ animationDelay: '100ms' }}>
              The Chrome extension that forces you to follow your rules before every trade. Built-in risk calculator, mechanical pre-trade gate, and automated trade journaling.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: '200ms' }}>
              <a 
                href="https://chromewebstore.google.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-cta inline-flex items-center gap-2.5 bg-brand-gold text-black font-bold px-8 py-4 rounded-xl text-base w-full sm:w-auto justify-center shadow-xl hover:opacity-95 transition-opacity"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Add to Chrome — Free
              </a>
            </div>

            {/* Trust signal */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-txt-muted animate-fade-in" style={{ animationDelay: '400ms' }}>
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-trade-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                No account required
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-trade-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                Works offline
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-trade-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                Free forever
              </span>
            </div>
          </div>

          {/* Right: Interactive Terminal Mockup Flow Simulator */}
          <div className="animate-slide-up" style={{ animationDelay: '300ms' }}>
            <TerminalMock theme={exchangeThemes[0]} />
          </div>

        </div>
      </div>
    </section>
  );
}
