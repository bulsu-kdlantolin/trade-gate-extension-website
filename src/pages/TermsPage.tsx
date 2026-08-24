import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Scale } from 'lucide-react';

export function TermsPage() {
  useEffect(() => {
    document.title = 'Terms of Service — TradeGate';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="pt-24 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Back button */}
      <div className="mb-8">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-sm text-txt-secondary hover:text-brand-gold transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Terminal
        </Link>
      </div>

      {/* Header */}
      <div className="space-y-4 mb-12 border-b border-dark-border pb-8">
        <div className="inline-flex items-center gap-2 bg-brand-goldDim border border-brand-gold/30 rounded-full px-3 py-1 text-xs text-brand-gold font-bold uppercase tracking-wider">
          <Scale className="w-3.5 h-3.5" />
          Terms of Service &amp; Usage
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-txt-primary">
          Terms of Service
        </h1>
        <p className="text-sm text-txt-muted font-mono">
          Last Updated: August 2026 · Effective Immediately
        </p>
      </div>

      {/* Terms Content */}
      <div className="space-y-10 text-sm leading-relaxed text-txt-secondary">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-txt-primary">1. Agreement to Terms</h2>
          <p>
            By downloading, installing, accessing, or using the TradeGate Chrome extension (&quot;the Extension&quot;) or visiting its website, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you should immediately remove the Extension from your browser.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-txt-primary">2. No Financial, Investment, or Trading Advice</h2>
          <div className="bg-dark-surface border border-brand-gold/30 rounded-2xl p-5 space-y-2">
            <h3 className="text-base font-bold text-brand-gold">CRITICAL FINANCIAL DISCLAIMER</h3>
            <p className="text-xs text-txt-secondary leading-relaxed">
              TradeGate is strictly a mathematical calculation, position sizing, pre-trade checklist, and productivity logging tool. TradeGate does not execute orders on your behalf, does not connect directly to broker order books, and does not provide financial advice, trading signals, or investment recommendations.
            </p>
            <p className="text-xs text-txt-muted leading-relaxed">
              Trading cryptocurrencies, foreign exchange, commodities, equities, and futures contracts carries a high level of risk and may not be suitable for all investors. You are solely responsible for your own trading decisions.
            </p>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-txt-primary">3. License &amp; Intellectual Property</h2>
          <p>
            TradeGate grants you a personal, non-exclusive, non-transferable, revocable license to use the extension for personal or professional trading workflow management.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-txt-primary">4. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by applicable law, TradeGate and its contributors shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages, including without limitation loss of profits, capital loss, trading drawdown, or data loss.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-txt-primary">5. Contact Information</h2>
          <p>
            For legal inquiries, feedback, or developer questions regarding these Terms of Service, please contact us:
          </p>
          <div className="pt-1">
            <a 
              href="mailto:support@tradegate.app" 
              className="inline-flex items-center gap-2 text-brand-gold hover:underline font-semibold"
            >
              support@tradegate.app
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
