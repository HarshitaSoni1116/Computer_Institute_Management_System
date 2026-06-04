import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

export default function FloatingWhatsapp() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">

      {/* CALL BUTTON */}
      <a
        href="tel:+918839878720"
        className="bg-blue-500 hover:bg-blue-400 transition w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-2xl"
      >
        <FaPhoneAlt />
      </a>

      {/* WHATSAPP BUTTON */}
      <a
        href="https://wa.me/918839878720"
        target="_blank"
        rel="noreferrer"
        className="bg-green-500 hover:bg-green-400 transition w-16 h-16 rounded-full flex items-center justify-center text-4xl shadow-2xl"
      >
        <FaWhatsapp />
      </a>

    </div>
  );
}