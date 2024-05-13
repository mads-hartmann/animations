import { useState } from "react";
import { motion } from "framer-motion";
import "./index.css";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen min-w-[100vw] bg-[#0F0F0F]">
      <motion.div
        layout
        data-isopen={isOpen}
        initial={{ borderRadius: 50 }}
        className={
          "border-1 overflow-hidden rounded-[14px] border border-[#242524] text-sm text-white shadow-menu bg-[#161716] dark:shadow-inner-shadow-dark-float md:block" +
          "size-[100px] flex justify-center items-center data-[isopen=true]:w-[400px] data-[isopen=true]:h-[200px]"
        }
        onClick={() => setIsOpen(!isOpen)}
      >
       <motion.div>
          <button className="cursor-pointer text-nowrap px-3 py-2 font-medium text-[#929292] transition-colors duration-300">Open</button>
        </motion.div> 
      </motion.div>
    </div>
  );
}
