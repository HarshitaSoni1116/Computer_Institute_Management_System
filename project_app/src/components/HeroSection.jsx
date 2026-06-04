import { motion } from 'framer-motion';
export default function HeroSection() {
  return (
    <motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-yellow-500/10 to-lime-500/10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">

        <div>
          <p className="text-yellow-400 uppercase tracking-[5px] text-sm mb-4">
            Best Computer Institute
          </p>

          <h1
            className="text-5xl md:text-7xl font-extrabold leading-tight mb-6"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            Build Your <span className="text-yellow-400">Tech Career</span>
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl">
            Learn professional computer courses like DCA, PGDCA,
            CPCT, Tally, Programming, Web Development and more.
          </p>

          <div className="flex flex-wrap gap-4">

            <button
              onClick={() =>
                document.getElementById('courses').scrollIntoView({
                  behavior: 'smooth',
                })
              }
              className="bg-yellow-500 hover:bg-yellow-500 transition px-7 py-3 rounded-full font-semibold"
            >
              Explore Courses
            </button>

            <button
              onClick={() =>
                document.getElementById('contact').scrollIntoView({
                  behavior: 'smooth',
                })
              }
              className="border border-white/20 hover:border-yellow-400 hover:text-yellow-400 transition px-7 py-3 rounded-full font-semibold"
            >
              Free Demo Class
            </button>

          </div>
        </div>

        <div className="relative flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
            alt="students"
            className="rounded-[30px] h-[450px] object-cover border border-white/10"
          />
        </div>

      </div>
    </section>
    </motion.div>
  );
}