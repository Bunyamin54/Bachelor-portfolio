import React from 'react';
import backgroundVideo from '../../public/videos/video.mp4';

const Hjem = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      {/* Video Arka Plan */}
      <div className="video-container flex items-center justify-center">
        <video className="w-full h-auto object-cover" autoPlay muted loop>
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* İçerik */}
        <div className="absolute z-10 flex flex-col items-center text-white text-center">
          <h1 className="text-7xl font-semibold mb-10 text-lime-300">Innovative Webcrafters</h1>
          <div className="w-full px-4">
         
            <p className="text-3xl text-left font-bold  text-lime-200">
              Vår gruppe er dypt engasjert i å utforske digitaliseringens verden, med et særlig fokus på Frontend utvikling og UX design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hjem;
