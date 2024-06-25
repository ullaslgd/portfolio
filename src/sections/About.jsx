import React from 'react'
import gojo from '../assets/images/gojo.png'

const About = () => {
  return (
    <section className="flex flex-col  justify-start items-start max-sm:flex-col max-lg:flex-col max-xl:flex-col h-fit px-10 max-sm:pt-16 pt-[160px] pb-20 " >
      <div className="flex items-start">
        <img src={gojo} className="rounded-full h-[80px] border-2 border-[#27272a] mr-6 mb-8 max-sm:h-[60px] " />
        <div className="flex flex-col"><h2 className="text-2xl font-play max-sm:text-center text-[#bbbbbb]">Ullas Arwan</h2> 
        <h2 className="text-1xl font-montserrat max-sm:text-center text-[#bbbbbb]">Full-stack Web Developer</h2></div>
      </div>

      <div className="w-[80vh] max-sm:w-[50vh]">
        
        <p className="text-[20px] max-sm:text-[16px] font-poppins text-[#71717a] px-[10px] text-balance ">
        I'm a skilled full stack web developer and vedio game developer with a passion for creating seamless, responsive web applications and graphical gaming environment. I bridge the gap between development and operations to deliver high-quality andscalable solutions.
        </p>
      </div>


    </section>
  )
}

export default About