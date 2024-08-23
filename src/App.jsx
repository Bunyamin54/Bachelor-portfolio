import React from 'react';
import Navbar from './components/Navbar';
import Om_Oss from './components/Om_Oss';
import Medlemmer from './components/Medlemmer';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Medlem from './components/Medlem';
import './App.css';
import image1 from "./img/mehmet-foto.jpeg";
import image2 from "./img/bunyamin-foto.jpeg";
import image3 from "./img/tahiraga.jpeg";
import Hjem from './components/Hjem';


const App = () => {
 
    const profiles = [
      {
        name: 'Mehmet Turker Tuncer',
        content: 'Hei! Jeg er Mehmet Turker Tuncer. Jeg er en IT-student ved Universitetet i Agder som skal uteksamineres i 2025. Jeg er en junior full-stack-utvikler har jeg ferdigheter i REACTjs, JavaScript, HTML, CSS, TypeScript, Bootstrap5, SQL, Docker, Linux og Java. Jeg har fullført et Full Stack-kurs ved Clarusway. <br/> Teknologi og familien min er mine to største interesser. Jeg er veldig glad for å tilbringe tid med dem begge.',
        image: image1,  // Profil resminin yolu
        linkedin: 'https://www.linkedin.com/in/turker-tuncer' , 
        github: 'https://github.com/MehmetTurkerTuncer-UIA'
      },
      {
        name: 'Bunyamin Genc',
        content: 'Hei, Jeg er Bunyamin, en engasjert IT-student ved Universitetet i Agder. Min teknologiske reise har vært preget av en lidenskap for å utvikle løsninger som fremmer bærekraft og mening, med spesiell fokus på brukervennlige applikasjoner gjennom avanserte teknologier som React, JavaScript, og ASP.NET. Jeg har fullført et intensivt Full Stack-kurs ved Clarusway, hvor jeg mestret både front-end og back-end teknologier, inkludert moderne webteknologier og databasehåndtering ved siden av studie mitt.',
        image: image2,  // Profil resminin yolu
        linkedin: 'https://linkedin.com/in/bunyamin-genc' ,
        github: 'https://github.com/Bunyamin54'
      },
      {
        name: 'Tahir Aslan',
        content: 'Hei, jeg heter Tahir Aslan. Jeg er student ved Universitetet i Agder hvor jeg studerer IT, og jeg har også fullført opplæring som Full Stack Developer. Jeg har fått mellomnivå opplæring i teknologier som JavaScript, React, og ASP.NET. Jeg er dedikert til å holde meg oppdatert med utviklingen i software-verdenen og til å stadig tilegne meg nye ferdigheter. Jeg er åpen for både læring og å skape prosjekter. Jeg har styrker innen teamarbeid, problemløsning, og kreativ tenkning.',
        image: image3,  // Profil resminin yolu
        linkedin: 'https://linkedin.com/in/tahir-aslan' ,
        github: 'https://github.com/aslnthir'
      }
    ];
  

  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-800'>
      <div className='fixed top-0 left-0 w-screen h-screen -z-10 bg-neutral-800'></div>
      <div className="fixed top-0 left-0 w-screen h-screen z-[-9] bg-fuchsia-400 bg-[size:20px_20px] opacity-20 blur-[100px]"></div>

      <div className='container mx-auto px-8'>
        <Navbar />

        <section id="hjem">
          <Hjem />
        </section>

        <section id="om-oss">
          <Om_Oss />
        </section>

        <section id="medlemmer">
          <div className="flex flex-wrap justify-between">
            {profiles.map((profile, index ) => (
              <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
                <Medlem name={profile.name} content={profile.content} image={profile.image} linkedin={profile.linkedin} github={profile.github} />
              </div>
            ))}
          </div>
        </section>

        <section id="technologies">
          <Technologies />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default App;
















