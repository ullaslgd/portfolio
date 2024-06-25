import React from 'react'

const ProjectCard = (props) => {
  return (
    <div className="rounded-[10px] border-[#27272a] hover:border-slate-400 border-2 p-[14px] relative bg-[#0a0a0a]">
        <img src={props.img} className="rounded-[5px] object-fill"  />
        <h3 className="text-[#bbbbbb] text-3xl max-sm:text-[25px] leading-normal font-montserrat my-4">{props.title}</h3>
        <p className="text-[#71717a] text-[17px] max-sm:text-[14px] pb-[50px]">{props.description}</p>
        <div className="flex justify-start">
        <a className="text-[#bbbbbb] hover:underline absolute bottom-2" target="_blank" href={props.link}>Get Code</a>
        {props.live && <a className="text-[#bbbbbb] hover:underline absolute bottom-2 right-6" target="_blank" href={props.live}>Go Live</a>}
        </div>

    </div>
  )
}

export default ProjectCard