import React, { useEffect, useState } from 'react'
import Eye from './Eye'

function Eyes() {


    return (
        <div className=' w-full h-screen overflow-hidden'>
            <div data-scroll data-scroll-speed="-0.8" className=' relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
                <div className=' flex gap-5 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                    <Eye/>
                    
                    <Eye/>
                </div>
            </div>
        </div>
    )
}

export default Eyes