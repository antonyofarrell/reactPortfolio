import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text6-xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, i'm</span>
            <span className="text-primary ml-2 opacity-0 animate-fade-in-delay-1">
              Antony
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              O'Farrell
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foregound max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I am a web developer and designer with over 20 years of experience.
            As a Senior UX/UI designer and Head of Design, I have led teams and
            guided projects with precision, creating seamless digital
            experiences. My work focuses on charting clear paths through complex
            systems—bringing order to the digital universe.
          </p>

          <div>
            <a
              href="#projects"
              className="cosmic-button opacity-0 animate-fade-in-delay-4"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary " />
      </div>
    </section>
  );
};
