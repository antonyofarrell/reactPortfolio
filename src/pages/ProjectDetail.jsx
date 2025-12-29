import { Link, useParams } from "react-router-dom";
import { PROJECTS } from "../data/projects";
import ParallaxImage from "../components/ParallaxImage";
import { Navbar } from "../components/Navbar"; // added import
import { ThemeToggle } from "../components/ThemeToggle";

export default function ProjectDetail() {
  const { id } = useParams();
  const idx = PROJECTS.findIndex((p) => p.id === id);

  if (idx === -1) {
    return (
      <>
        <Navbar /> {/* show navbar on not-found too */}
        <main className="min-h-screen p-8">
          <div className="container mx-auto">
            <h1 className="text-2xl font-semibold mb-4">Project not found</h1>
            <Link to="/#projects" className="text-sm underline">
              ← Back to projects
            </Link>
          </div>
        </main>
      </>
    );
  }

  const project = PROJECTS[idx];
  const prev = idx > 0 ? PROJECTS[idx - 1] : null;
  const next = idx < PROJECTS.length - 1 ? PROJECTS[idx + 1] : null;

  const images =
    project.images && project.images.length
      ? project.images
      : project.image
      ? [project.image]
      : [];

  return (
    <>
      <Navbar /> {/* added navbar here */}
      <ThemeToggle />
      <main className="min-h-screen p-8 pt-20">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-6 flex items-center justify-between">
            <Link to="/#projects" className="text-sm underline">
              ← Back to projects
            </Link>

            <div className="flex gap-3">
              {prev && (
                <Link
                  to={`/projects/${prev.id}`}
                  className="px-3 py-1 rounded border hover:shadow-sm"
                >
                  ← {prev.title}
                </Link>
              )}
              {next && (
                <Link
                  to={`/projects/${next.id}`}
                  className="px-3 py-1 rounded border hover:shadow-sm"
                >
                  {next.title} →
                </Link>
              )}
            </div>
          </div>

          {/* swap visual order per breakpoint:
              - mobile: aside (text) appears first and stays sticky above images
              - md+: images are shown left and aside sits on the right
          */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Right column (text) — show first on mobile, last on md+ */}
            <aside className="md:col-span-1 order-first md:order-last">
              <div
                className="sticky self-start p-6 bg-card rounded-xl shadow"
                style={{ top: "calc(var(--navbar-height, 4rem) + 0.75rem)" }}
              >
                <h1 className="text-2xl md:text-3xl font-semibold mb-3">
                  {project.title}
                </h1>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags?.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mb-4">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded bg-primary text-primary-foreground"
                    >
                      Live demo
                    </a>
                  )}
                  {project.gitHubUrl && (
                    <a
                      href={project.gitHubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded border"
                    >
                      Source
                    </a>
                  )}
                </div>

                <div className="flex justify-between">
                  {prev ? (
                    <Link
                      to={`/projects/${prev.id}`}
                      className="text-sm underline"
                    >
                      ← {prev.title}
                    </Link>
                  ) : (
                    <div />
                  )}

                  {next ? (
                    <Link
                      to={`/projects/${next.id}`}
                      className="text-sm underline"
                    >
                      {next.title} →
                    </Link>
                  ) : (
                    <div />
                  )}
                </div>
              </div>
            </aside>

            {/* Left column: stacked images — show after aside on mobile, left on md+ */}
            <div className="md:col-span-2 space-y-6 order-last md:order-first">
              {images.map((src, i) => (
                <div
                  key={i}
                  className="h-64 md:h-[420px] overflow-hidden rounded-xl"
                >
                  <ParallaxImage
                    src={src}
                    alt={`${project.title} screenshot ${i + 1}`}
                    speed={0.2}
                    maxOffset={80}
                    className="w-full h-full rounded-xl"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
