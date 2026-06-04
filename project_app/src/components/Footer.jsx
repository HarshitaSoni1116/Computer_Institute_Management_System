export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 px-6">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        <h2 className="text-2xl font-bold">
          Universal Tally <span className="text-yellow-400">Acadamy</span>
        </h2>

        <p className="text-gray-400 text-sm text-center">
          © 2026 Univerasal Tally Acadeamy. All rights reserved.
        </p>

        <div className="flex gap-6 text-sm">

  <a
    href="https://instagram.com/your_username"
    target="_blank"
    rel="noreferrer"
    className="hover:text-yellow-400 transition"
  >
    Instagram
  </a>

  <a
    href="https://facebook.com/your_page"
    target="_blank"
    rel="noreferrer"
    className="hover:text-yellow-400 transition"
  >
    Facebook
  </a>

  <a
    href="https://youtube.com/"
    target="_blank"
    rel="noreferrer"
    className="hover:text-yellow-400 transition"
  >
    YouTube
  </a>

  <a
    href="https://linkedin.com/"
    target="_blank"
    rel="noreferrer"
    className="hover:text-yellow-400 transition"
  >
    LinkedIn
  </a>

</div>
      </div>

    </footer>
  );
}