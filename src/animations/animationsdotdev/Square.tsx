import { motion } from "framer-motion";
import { useState } from "react";

export default function Square() {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  return (
    <div className="grid h-screen w-screen place-items-center">
      <button className="bg-white px-2 py-4 rounded-lg text-sm" onClick={() => setShouldAnimate((s) => !s)}>Animate</button>
      <motion.div
        animate={{ scale: shouldAnimate ? 1.5 : 1, y: shouldAnimate ? -40 : 0 }}
        className="size-[48px] bg-[#fad658] rounded-xl"
      />
    </div>
  );
}