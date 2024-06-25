import React from 'react'
import StackIcon from "tech-stack-icons";
import { tech } from '../constants';
import Tooltip from '@mui/material/Tooltip';
 

const Skills = () => {
  return (
    <section className="flex justify-start flex-col mx-2 h-fit pb-[130px] ">

      <div>
        <h2 className="text-[#bbbbbb] text-3xl font-play flex justify-center">SKILLSET</h2>
      </div>
      <div className="flex mt-16 flex-wrap gap-6 justify-center items-center border-white">
       
      {tech.map((icon)=>(
          <div className="bg-[#0a0a0a] backdrop-blur-xl rounded-full p-[18px] max-sm:p-[15px] border-[2px] border-[#27272a]  hover:border-slate-300 flex justify-center items-center shadow-xl">
         <Tooltip title={icon.tip} arrow enterTouchDelay="2"> <img src={icon.name} className="w-[50px] max-sm:w-[30px]"/>  </Tooltip>
        </div> 
      ))}
      

      </div>
    </section>
  )
}

export default Skills