import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Copy, Check, Heart, Shield, Terminal, Zap, ArrowLeft, Mail } from 'lucide-react';

interface CryptoAddress {
  coin: string;
  network: string;
  address: string;
  color: string;
}

export function SupportPage() {
  const [copiedCoin, setCopiedCoin] = useState<string | null>(null);

  useEffect(() => {
    document.title = 'Support & Community — TradeGate';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const cryptoAddresses: CryptoAddress[] = [
    {
      coin: "ETH (Base)",
      network: "Base Network",
      address: "0x29d311d73bd633f0bddd95f177f66d51d5fe2cae",
      color: "#0052FF"
    },
    {
      coin: "SOL (Solana)",
      network: "Solana SPL",
      address: "4bCPnCxNKxpRBoRNSrYaXUL5a5qpw9B725LknwPgDco4",
      color: "#14F195"
    },
    {
      coin: "USDT (TRC-20)",
      network: "Tron Network",
      address: "TFfTSW311JwpgwByaFaQjbrv6crwsf48Ux",
      color: "#26A17B"
    },
    {
      coin: "USDC (Base / BSC / Polygon)",
      network: "EVM Multi-chain",
      address: "0x29d311d73bd633f0bddd95f177f66d51d5fe2cae",
      color: "#2775CA"
    },
    {
      coin: "LTC (Litecoin)",
      network: "Litecoin SegWit",
      address: "ltc1qgee208czv6mpva0emjmff0fyj8t46qdymrr86s",
      color: "#345D9D"
    }
  ];

  const handleCopy = (coin: string, address: string) => {
    navigator.clipboard.writeText(address);
    setCopiedCoin(coin);
    setTimeout(() => {
      setCopiedCoin(null);
    }, 2000);
  };

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

      {/* Header Banner */}
      <div className="text-center space-y-4 mb-14">
        <div className="inline-flex items-center gap-2 bg-brand-goldDim border border-brand-gold/25 rounded-full px-4 py-1 text-xs text-brand-gold font-bold uppercase tracking-wider">
          <Heart className="w-3.5 h-3.5 fill-brand-gold" />
          Community Powered &amp; 100% Free
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-txt-primary">
          Support TradeGate Development
        </h1>
        <p className="text-txt-secondary text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          TradeGate is completely free, open, and offline-first without paywalls or tracking. If TradeGate has saved you from revenge trading, bad sizing, or costly mistakes, consider supporting ongoing development.
        </p>
      </div>

      {/* Value Proposition Cards */}
      <div className="grid sm:grid-cols-3 gap-5 mb-12">
        <div className="bg-dark-surface border border-dark-border rounded-2xl p-5 space-y-2">
          <div className="w-10 h-10 rounded-xl bg-brand-goldDim flex items-center justify-center mb-3">
            <Shield className="w-5 h-5 text-brand-gold" />
          </div>
          <h2 className="text-base font-bold text-txt-primary">Zero Paywalls</h2>
          <p className="text-xs text-txt-secondary leading-relaxed">
            Every feature, calculator, strategy gate, and export tool remains 100% free for all traders worldwide.
          </p>
        </div>

        <div className="bg-dark-surface border border-dark-border rounded-2xl p-5 space-y-2">
          <div className="w-10 h-10 rounded-xl bg-brand-goldDim flex items-center justify-center mb-3">
            <Terminal className="w-5 h-5 text-brand-gold" />
          </div>
          <h2 className="text-base font-bold text-txt-primary">100% Local-First</h2>
          <p className="text-xs text-txt-secondary leading-relaxed">
            No investor backing, no corporate data monetization, and no servers. Your support funds direct tool updates.
          </p>
        </div>

        <div className="bg-dark-surface border border-dark-border rounded-2xl p-5 space-y-2">
          <div className="w-10 h-10 rounded-xl bg-brand-goldDim flex items-center justify-center mb-3">
            <Zap className="w-5 h-5 text-brand-gold" />
          </div>
          <h2 className="text-base font-bold text-txt-primary">Continuous Updates</h2>
          <p className="text-xs text-txt-secondary leading-relaxed">
            New exchange themes, advanced strategy rules, deeper analytics, and charting integrations are continually added.
          </p>
        </div>
      </div>

      {/* Multi-Crypto Donation Section */}
      <div className="bg-dark-surface border border-dark-border rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl">
        <div className="border-b border-dark-border pb-4">
          <h2 className="text-xl font-bold text-txt-primary">Cryptocurrency Donation Addresses</h2>
          <p className="text-xs text-txt-muted mt-1">
            Click any address below to automatically copy it to your clipboard.
          </p>
        </div>

        <div className="space-y-4">
          {cryptoAddresses.map((item, idx) => {
            const isCopied = copiedCoin === item.coin;
            return (
              <div 
                key={idx}
                className="bg-dark-elevation border border-dark-border rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all hover:border-brand-gold/40"
              >
                <div className="space-y-1 overflow-hidden">
                  <div className="flex items-center gap-2">
                    <span 
                      className="w-2.5 h-2.5 rounded-full flex-shrink-0" 
                      style={{ backgroundColor: item.color }}
                    ></span>
                    <span className="text-sm font-bold text-txt-primary">{item.coin}</span>
                    <span className="text-[10px] font-mono text-txt-muted bg-dark-base px-2 py-0.5 rounded border border-dark-border">
                      {item.network}
                    </span>
                  </div>
                  <div className="font-mono text-xs text-txt-secondary break-all select-all pt-1">
                    {item.address}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy(item.coin, item.address)}
                  className={`btn-cta flex-shrink-0 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    isCopied 
                      ? 'bg-trade-green text-black' 
                      : 'bg-brand-gold text-black hover:opacity-95'
                  }`}
                  aria-label={`Copy ${item.coin} address`}
                >
                  {isCopied ? (
                    <>
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      Copy Address
                    </>
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Direct Contact & Thank You Note */}
      <div className="mt-12 text-center text-xs text-txt-muted space-y-3 border-t border-dark-border pt-8">
        <p className="text-txt-secondary">
          Need developer support, want to report a bug, or suggest a feature?
        </p>
        <div>
          <a 
            href="mailto:support@tradegate.app" 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-dark-surface border border-dark-border hover:border-brand-gold/40 text-brand-gold font-semibold text-xs transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            support@tradegate.app
          </a>
        </div>
        <p className="pt-2">&copy; 2026 TradeGate Development Team. Every contribution directly supports new feature releases.</p>
      </div>
    </div>
  );
}
