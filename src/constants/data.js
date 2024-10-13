import project1 from "../assets/projects/Appointment-app.gif";
import project2 from "../assets/projects/React_Movie-app.gif";
import project3 from "../assets/projects/NFH LEGENDS Håndballstjerner.gif";
import project4 from "../assets/projects/Nøsted-app.gif";
import project5 from "../assets/projects/UIA-ASISTENTEN.gif";


export const PROJECTS = [

  

{
  title : "Appointment App:",
  image: project1,
  
  description: "React, Bootstrap og JavaScript ble brukt i dette prosjektet. Både komponentstrukturen og modal CSSble benyttet. Brukeren fikk mulighet til å velge ønsket dag og klokkeslett hos legen han valgte, samt bruke funksjonene for å bestille time og avbestille.",
  technologies: ["React, JavaScript, CSS, Bootstrap "],
  Link: "https://appointment-app-bgenc.vercel.app/"
  
  


},
{
  title : "React Movie App:",
  image: project2,
  description: "I dette prosjektet ble både Firebase og React brukt til å opprette en komponentstruktur.Med en privat rute struktur ble brukerens tilgang til ulike sider håndtert, der de kunne gå til detaljsiden uten å være  pålogget mens tilgangen til registreringssiden krever pålogging. Videre ble brukere gitt muligheten til å logge inn ved hjelp av sin registrerte e-postadresse via Google. Prosjektet innebar også funksjonalitet som tillot brukere å søke etter filmer, få presentert informasjon om valgte filmer, samt se IMDb poengsummen for hver film. I tillegg ble Firebase's ToastWarnNotify-struktur brukt til å gi visuelle varsler til brukere når de logget inn eller ut." ,

  technologies: ["React, JavaScript, Firebase, ToastWarnNotify "] ,
  Link: "https://movie-app-bgenc.vercel.app/"



},

{
  title : "Norges Beste Håndbaljentene App:",
  image: project3,
  description: "Prosjektet har som mål å lage en app for Norges Beste Håndbaljentene. Conditional-rendering, React-boostrap, Js,React, ble brukt i dette prosjektet. Spesielt i React-delen ble komponentstrukturen brukt. Målet medprosjektet var å forstå komponentstrukturen opprettet med React. Dataene for kortstrukturen blehentet ved hjelp av JavaScript-datametoden.",
  technologies: ["React, JavaScript, Conditional-rendering, , React-boostrap "],
  Link: "https://norges-beste.vercel.app/"



},
{
  title : "Digitalisering av serviceorder for Nøsted & AS",
  image: project4,
  description: "I digitaliseringsprosjektet for Nøsted & AS utviklet vi en webapplikasjon for å effektivisere håndteringen av serviceordrer for IGLAND-produkter. Ved å integrere løsningen med MS Business Central via REST API, automatiserte vi innsamling av produkt- og lagerdata, noe som forenkler registrering og oppfølging. Applikasjonen, tilgjengelig på tvers av enheter, forbedrer mekanikernes og kundenes evne til å håndtere servicebehov. Digitalisering av papirbaserte sjekklister styrket kommunikasjonen med kundene ved å gi bedre innsikt i utført arbeid og anbefalinger, noe som bidrar til bedre service og fremtidig forretningsutvikling.",
  technologies: ["REST API, Asp.Net, Docker, Azure-Devops, MSSQL-Database, MVC-Architecture "],
  Link: "https://github.com/Bunyamin54/Check.List.App"




},
{
  title : "UIA Asistenten:",
  image: project5,
  description: "UIA Asisten-prosjektet har som mål å utvikle en AI-drevet digital assistent for å forbedre utdanningsadministrasjon og studentveiledning ved Universitetet i Agder. Ved å automatisere akademisk planlegging, personlig rådgivning og læringsstøtte, hjelper løsningen både studenter og ansatte med å optimalisere studiehverdagen. Integrasjon med universitetets eksisterende systemer muliggjør sømløs administrasjon av tidsplaner, oppgaver og karriereplanlegging, noe som resulterer i økt studentengasjement og bedre akademiske resultater.",
  technologies: ["Tjenestedesign, Workshop, Figma, SurveyXact, User Journey Mapping  "],
  Link : " https://bit.ly/46X3biY"




},
 ]
  
export const CONTACT = {
  adress: "Universitet i Agder Kristiansand - 2024",
  email: "bunyaming@uia.no  --- Telefon: 486 23 860 "
  
}


export const MEHMET_CONTENT = "Hei! Jeg er Mehmet Turker Tuncer. Jeg er en IT-student ved Universitetet i Agder som skal uteksamineres i 2025.  Som en junior full-stack-utvikler har jeg ferdigheter i REACTjs, JavaScript, HTML, CSS, TypeScript, Bootstrap5, SQL, Docker, Linux og Java. Teknologiinnovasjoner og teknologiske innretninger er blant temaene jeg følger nysgjerrig på. Min største lykke er å tilbringe tid med familien min.";

export const Bunyamin_Content = "";

export const Tahir_Content = "";



export const profiles = [
  { name: 'Mehmet Turker Tuncer', content: 'Hei! Jeg er Mehmet Turker Tuncer. Jeg er en IT-student ved Universitetet i Agder som skal uteksamineres i 2025.  Som en junior full-stack-utvikler har jeg ferdigheter i REACTjs, JavaScript, HTML, CSS, TypeScript, Bootstrap5, SQL, Docker, Linux og Java. <br/> Teknologiinnovasjoner og teknologiske innretninger er blant temaene jeg følger nysgjerrig på. Min største lykke er å tilbringe tid med familien min.' },
  { name: 'Bunyamin Genc', content: 'Bunyamin is an expert in backend systems and database management.' },
  { name: 'Tahir Arslan', content: 'Tahir is a versatile developer skilled in both frontend and backend.' }
];







