import { motion, useAnimation } from 'framer-motion'
import React from 'react'

function Featured() {

    const cards = [useAnimation(), useAnimation(), useAnimation(), useAnimation()]

    const handleHover = (index) => {
        cards[index].start({ y: "0" })
    }

    const handleHoverEnd = (index) => {
        cards[index].start({ y: "100%" })
    }


    return (
        <div dtaa-scroll data-scroll-section data-scroll-speed="1" id='Work' className=' bg-[#F1F1F1] py-4'>
            <h1 className='px-10 text-[4vw] mt-[12vh]'>Featured projects</h1>

            <div className=' px-10 py-10 w-full border-t-2 border-zinc-300 mt-[5vh]'>
                <div className=' flex'>

                    <div className='ml-5 mt-5 '>
                        <li className=' text-lg'>FYDE</li>
                        <motion.div
                            onHoverStart={() => handleHover(0)}
                            onHoverEnd={() => handleHoverEnd(0)}
                            className='cards w-[45vw] h-[80vh] relative'>
                            <h1 className=' absolute overflow-hidden flex z-[9] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-[8vw] font-semibold text-[#CDEA68] leading-none tracking-tighter'>
                                {"FYDE".split('').map((item, index) =>
                                    <motion.span
                                        initial={{ y: "100%" }}
                                        animate={cards[0]}
                                        transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .1 }}
                                    >{item}</motion.span>)}
                            </h1>
                            <div className='w-full h-full mt-5 rounded-lg bg-[#CDCDCE] overflow-hidden'>
                                <img className='w-full h-full object-cover ' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                            </div>
                        </motion.div>
                    </div>

                    <div className='ml-5 mt-5'>
                        <li className=' text-lg'>VISE</li>
                        <motion.div
                            onHoverStart={() => handleHover(1)}
                            onHoverEnd={() => handleHoverEnd(1)}
                            className='w-[45vw] h-[80vh] relative'>
                            <h1 className=' absolute overflow-hidden flex z-[9] right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-[8vw] font-semibold text-[#CDEA68] leading-none tracking-tighter'>
                                {"VISE".split('').map((item, index) =>
                                    <motion.span
                                        initial={{ y: "100%" }}
                                        animate={cards[1]}
                                        transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .1 }}
                                    >{item}</motion.span>)}
                            </h1>
                            <div className=' w-full h-full mt-5 rounded-lg bg-[#19181E] overflow-hidden'>
                                <img className='w-full h-full object-cover  ' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                            </div>
                        </motion.div>


                    </div>

                </div>



                <div className=' py-16 flex'>
                    <div className='ml-5 mt-5'>
                        <li className=' text-lg'>TRAWA</li>
                        <motion.div
                            onHoverStart={() => handleHover(2)}
                            onHoverEnd={() => handleHoverEnd(2)}

                            className='w-[45vw] h-[80vh] relative'>
                            <h1 className=' absolute overflow-hidden flex z-[9] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-[6vw] font-semibold text-[#CDEA68] leading-none tracking-tighter'>
                                {"TRAWA".split('').map((item, index) =>
                                    <motion.span
                                        initial={{ y: "100%" }}
                                        animate={cards[2]}
                                        transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .1 }}
                                    >{item}</motion.span>)}
                            </h1>
                            <div className=' w-full h-full mt-5 rounded-lg bg-[#CDCDCE] overflow-hidden'>
                                <img className=' w-full h-full object-cover ' src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg" alt="" />
                            </div>
                        </motion.div>

                    </div>

                    <div className='ml-5 mt-5'>
                        <li className=' text-lg'>PREMIUM BLEND</li>
                        <motion.div
                            onHoverStart={() => handleHover(3)}
                            onHoverEnd={() => handleHoverEnd(3)}
                            className='w-[45vw] h-[80vh] relative'>
                            <h1 className=' absolute overflow-hidden flex z-[9] right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-[6vw] font-semibold text-[#CDEA68] leading-none tracking-tighter'>
                                {"PREMIUM BLEND".split('').map((item, index) =>
                                    <motion.span
                                        initial={{ y: "100%" }}
                                        animate={cards[3]}
                                        transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .1 }}
                                    >{item}</motion.span>)}
                            </h1>
                            <div className=' w-full h-full mt-5 rounded-lg bg-[#211F21] overflow-hidden'>
                                <img className='w-full h-full object-cover  ' src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png" alt="" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured