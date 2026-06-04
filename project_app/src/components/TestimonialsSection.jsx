export default function TestimonialsSection() {

 const reviews = [
  {
    id: 1,
    name: "Rahul Sharma",
    course: "Java Full Stack",
    rating: 5,
    review:
      "Amazing teaching style. Concepts were explained very clearly and projects helped me gain confidence.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Priya Verma",
    course: "React Development",
    rating: 4,
    review:
      "Loved the practical sessions and live coding examples. The placement guidance was very helpful.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Aman Khan",
    course: "Spring Boot",
    rating: 5,
    review:
      "One of the best institutes for beginners. Learned backend development from scratch.",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    id: 4,
    name: "Sneha Patel",
    course: "Data Structures & Algorithms",
    rating: 5,
    review:
      "The mentors were supportive and the coding practice sessions improved my problem-solving skills.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

  return (
    <section className="py-24 px-6">

      <div className="max-w-6xl mx-auto text-center">

        <p className="text-yellow-400 uppercase tracking-[4px] mb-4">
          Student Reviews
        </p>

        <h2
          className="text-5xl font-bold mb-14"
          style={{ fontFamily: 'Orbitron, sans-serif' }}
        >
          What Students Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

  {reviews.map((item) => (
    <div
      key={item.id}
      className="bg-white/5 border border-white/10 rounded-[30px] p-8 hover:scale-105 transition duration-300"
    >

      <div className="flex items-center gap-4 mb-5">
        <img
          src={item.image}
          alt={item.name}
          className="w-14 h-14 rounded-full object-cover border-2 border-cyan-400"
        />

        <div>
          <h4 className="font-bold text-yellow-400 text-lg">
            {item.name}
          </h4>

          <p className="text-sm text-gray-400">
            {item.course}
          </p>
        </div>
      </div>

      <div className="text-yellow-400 text-xl mb-4">
        {"⭐".repeat(item.rating)}
      </div>

      <p className="text-gray-300 leading-relaxed">
        {item.review}
      </p>

    </div>
  ))}

</div>

      </div>

    </section>
  );
}