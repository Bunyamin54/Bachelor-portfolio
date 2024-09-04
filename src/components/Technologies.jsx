
import {RiReactjsLine} from "react-icons/ri"
import { FaJava } from "react-icons/fa"
import { SiJavascript } from "react-icons/si"
import {SiTypescript } from "react-icons/si"
import {BiLogoPostgresql } from "react-icons/bi"
import { DiDotnet } from "react-icons/di"
import { SiFigma } from "react-icons/si"
import { motion } from "framer-motion"

  const iconVariants = (duration) => ({
    initial : {y: 0},
    animate:{

      y: [10, -10],
    transition : {
      duration : duration,
      ease : "linear",
      repeat : Infinity,
      repeatType: "reverse"
    }

    }
    
  
})

 const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24 pt-24'>
     <motion.h1 whileInView= {{opacity: 1, y:0 }} initial={{opacity:0, y: -100}} transition= {{duration: 1.5}}  className='my-20 text-center text-4xl'> Teknologier</motion.h1>
     <motion.div whileInView= {{opacity: 1, x:0 }} initial={{opacity:0, x: -100}} transition= {{duration: 1.5}} className='flex flex-wrap items-center justify-center gap-4'>
      <motion.div
       variants={iconVariants(2.5)}
       initial="initial"
       animate="animate"
      className='rounded-2xl border-2 border-neutral-500 p-5 w-32 h-32 flex items-center justify-center'> 
      
      <RiReactjsLine className="text-7xl text-cyan-400"  /> </motion.div>

     <motion.div 
     variants={iconVariants(3)}
     initial="initial"
     animate="animate"

     className='rounded-2xl border-2 border-neutral-500 p-5 w-32 h-32 flex flex-col items-center justify-center'> <FaJava className="text-7xl text-amber-500"  />  <span className="text-2xl mt-2 block  text-red-600">Java</span >  </motion.div>

     <motion.div 
     
     variants={iconVariants(3.5)}
     initial="initial"
     animate="animate"
     
     
     className='rounded-2xl border-2 border-neutral-500 p-5 w-32 h-32 flex flex-col items-center justify-center'> <SiJavascript className="text-7xl text-yellow-400" /> </motion.div> 


     <motion.div 
      variants={iconVariants(4)}
      initial="initial"
      animate="animate"
     
     className='rounded-2xl border-2 border-neutral-500 p-5 w-32 h-32 flex items-center justify-center'> 
          <SiTypescript className="text-7xl text-blue-400" />

        </motion.div> 

     <motion.div 
     
     variants={iconVariants(5)}
     initial="initial"
     animate="animate"
     
     className='rounded-2xl border-2 border-neutral-500 p-5 w-32 h-32 flex items-center justify-center'> 
         <BiLogoPostgresql className="text-7xl text-cyan-600"/> 
        </motion.div> 

        <motion.div 
        
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        
        className='rounded-2xl border-2 border-neutral-500 p-5 w-32 h-32 flex flex-col items-center justify-center'> 
          <DiDotnet className="text-7xl" style={{ color: '#8626be' }} /> 
          <span className="text-1xl mt-2 block" style={{ color: '#007ACC' }}>ASP.NET</span> 
        </motion.div> 

        <motion.div  
        
        variants={iconVariants(4)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-2 border-neutral-500 p-5 w-32 h-32 flex flex-col items-center justify-center'> 
          <SiFigma className="text-7xl text-[#ed3434]" /> 
          <span className="text-1xl mt-2 block text-[#d53ada]">Figma</span> 
        </motion.div> 
     </motion.div>
     
    </div>
  )
}

export default Technologies
