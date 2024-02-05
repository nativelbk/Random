/** @format */

// eslint-disable-next-line react/prop-types
import { motion } from "framer-motion";

export default function Experience({ title, date, description }) {
  return (

    < motion.section className="text-white flex flex-col md:flex-row justify-between"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-5 mb-4 md:mb-0 md:w-[50%]">
        <div className="w-30 h-30  rounded-full"><img src="/Image 3.svg" alt="" /></div>
        <div className="flex flex-col">
          <h1 className="font-extrabold mb-2">{title}</h1>
          <p className="font-semibold ">{date}</p>
        </div>
      </div>
      <div className="max-w-[754px] md:max-w-[600px] text-[18px]">
        {description}
      </div>
    </motion.section>
  );
}
