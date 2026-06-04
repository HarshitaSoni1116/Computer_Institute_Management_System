export default function Trustbar() {

  const items = [
    'Govt. Certificate',
    'Placement Support',
    'Expert Trainers',
    'Live Practical Labs',
  ];

  return (
    <section className="py-10 border-y border-white/10 bg-white/5">

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-6">

        {items.map((item, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold text-yellow-400">
              {item}
            </h3>
          </div>
        ))}

      </div>

    </section>
  );
}