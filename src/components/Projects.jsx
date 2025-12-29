import { ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { PROJECTS } from "../data/projects";

export const ProjectsSection = () => {
  const navigate = useNavigate();

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
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              role="link"
              tabIndex={0}
              onClick={() => navigate(`/projects/${project.id}`)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  navigate(`/projects/${project.id}`);
                }
              }}
              className="group bg-card rounded-lg shadow-xs overflow-hidden card-hover pb-4 block cursor-pointer"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1 text-left animate-fade-in-delay-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 text-left">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex flex-row space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300 flex flex-row gap-3 items-center"
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
