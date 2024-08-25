import React from 'react';
import {motion} from 'framer-motion';
import myImage from '../assets/uia grup.jpeg'; // Adjust this path

const Om_Oss = () => {
  return (
    <div className="flex items-center justify-center py-4 px-4">
      <div className="max-w-12xl flex flex-col lg:flex-row text-center lg:text-left">

        <motion.div
          className="lg:w-1/2"
          whileInView={{opacity: 1, x: 0}}
          initial={{opacity: 0, x: -100}}
          transition={{duration: 0.8}}
        >
          <motion.h1 
        whileInView={{ opacity: 1, y: 0 }} 
        initial={{ opacity: 0, y: -100 }} 
        transition={{ duration: 1.5 }} 
        className="text-4xl font-bold my-20 text-center">
        Om oss
      </motion.h1>
          <p className="mb-4 text-2xl">
          Vår gruppe har en sterk interesse for digitalisering, med fokus på utvikling av nettbaserte løsninger som webapplikasjoner og designprosjekter. Vi er engasjerte i å utforske tjenestedesign, universell utforming, dataanalyse og sikkerhet, drevet av nysgjerrighet på hvordan teknologi kan løse komplekse problemer.
          </p>
          <p className="mb-4 text-2xl">
          Gruppen vår har gjennomført flere kurs hos Clarusway, hvor vi har tilegnet oss ferdigheter innen både front-end og back-end webutvikling, spesielt i React og JavaScript. Disse kursene har ikke bare styrket vår tekniske kompetanse, men også gitt oss innsikt i samarbeid og prosjektledelse, slik at vi er godt forberedt på å bidra i et dynamisk teknologisk miljø. Vi er læringsorienterte og ivrige etter å anvende vår kunnskap i praksis.
          </p>
          <p className="text-2xl">
            Denne bakgrunnen utstyrer oss med de nødvendige ferdighetene for å takle utfordringer innen digitalisering, fra idefasen til implementering, med en helhetlig forståelse av teknologiske løsninger.
          </p>
         

        </motion.div>

        <motion.div
          className="lg:w-1/2 lg:pl-10 flex items-center justify-center"
          whileInView={{opacity: 1, x: 0}}
          initial={{opacity: 0, x: 100}}
          transition={{duration: 0.8}}
        >
          <img
            src={myImage}
            alt="Our Team"
            className="rounded-lg shadow-lg mt-1 mb-16 lg:w-2/3 lg:h-auto"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Om_Oss;
