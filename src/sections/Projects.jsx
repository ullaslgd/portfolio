import React from 'react'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../constants'

const Projects = () => {
  return (
    <section className="flex flex-col h-fit">
      <div className="flex justify-center">
        <h2 className="text-[#bbbbbb] text-3xl font-nunito flex justify-center">Projects</h2>

      </div>

      <div className="grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-2 p-10 mt-10 gap-10 " >

        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            img={project.img}
            link={project.link}
            live={project.live}
          />
        ))}


      </div>


    </section>
  )
}

export default Projects