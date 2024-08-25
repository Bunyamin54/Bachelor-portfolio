import { PROJECTS } from '../constants/data';
import { motion } from "framer-motion";
import { FaArrowUp } from 'react-icons/fa';

const Projects = () => {
  const scrollToTop = () => {
    document.getElementById('hjem').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='border-b border-neutral-900 pb-4 relative'>
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }} 
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='pb-24 pt-24 text-center text-4xl'>
        Our Projects
      </motion.h1>

      <div>  
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }} 
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }} 
              className='w-full lg:w-1/3 mb-6 lg:mb-0'>
              <img 
                src={project.image} 
                width={350} 
                height={500} 
                alt={project.title} 
                className='mb-6 rounded'
                style={{ objectFit: 'cover', marginTop: '20px' }} 
              />
              {project.Link && (
                <p className="mt-2 text-green-300 text-start">
                  Link: <a 
                    href={project.Link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='text-green-300 hover:text-green-700'>
                    {project.Link}
                  </a>
                </p>
              )}
            </motion.div>

            <motion.div 
              whileInView={{ opacity: 1, x: 0 }} 
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className='w-full max-w-xl lg:w-2/3'>
              <h6 className='mb-3 font-semibold text-2xl'>{project.title}</h6>
              <p className='mb-4 text-neutral-300'>{project.description}</p> 
              {project.technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="mr-2 rounded bg-neutral-200 px-2 py-1 text-sm font-medium text-purple-900">
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>

      {/* Scroll to Top Button */}
      <button 
        onClick={scrollToTop} 
        className="fixed bottom-20 right-10 bg-purple-600 text-white p-3 rounded-full shadow-lg hover:bg-purple-700">
        <FaArrowUp />
      </button>
    </div>
  );
}

export default Projects;
