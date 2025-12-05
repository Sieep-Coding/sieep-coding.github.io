import { useState } from 'react';

export default function BookConsultation() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href="https://calendly.com/nstamb6/let-s-chat"
      className="group inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        {/* Glow Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

        {/* Button */}
        <div className="relative px-8 py-5 rounded-2xl bg-gradient-to-r from-[#968bf1] to-[#8baffd] 
                        text-white font-semibold text-lg shadow-2xl transition-all duration-300 
                        group-hover:scale-105 active:scale-95 overflow-hidden">

          <div className="flex items-center justify-center gap-3 relative">

            {/* LEFT ICON */}
            <div
              className={`transition-all duration-500 ${
                isHovered ? 'scale-125 rotate-12' : 'scale-100 rotate-0'
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>

            {/* MAIN TEXT */}
            <span
              className={`transition-all duration-500 ${
                isHovered ? '-translate-x-2 opacity-0' : 'translate-x-0 opacity-100'
              }`}
            >
              Let's Chat!
            </span>

            {/* NEW FLY-IN TEXT - FIX APPLIED HERE */}
            <span
              className={`absolute whitespace-nowrap transition-all duration-700 
                          ${
                            isHovered
                              ? 'opacity-100 translate-x-0' // Text is visible and centered/in-place
                              : 'opacity-0 translate-x-[150%]' // Text is invisible and far right
                          }`}
            >
              Book a 15-min call with me.
            </span>

            {/* RIGHT ARROW */}
            <div
              className={`transition-all duration-500 ${
                isHovered ? 'translate-x-3 scale-125' : 'translate-x-0 scale-100'
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </div>

          </div>

          {/* Light sheen overlay */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/0 via-white/20 to-white/0 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </div>
      </div>
    </a>
  );
}