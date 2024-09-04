import React from 'react';
import backgroundVideo from '../../public/videos/video.mp4';

const Hjem = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      {/* Video Arka Plan */}
      <div className="video-container flex items-center justify-center rounded-lg overflow-hidden">  {/* rounded-lg ile kenarları yuvarlıyoruz */}
        <video className="w-full h-auto object-cover" autoPlay muted loop>
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* İçerik */}
        <div className="absolute z-10 flex flex-col items-center text-white text-center">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold mb-10 text-lime-300">
            Innovative Webcrafters
          </h1>
          <div className="w-full px-4">
            <p className="text-xs sm:text-xl md:text-2xl lg:text-3xl text-left font-bold  text-lime-200">
              Vår gruppe er dypt engasjert i å utforske digitaliseringens verden, med et særlig fokus på Frontend utvikling ve UX design. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hjem;
