/** @format */

import Experience from "./Experience";
import Titre from "./Titre";
const Experiences = () => {
  return (
    <section id="xp">
      <div>
        <Titre titre="EXPERIENCES" className='pl-[120px]'/>
        {/* <span> <img src="/2019-2024.png" alt="" /></span> */}
      </div>
      <div className="flex flex-col gap-6 max-w-full md:max-w-[1080px] mx-auto">
        <Experience
          title={"AI Engineer"}
          date={"January 2024 - present . REMOTE"}
          description={
            "Design and development of chatbots, integration of GPT functionalities into websites, creation of various automated tasks using Python."
          }
        />
        <Experience
          title={"Software Tester"}
          date={"2023 . REMOTE"}
          description={
            "Development of automated test scripts to ensure efficient verification processes. Designing test frameworks to optimize the structure and reproducibility of software tests."
          }
        />
        <Experience
          title={"Xamarin Developer"}
          date={"2021 . SECURAPLAN"}
          description={
            "Design, develop, and implement mobile applications using the C# programming language and associated technologies. Formulate the software architecture for the application."
          }
        />
        <Experience
          title={"Software Engineer"}
          date={"2019 . ONN"}
          description={
            "Understand the company's inventory management needs and requirements. Design the user interface for an optimal user experience."
          }
        />
      </div>
    </section>
  );
};

export default Experiences;
