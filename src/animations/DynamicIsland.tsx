import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

export default function DynamicIsland() {
  const [isOpen, setIsOpen] = useState(false);

  const shared =
    "border-1 overflow-hidden rounded-[14px] border border-[#242524] text-sm text-white shadow-menu bg-[#161716] " +
    "flex justify-center items-center " +
    "mx-auto w-24 " +
    "fixed bottom-6 left-6 right-6 ";

  const btn = "cursor-pointer text-nowrap px-3 py-2 font-medium text-[#929292]";

  return (
    <div>
      {isOpen ? (
        <AnimatePresence>
          <motion.div
            layoutId="rectangle"
            className={`${shared} w-[600px] h-[300px]`}
          >
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              layout
              onClick={() => setIsOpen(false)}
              className={btn + " absolute top-2 right-2"}
            >
              <X />
            </motion.button>
            <motion.div className="flex flex-col">
              <motion.span>Create an environment</motion.span>
              <motion.span>Open a repo in a new environment</motion.span>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      ) : (
        <AnimatePresence>
          <motion.div layoutId="rectangle" className={`${shared} size-[100px]`}>
            <motion.button
              layout
              onClick={() => setIsOpen(true)}
              className={btn}
            >
              Open
            </motion.button>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}
