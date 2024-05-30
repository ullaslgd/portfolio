import React from 'react'
import gojo from '../assets/images/gojo.png'

const About = () => {
  return (
    <section className="flex  justify-around items-center max-sm:flex-col max-lg:flex-col max-xl:flex-col h-fit px-10 max-sm:pt-16 pt-[160px] pb-20 " >
      <div>
        <img src={gojo} className="rounded-full h-[300px] max-sm:h-[160px] " />
      </div>

      <div className="w-[80vh] max-sm:w-[50vh]">
        <h2 className="text-4xl font-montserrat max-sm:text-center text-[#bbbbbb] py-[40px]">About Me</h2>
        <p className="text-2xl max-sm:text-[20px] font-nunito text-[#71717a] py-[0px] ">
          I am a 19-year-old self-taught web developer with a passion for machine learning and cyber security. In my free time, I enjoy playing Valorant and watching anime.
        </p>
      </div>


    </section>
  )
}

export default About