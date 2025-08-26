import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Realise",
    description:
      "A modern SaaS landing page template built with React and Tailwind CSS.",
    Image: "/projects/realise.webp",
    tags: ["Branding", "Wordpress", "Frontend"],
    demoUrl: "https://saassy.example.com",
    gitHubUrl: "#",
  },
  {
    id: 2,
    title: "Coach",
    description:
      "Shopper journey optimisation for an e-commerce platform using Figma, HTML/CSS and Javascript.",
    Image: "/projects/coachUpsell2.webp",
    tags: ["UI/UX", "HTML", "CSS", "Javascript"],
    demoUrl: "https://uk.coach.com",
    gitHubUrl: "#",
  },
  {
    id: 3,
    title: "Reflexology Website",
    description:
      "A company website for a reflexologist built with Wordpress and using Divi theme.",
    Image: "/projects/sammeallen.webp",
    tags: ["Wordpress", "Branding", "CSS"],
    demoUrl: "https://sammeallen.com",
    gitHubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative ">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>{" "}
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto ">
          Here are some of my recent projects, Each project was carefully
          crafted with attention to details, performance and user experience in
          mind.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg shadow-xs overflow-hidden card-hover pb-4"
            >
              <div className="H-48 overflow-hidden">
                <img
                  src={project.Image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap02">
                  {project.tags.map((tag, key) => (
                    <span
                      key={key}
                      className="px-2 py-1 text-xs font-medium rounded-ful bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1 ">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex flex-row space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-forground/80 hover:text-primary transition-colors duration-300 flex flex-row gap-3 align-center"
                    >
                      <ExternalLink size={20} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
