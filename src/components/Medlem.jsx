import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Medlem = ({ name, content, image, linkedin, github }) => {
  return (

    <div>
       
      <div className='mb-4'>
        <div className='flex flex-wrap justify-center'>
          <div className='w-full lg:w-2/3 px-2'>
            <div className='flex flex-col items-center text-center'>
              <img src={image} alt={name} className="rounded-full w-60 h-60 mb-4 " />
              <h1 className='pb-2 text-3xl font-bold tracking-tight lg:mt-4 '>{name}</h1>
              <h2 className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>
                
              </h2>
              <div className='mt-4 text-lg leading-relaxed px-2'>
                {content.split('<br/>').map((line, index) => (
                  <p key={index} className='mb-2'>{line}</p>
                ))}
              </div>
              <div className='mt-4 flex space-x-4'> {/* İkonlar yan yana durur */}
                <a href={linkedin} target="_blank" rel="noopener noreferrer" className='text-blue-400 hover:text-blue-700'>
                  <FaLinkedin size={50} />
                </a>
                <a href={github} target="_blank" rel="noopener noreferrer" className='text-whit-600 hover:text-green-800'>
                  <FaGithub size={50} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Medlem;
