import { motion } from 'framer-motion'
import React from 'react'

function Marque() {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.2" className=' mt-[20vh] w-full py-20 bg-[#004D43] rounded-3xl'>
      <div className='text border-t-2 border-b-2 border-zinc-400 font-bold text-white flex overflow-hidden  whitespace-nowrap'>
        <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 10 }} className=' pr-10 uppercase text-[16.5vw] tracking-tighter leading-none -mb-10   font-[Founders_Grotesk_X-Condensed] '>
          we are ochi
        </motion.h1>
        <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 10 }} className='pr-10 uppercase text-[16.5vw] tracking-tighter leading-none -mb-10  pb-10 font-[Founders_Grotesk_X-Condensed] '>
          we are ochi
        </motion.h1>
      </div>
    </div>
  )
}

export default Marque