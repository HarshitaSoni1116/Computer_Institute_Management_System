import { resources } from '../data/data';
import {FaKeyboard,FaBook,FaLaptopCode, FaClipboardCheck,} from 'react-icons/fa';

export default function ResourcesSection() {

  const handleResourceAccess = (resource) => {

    const links = {
      'CPCT Mock Tests': 'https://www.cpct.mp.gov.in/',
      'Typing Practice': 'https://www.typingclub.com/',
      'DCA Notes PDF': 'https://www.tutorialspoint.com/computer_fundamentals/index.htm',
      'Programming Assignments': 'https://www.hackerrank.com/',
    };

    window.open(links[resource], '_blank');
  };

  const resourceIcons = {
  'CPCT Mock Tests': <FaClipboardCheck />,
  'Typing Practice': <FaKeyboard />,
  'DCA Notes PDF': <FaBook />,
  'Programming Assignments': <FaLaptopCode />,
};

  return (
    <section className="py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">

          <p className="text-yellow-400 uppercase tracking-[4px] mb-4">
            Free Resources
          </p>

          <h2
            className="text-5xl font-bold"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            Practice & Learning Materials
          </h2>

        </div>

        <div className="grid md:grid-cols-4 gap-6">

          {resources.map((resource, index) => (
            <div
              key={index}
             className="
                  bg-white/5
                  backdrop-blur-xl
                  border border-emerald-500/20
                  rounded-[25px]
                  p-8
                  text-center
                  transition-all
                  duration-500
                  hover:-translate-y-3
                  hover:border-yellow-400
                  hover:shadow-[0_0_25px_rgba(250,204,21,0.25)]
                  "
            >

              <div className="text-5xl mb-5 text-yellow-400 flex justify-center">
                   {resourceIcons[resource]}
              </div>

              <h3 className="text-xl font-semibold mb-4">
                {resource}
              </h3>

              <button
                onClick={() => handleResourceAccess(resource)}
                className="bg-yellow-500 hover:bg-yellow-500 px-5 py-2 rounded-full text-sm font-semibold transition"
              >
                Access Now
              </button>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}