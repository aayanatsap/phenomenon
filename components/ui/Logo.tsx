import { useState } from 'react';
import Image from 'next/image';
import logo from "../../media/logo.png"

const JumpLogo: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleAnimation = () => {
    setIsAnimating(true);
  };

  return (
    <Image
      src={logo}
      alt="Jumping Image"
      className={`lg:size-[500px] md:size-[450px] size-[300px] cursor-pointer transition-transform ease ${
        isAnimating ? 'animate-zoom' : 'animate-throb'
      }`}
      onClick={handleAnimation}
      onAnimationEnd={() => setIsAnimating(false)} // Reset animation state
    />
  );
};

export default JumpLogo;
