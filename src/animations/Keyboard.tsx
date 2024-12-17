import { FC } from "react";
import { cn, PropsWithClassName } from "../util/cn";

export const Keyboard = () => {
  return (
    <div
      className="h-dvh w-dvw flex items-center justify-center"
      style={{
        backgroundImage:
          "linear-gradient(140deg, rgb(165, 142, 251), rgb(233, 191, 248))",
      }}
    >
      <div className="flex flex-col gap-2 items-center">
        <Key letter="R" />
        <Row />
      </div>
    </div>
  );
};

const Key: FC<{ letter: string } & PropsWithClassName> = ({
  letter,
  className,
}) => {
  return (
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
  );
};

const Row: FC = () => {
  const keys = ["S", "V", "K", "I", "N"];
  return (
    <div className="flex gap-2 text-sm">
      {keys.map((letter) => (
        <Key key={letter} className="size-7" letter={letter} />
      ))}
    </div>
  );
};
