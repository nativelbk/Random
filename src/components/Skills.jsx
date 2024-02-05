/** @format */

import Skill from "./Skiil";
import Titre from "./Titre";
const Skills = () => {
  return (
    <>
    <Titre titre="SKILLS" className='pl-[120px]'/>
    <div className="text-white ml-[120px] mt-12 flex flex-col gap-8  ">
      <div className="flex flex-col gap-6">
        <h4 className=" font-extrabold ">Technologies</h4>
        <div className="flex flex-wrap  gap-12  ">
          <Skill tech="/py.png"  nomtech="Python"/>
          <Skill tech="/c.png"  nomtech="C#"/>
          <Skill tech="/js.png" nomtech="Js"/>
          <Skill tech="/html.png" nomtech="HTML"/>
          <Skill tech="/css.png"  nomtech="Css"/>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <h4 className=" font-extrabold ">Libraries and Frameworks</h4>
        <div className="flex flex-wrap  gap-12  ">
          <Skill tech="/flask.png" nomtech="Flask"/>
          {/* <Skill tech="/django.png" nomtech="Django"/> */}
          <Skill tech="/panda.png" nomtech="Panda"/>
          <Skill tech="/react.png" nomtech="React"/>
        </div>
      </div>
    </div>
    </>
  );
};

export default Skills;
