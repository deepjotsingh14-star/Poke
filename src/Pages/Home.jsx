import React from 'react'

const Home = () => {
  return (
    <div className='h-screen w-screen bg-[#F9F8F6] flex justify-center' >
       <div className='h-full  w-full relative flex justify-center'>
            <div className="absolute    inset-0 flex items-center justify-center">
                    <div
                        className="h-78 w-78 rounded-full  bg-cover"
                        style={{
                            backgroundImage:  `radial-gradient(circle,rgba(208, 0, 255, 1) 0%, rgba(192, 97, 255, 1) 52%)`,
                            boxShadow: `0 0 8rem 12rem rgba(192, 97, 255, 1)`,
                            backgroundPosition: "center",
                        }}
                    >       </div>
                    <div className="absolute h-full w-full backdrop-blur-2xl border border-white/30">

                    </div>
                </div>
        <img className='h-full z-2 relative' src="output-onlinegiftools.gif" alt="" /> 
       </div>
    </div>
  )
}

export default Home
