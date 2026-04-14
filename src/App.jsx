import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';

/**
 * Root application component.
 *
 * This component composes the overall layout of the site, including a
 * persistent navbar at the top, a footer at the bottom, and a main
 * content area in the middle. Pages are rendered within the main
 * content area. For this V1 we only render the Home page, but the
 * structure makes it easy to add routing later.
 */
function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <Navbar />
      <main className="flex-1">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;