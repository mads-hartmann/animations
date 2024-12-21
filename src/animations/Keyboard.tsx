import { FC, PropsWithChildren, useEffect, useState } from "react";
import { cn, PropsWithClassName } from "../util/cn";
import { AnimatePresence, motion, Variants } from "framer-motion";

export const Keyboard = () => {
  const [key, setKey] = useState<string | null>(null);
  const [nextKeys, setNextKeys] = useState<string[]>([]);

  useEffect(() => {
    const handleKeyDown = ({ key, metaKey }: KeyboardEvent) => {
      if (key === "k" && metaKey) {
        setKey("♦︎");
        setNextKeys(["R"]);
      } else if (key === "r") {
        setKey("R");
        setNextKeys(["S", "V", "K", "I", "N"]);
      } else if (key === "Escape") {
        setKey(null);
        setNextKeys([]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <Page>
      <div className="flex flex-col gap-2 items-center">
        <Key letter={key} />
        <Row keys={nextKeys} />
      </div>
    </Page>
  );
};

const Page: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      className="h-dvh w-dvw flex items-center justify-center"
      style={{
        backgroundImage:
          "linear-gradient(140deg, rgb(165, 142, 251), rgb(233, 191, 248))",
      }}
    >
      {children}
    </div>
  );
};

const Key: FC<{ letter: string | null } & PropsWithClassName> = ({
  letter,
  className,
}) => {
  const show = !!letter;

  const variants: Variants = {
    hidden: { opacity: 0, scale: 0.7 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <AnimatePresence mode="wait">
      {show && (
        <motion.div
          transition={{ duration: 0.2 }}
          variants={variants}
          animate="visible"
          initial="hidden"
          exit="hidden"
        >
          <div className="shadow-sm">
            <div
              className={cn(
                "flex items-center justify-center size-10 rounded-md text-white bg-[rgba(0,0,0,0.7)] font-inter text-base font-light",
                className
              )}
              style={{
                boxShadow:
                  "0 0 0 1px hsla(0, 0%, 100%, .3), 0 0 0 1.5px rgba(0, 0, 0, .8)",
              }}
            >
              {letter}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Row: FC<{ keys: string[] }> = ({ keys }) => {
  if (keys.length === 0) {
    return null;
  }
  return (
    <div className="flex gap-2 text-sm">
      {keys.map((letter) => (
        <Key key={letter} className="size-7" letter={letter} />
      ))}
    </div>
  );
};
