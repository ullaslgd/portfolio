import React from 'react'
import StackIcon from "tech-stack-icons";
import { tech } from '../constants';
import Tooltip from '@mui/material/Tooltip';
 

const Skills = () => {
  return (
    <section className="flex justify-start flex-col mx-2 h-fit pb-[60px] ">

      <div>
        <h2 className="text-[#bbbbbb] text-3xl font-nunito flex justify-center">Skillset</h2>
      </div>
      <div className="flex mt-16 flex-wrap gap-6 justify-center items-center border-white">
       
      {tech.map((icon)=>(
          <div className="bg-[#0a0a0a] backdrop-blur-xl rounded-[20px] p-[20px] max-sm:p-[15px] border-[1px] border-teal-800 hover:border-slate-300 flex justify-center items-center shadow-xl">
         <Tooltip title={icon.tip} arrow enterTouchDelay="2"> <img src={icon.name} className="w-[50px] max-sm:w-[30px]"/>  </Tooltip>
        </div> 
      ))}
      

      </div>
    </section>
  )
}

export default Skills