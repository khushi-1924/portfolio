import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const About = ({isDarkMode}) => {
  return (
    <motion.div
     initial={{ opacity: 0 }}
     whileInView={{ opacity: 1 }}
     transition={{ duration: 1 }}
     id='about' className='w-full px-[12%] py-10 scroll-mt-20'>

      <motion.h2
       initial={{ y: -20, opacity: 0 }}
       whileInView={{ y: 0, opacity: 1 }}
       transition={{ duration: 0.5, delay: 0.5 }}
       className='text-center text-5xl font-Ovo'>About Me</motion.h2>

      <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className='flex w-full flex-col items-center justify-center gap-20 my-14'>
        <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className='flex-1'>
          <p className='mb-10 max-w-3xl font-Ovo'>I am a Fullstack Developer and a Bachelor’s student in Information Technology at Kalyani Government Engineering College, graduating in 2026. With a year of hands-on experience in web development projects, I’m passionate about building scalable and user-friendly applications.</p>

          <motion.ul 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
            {infoList.map(({icon, iconDark, title, description}, index) => (
              <motion.li 
              whileHover={{ scale: 1.05 }}
              key={index} className='border-[0.5px] border-gray-400 rounded-xl p-6 hover:bg-lightHover/50 hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'>
                <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-3 mx-auto' />
                <h3 className='my-4 font-semibold text-gray-700 text-center dark:text-white'>{title}</h3>
                <p className='text-gray-600 text-sm text-center dark:text-white/80'>{description}</p>
              </motion.li>
            ))}
          </motion.ul>

          <motion.h4 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className='my-6 text-gray-700 font-Ovo dark:text-white/80'>Tools I Use</motion.h4>
          <motion.ul 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className='flex items-center gap-3 sm:gap-5'>
            {toolsData.map((tool, index) => (
              <motion.li 
              whileHover={{ scale: 1.1 }}
              key={index} className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:hover:shadow-white dark:hover:bg-darkHover/50'>
                <Image src={tool} alt='tool' className={`w-5 sm:w-7 ${index === 3 ? "dark:invert" : ""}`} />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default About
