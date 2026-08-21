export type DonationOption = {
  id: string;
  symbol: string;
  name: string;
  network: string;
  address: string;
  bgColor: string;
  textColor: string;
};

export const donations: DonationOption[] = [
  {
    id: 'eth',
    symbol: 'Ξ',
    name: 'ETH',
    network: 'Base Network',
    address: '0x0000000000000000000000000000000000000000',
    bgColor: 'bg-blue-500/15',
    textColor: 'text-blue-400',
  },
  {
    id: 'sol',
    symbol: '◎',
    name: 'SOL',
    network: 'Solana',
    address: 'SOL000000000000000000000000000000000000000',
    bgColor: 'bg-purple-500/15',
    textColor: 'text-purple-400',
  },
  {
    id: 'usdt',
    symbol: '₮',
    name: 'USDT',
    network: 'TRON (TRC-20)',
    address: 'T000000000000000000000000000000000',
    bgColor: 'bg-green-500/15',
    textColor: 'text-green-400',
  },
  {
    id: 'usdc',
    symbol: '$',
    name: 'USDC',
    network: 'Multi-chain',
    address: '0x0000000000000000000000000000000000000000',
    bgColor: 'bg-blue-400/15',
    textColor: 'text-blue-300',
  },
  {
    id: 'ltc',
    symbol: 'Ł',
    name: 'LTC',
    network: 'Litecoin',
    address: 'ltc1q0000000000000000000000000000000000000',
    bgColor: 'bg-gray-400/15',
    textColor: 'text-gray-300',
  },
];
