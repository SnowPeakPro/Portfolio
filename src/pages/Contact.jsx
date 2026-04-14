/**
 * Contact page.
 *
 * Provides the user's contact information such as email, LinkedIn and
 * GitHub profiles. In later versions this can include a contact form
 * with validation.
 */
function Contact() {
  return (
    <section className="py-16 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-cyan-300">Contact</h2>
      <p className="mt-4 text-slate-300">
        Vous pouvez me joindre par email, sur LinkedIn ou via mon profil
        GitHub.
      </p>
      <ul className="mt-6 space-y-2 text-cyan-400">
        <li>
          <a
            href="mailto:votre.email@example.com"
            className="hover:underline"
          >
            Email
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/votreprofil"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://github.com/SnowPeakPro"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;