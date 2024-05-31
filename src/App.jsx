import React from 'react';
import { Nav, Hero, Skills, Projects, About, Certificate, Contanct } from './sections';

export default function App() {
  return (
    <main className="relative overflow-x-hidden">
      <section className=" w-full bg-[#0a0a0a]">
        
          <Hero />
      
      </section>
      <section className="w-full bg-[#0a0a0a]">
        <Skills />
      </section>
      <section className="w-full bg-[#0a0a0a]">
        <Projects />
      </section>
      <section className="w-full bg-[#0a0a0a]">
        <About />
      </section>
      <section className="w-full bg-[#0a0a0a]">
        <Certificate />
      </section>
      <section className="w-full bg-[#0a0a0a]">
        <Contanct />
      </section>
    </main>


  )
}