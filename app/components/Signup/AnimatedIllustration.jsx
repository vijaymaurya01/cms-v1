import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const AnimatedIllustration = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <Player
        autoplay
        loop
        src="/signup-animation.json"
        style={{ height: '300px', width: '300px' }}
      ></Player>
    </div>
  );
};

export default AnimatedIllustration;
