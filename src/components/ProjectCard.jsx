import React from 'react'

const ProjectCard = (props) => {
  return (
    <div className="rounded-[15px] border-teal-800 border-2 p-[18px] relative">
        <img src={props.img} className="rounded-[5px] object-fill"  />
        <h3 className="text-[#bbbbbb] text-3xl max-sm:text-[25px] leading-normal font-nunito my-4">{props.title}</h3>
        <p className="text-[#71717a] text-[17px] max-sm:text-[14px] pb-6">{props.description}</p>
        <a className="text-[#bbbbbb] hover:underline absolute bottom-2" href={props.link}>Get Code</a>

    </div>
  )
}

export default ProjectCard