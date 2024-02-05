/** @format */

import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experiences from "./components/Experiences";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
export default function App() {
  return (
    <>
      <main className=" flex flex-col min-h-screen ">
        <Navbar />
        <Hero />
      </main>
      <div className=" pt-5 about-img ">
        <About />
      </div>
      <div className="experience pt-[50px]">
        <Experiences />
      </div>
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
