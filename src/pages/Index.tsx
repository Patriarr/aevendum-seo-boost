import { StoreHeader } from '@/components/StoreHeader';
import { HeroSection } from '@/components/HeroSection';
import { ProblemSection } from '@/components/ProblemSection';
import { SolutionSection } from '@/components/SolutionSection';
import { ProductsSection } from '@/components/ProductsSection';
import { PacksSection } from '@/components/PacksSection';
import { ContactSection } from '@/components/ContactSection';
import { StoreFooter } from '@/components/StoreFooter';

const Index = () => (
  <div className="min-h-screen bg-background">
    <StoreHeader />
    <HeroSection />
    <ProblemSection />
    <SolutionSection />
    <ProductsSection />
    <PacksSection />
    <ContactSection />
    <StoreFooter />
  </div>
);

export default Index;
