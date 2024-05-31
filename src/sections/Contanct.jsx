import React from 'react'
import { socials } from '../constants/index'
import c from "../assets/icons/c.png";

const Contanct = () => {
  return (
    <section className="flex p-4 pb-0 rounded-full  max-sm:flex-col-reverse">
      <div className="flex justify-start">
        <p className="text-[#71717a]"> <img src={c} className="inline-block w-[16px] "/>2020 Ullas Arwan</p>
      </div>
        <div className="flex gap-6 ml-auto max-sm:mx-[30px] p-2">
            {socials.map((social)=>{
                return(
                    <div className="flex justify-center items-center p-[10px] bg-[#0a0a0a] rounded-full hover:border-teal-300 hover:border-2">
                       <a href={social.link}> <img src={social.name} className="w-[30px]"/> </a>
                    </div>

                ) 
            })}
            
        </div >

    
    </section>
  )
}

export default Contanct