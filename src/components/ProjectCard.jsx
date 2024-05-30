import React from 'react'

const ProjectCard = (props) => {
  return (
    <div className="rounded-[15px] border-teal-800 border-2 p-[18px] relative">
        <img src={props.img} className="rounded-[5px] h-[250px]"  />
        <h3 className="text-[#bbbbbb] text-3xl leading-normal font-nunito my-4">{props.title}</h3>
        <p className="text-[#71717a] text-[17px] pb-6">{props.description}</p>
        <a className="text-[#bbbbbb] hover:underline absolute bottom-2" href={props.link}>Get Code</a>

    </div>
  )
}

export default ProjectCard