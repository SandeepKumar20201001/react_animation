import React from 'react'

function Cards() {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-1" className=' mt-[100vh]'>

            <div  className=' mt-20 px-10'>
            <h1 className=' text-6xl'>Clients' reviews</h1>
            </div>

            <div className=' w-full h-1 border-t-2 border-zinc-300 mt-[5vh] '></div>

            <div className=' w-full h-screen px-10  flex items-center gap-5'>



                <div className="container relative w-1/2 h-[60vh] bg-[#004D43] rounded-lg flex items-center justify-center">
                    <img className=' w-40' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                    <button className=' absolute px-3 py-1 left-10 bottom-10 border-2 border-yellow-300 rounded-full'>
                        <span class="btn__text text-yellow-300">©2019–2022</span>
                    </button>
                </div>
                <div className="container w-1/2 h-[60vh] flex gap-5">
                    <div className="card relative w-1/2 h-full bg-[#212121] rounded-lg flex items-center justify-center">
                        <img className=' w-40' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                        <button className=' absolute px-1 py-1 left-10 bottom-10 border-2 rounded-full'>
                        <span class="btn__text text-white uppercase tracking-tighter">Rating 5.0 on Clutch</span>
                        </button>
                    </div>

                    <div className="card relative w-1/2 h-full bg-[#212121] rounded-lg flex items-center justify-center">
                        <img className=' w-40' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                        <button className=' absolute px-1 py-1 left-10 bottom-10 border-2 rounded-full'>
                        <span class="btn__text text-white uppercase tracking-tighter">business bootcamp alumni</span>
                        </button>
                    </div>
                
                </div>
            </div>
        </div>
    )
}

export default Cards