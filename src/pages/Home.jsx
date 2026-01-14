import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { GsapSection } from "../components/GsapSection";
import { AboutSection } from "../components/About";
import { SkillsSection } from "../components/Skills";
import { ProjectsSection } from "../components/Projects";
import { ContactSection } from "../components/Contact";
import { Footer } from "../components/Footer";
import SplashCursor from "../components/SplashCursor";
import SmoothScrollProvider from "../components/SmoothScrollProvider";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Fullscreen interactive cursor */}
      <SplashCursor />

      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Background Effects */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />
      {/* Main Content */}

      <main>
        {/* <SmoothScrollProvider> */}
        <HeroSection />
        <GsapSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />

        {/* Footer should be inside the smooth content so it scrolls correctly */}
        <Footer />
        {/* </SmoothScrollProvider> */}
      </main>
    </div>
  );
};
