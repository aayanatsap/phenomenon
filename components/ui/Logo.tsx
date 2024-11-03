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
      className={`size-[500px] cursor-pointer transition-transform ease ${
        isAnimating ? 'animate-jumpAndRotate' : 'animate-throb'
      }`}
      onClick={handleAnimation}
      onAnimationEnd={() => setIsAnimating(false)} // Reset animation state
    />
  );
};

export default JumpLogo;
