import { useEffect, useRef } from 'react';
import { Shield, EyeOff, HardDrive, Lock, ServerOff, CheckCircle } from 'lucide-react';

export function PrivacyTrust() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.reveal, .stagger-children');
      elements.forEach(el => observer.observe(el));
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="privacy-trust" 
      className="relative py-16 sm:py-20 border-t border-dark-border scroll-mt-16" 
      ref={sectionRef}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 reveal">
          <div className="inline-flex items-center gap-2 bg-brand-goldDim border border-brand-gold/25 rounded-full px-4 py-1.5 text-xs text-brand-gold font-semibold mb-3">
            <Shield className="w-3.5 h-3.5" />
            Zero Tracking Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-txt-primary">
            Your Trades.<br/>
            <span className="text-txt-muted">Your Edge. Zero Telemetry.</span>
          </h2>
          <p className="mt-4 text-txt-secondary text-base max-w-2xl mx-auto">
            TradeGate operates exclusively inside your browser sandbox. No analytics, no accounts, and no data leaves your machine.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          <div className="card-glow bg-dark-surface border border-dark-border rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-brand-goldDim border border-brand-gold/20 flex items-center justify-center text-brand-gold">
              <ServerOff className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-txt-primary">No External Database</h3>
            <p className="text-xs text-txt-secondary leading-relaxed">
              Every trade record, checklist, and account balance is stored exclusively in your local browser sandbox via <code className="text-brand-gold font-mono bg-dark-base px-1.5 py-0.5 rounded border border-dark-border">chrome.storage.local</code>.
            </p>
          </div>

          <div className="card-glow bg-dark-surface border border-dark-border rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-brand-goldDim border border-brand-gold/20 flex items-center justify-center text-brand-gold">
              <EyeOff className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-txt-primary">Zero Telemetry &amp; Trackers</h3>
            <p className="text-xs text-txt-secondary leading-relaxed">
              No Google Analytics, no Mixpanel, no error tracking SDKs. We physically cannot see your strategies, lot sizes, or win rates.
            </p>
          </div>

          <div className="card-glow bg-dark-surface border border-dark-border rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-brand-goldDim border border-brand-gold/20 flex items-center justify-center text-brand-gold">
              <HardDrive className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-txt-primary">100% Offline Capability</h3>
            <p className="text-xs text-txt-secondary leading-relaxed">
              TradeGate functions with complete offline fidelity. Calculate risk and journal executions anywhere, with or without internet.
            </p>
          </div>

          <div className="card-glow bg-dark-surface border border-dark-border rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-brand-goldDim border border-brand-gold/20 flex items-center justify-center text-brand-gold">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-txt-primary">No Account Required</h3>
            <p className="text-xs text-txt-secondary leading-relaxed">
              No registration, no email capture, no passwords. Install the Chrome extension and start taking disciplined trades in seconds.
            </p>
          </div>

          <div className="card-glow bg-dark-surface border border-dark-border rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-brand-goldDim border border-brand-gold/20 flex items-center justify-center text-brand-gold">
              <CheckCircle className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-txt-primary">Manifest V3 Audited</h3>
            <p className="text-xs text-txt-secondary leading-relaxed">
              Built under Chrome’s strict Manifest V3 security specification with zero background network requests or dangerous permissions.
            </p>
          </div>

          <div className="card-glow bg-dark-surface border border-dark-border rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-brand-goldDim border border-brand-gold/20 flex items-center justify-center text-brand-gold">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-txt-primary">Full Data Sovereignty</h3>
            <p className="text-xs text-txt-secondary leading-relaxed">
              One-click complete data export in JSON and CSV format. Delete or backup your entire journal at any time with total control.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
