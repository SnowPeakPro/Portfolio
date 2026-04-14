/**
 * Footer component.
 *
 * Displays copyright information at the bottom of the page. It uses
 * JavaScript's Date API to always render the current year.
 */
function Footer() {
  return (
    <footer className="py-8 px-4 bg-slate-950 border-t border-slate-700">
      <div className="max-w-7xl mx-auto text-center text-slate-500">
        © {new Date().getFullYear()} Loïc Vidal‑Ferrasse. Tous droits
        réservés.
      </div>
    </footer>
  );
}

export default Footer;