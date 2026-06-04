import { useState } from 'react';

export default function ContactSection() {

  const [formData, setFormData] = useState({
  name: '',
  email: '',
  mobile: '',
  course: '',
  city: '',
  message: '',
});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    if (!formData.name.trim()) {
  alert("Name is required");
  return;
}

if (!formData.email.trim()) {
  alert("Email is required");
  return;
}

if (!/^[0-9]{10}$/.test(formData.mobile)) {
  alert("Enter valid 10 digit mobile number");
  return;
}

if (!formData.course.trim()) {
  alert("Course is required");
  return;
}

    e.preventDefault();

    try {

      const response = await fetch(
        'http://localhost:8081/api/admissions',
        {
          method: 'POST',

          headers: {
            'Content-Type': 'application/json',
          },

          body: JSON.stringify({
            studentName: formData.name,
            email: formData.email,
            mobile: formData.mobile,
            course: formData.course,
            city: formData.city,
            message: formData.message,
          }),
  
        }
      );

      if (response.ok) {

        alert('Admission submitted successfully');

        setFormData({
          name: '',
          email:'',
          mobile: '',
          course: '',
          city: '',
          message: '',
        });

      } else {
        alert('Submission failed');
      }

    } catch (error) {
      console.error(error);
      alert('Server error');
    }
  };

  return (
  <section
    id="contact"
    className="py-24 px-6 bg-gradient-to-b from-[#07130c] via-[#0b1d14] to-black"
  >
    <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

      {/* LEFT SIDE */}

      <div>

        <p className="text-yellow-400 font-semibold tracking-widest uppercase mb-4">
          Contact Us
        </p>

        <h2
          className="text-5xl font-bold leading-tight mb-6"
          style={{ fontFamily: 'Orbitron, sans-serif' }}
        >
          Start Your <span className="text-yellow-400">Tech Journey</span>
        </h2>

        <p className="text-gray-400 text-lg leading-relaxed mb-8">
          Fill out the admission form and our team will contact you shortly
          with course details, fees, timings, and career guidance.
        </p>

        <div className="space-y-5">

          <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl">
            <div className="text-3xl">📞</div>

            <div>
              <h4 className="font-semibold text-white">Call Us</h4>
              <p className="text-gray-400">+91 0000000000</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl">
            <div className="text-3xl">📍</div>

            <div>
              <h4 className="font-semibold text-white">Location</h4>
              <p className="text-gray-400">Bhopal, Madhya Pradesh</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl">
            <div className="text-3xl">📧</div>

            <div>
              <h4 className="font-semibold text-white">Email</h4>
              <p className="text-gray-400">info@techinstitute.com</p>
            </div>
          </div>

        </div>
      </div>

      {/* RIGHT SIDE FORM */}

      <form
        onSubmit={handleSubmit}
        className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[35px] p-8 shadow-2xl"
      >

        <h3 className="text-3xl font-bold mb-8 text-center">
          Admission Form
        </h3>

        <div className="grid md:grid-cols-2 gap-5">

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 transition"
          />


          <input
  type="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  placeholder="Email Address"
  className="bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-green-400 transition"
/>


          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Mobile Number"
            className="bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 transition"
          />

          <input
            type="text"
            name="course"
            value={formData.course}
            onChange={handleChange}
            placeholder="Course Interested"
            className="bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 transition"
          />

          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City"
            className="bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 transition"
          />

        </div>

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Write your message..."
          rows="5"
          className="w-full mt-5 bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 transition"
        ></textarea>

        <button
          type="submit"
          className="w-full mt-7 bg-yellow-500 hover:bg-yellow-500 hover:scale-[1.02] transition duration-300 py-4 rounded-2xl font-bold text-lg shadow-lg"
        >
          Submit Admission Form 
        </button>

      </form>
      {/* GOOGLE MAP */}

<div className="lg:col-span-2 mt-10">

  <div className="bg-white/5 border border-white/10 rounded-[35px] overflow-hidden shadow-2xl">

    <div className="p-6 border-b border-white/10">

      <h3
        className="text-3xl font-bold mb-2"
        style={{ fontFamily: 'Orbitron, sans-serif' }}
      >
        Visit Our Institute
      </h3>

      <p className="text-gray-400">
        Find us easily on Google Maps.
      </p>

    </div>

    <iframe
      title="Institute Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2080.3777467289838!2d79.99316126941123!3d23.288607599901724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981a5cf785c4aad%3A0xc6e04d0ee773154!2sUniversal%20Tally%20Academy!5e0!3m2!1sen!2sin!4v1780145824300!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="brightness-75 hover:brightness-75-0 transition duration-500"
    ></iframe>

  </div>

</div>
    </div>
  </section>
);
}

