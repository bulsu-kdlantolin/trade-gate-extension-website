export function FinalCTA() {
  return (
    <section className="relative py-20 sm:py-28 border-t border-dark-border overflow-hidden min-h-[60vh] flex flex-col justify-center">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-gold/5 to-transparent pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="inline-flex items-center gap-2 bg-brand-goldDim border border-brand-gold/25 rounded-full px-4 py-1.5 text-sm text-brand-gold font-semibold">
          100% Free · Chromium Compatible
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-txt-primary">
          Ready to Build Serious<br/>
          <span className="text-brand-gold">Trading Discipline?</span>
        </h2>

        <p className="text-txt-secondary text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          Install TradeGate in seconds. No credit card, no sign-up, no servers. Just pure, uncompromised execution discipline.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a 
            href="#" 
            className="btn-cta inline-flex items-center gap-2.5 bg-brand-gold text-black font-bold px-8 py-4 rounded-xl text-base w-full sm:w-auto justify-center shadow-xl hover:opacity-95 transition-opacity"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Add to Chrome — It&apos;s Free
          </a>
        </div>

        <div className="flex items-center justify-center gap-6 text-xs text-txt-muted pt-4">
          <span>Compatible with Chrome, Brave, Edge &amp; Opera</span>
        </div>
      </div>
    </section>
  );
}
