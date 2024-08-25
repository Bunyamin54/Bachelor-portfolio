import React from 'react';
import Medlem from './Medlem';
import { motion } from "framer-motion"
const MedlemmerPage = ({ profiles }) => {
    return (
      <div className="container mx-auto px-8 py-12">
        {/* Centered Heading with Motion */}
        <motion.h1 
          whileInView={{ opacity: 1, y: 0 }} 
          initial={{ opacity: 0, y: -100 }} 
          transition={{ duration: 1.5 }}  
          className="text-5xl font-bold text-center my-20">
          Medlemmer
        </motion.h1>
    </div>
  );
};

export default MedlemmerPage;
