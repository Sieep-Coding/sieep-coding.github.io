import { useState } from 'react';

export default function BookConsultation() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href="https://calendly.com/luniv/let-s-chat"
      className="group inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
    </a>
  );
}