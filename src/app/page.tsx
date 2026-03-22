import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PopularDishes from "@/components/PopularDishes";
import GallerySection from "@/components/GallerySection";
import MenuPreview from "@/components/MenuPreview";
import ReviewsSection from "@/components/ReviewsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <PopularDishes />
      <GallerySection />
      <MenuPreview />
      <ReviewsSection />
      <ContactSection />
    </>
  );
}
