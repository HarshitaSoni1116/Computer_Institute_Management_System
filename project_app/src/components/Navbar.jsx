export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-[#08110d]/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <h1
          className="text-3xl font-extrabold tracking-[2px]"
          style={{ fontFamily: 'Orbitron, sans-serif' }}
        >
          Univeral Tally <span className="text-yellow-400">Acadamy</span>
        </h1>

        <div className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#home" className="hover:text-yellow-400 transition">Home</a>
          <a href="#courses" className="hover:text-yellow-400 transition">Courses</a>
          <a href="#about" className="hover:text-yellow-400 transition">About</a>
          <a href="#contact" className="hover:text-yellow-400 transition">Contact</a>
        </div>

        <button
          onClick={() =>
            document.getElementById('contact').scrollIntoView({
              behavior: 'smooth',
            })
          }
          className="bg-yellow-500 hover:bg-yellow-500 transition px-5 py-2 rounded-full text-sm font-semibold"
        >
          Enroll Now
        </button>
      </div>
    </nav>
  );
}