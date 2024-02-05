/** @format */

import Project from "./Project";
import Titre from "./Titre";
export default function Projects() {
  return (
    <div id="pro">
    <Titre titre="PROJECTS" className='pl-[120px]'/>
    <section className="mt-20 flex  justify-center items-center flex-wrap  mx-auto" >
      <Project img="/mademoiselleai.png" titre='Mademoiselle AI ' link='https://mademoiselleai.com'  descri='A website with AI solutions and automates'/>
      <Project img="/grouillezvous.png" titre='Grouillez vous' link='https://grouillez-vous.com' descri='A website with highly efficient GPT powered chatbot'/>
      <Project img="/tradago.png" titre='Tradago.ai' link='https://tradago.ai' descri='An AI-powered trading platform' />
      {/* <Project img="" titre='Tradago.ai'/> */}
    </section>
    
    </div >
  );
}
