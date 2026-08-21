import { Link } from 'react-router-dom';
import { ArrowLeft, Shield } from 'lucide-react';

export function PrivacyPage() {
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
        <div className="inline-flex items-center gap-2 bg-trade-greenDim border border-trade-green/30 rounded-full px-3 py-1 text-xs text-trade-green font-bold uppercase tracking-wider">
          <Shield className="w-3.5 h-3.5" />
          Zero Data Collection Architecture
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-txt-primary">
          Privacy Policy
        </h1>
        <p className="text-sm text-txt-muted font-mono">
          Last Updated: February 2026 · Effective Immediately
        </p>
      </div>

      {/* Policy Content */}
      <div className="space-y-10 text-sm leading-relaxed text-txt-secondary">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-txt-primary">1. Core Philosophy: 100% Local-First</h2>
          <p>
            TradeGate (&quot;the Extension&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is engineered from the ground up to be a completely private, offline-first trading journal and pre-trade discipline terminal. We firmly believe that your trading data, position sizes, strategy checklists, risk allocations, P&amp;L records, and emotional tags are strictly your own personal intellectual property.
          </p>
          <p>
            TradeGate operates <strong className="text-txt-primary">without external servers, databases, user accounts, cloud telemetry, or third-party analytics trackers</strong>. All calculations and storage happen entirely on your local machine.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-txt-primary">2. Information We Do NOT Collect</h2>
          <p>Because TradeGate does not communicate with any external backend servers, we do not collect, process, sell, transmit, or monetize:</p>
          <ul className="list-disc pl-5 space-y-1 text-txt-muted">
            <li>Personal Identifiable Information (name, email address, phone number, IP address).</li>
            <li>Financial account credentials, broker API keys, exchange private keys, or wallet seed phrases.</li>
            <li>Trade history, execution prices, stop losses, profit/loss numbers, or balance balances.</li>
            <li>Browser history, visited URLs, web traffic, or search queries.</li>
            <li>Device hardware identifiers, fingerprinting metrics, or geolocation coordinates.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-txt-primary">3. Chrome Extension Permissions &amp; Technical Usage</h2>
          <p>TradeGate requests the minimum set of permissions necessary to function in Chromium-based browsers:</p>
          <div className="space-y-3 pt-2">
            <div className="bg-dark-surface border border-dark-border rounded-xl p-4">
              <span className="font-mono font-bold text-brand-gold text-xs block mb-1">storage &amp; unlimitedStorage</span>
              <p className="text-xs text-txt-secondary">
                Used exclusively to persist your trade logs, custom checklist rules, active theme settings, and position sizing preferences inside your browser&apos;s isolated <code className="text-brand-gold bg-dark-elevation px-1 py-0.5 rounded">chrome.storage.local</code> database.
              </p>
            </div>
            <div className="bg-dark-surface border border-dark-border rounded-xl p-4">
              <span className="font-mono font-bold text-brand-gold text-xs block mb-1">sidePanel</span>
              <p className="text-xs text-txt-secondary">
                Allows TradeGate to open as a dockable side panel alongside TradingView, exchange interfaces, or charting software without interfering with webpage DOM elements.
              </p>
            </div>
            <div className="bg-dark-surface border border-dark-border rounded-xl p-4">
              <span className="font-mono font-bold text-brand-gold text-xs block mb-1">activeTab &amp; scripting</span>
              <p className="text-xs text-txt-secondary">
                Enables keyboard shortcuts and side panel docking behavior on the active tab without modifying webpage content or injecting tracking scripts.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-txt-primary">4. Data Storage, Backups &amp; Deletion</h2>
          <p>
            All data created within TradeGate remains strictly inside your browser profile. You have complete control over your data at all times:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-txt-muted">
            <li><strong className="text-txt-primary">Export:</strong> You can export all your trade logs, summaries, and strategy metrics to CSV or PDF at any time.</li>
            <li><strong className="text-txt-primary">Deletion:</strong> Uninstalling the extension or clearing your browser extension storage immediately and permanently wipes all stored trade records.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-txt-primary">5. Contact &amp; Inquiries</h2>
          <p>
            If you have questions regarding this Privacy Policy or TradeGate&apos;s local-first architecture, you can contact the open development team via our official community support channels.
          </p>
        </section>
      </div>
    </div>
  );
}
