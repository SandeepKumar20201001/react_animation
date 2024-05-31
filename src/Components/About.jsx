import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";

function About() {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.1" id='About' className=' w-full py-10 rounded-3xl bg-[#CDEA68]'>
            <h1 className=' px-10 text-[3.5vw] mr-[16vw] leading-[3.5vw] '>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>

            {/* paragraph */}

            <div className=' flex w-full  border-zinc-600 border-t-2 mt-14'>
                <div className=' w-[45vw] h-[40vh] ml-10 mt-10 '>
                    <h1>What you can expect:</h1>
                </div>

                <div className=' text-lg w-[25vw] h-[40vh] mt-10' >
                    <h1 className=' mr-8'>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it's live or digital, delivered for one or a hundred people.</h1>
                    <h1 className=' mt-10 mr-4'>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</h1>
                </div>

                <div className=' ml-20 flex items-end w-[18vw] h-[40vh] mt-1'>
                    <div>
                        <p className=' mb-4'>S:</p>
                        <ul>
                            <li><a href="" className=' underline'>Instagram</a></li>
                            <li><a href="" className=' underline'>Behance</a></li>
                            <li><a href="" className=' underline'>Facebook</a></li>
                            <li><a href="" className=' underline'>Linkedin</a></li>
                        </ul>
                    </div>
                </div>
            </div>


            {/* Picture */}

            <div className=' px-10 flex justify-between w-full border-zinc-600 border-t-2 mt-20'>

                <div>
                    <h1 className=' text-[4vw]'>Our approach:</h1>

                    <a href='' className=' flex items-center justify-between w-[12vw] bg-black rounded-full px-2 py-1'>
                        <button className=' uppercase text-white'>read more</button>
                        <div className=' w-10 h-10 flex items-center justify-center rounded-full bg-white'>
                            <MdOutlineArrowOutward />
                        </div>
                    </a>
                </div>

                <div >
                    <div className=" w-[45vw] mt-5 rounded-lg relative overflow-hidden">
                        <img className='w-full object-cover' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default About