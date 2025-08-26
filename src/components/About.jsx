import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-left">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer & Graphic designer
            </h3>
            <p className="text-muted-foreground">
              With over two decades of experience in the digital universe, I’ve
              led design missions commanding teams of up to 40 creatives. As
              both a strategist and a hands-on builder, I design and develop
              websites, craft interactive games, and bring concepts to life with
              clean, efficient code in HTML, CSS, and JavaScript. My leadership
              style blends vision with precision, ensuring that every project
              launches smoothly and stays on course.
            </p>
            <p className="text-muted-foreground">
              I’m deeply passionate about design and typography, web standards,
              and the evolving art of UI/UX—especially within the high-gravity
              environment of e-commerce. My focus is on optimizing user journeys
              so they are seamless, intuitive, and rewarding, balancing the
              needs of both the customer and the vendor. Whether guiding a
              design crew or working at the code level, my goal is always to
              deliver experiences that feel effortless yet extraordinary.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact " className="cosmic-button">
                Get in touch
              </a>
              <a
                href="#contact "
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 text-center"
                download
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className=" font-semibold text-lg">Web development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive, intuitive, user-friendly websites,
                    applications and e-commerce modules using HTML, CSS,
                    JavaScript, and modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className=" font-semibold text-lg">
                    UI/UX/Graphic design
                  </h4>
                  <p className="text-muted-foreground">
                    I use data based results to increase conversions and revenue
                    across multiple industries and sectors
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className=" font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Having managed teams of over 40 designers i am able to
                    communicate the vision of various stakeholders to the teams
                    and relay any issues in a calm and considered manner.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
