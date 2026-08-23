export type ThemeModeColors = {
  bgBase: string;
  bgSurface: string;
  bgElevation: string;
  accent: string;
  bullish: string;
  bearish: string;
};

export type ThemeDef = {
  id: string;
  name: string;
  subtitle: string;
  logoUrl?: string;
  dark: ThemeModeColors;
  light: ThemeModeColors;
  // Legacy / top-level helper getters
  bgBase: string;
  bgSurface: string;
  bgElevation: string;
  accent: string;
  bullish: string;
  bearish: string;
};

const TV_CDN = 'https://s3-symbol-logo.tradingview.com/provider';

export const exchangeThemes: ThemeDef[] = [
  {
    id: 'tradegate',
    name: 'TradeGate',
    subtitle: 'Black & Gold',
    dark: {
      bgBase: '#000000',
      bgSurface: '#0A0A0A',
      bgElevation: '#121212',
      accent: '#E5B82A',
      bullish: '#00E676',
      bearish: '#FF3366',
    },
    light: {
      bgBase: '#FAF8F5',
      bgSurface: '#FFFFFF',
      bgElevation: '#EDE4CE',
      accent: '#C2910C',
      bullish: '#029A60',
      bearish: '#E0354E',
    },
    bgBase: '#000000',
    bgSurface: '#0A0A0A',
    bgElevation: '#121212',
    accent: '#E5B82A',
    bullish: '#00E676',
    bearish: '#FF3366',
  },
  {
    id: 'binance',
    name: 'Binance',
    subtitle: 'Gold',
    logoUrl: `${TV_CDN}/binance.svg`,
    dark: {
      bgBase: '#181A20',
      bgSurface: '#1E2329',
      bgElevation: '#202630',
      accent: '#FCD535',
      bullish: '#0ECB81',
      bearish: '#F6465D',
    },
    light: {
      bgBase: '#FCFCFD',
      bgSurface: '#FFFFFF',
      bgElevation: '#F5ECDA',
      accent: '#D99C00',
      bullish: '#029A60',
      bearish: '#E0354E',
    },
    bgBase: '#181A20',
    bgSurface: '#1E2329',
    bgElevation: '#202630',
    accent: '#FCD535',
    bullish: '#0ECB81',
    bearish: '#F6465D',
  },
  {
    id: 'mexc',
    name: 'MEXC',
    subtitle: 'Royal Blue',
    logoUrl: `${TV_CDN}/mexc.svg`,
    dark: {
      bgBase: '#0E1014',
      bgSurface: '#14171C',
      bgElevation: '#1C2027',
      accent: '#2864FF',
      bullish: '#26B478',
      bearish: '#F6465D',
    },
    light: {
      bgBase: '#F8FAFD',
      bgSurface: '#FFFFFF',
      bgElevation: '#E0EEFB',
      accent: '#0057FF',
      bullish: '#1CA066',
      bearish: '#E83248',
    },
    bgBase: '#0E1014',
    bgSurface: '#14171C',
    bgElevation: '#1C2027',
    accent: '#2864FF',
    bullish: '#26B478',
    bearish: '#F6465D',
  },
  {
    id: 'bybit',
    name: 'Bybit',
    subtitle: 'Amber Gold',
    logoUrl: `${TV_CDN}/bybit.svg`,
    dark: {
      bgBase: '#0C0D10',
      bgSurface: '#17181E',
      bgElevation: '#21232B',
      accent: '#F7A600',
      bullish: '#00BD84',
      bearish: '#EF454A',
    },
    light: {
      bgBase: '#FCFAF7',
      bgSurface: '#FFFFFF',
      bgElevation: '#F7EBD8',
      accent: '#E69100',
      bullish: '#00A870',
      bearish: '#E13238',
    },
    bgBase: '#0C0D10',
    bgSurface: '#17181E',
    bgElevation: '#21232B',
    accent: '#F7A600',
    bullish: '#00BD84',
    bearish: '#EF454A',
  },
  {
    id: 'okx',
    name: 'OKX',
    subtitle: 'Monochrome',
    logoUrl: `${TV_CDN}/okx.svg`,
    dark: {
      bgBase: '#0A0A0A',
      bgSurface: '#141414',
      bgElevation: '#1F1F1F',
      accent: '#D4D4D4',
      bullish: '#00D182',
      bearish: '#FF4D4D',
    },
    light: {
      bgBase: '#FFFFFF',
      bgSurface: '#FFFFFF',
      bgElevation: '#EAEAEA',
      accent: '#333333',
      bullish: '#00B46C',
      bearish: '#EB3737',
    },
    bgBase: '#0A0A0A',
    bgSurface: '#141414',
    bgElevation: '#1F1F1F',
    accent: '#D4D4D4',
    bullish: '#00D182',
    bearish: '#FF4D4D',
  },
  {
    id: 'kucoin',
    name: 'KuCoin',
    subtitle: 'Mint Emerald',
    logoUrl: `${TV_CDN}/kucoin.svg`,
    dark: {
      bgBase: '#0F1419',
      bgSurface: '#171D24',
      bgElevation: '#1D242D',
      accent: '#00D092',
      bullish: '#00D092',
      bearish: '#F2485C',
    },
    light: {
      bgBase: '#F6FAF8',
      bgSurface: '#FFFFFF',
      bgElevation: '#D8EDE3',
      accent: '#00A675',
      bullish: '#00A675',
      bearish: '#DC3246',
    },
    bgBase: '#0F1419',
    bgSurface: '#171D24',
    bgElevation: '#1D242D',
    accent: '#00D092',
    bullish: '#00D092',
    bearish: '#F2485C',
  },
  {
    id: 'bitget',
    name: 'Bitget',
    subtitle: 'Electric Cyan',
    logoUrl: `${TV_CDN}/bitget.svg`,
    dark: {
      bgBase: '#0A0E14',
      bgSurface: '#15181F',
      bgElevation: '#1D212A',
      accent: '#00F0FF',
      bullish: '#00D294',
      bearish: '#F75555',
    },
    light: {
      bgBase: '#F5FAFB',
      bgSurface: '#FFFFFF',
      bgElevation: '#D3EEF5',
      accent: '#00A8B4',
      bullish: '#00B07A',
      bearish: '#E64141',
    },
    bgBase: '#0A0E14',
    bgSurface: '#15181F',
    bgElevation: '#1D212A',
    accent: '#00F0FF',
    bullish: '#00D294',
    bearish: '#F75555',
  },
  {
    id: 'mochi-web3',
    name: 'Mochi Web3',
    subtitle: 'Purple',
    dark: {
      bgBase: '#0A0B0E',
      bgSurface: '#121317',
      bgElevation: '#1B1C22',
      accent: '#A855F7',
      bullish: '#00E5A3',
      bearish: '#F6465D',
    },
    light: {
      bgBase: '#FAF7FD',
      bgSurface: '#FFFFFF',
      bgElevation: '#E7D8F8',
      accent: '#9333EA',
      bullish: '#029A60',
      bearish: '#E0354E',
    },
    bgBase: '#0A0B0E',
    bgSurface: '#121317',
    bgElevation: '#1B1C22',
    accent: '#A855F7',
    bullish: '#00E5A3',
    bearish: '#F6465D',
  },
];
