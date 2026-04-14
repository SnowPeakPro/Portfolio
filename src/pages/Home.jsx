import { content } from '../data/content';

/**
 * Home page component.
 *
 * Displays a hero section introducing the portfolio owner with bilingual
 * support. Currently only the French copy is rendered; you can extend
 * this component to switch language based on context.
 */
function Home() {
  const { fr } = content;
  return (
    <section className="py-16 px-4 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-cyan-300">{fr.heroTitle}</h1>
      <p className="mt-4 text-slate-300">{fr.heroText}</p>
    </section>
  );
}

export default Home;