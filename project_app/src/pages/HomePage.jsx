import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Trustbar from '../components/Trustbar';
import CourseSection from '../components/CourseSection';
import AboutSection from '../components/AboutSection';
import PlacementSection from '../components/PlacementSection';
import ResourcesSection from '../components/ResourcesSection';
import GallerySection from '../components/GallerySection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import FloatingWhatsapp from '../components/FloatingWhatsapp';
import Footer from '../components/Footer';
import ChatBot from '../components/ChatBot';

export default function HomePage() {
  return (
    <div
      className="bg-[#0b1f17] text-white min-h-screen overflow-x-hidden"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <Navbar />
      <HeroSection />
      <Trustbar />
      <CourseSection />
      <AboutSection />
      <PlacementSection />
      <ResourcesSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
      <FloatingWhatsapp />
      <ChatBot />
      <Footer />
    </div>
  );
}