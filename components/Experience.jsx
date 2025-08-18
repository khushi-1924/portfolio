import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const Experience = ({isDarkMode}) => {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    id='experience' className='w-full px-[12%] py-10 scroll-mt-20'>
      
      <motion.h2 
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className='text-center  text-5xl font-Ovo'>My Experience</motion.h2>

      <motion.p 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.7 }}
      className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>I am a Fullstack Developer from Kolkata, India </motion.p>

      <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.9 }}
      className='grid grid-cols-2 gap-6 my-10'>
        {serviceData.map(({icon, title, description}, index) => (
            <motion.div 
            whileHover={{ scale: 1.05 }}
            key={index} className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 flex flex-col items-center dark:hover:bg-darkHover dark:hover:shadow-white'>

                <Image src={icon} alt={title} className='w-10 dark:invert' />

                <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{title}</h3>

                <p className='text-sm text-gray-600 leading-5 dark:text-white/80'>{description}</p>

            </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Experience
