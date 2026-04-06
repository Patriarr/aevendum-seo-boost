import { StoreHeader } from '@/components/StoreHeader';
import { HeroSection } from '@/components/HeroSection';
import { ProductGrid } from '@/components/ProductGrid';
import { ScienceSection } from '@/components/ScienceSection';
import { CartDrawer } from '@/components/CartDrawer';
import { StoreFooter } from '@/components/StoreFooter';

const Index = () => (
  <div className="min-h-screen bg-background">
    <StoreHeader />
    <HeroSection />
    <ProductGrid />
    <ScienceSection />
    <StoreFooter />
    <CartDrawer />
  </div>
);

export default Index;
