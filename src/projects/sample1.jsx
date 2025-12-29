export default function Sample1() {
  return (
    <article>
      <h1 className="text-2xl font-semibold mb-4">Sample Project 1</h1>
      <p className="mb-4">
        This is a demo project page. Replace with rich content as needed.
      </p>

      <section className="mb-6">
        <h2 className="text-lg font-medium mb-2">Overview</h2>
        <p>Describe the project, images, links, tech stack, etc.</p>
      </section>

      <section>
        <h2 className="text-lg font-medium mb-2">Gallery</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="h-40 bg-gray-200 rounded" />
          <div className="h-40 bg-gray-200 rounded" />
        </div>
      </section>
    </article>
  );
}
