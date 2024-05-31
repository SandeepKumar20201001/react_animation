import { motion } from 'framer-motion';
import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";

function Landing() {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.8" className=' w-full h-screen bg-[#F1F1F1] pt-1'>
            <div className="textstructure mt-44 pl-12">
                {["we create", "eye opening", "presentations"].map((item, index) => (
                    <div className="masker font-bold">
                        <div className=' w-fit flex items-center'>
                            {index === 1 && (
                            <motion.div initial={{width:0}} animate={{width: "8vw"}} transition={{ease: [0.76, 0, 0.24, 1] , duration: 1 }} className='w-[8vw] h-[4.5vw] rounded-lg mt-2 bg-center bg-cover bg-[url("https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg")] overflow-hidden'>
                            </motion.div> 
                            )}
                        <h1 className=' text-[6.5vw] uppercase leading-[5vw] -tracking-widest font-[Founders_Grotesk_X-Condensed]'>
                            {item}
                        </h1>
                        </div>
                    </div>
                ))}

            </div>

            <div className=' border-zinc-300 border-t-[2px] mt-32 flex justify-between items-center'>
                    {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
                        <p className='px-[7vh] mt-6 font-light text-lg'>
                            {item}
                        </p>
                    ))}
                    <div className='start px-[7vh] mt-6 text-sm flex gap-2'>
                        <div className=' uppercase border-2 border-zinc-800 rounded-full flex items-center px-3 py-1'>Start the project</div>
                        <div className=' w-10 h-10 border-2 border-zinc-800 rounded-full flex items-center px-3 text-lg '>{<MdOutlineArrowOutward color='red' size={"lg"} />}</div>
                    </div>
            </div>
        </div>
    )
}

export default Landing