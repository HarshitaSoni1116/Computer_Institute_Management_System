import { courses } from '../data/data';
import { FaLaptopCode,FaGraduationCap,FaKeyboard,FaChartLine,FaPython,FaGlobe,} from 'react-icons/fa';

export default function CoursesSection() {

const courseIcons = {
  'DCA': <FaLaptopCode />,
  'PGDCA': <FaGraduationCap />,
  'CPCT Preparation': <FaKeyboard />,
  'Tally Prime + GST': <FaChartLine />,
  'Python Programming': <FaPython />,
  'Web Development': <FaGlobe />,
};
  return (
    <section id="courses" className="py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <p className="text-yellow-400 uppercase tracking-[4px] mb-4">
            Popular Courses
          </p>

          <h2
            className="text-5xl font-bold mb-6"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            Professional Computer Courses
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {courses.map((course, index) => (
            <div
              key={index}
            className="
              bg-white/5
              backdrop-blur-xl
              border border-emerald-500/20
              rounded-[30px]
              p-8
              transition-all
              duration-500
              hover:-translate-y-3
              hover:border-yellow-400
              hover:shadow-[0_0_30px_rgba(250,204,21,0.25)]
            "
            >

              <div className="text-5xl mb-5 text-yellow-400 flex justify-center">
  {courseIcons[course.title]}
</div>

              <h3 className="text-2xl font-bold mb-3">
                {course.title}
              </h3>

              <p className="text-gray-400 mb-6">
                Duration: {course.duration}
              </p>

              <button
                onClick={() =>
                  document.getElementById('contact').scrollIntoView({
                    behavior: 'smooth',
                  })
                }
                className="w-full bg-yellow-500 hover:bg-yellow-500 transition py-3 rounded-2xl font-semibold"
              >
                Enroll Now
              </button>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}