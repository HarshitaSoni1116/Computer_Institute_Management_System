import { placements } from '../data/data';

export default function PlacementSection() {
  return (
    <section className="py-24 bg-white/5 px-6">

      <div className="max-w-7xl mx-auto text-center">

        <p className="text-yellow-400 uppercase tracking-[4px] mb-4">
          Placement Partners
        </p>

        <h2
          className="text-5xl font-bold mb-14"
          style={{ fontFamily: 'Orbitron, sans-serif' }}
        >
          Companies Hiring Our Students
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          {placements.map((company, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col items-center justify-center hover:scale-105 transition duration-300 hover:border-yellow-400"
            >

              <div className="bg-white rounded-2xl p-4 w-24 h-24 flex items-center justify-center mb-4">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 className="font-bold text-lg text-white">
                {company.name}
              </h3>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}