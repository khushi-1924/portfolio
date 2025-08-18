import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
      <div className='text-center'>

        <div className='w-max flex items-center gap-2 mx-auto'>
            <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='mail' className='w-6' />
            <a
            href="mailto:kkhushi1924@gmail.com"
            className="hover:underline">
            kkhushi1924@gmail.com
            </a>
        </div>
      </div>
      
      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>©  2025 Khushi Khandelwal.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            <li className='hover:text-purple-500'><a target='_blank' href="https://github.com/khushi-1924">Github</a></li>
            <li className='hover:text-purple-500'><a target='_blank' href="https://www.linkedin.com/in/khushi-khandelwal-009060254">LinkedIn</a></li>
            <li className='hover:text-purple-500'><a target='_blank' href="https://leetcode.com/u/khushi_1924/">Leetcode</a></li>
            <li className='hover:text-purple-500'><a target='_blank' href="https://www.geeksforgeeks.org/user/kkhushjl55/">GeeksForGeeks</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
