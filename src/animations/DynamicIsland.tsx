import { useState } from "react";
import { motion } from "framer-motion";

export default function DynamicIsland() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute bottom-6 left-6 right-6 mx-auto w-24 ">
      <motion.div
        layout
        className={
          "border-1 overflow-hidden rounded-[14px] border border-[#242524] text-sm text-white shadow-menu bg-[#161716] " +
          "flex justify-center items-center"
        }
        animate={{
          width: isOpen ? 400 : 100, 
          height: isOpen ? 200 : 100 , 
          y: isOpen ? -50 : 0,
          x: isOpen ? -150 : 0,
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
       <motion.div>
          <button className="cursor-pointer text-nowrap px-3 py-2 font-medium text-[#929292]">Open</button>
        </motion.div> 
      </motion.div>
    </div>
  );
}
