import { useState } from 'react';

export default function ChatBot() {

  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Hello 👋 Welcome to Univerasal Tally Acadeamy Institute. Ask me about courses, fees, CPCT, placements or admissions.',
    },
  ]);

  const [input, setInput] = useState('');

  const getBotReply = (text) => {

    const msg = text.toLowerCase();

    if (
      msg.includes('dca')
    ) {
      return 'DCA is a 6-month diploma course covering MS Office, Internet, Windows, Typing and Computer Fundamentals. For complete syllabus & fees contact institute.';
    }

    if (
      msg.includes('pgdca')
    ) {
      return 'PGDCA is a professional postgraduate diploma including programming, DBMS, software and practical computer applications. Contact institute for detailed guidance.';
    }

    if (
      msg.includes('cpct')
    ) {
      return 'CPCT preparation includes typing practice, MCQs, computer proficiency and mock tests. Duration is approximately 3 months.';
    }

    if (
      msg.includes('python')
    ) {
      return 'Python course includes basics, OOP, projects, file handling and backend concepts. Contact institute for advanced roadmap.';
    }

    if (
      msg.includes('web')
    ) {
      return 'Web Development course includes HTML, CSS, JavaScript, React and backend basics with projects.';
    }

    if (
      msg.includes('fees')
    ) {
      return 'Course fees vary according to duration and modules. Please contact institute for updated fee structure.';
    }

    if (
      msg.includes('placement')
    ) {
      return 'We provide placement guidance, interview preparation and practical training support.';
    }

    if (
      msg.includes('timing')
    ) {
      return 'Morning and evening batches are available for students and working professionals.';
    }

    if (
      msg.includes('contact')
    ) {
      return 'You can contact us via Call or WhatsApp using the floating buttons on the website.';
    }

    return 'For detailed information please contact the institute directly. Our team will guide you properly.';
  };

  const handleSend = () => {

    if (!input.trim()) return;

    const userMessage = input;

    const botReply = getBotReply(userMessage);

    setMessages((prev) => [
      ...prev,
      {
        sender: 'user',
        text: userMessage,
      },
      {
        sender: 'bot',
        text: botReply,
      },
    ]);

    setInput('');
  };

  return (
    <>

      {/* FLOATING BUTTON */}
      <button
  onClick={() => setOpen(!open)}
  className="
    fixed bottom-6 left-6 z-50
    group
    w-[65px] h-[65px]
    rounded-2xl
    bg-white/10
    backdrop-blur-xl
    border border-emerald-400/30
    shadow-[0_0_25px_rgba(16,185,129,0.35)]
    hover:shadow-[0_0_40px_rgba(250,204,21,0.45)]
    hover:scale-105
    transition-all duration-300
    flex items-center justify-center
    overflow-hidden
  "
>
    {/*online dot*/}
    <div
     className="absolute top-2 right-2 w-2 h-2 bg-green-400 rounded-full">
     </div>

  {/* GLOW EFFECT */}
  <div className="
    absolute inset-0
    bg-gradient-to-br
    from-emerald-400/20
    via-transparent
    to-yellow-400/20
    opacity-80
  "></div>

  {/* TEXT */}
  <div className="relative z-10 flex flex-col items-center">

    <span className="text-xl font-black text-yellow-400 tracking-wider">
      AI
    </span>

    <span className="text-[10px] text-emerald-200 tracking-[2px]">
      CHAT
    </span>

  </div>

</button>

      {/* CHAT WINDOW */}
      {open && (

        <div className="fixed bottom-24 left-6 w-[360px] h-[520px] bg-[#0B1120]/95 backdrop-blur-2xl border border-white/10 rounded-[30px] shadow-2xl overflow-hidden z-50 animate-fadeIn">

          {/* HEADER */}
          <div className="bg-gradient-to-r from-yellow-500 to-green-700 p-5 flex justify-between items-center">

            <div>

              <h2 className="font-bold text-lg">
                Univerasal Tally Acadeamy AI
              </h2>

              <p className="text-sm text-white/80">
                Institute Assistant
              </p>

            </div>

            <button
              onClick={() => setOpen(false)}
              className="text-xl hover:rotate-90 transition"
            >
              ✕
            </button>

          </div>

          {/* CHAT AREA */}
          <div className="h-[360px] overflow-y-auto p-4 space-y-4">

            {messages.map((msg, index) => (

              <div
                key={index}
                className={`flex ${
                  msg.sender === 'user'
                    ? 'justify-end'
                    : 'justify-start'
                }`}
              >

                <div
                  className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed shadow-lg ${
                    msg.sender === 'user'
                      ? 'bg-yellow-500 text-white rounded-br-sm'
                      : 'bg-white/10 text-gray-200 rounded-bl-sm'
                  }`}
                >
                  {msg.text}
                </div>

              </div>
            ))}

          </div>

          {/* INPUT */}
          <div className="absolute bottom-0 left-0 w-full p-4 border-t border-white/10 bg-black/20 backdrop-blur-xl">

            <div className="flex gap-3">

              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) =>
                  e.key === 'Enter' && handleSend()
                }
                placeholder="Ask something..."
                className="flex-1 bg-white/10 border border-white/10 rounded-2xl px-4 py-3 outline-none focus:border-cyan-400 text-sm"
              />

              <button
                onClick={handleSend}
                className="bg-gradient-to-r from-emerald-500 to-yellow-500 hover:opacity-90 transition px-5 rounded-2xl font-semibold"
              >
                Send
              </button>

            </div>

          </div>

        </div>
      )}

    </>
  );
}