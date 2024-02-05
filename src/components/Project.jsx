/** @format */
import { motion } from "framer-motion";
const Project = (props) => {
  return (
    <motion.div className="w-fit flex flex-col gap-2 "
    initial={{ opacity: 0, y: 35 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    >
      <div className=" w-[450px] rounded-md h-[350px "><a href={props.link}> <img src={`${props.img}`} alt="" /></a></div>
      <div className="text-white flex items-center gap-2 flex-col ">
        <p className="font-bold text-[24px]">{props.titre}</p>
        <span>{props.descri}</span>
      </div>
    </motion.div>
  );
};

export default Project;
