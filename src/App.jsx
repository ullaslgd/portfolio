import React from 'react';
import { Nav, Hero, Skills, Projects, About, Certificate, Contanct } from './sections';

export default function App() {
  return (
    <main className="relative overflow-x-hidden">
      <section className=" w-full bg-[#050505]">
        
          <Hero />
      
      </section>
      <section className="w-full bg-[#050505]">
        <Skills />
      </section>
      <section className="w-full bg-[#050505]">
        <Projects />
      </section>
      <section className="w-full bg-[#050505]">
        <About />
      </section>
      <section className="w-full bg-[#050505]">
        <Certificate />
      </section>
      <section className="w-full bg-[#050505]">
        <Contanct />
      </section>
    </main>


  )
}