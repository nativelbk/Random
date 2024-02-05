/** @format */

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row min-h-[70vh] mt-[130px] items-center justify-center " id="about">
      <div className="flex flex-col justify-start gap-4 text-center md:text-left md:w-[50%]">
        <h5 className="text-blue font-bold text-[24px]">Hello!!</h5>
        <h1 className="text-white font-black text-h1 max-sm:text-[28px] max-w-full md:max-w-[500px]">
          I'm Ando Nirina RANDRIANJAFY
        </h1>

        <div className="font-bold flex items-center justify-center w-full md:w-[350px] h-[40px] bg-blue">
          PYTHON DEVELOPER&nbsp;-&nbsp;DATA&nbsp;-&nbsp;WEB
        </div>
        <a
          className="font-bold flex items-center justify-center w-full md:w-[350px] h-[40px] bg-white rounded hover:bg-[rgb(255,255,255,.8)]"
          href="https://drive.google.com/file/d/1Wpvku72k_UxEbR7gMS8XbtRcog8U6bkv/view?usp=sharing "
        >
          Resume
        </a>
      </div>
      <div className="w-full md:w-[400px] h-[400px] flex justify-center items-center">
        <img src="/sary.png" className="w-full h-full object-cover" />
      </div>
    </section>
  );
};

export default Hero;
