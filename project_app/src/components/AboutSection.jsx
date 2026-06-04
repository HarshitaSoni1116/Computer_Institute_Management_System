import { features } from '../data/data';
import { motion } from 'framer-motion';
export default function AboutSection() {
  return (
    <motion.section
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
 id="about" className="py-24 bg-white/5 px-6">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        <div>

          <p className="text-yellow-400 uppercase tracking-[4px] mb-4">
            Why Choose Us
          </p>

          <h2
            className="text-5xl font-bold mb-6"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            We Prepare Students For Real Careers
          </h2>

          <p className="text-gray-300 leading-relaxed mb-8">
            Our institute focuses on practical training,
            career guidance and industry-level education.
          </p>

          <div className="grid grid-cols-2 gap-4">

            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 p-4 rounded-2xl"
              >
                ✅ {feature}
              </div>
            ))}

          </div>

        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
            alt="lab"
            className="rounded-[30px] border border-white/10"
          />
        </div>

      </div>

    </motion.section>
  );
}