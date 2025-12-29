import { Link } from "react-router-dom";
import { PROJECTS } from "../data/projects";

export default function Projects() {
  return (
    <main className="min-h-screen p-8" id="projects">
      <div className="container mx-auto">
        <h1 className="text-3xl font-semibold mb-6">Projects</h1>
        <div className="grid gap-6 sm:grid-cols-2">
          {PROJECTS.map((p) => (
            <Link
              key={p.id}
              to={`/projects/${p.id}`}
              className="block p-6 rounded-lg border hover:shadow-lg transition"
            >
              <h2 className="text-xl font-medium">{p.title}</h2>
              <p className="text-sm text-muted-foreground mt-2">{p.summary}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
