import Cards from "@/components/Cards";
import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import Scroller from "@/components/Scroller";
import UpcomingWebinar from "@/components/UpcomingWebinar";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
    
      <HeroSection />
      <FeaturedCourses />
      <Scroller />
      <Cards />
      <UpcomingWebinar />
      <Instructors />
      <Footer />
    </main>
  );
}
