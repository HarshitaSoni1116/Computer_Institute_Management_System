export default function GallerySection() {

  const images = [
    'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
  ];

  return (
    <section className="py-24 bg-white/5 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">

          <p className="text-yellow-400 uppercase tracking-[4px] mb-4">
            Campus Gallery
          </p>

          <h2
            className="text-5xl font-bold"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            Explore Our Institute
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-[30px]"
            >
              <img
                src={img}
                alt="gallery"
                className="h-[300px] w-full object-cover hover:scale-110 transition duration-500"
              />
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}