import React from 'react'
import backgroundImage from '../assets/images/backgroundImage.png';
import stars from '../assets/images/stars.svg';
import '../styles.css';
import Nav from './Nav';

const Hero = () => {
  return (
     <div className="relative">

      <div className="absolute">

      <img  src={backgroundImage} />
      
      </div>
      <div className="absolute">

        <img src={stars} />
      </div>
      <div className=" flex justify-center items-center h-[85vh] max-sm:h-[55vh] flex-col">
        
      <h3 className="text-white left-4 text-7xl max-sm:text-3xl max-sm:pb-[15px] font-montserrat">Hello. I'm Ullas.</h3>
      <h1 className="text-transparent bg-clip-text text-7xl max-sm:text-3xl leading-normal font-poppins bg-[#40cf8e] text-center ">A Full-Stack Developer.</h1>
      <p className="text-[#71717a] text-2xl max-sm:text-[18px] font-nunito absolute bottom-[15%] max-sm:p-[5px] text-center">" I tell computers what to do and sometimes they listen. "</p>
      </div>
      
        
      </div>

     
     

  )
}

export default Hero