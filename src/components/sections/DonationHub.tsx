import {  useEffect, useRef  } from 'react';
import { CopyButton } from '../ui/CopyButton';
import { donations } from '../../data/donations';

export function DonationHub() {
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
    <section id="donation-hub" className="py-24 sm:py-32 border-t border-dark-border" ref={sectionRef}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-goldDim mb-8 reveal">
          <svg className="w-8 h-8 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        </div>
        
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6 reveal">
          Support the Project
        </h2>
        <p className="text-lg text-txt-secondary leading-relaxed mb-12 max-w-2xl mx-auto reveal">
          TradeGate is built by traders, for traders. It is 100% free, completely local, and contains zero ads or tracking. If it saved you from a bad trade, consider leaving a tip.
        </p>

        <div className="grid gap-3 stagger-children text-left">
          {donations.map((coin) => (
            <div key={coin.id} className="flex items-center justify-between p-4 rounded-xl bg-dark-surface border border-dark-border hover:border-dark-borderMuted transition-colors group">
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${coin.bgColor} ${coin.textColor}`}>
                  {coin.symbol}
                </div>
                <div>
                  <div className="font-bold text-white text-sm">{coin.name}</div>
                  <div className="text-xs text-txt-muted">{coin.network}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <code className="text-xs text-txt-secondary font-mono hidden sm:block bg-dark-elevation px-3 py-1.5 rounded-lg">
                  {coin.address}
                </code>
                <CopyButton textToCopy={coin.address} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
