import React from 'react'
import { socials } from '../constants/index'

const Contanct = () => {
  return (
    <section className="flex justify-end p-8 border-teal-300 border-t-2 rounded-full">
        <div className="flex gap-6 p-2">
            {socials.map((social)=>{
                return(
                    <div className="flex justify-center items-center p-[10px] bg-[#131313] rounded-full hover:border-teal-300 hover:border-2">
                       <a href={social.link}> <img src={social.name} width={40}/> </a>
                    </div>

                ) 
            })}
            
        </div >

    
    </section>
  )
}

export default Contanct