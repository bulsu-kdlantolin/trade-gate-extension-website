import { Hero } from '../components/sections/Hero';
import { Features } from '../components/sections/Features';
import { Themes } from '../components/sections/Themes';
import { HowItWorks } from '../components/sections/HowItWorks';
import { ProfessionalTools } from '../components/sections/ProfessionalTools';
import { PrivacyTrust } from '../components/sections/PrivacyTrust';
import { FinalCTA } from '../components/sections/FinalCTA';

export function HomePage() {
  return (
    <main aria-label="Main Content">
      <Hero />
      <Features />
      <Themes />
      <HowItWorks />
      <ProfessionalTools />
      <PrivacyTrust />
      <FinalCTA />
    </main>
  );
}
