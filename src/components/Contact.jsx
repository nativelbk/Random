/** @format */

import SocialMedia from "./SocialMedia";

const Contact = () => {
  return (
    <div className="mt-16 flex flex-col  gap-16" id="contact">
      <div className="mx-auto flex flex-col items-center  text-white w-fit">
        <h4 className="font-extrabold text-[40px]">GET IN TOUCH</h4>
        <p className="text-blue font-semibold ">Let&apos;s Work Together</p>
      </div>
      <div className=" w-fit justify-center mx-auto flex gap-10 flex-wrap ">
        <SocialMedia social='/tel.png'  name='Telephone' contact='261 32 57 637 96 '/>
        <SocialMedia social='/email.png' name='Email' contact='ando.nirina.pro@gmail.com '/>
        <SocialMedia social='/location.png' name='Address' contact='Antananarivo, Madagascar'/>
        <SocialMedia social='/linkedin.png' name='Linkedin' contact='www.linkedin.com/in/ando-nirina'/>
      </div>
      {/* <div className="w-auto mx-auto">
        <div className="flex flex-col items-center gap-4">
          <div className="flex w-full items-center justify-center">
            <div className="border-2 w-4 h-4 border-white rounded-full "></div>
            <div className="w-full md:w-[900px] bg-white h-1 "></div>
            <div className="border-2 w-4 h-4 border-white rounded-full "></div>
          </div>
          <p className="text-white font-black text-[40px] text-center md:text-left">
            ANDO NIRINA RANDRIANJAFY
          </p>
          <div className="flex w-full items-center justify-center flex-wrap">
            <div className="border-2 w-4 h-4 border-white rounded-full "></div>
            <div className="w-full md:w-[350px] bg-white h-1 "></div>
            <p className="font-extrabold text-[18px] px-3 text-white text-center md:text-left">
              PORTFOLIO 2024
            </p>
            <div className="w-full md:w-[350px] bg-white h-1 "></div>
            <div className="border-2 w-4 h-4 border-white rounded-full "></div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Contact;
