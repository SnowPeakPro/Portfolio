/**
 * Project detail page.
 *
 * This page will eventually render the full description of a selected
 * project. At the moment it serves as a scaffold for future content.
 */
function ProjectDetail() {
  return (
    <section className="py-16 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-cyan-300">Détail du projet</h2>
      <p className="mt-4 text-slate-300">
        Description détaillée du projet. Cette page sera alimentée par les
        données définies dans src/data/projects.js.
      </p>
    </section>
  );
}

export default ProjectDetail;