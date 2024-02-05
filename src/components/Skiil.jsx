/** @format */
import { motion } from "framer-motion";

export default function Skill(props) {
  return (
    <motion.div
    initial={{ opacity: 0, y: 35 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="flex items-center gap-2">
      <div className=" w-[100px] h-[150px] flex justify-center items-center  "><img  className="w-[100px] h-[70px]" src={`${props.tech}`} alt="" /></div>
      <span className=" font-semibold "> {props.nomtech} </span>
    </motion.div>
  );
}
