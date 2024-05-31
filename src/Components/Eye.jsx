import React, { useEffect, useState } from 'react'

function Eye() {

    const [rotate, setrotate] = useState(0);

    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            // console.log(e);
            // console.log(e.clientX,e.clientY);
            let mousex = e.clientX;
            let mousey = e.clientY;

            let deltaX = mousex - window.innerWidth / 2;
            let deltaY = mousey - window.innerHeight / 2;

            var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

            setrotate(angle - 180);
        })
    })

    return (
        <div>
            <div className='badagola w-[13vw] h-[13vw] rounded-full bg-white flex items-center justify-center  '>
                <div className='chhotagola relative w-2/3 h-2/3 rounded-full bg-black '>
                    <div style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg) ` }} className='line absolute w-full h-5 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] '>
                        <div className='dot  w-4 h-4 rounded-full bg-white  '></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Eye