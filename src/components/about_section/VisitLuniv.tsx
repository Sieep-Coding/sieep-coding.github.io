import Tooltip from '../navbar/Tooltip'; // Assuming this component exists

export default function BookConsultation() {
  return (
    <a
      href="https://luniv.tech/contact"
      // Use inline-flex for proper alignment and sizing, and add responsive padding
      className="inline-flex transition-transform duration-300 hover:scale-105"
    >
      <Tooltip text="Explore our services and book your free consultation." position="left">
        <div className="mt-8 flex flex-col items-center justify-center space-y-3 rounded-xl bg-gradient-to-r from-[#968bf1] to-[#8baffd] px-6 py-4 text-white shadow-xl focus:outline-none focus:ring-4 focus:ring-purple-300 active:scale-95">
          {/* SVG icon for visual appeal. */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <span className="text-xl font-bold">
            Book a Free Consultation
          </span>
        </div>
      </Tooltip>
    </a>
  );
}
