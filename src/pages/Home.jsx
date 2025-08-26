import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/About";
import { SkillsSection } from "../components/Skills";
import { ProjectsSection } from "../components/Projects";
import { ContactSection } from "../components/Contact";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Background Effects */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      {/* Footer */}

      <Footer />
    </div>
  );
};
