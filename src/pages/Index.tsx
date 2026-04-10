import { StoreHeader } from '@/components/StoreHeader';
import { HeroSection } from '@/components/HeroSection';
import { ProblemSection } from '@/components/ProblemSection';
import { SolutionSection } from '@/components/SolutionSection';
import { ScienceBackingSection } from '@/components/ScienceBackingSection';
import { TrustMethodSection } from '@/components/TrustMethodSection';
import { ScienceInsightsSection } from '@/components/ScienceInsightsSection';
import { ProductsSection } from '@/components/ProductsSection';
import { ProtocolGuideSection } from '@/components/ProtocolGuideSection';
import { PacksSection } from '@/components/PacksSection';
import { WhatsIncludedSection } from '@/components/WhatsIncludedSection';

import { WhyPackSection } from '@/components/WhyPackSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { GuaranteeSection } from '@/components/GuaranteeSection';
import { WowSection } from '@/components/WowSection';
import { FinalCTASection } from '@/components/FinalCTASection';
import { ContactSection } from '@/components/ContactSection';
import { StoreFooter } from '@/components/StoreFooter';
import { CartDrawer } from '@/components/CartDrawer';
import { WhatsAppButton } from '@/components/WhatsAppButton';

const Index = () => (
  <div className="min-h-screen bg-background">
    <StoreHeader />
    <HeroSection />
    <ProblemSection />
    <SolutionSection />
    <ScienceBackingSection />
    <TrustMethodSection />
    <ScienceInsightsSection />
    <ProductsSection />
    <ProtocolGuideSection />
    <PacksSection />
    <WhatsIncludedSection />
    
    <WhyPackSection />
    <TestimonialsSection />
    <GuaranteeSection />
    <WowSection />
    <FinalCTASection />
    <ContactSection />
    <StoreFooter />
    <CartDrawer />
    <WhatsAppButton />
  </div>
);

export default Index;
