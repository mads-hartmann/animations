import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PlusIcon, Settings, X } from "lucide-react";

export default function DynamicIsland() {
  const [isOpen, setIsOpen] = useState(false);

  const shared =
    "border-1 overflow-hidden rounded-[14px] border border-[#242524] text-sm text-white shadow-menu bg-[#161716] " +
    "flex justify-center items-center " +
    "mx-auto " +
    "fixed bottom-6 left-6 right-6 w-24";

  const btn = "cursor-pointer text-nowrap px-3 py-2 font-medium text-[#929292]";

  const openVariants = {
    hidden: { opacity: 0, width: 96, height: 66 },
    visible: { opacity: 1, width: 600, height: 400 },
  };

  const closeVariants = {
    hidden: { opacity: 0, width: 600, height: 400 },
    visible: { opacity: 1, width: 96, height: 66 },
  };

  return (
    <div>
      <AnimatePresence mode="wait">
        {isOpen ? (
          <motion.div
            layout
            layoutId="rectangle"
            className={`${shared}`}
            variants={openVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.button
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
        ) : (
          <motion.div
            layout
            layoutId="rectangle"
            className={`${shared} flex shrink items-end gap-2 p-2 shadow-lg`}
            variants={closeVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="flex place-content-center">
              <motion.button
                layout
                onClick={() => setIsOpen(true)}
                className={btn}
              >
                <PlusIcon />
              </motion.button>
              <motion.button
                layout
                onClick={() => setIsOpen(true)}
                className={btn}
              >
                <Settings />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
