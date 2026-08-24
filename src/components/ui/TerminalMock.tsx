import { useState, useEffect, useRef } from 'react';
import { ThemeDef } from '../../data/themes';
import { useThemeMode } from '../../context/ThemeModeContext';

interface TerminalMockProps {
  theme: ThemeDef;
}

export function TerminalMock({ theme }: TerminalMockProps) {
  const { mode } = useThemeMode();
  const currentTheme = mode === 'light' && theme.light ? theme.light : (theme.dark || theme);

  // Steps: 1 = Pre-Trade Gate Checklist, 2 = Sizing & Risk, 3 = Journal Logged
  const [activeStep, setActiveStep] = useState<1 | 2 | 3>(1);
  const [checkedRules, setCheckedRules] = useState<number[]>([]);
  const [pressedTarget, setPressedTarget] = useState<string | null>(null);

  // Step 2 Form Typing State
  const [entryInput, setEntryInput] = useState<string>('64,200');
  const [slInput, setSlInput] = useState<string>('63,800');
  const [tpInput, setTpInput] = useState<string>('65,500');
  const [focusedField, setFocusedField] = useState<'entry' | 'sl' | 'tp' | null>(null);
  const [targetRrDisplay, setTargetRrDisplay] = useState<string>('1 : 3.25 R');
  const [riskDisplay, setRiskDisplay] = useState<string>('$125.00 (1.0%)');
  const [profitDisplay, setProfitDisplay] = useState<string>('+$406.25');

  // Container ref for relative coordinate calculations
  const bodyRef = useRef<HTMLDivElement>(null);

  // Pixel coordinates relative to bodyRef
  const [cursorPos, setCursorPos] = useState<{ x: number; y: number; clicking: boolean; visible: boolean }>({
    x: 200,
    y: 120,
    clicking: false,
    visible: true
  });

  // Helper to get exact pixel center of target element inside bodyRef
  const getTargetCenter = (id: string, customOffset?: { x?: number; y?: number }) => {
    if (!bodyRef.current) return { x: 200, y: 150 };
    const target = bodyRef.current.querySelector(`[data-cursor="${id}"]`);
    if (!target) return { x: 200, y: 150 };
    
    const targetRect = target.getBoundingClientRect();
    const bodyRect = bodyRef.current.getBoundingClientRect();

    const x = targetRect.left - bodyRect.left + (customOffset?.x ?? targetRect.width / 2);
    const y = targetRect.top - bodyRect.top + (customOffset?.y ?? targetRect.height / 2);

    return { x, y };
  };

  useEffect(() => {
    let isCancelled = false;

    const runSequence = async () => {
      while (!isCancelled) {
        // ==========================================
        // --- STAGE 1: PRE-TRADE GATE CHECKLIST ---
        // ==========================================
        setActiveStep(1);
        setCheckedRules([]);
        setPressedTarget(null);
        setFocusedField(null);
        
        await new Promise(r => setTimeout(r, 200));
        if (isCancelled) break;

        // Check Rule 0 (Exact checkbox center)
        const rule0Pos = getTargetCenter('rule_checkbox_0');
        setCursorPos({ x: rule0Pos.x, y: rule0Pos.y, clicking: false, visible: true });
        await new Promise(r => setTimeout(r, 450));
        if (isCancelled) break;
        setPressedTarget('rule_0');
        setCursorPos({ x: rule0Pos.x, y: rule0Pos.y, clicking: true, visible: true });
        setCheckedRules([0]);
        await new Promise(r => setTimeout(r, 200));
        if (isCancelled) break;
        setCursorPos({ x: rule0Pos.x, y: rule0Pos.y, clicking: false, visible: true });
        setPressedTarget(null);

        // Check Rule 1 (Exact checkbox center)
        const rule1Pos = getTargetCenter('rule_checkbox_1');
        setCursorPos({ x: rule1Pos.x, y: rule1Pos.y, clicking: false, visible: true });
        await new Promise(r => setTimeout(r, 380));
        if (isCancelled) break;
        setPressedTarget('rule_1');
        setCursorPos({ x: rule1Pos.x, y: rule1Pos.y, clicking: true, visible: true });
        setCheckedRules([0, 1]);
        await new Promise(r => setTimeout(r, 200));
        if (isCancelled) break;
        setCursorPos({ x: rule1Pos.x, y: rule1Pos.y, clicking: false, visible: true });
        setPressedTarget(null);

        // Check Rule 2 (Exact checkbox center)
        const rule2Pos = getTargetCenter('rule_checkbox_2');
        setCursorPos({ x: rule2Pos.x, y: rule2Pos.y, clicking: false, visible: true });
        await new Promise(r => setTimeout(r, 380));
        if (isCancelled) break;
        setPressedTarget('rule_2');
        setCursorPos({ x: rule2Pos.x, y: rule2Pos.y, clicking: true, visible: true });
        setCheckedRules([0, 1, 2]);
        await new Promise(r => setTimeout(r, 200));
        if (isCancelled) break;
        setCursorPos({ x: rule2Pos.x, y: rule2Pos.y, clicking: false, visible: true });
        setPressedTarget(null);

        // Check Rule 3 (Exact checkbox center)
        const rule3Pos = getTargetCenter('rule_checkbox_3');
        setCursorPos({ x: rule3Pos.x, y: rule3Pos.y, clicking: false, visible: true });
        await new Promise(r => setTimeout(r, 380));
        if (isCancelled) break;
        setPressedTarget('rule_3');
        setCursorPos({ x: rule3Pos.x, y: rule3Pos.y, clicking: true, visible: true });
        setCheckedRules([0, 1, 2, 3]);
        await new Promise(r => setTimeout(r, 250));
        if (isCancelled) break;
        setCursorPos({ x: rule3Pos.x, y: rule3Pos.y, clicking: false, visible: true });
        setPressedTarget(null);

        // Move to Gate Unlocked button center
        const btn1Pos = getTargetCenter('stage1_btn');
        setCursorPos({ x: btn1Pos.x, y: btn1Pos.y, clicking: false, visible: true });
        await new Promise(r => setTimeout(r, 500));
        if (isCancelled) break;

        // Click Unlocked button to proceed to sizing
        setPressedTarget('stage1_btn');
        setCursorPos({ x: btn1Pos.x, y: btn1Pos.y, clicking: true, visible: true });
        await new Promise(r => setTimeout(r, 220));
        if (isCancelled) break;
        setCursorPos({ x: btn1Pos.x, y: btn1Pos.y, clicking: false, visible: true });
        setPressedTarget(null);

        // ==========================================
        // --- STAGE 2: SIZING & RISK FORM (MANUAL TYPING ANIMATION) ---
        // ==========================================
        setActiveStep(2);
        setEntryInput('');
        setSlInput('');
        setTpInput('');
        setTargetRrDisplay('Awaiting inputs...');
        setRiskDisplay('Awaiting inputs...');
        setProfitDisplay('Awaiting inputs...');
        await new Promise(r => setTimeout(r, 350));
        if (isCancelled) break;

        // 1. Move to Entry Price field & Type
        const entryFieldPos = getTargetCenter('stage2_entry');
        setCursorPos({ x: entryFieldPos.x, y: entryFieldPos.y, clicking: false, visible: true });
        await new Promise(r => setTimeout(r, 400));
        if (isCancelled) break;

        setCursorPos({ x: entryFieldPos.x, y: entryFieldPos.y, clicking: true, visible: true });
        setFocusedField('entry');
        await new Promise(r => setTimeout(r, 150));
        setCursorPos({ x: entryFieldPos.x, y: entryFieldPos.y, clicking: false, visible: true });

        // Manual typing "64,200"
        const entryChars = ['6', '64', '64,2', '64,20', '64,200'];
        for (const str of entryChars) {
          if (isCancelled) break;
          setEntryInput(str);
          await new Promise(r => setTimeout(r, 75));
        }
        if (isCancelled) break;
        await new Promise(r => setTimeout(r, 120));

        // 2. Move to Stop Loss field & Type
        const slFieldPos = getTargetCenter('stage2_sl');
        setCursorPos({ x: slFieldPos.x, y: slFieldPos.y, clicking: false, visible: true });
        await new Promise(r => setTimeout(r, 350));
        if (isCancelled) break;

        setCursorPos({ x: slFieldPos.x, y: slFieldPos.y, clicking: true, visible: true });
        setFocusedField('sl');
        await new Promise(r => setTimeout(r, 150));
        setCursorPos({ x: slFieldPos.x, y: slFieldPos.y, clicking: false, visible: true });

        // Manual typing "63,800"
        const slChars = ['6', '63', '63,8', '63,80', '63,800'];
        for (const str of slChars) {
          if (isCancelled) break;
          setSlInput(str);
          await new Promise(r => setTimeout(r, 75));
        }
        if (isCancelled) break;
        // Dynamic calculation of Dollar Risk
        setRiskDisplay('$125.00 (1.0%)');
        await new Promise(r => setTimeout(r, 120));

        // 3. Move to Take Profit field & Type
        const tpFieldPos = getTargetCenter('stage2_tp');
        setCursorPos({ x: tpFieldPos.x, y: tpFieldPos.y, clicking: false, visible: true });
        await new Promise(r => setTimeout(r, 350));
        if (isCancelled) break;

        setCursorPos({ x: tpFieldPos.x, y: tpFieldPos.y, clicking: true, visible: true });
        setFocusedField('tp');
        await new Promise(r => setTimeout(r, 150));
        setCursorPos({ x: tpFieldPos.x, y: tpFieldPos.y, clicking: false, visible: true });

        // Manual typing "65,500"
        const tpChars = ['6', '65', '65,5', '65,50', '65,500'];
        for (const str of tpChars) {
          if (isCancelled) break;
          setTpInput(str);
          await new Promise(r => setTimeout(r, 75));
        }
        if (isCancelled) break;
        // Dynamic calculation of Target R:R and Net Profit
        setTargetRrDisplay('1 : 3.25 R');
        setProfitDisplay('+$406.25');
        setFocusedField(null);
        await new Promise(r => setTimeout(r, 350));
        if (isCancelled) break;

        // Move cursor to "Execute & Log Trade" button center
        const btn2Pos = getTargetCenter('stage2_btn');
        setCursorPos({ x: btn2Pos.x, y: btn2Pos.y, clicking: false, visible: true });
        await new Promise(r => setTimeout(r, 450));
        if (isCancelled) break;

        // Click "Execute & Log Trade"
        setPressedTarget('stage2_btn');
        setCursorPos({ x: btn2Pos.x, y: btn2Pos.y, clicking: true, visible: true });
        await new Promise(r => setTimeout(r, 220));
        if (isCancelled) break;
        setCursorPos({ x: btn2Pos.x, y: btn2Pos.y, clicking: false, visible: true });
        setPressedTarget(null);

        // ==========================================
        // --- STAGE 3: JOURNAL ENTRY LOGGED ---
        // ==========================================
        setActiveStep(3);
        const cardPos = getTargetCenter('stage3_card');
        setCursorPos({ x: cardPos.x + 80, y: cardPos.y, clicking: false, visible: true });
        await new Promise(r => setTimeout(r, 3000));
        if (isCancelled) break;

        // Move to Restart Button center
        const btn3Pos = getTargetCenter('stage3_btn');
        setCursorPos({ x: btn3Pos.x, y: btn3Pos.y, clicking: false, visible: true });
        await new Promise(r => setTimeout(r, 550));
        if (isCancelled) break;

        setPressedTarget('stage3_btn');
        setCursorPos({ x: btn3Pos.x, y: btn3Pos.y, clicking: true, visible: true });
        await new Promise(r => setTimeout(r, 220));
        if (isCancelled) break;
        setCursorPos({ x: btn3Pos.x, y: btn3Pos.y, clicking: false, visible: true });
        setPressedTarget(null);
      }
    };

    runSequence();

    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <div 
      className="terminal-glow border rounded-2xl overflow-hidden transition-all duration-500 shadow-2xl relative select-none"
      style={{
        backgroundColor: currentTheme.bgSurface,
        borderColor: `${currentTheme.accent}40`,
        boxShadow: mode === 'light' 
          ? `0 20px 45px rgba(0, 0, 0, 0.08), 0 0 25px ${currentTheme.accent}15`
          : `0 24px 60px rgba(0, 0, 0, 0.4), 0 0 35px ${currentTheme.accent}18`
      }}
    >
      {/* Top Header Bar */}
      <div 
        className="flex items-center justify-between px-4 py-3 border-b transition-colors duration-300"
        style={{
          backgroundColor: currentTheme.bgElevation,
          borderColor: `${currentTheme.accent}25`
        }}
      >
        {/* Mac style dots */}
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF3366]/80"></div>
          <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: currentTheme.accent }}></div>
          <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: currentTheme.bullish }}></div>
        </div>

        {/* Center Title */}
        <div className="flex items-center gap-2">
          {theme.id === 'tradegate' ? (
            <svg className="w-4 h-4 text-brand-gold" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L20 6.5V15.5L12 20L4 15.5V6.5L12 2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" fill="currentColor" fillOpacity="0.15"/>
            </svg>
          ) : theme.logoUrl ? (
            <img src={theme.logoUrl} alt={theme.name} className="w-4 h-4 rounded-full object-contain" />
          ) : (
            <div className="w-3.5 h-3.5 rounded-full" style={{ backgroundColor: currentTheme.accent }}></div>
          )}
          <span className="text-xs font-semibold text-txt-secondary">{theme.name} · Live Journal Flow</span>
        </div>

        {/* Live Simulation Badge */}
        <div 
          className="text-[10px] font-mono px-2 py-0.5 rounded border flex items-center gap-1"
          style={{ 
            backgroundColor: `${currentTheme.accent}15`, 
            borderColor: `${currentTheme.accent}30`,
            color: currentTheme.accent 
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: currentTheme.accent }}></span>
          DEMO
        </div>
      </div>

      {/* Stage Progression Tabs: 01 Pre-Trade Gate -> 02 Sizing & Risk -> 03 Journal Logged */}
      <div 
        className="grid grid-cols-3 border-b text-[11px] font-bold"
        style={{ borderColor: `${currentTheme.accent}20`, backgroundColor: `${currentTheme.bgElevation}80` }}
      >
        <div
          className={`py-2 px-3 flex items-center justify-center gap-1.5 transition-all border-b-2 ${
            activeStep === 1 
              ? 'text-txt-primary' 
              : 'text-txt-muted'
          }`}
          style={{ borderBottomColor: activeStep === 1 ? currentTheme.accent : 'transparent' }}
        >
          <span className="font-mono text-[9px] opacity-70">01</span>
          <span>Pre-Trade Gate</span>
        </div>

        <div
          className={`py-2 px-3 flex items-center justify-center gap-1.5 transition-all border-b-2 ${
            activeStep === 2 
              ? 'text-txt-primary' 
              : 'text-txt-muted'
          }`}
          style={{ borderBottomColor: activeStep === 2 ? currentTheme.accent : 'transparent' }}
        >
          <span className="font-mono text-[9px] opacity-70">02</span>
          <span>Risk &amp; Targets</span>
        </div>

        <div
          className={`py-2 px-3 flex items-center justify-center gap-1.5 transition-all border-b-2 ${
            activeStep === 3 
              ? 'text-txt-primary' 
              : 'text-txt-muted'
          }`}
          style={{ borderBottomColor: activeStep === 3 ? currentTheme.accent : 'transparent' }}
        >
          <span className="font-mono text-[9px] opacity-70">03</span>
          <span>Journal Logged</span>
        </div>
      </div>

      {/* Main Terminal Body with Exact Ref Container */}
      <div ref={bodyRef} className="p-4 sm:p-5 h-[310px] flex flex-col justify-between relative overflow-hidden">
        {/* Mathematically Anchored Virtual Cursor Overlay */}
        {cursorPos.visible && (
          <div 
            className="absolute z-40 pointer-events-none transition-all duration-200 ease-out"
            style={{ 
              transform: `translate3d(${cursorPos.x}px, ${cursorPos.y}px, 0) ${cursorPos.clicking ? 'scale(0.80)' : 'scale(1)'}`,
              top: 0,
              left: 0
            }}
          >
            {/* Pointer SVG with tip at origin (0, 0) */}
            <div className="relative">
              <svg 
                className="w-5 h-5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] overflow-visible" 
                viewBox="0 0 24 24" 
                fill="none"
              >
                <path 
                  d="M0 0L17 9.5L9.5 12L6.5 20L0 0Z" 
                  fill={currentTheme.accent} 
                  stroke="#000000" 
                  strokeWidth="1.8" 
                  strokeLinejoin="round"
                />
              </svg>
              
              {/* Click ripple circle centered at (0, 0) */}
              {cursorPos.clicking && (
                <span 
                  className="absolute top-0 left-0 w-6 h-6 -translate-x-1/2 -translate-y-1/2 rounded-full animate-ping opacity-80 pointer-events-none"
                  style={{ backgroundColor: currentTheme.accent }}
                ></span>
              )}
            </div>
          </div>
        )}

        {/* STAGE 1: Pre-Trade Gate Checklist (First Step) */}
        {activeStep === 1 && (
          <div className="space-y-2 animate-fade-in flex-1 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-md flex items-center justify-center" style={{ backgroundColor: `${currentTheme.accent}25` }}>
                  <svg className="w-3 h-3" style={{ color: currentTheme.accent }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <span className="text-xs font-bold text-txt-primary">BTC Scalping Strategy Checklist</span>
              </div>
              <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded" style={{ backgroundColor: `${currentTheme.bullish}20`, color: currentTheme.bullish }}>
                {checkedRules.length}/4 PASS
              </span>
            </div>

            {/* Checklist items */}
            <div className="space-y-1.5 text-xs">
              {[
                'Trend confirmed on HTF 4H / 1H',
                'Risk within account limit (<= 1.0%)',
                'Stop loss placed at key market structure',
                'Zero high-impact economic news within 30m'
              ].map((label, idx) => {
                const isChecked = checkedRules.includes(idx);
                const isPressed = pressedTarget === `rule_${idx}`;
                return (
                  <div 
                    key={idx}
                    className={`flex items-center gap-2.5 p-2 rounded-lg border transition-all duration-200 ${
                      isPressed ? 'scale-[0.98]' : ''
                    }`}
                    style={{
                      backgroundColor: currentTheme.bgElevation,
                      borderColor: isChecked ? `${currentTheme.bullish}60` : `${currentTheme.accent}20`
                    }}
                  >
                    <div 
                      data-cursor={`rule_checkbox_${idx}`}
                      className={`w-4 h-4 rounded flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                        isChecked ? 'scale-105' : 'border border-dark-border'
                      }`}
                      style={{ 
                        backgroundColor: isChecked ? currentTheme.bullish : 'transparent', 
                        color: '#000000' 
                      }}
                    >
                      {isChecked && (
                        <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                      )}
                    </div>
                    <span className={`text-[11px] font-medium transition-colors ${isChecked ? 'text-txt-primary' : 'text-txt-muted'}`}>
                      {label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Unlocked button */}
            <div 
              data-cursor="stage1_btn"
              className={`w-full py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all duration-200 ${
                checkedRules.length === 4 
                  ? 'text-black shadow-lg animate-pulse' 
                  : 'text-txt-muted opacity-60'
              } ${pressedTarget === 'stage1_btn' ? 'scale-[0.96]' : ''}`}
              style={{ 
                backgroundColor: checkedRules.length === 4 ? currentTheme.accent : currentTheme.bgElevation,
                borderColor: `${currentTheme.accent}40`,
                borderWidth: '1px'
              }}
            >
              {checkedRules.length === 4 ? (
                <>
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  Gate Unlocked · Proceed to Entry &amp; Risk &rarr;
                </>
              ) : (
                <>
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  Checking Pre-Trade Rules...
                </>
              )}
            </div>
          </div>
        )}

        {/* STAGE 2: Sizing & Risk Form with Realistic Typing Simulation */}
        {activeStep === 2 && (
          <div className="space-y-3 animate-fade-in flex-1 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-txt-primary bg-dark-base px-2 py-0.5 rounded border border-dark-border">
                  BTCUSDT
                </span>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded" style={{ backgroundColor: `${currentTheme.bullish}20`, color: currentTheme.bullish }}>
                  LONG
                </span>
              </div>
              <span className="text-[10px] text-txt-muted font-mono">1% Balance Risk ($12,500 Acc)</span>
            </div>

            {/* Inputs grid with dynamic typing & active focus indicator */}
            <div className="grid grid-cols-3 gap-2">
              {/* Entry Price Field */}
              <div 
                data-cursor="stage2_entry" 
                className={`bg-dark-base p-2 rounded-lg border transition-colors ${
                  focusedField === 'entry' ? 'border-brand-gold shadow-[0_0_10px_rgba(229,184,42,0.25)]' : 'border-dark-border'
                }`}
              >
                <span className="text-[10px] text-txt-muted block mb-0.5">Entry Price</span>
                <div className="font-mono text-xs font-bold text-txt-primary flex items-center h-4">
                  <span>${entryInput || ''}</span>
                  {focusedField === 'entry' && <span className="w-1.5 h-3.5 bg-brand-gold ml-0.5 animate-pulse"></span>}
                </div>
              </div>

              {/* Stop Loss Field */}
              <div 
                data-cursor="stage2_sl" 
                className={`bg-dark-base p-2 rounded-lg border transition-colors ${
                  focusedField === 'sl' ? 'border-trade-red shadow-[0_0_10px_rgba(255,51,102,0.25)]' : 'border-dark-border'
                }`}
              >
                <span className="text-[10px] text-txt-muted block mb-0.5">Stop Loss</span>
                <div className="font-mono text-xs font-bold flex items-center h-4" style={{ color: currentTheme.bearish }}>
                  <span>${slInput || ''}</span>
                  {focusedField === 'sl' && <span className="w-1.5 h-3.5 bg-trade-red ml-0.5 animate-pulse"></span>}
                </div>
              </div>

              {/* Take Profit Field */}
              <div 
                data-cursor="stage2_tp" 
                className={`bg-dark-base p-2 rounded-lg border transition-colors ${
                  focusedField === 'tp' ? 'border-trade-green shadow-[0_0_10px_rgba(0,230,118,0.25)]' : 'border-dark-border'
                }`}
              >
                <span className="text-[10px] text-txt-muted block mb-0.5">Take Profit</span>
                <div className="font-mono text-xs font-bold flex items-center h-4" style={{ color: currentTheme.bullish }}>
                  <span>${tpInput || ''}</span>
                  {focusedField === 'tp' && <span className="w-1.5 h-3.5 bg-trade-green ml-0.5 animate-pulse"></span>}
                </div>
              </div>
            </div>

            {/* Calculated Box updated dynamically */}
            <div 
              className="rounded-xl p-3 border space-y-1.5"
              style={{ backgroundColor: currentTheme.bgElevation, borderColor: `${currentTheme.accent}30` }}
            >
              <div className="flex items-center justify-between text-xs">
                <span className="text-txt-secondary font-medium">Target Reward Ratio:</span>
                <span className="font-mono font-bold text-sm" style={{ color: currentTheme.bullish }}>{targetRrDisplay}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-txt-secondary font-medium">Dollar Risk Amount:</span>
                <span className="font-mono font-bold" style={{ color: currentTheme.bearish }}>{riskDisplay}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-txt-secondary font-medium">Estimated Net Profit:</span>
                <span className="font-mono font-bold" style={{ color: currentTheme.accent }}>{profitDisplay}</span>
              </div>
            </div>

            <div 
              data-cursor="stage2_btn"
              className={`w-full py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 text-black transition-transform duration-150 ${
                pressedTarget === 'stage2_btn' ? 'scale-[0.96] shadow-inner' : 'shadow-md'
              }`}
              style={{ backgroundColor: currentTheme.accent }}
            >
              Execute &amp; Log Trade &rarr;
            </div>
          </div>
        )}

        {/* STAGE 3: Logged Journal Entry Card */}
        {activeStep === 3 && (
          <div className="space-y-3 animate-fade-in flex-1 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: currentTheme.bullish }}></span>
                <span className="text-xs font-bold text-txt-primary">Trade #142 Successfully Logged</span>
              </div>
              <span className="text-[10px] font-mono text-txt-muted">chrome.storage.local</span>
            </div>

            {/* Logged Card Details */}
            <div 
              data-cursor="stage3_card"
              className="p-4 rounded-xl border space-y-3 shadow-xl"
              style={{ backgroundColor: currentTheme.bgElevation, borderColor: `${currentTheme.bullish}40` }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm font-extrabold text-txt-primary block">BTCUSDT · LONG</span>
                  <span className="text-[10px] text-txt-muted">Strategy: BTC Scalper · 15m</span>
                </div>
                <div className="text-right">
                  <span className="text-base font-extrabold font-mono" style={{ color: currentTheme.bullish }}>+$406.25</span>
                  <span className="text-[10px] font-mono block" style={{ color: currentTheme.bullish }}>+3.25 R Multiple</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-dark-border text-[10px]">
                <div>
                  <span className="text-txt-muted block">Setup Grade</span>
                  <span className="font-bold text-txt-primary px-1.5 py-0.5 rounded inline-block mt-0.5" style={{ backgroundColor: `${currentTheme.bullish}25`, color: currentTheme.bullish }}>
                    Grade A+
                  </span>
                </div>
                <div>
                  <span className="text-txt-muted block">Rule Adherence</span>
                  <span className="font-bold text-txt-primary block mt-0.5 font-mono">100% (4/4)</span>
                </div>
                <div>
                  <span className="text-txt-muted block">Market Session</span>
                  <span className="font-bold text-txt-primary block mt-0.5">London/NY</span>
                </div>
              </div>
            </div>

            <div 
              data-cursor="stage3_btn"
              className={`w-full py-2 rounded-xl font-bold text-xs flex items-center justify-center gap-2 border border-dark-border text-txt-secondary transition-all ${
                pressedTarget === 'stage3_btn' ? 'scale-[0.96] bg-dark-elevation' : ''
              }`}
            >
              Restarting Next Trade Cycle...
            </div>
          </div>
        )}
      </div>

      {/* Bottom step progress indicator */}
      <div className="px-4 pb-3 flex items-center justify-between text-[10px] text-txt-muted border-t border-dark-border pt-2.5">
        <span>Step {activeStep} of 3: {activeStep === 1 ? 'Discipline Gate' : activeStep === 2 ? 'Risk & Targets' : 'Verified Trade Log'}</span>
        <div className="flex gap-1">
          <div className={`h-1.5 rounded-full transition-all duration-300 ${activeStep === 1 ? 'w-5' : 'w-1.5 bg-dark-border'}`} style={{ backgroundColor: activeStep === 1 ? currentTheme.accent : undefined }}></div>
          <div className={`h-1.5 rounded-full transition-all duration-300 ${activeStep === 2 ? 'w-5' : 'w-1.5 bg-dark-border'}`} style={{ backgroundColor: activeStep === 2 ? currentTheme.accent : undefined }}></div>
          <div className={`h-1.5 rounded-full transition-all duration-300 ${activeStep === 3 ? 'w-5' : 'w-1.5 bg-dark-border'}`} style={{ backgroundColor: activeStep === 3 ? currentTheme.accent : undefined }}></div>
        </div>
      </div>
    </div>
  );
}
