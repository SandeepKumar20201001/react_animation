import React from 'react'
import Eye from './Eye'

function Ready() {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.9" data-scroll-section-inview className=' relative w-full h-[150vh] bg-[#CDEA68] flex justify-center rounded-lg'>
            <div className=' mt-[25vh] uppercase text-[35vh] leading-[30vh] font-bold font-bebas'>
                <div className=' absolute flex top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] gap-5'>
                    <Eye/>
                    <Eye/>
                </div>
                <h1 className=' text-center'>ready</h1>
                <h1 className=' text-center'>to start</h1>
                <h1 className=' text-center'>the project</h1>
            </div>
        </div>
    )
}

export default Ready