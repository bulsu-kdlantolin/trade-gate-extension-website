import { useEffect, useRef } from 'react';

export function HowItWorks() {
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

  const steps = [
    {
      num: "01",
      title: "Define Your Edge & Sizing",
      desc: "Select your trading strategy and enter your planned trade parameters. TradeGate instantly calculates exact position sizing and R-multiples.",
      detail: "Formula: Lot Size = (Account Balance × Risk %) / |Entry − SL|"
    },
    {
      num: "02",
      title: "Pass the Discipline Gate",
      desc: "Your pre-configured rules appear as a mandatory checklist. Execution stays physically locked until all 4 criteria are checked off.",
      detail: "Enforces 100% rule compliance with zero impulse orders"
    },
    {
      num: "03",
      title: "Log & Master Your Edge",
      desc: "Unlock the gate and execute. TradeGate saves the trade locally with session tags, error labels, setup grades, and analytics updates.",
      detail: "100% offline data saved directly in chrome.storage.local"
    }
  ];

  return (
    <section 
      id="how-it-works" 
      className="relative py-20 sm:py-28 border-t border-dark-border min-h-screen flex flex-col justify-center scroll-mt-16" 
      ref={sectionRef}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16 reveal">
          <p className="text-brand-gold text-sm font-bold uppercase tracking-widest mb-3">Mechanical Discipline</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-txt-primary">
            How TradeGate Works.<br/>
            <span className="text-txt-muted">A 3-Step Playbook for Consistent Execution.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 stagger-children">
          {steps.map((step, idx) => (
            <div key={idx} className="card-glow bg-dark-surface border border-dark-border rounded-2xl p-7 space-y-4 relative flex flex-col justify-between">
              <div>
                <span className="font-mono text-3xl font-extrabold text-brand-gold block mb-3 opacity-90">{step.num}</span>
                <h3 className="text-xl font-bold text-txt-primary mb-2">{step.title}</h3>
                <p className="text-txt-secondary text-sm leading-relaxed mb-4">{step.desc}</p>
              </div>
              <div className="p-3 bg-dark-elevation rounded-xl border border-dark-border text-xs text-txt-muted font-mono">
                {step.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
