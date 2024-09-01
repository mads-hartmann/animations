import { motion } from "framer-motion";

export const ObjectBlurs = () => {
  // animate-pulse does add a little bit of things
  const radius = 840
  return (
    <div className="size-[800px] overflow-hidden grid m-auto">
    {/* <div className="h-lvh w-lvw flex items-center align-middle justify-center"> */}
      <motion.svg
        width="800"
        height="800"
        style={{gridRow: "1", gridColumn: "1"}}
        className="rounded-3xl"
        transition={{
            repeat: Infinity,
            duration: 20,
        }}
        animate={{
            // rotate: [0, 360, 0],
        }}
      >
        <defs>
          <radialGradient id="radialGradient">
            <stop offset="0%" stopColor="#8fe6cc" />
            <stop offset="100%" stopColor="#0c3136" />
          </radialGradient>
          <linearGradient
            id="gradient1"
            gradientUnits="objectBoundingBox"
            y1="10%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#f4e3be" />
            <stop offset="100%" stopColor="#ef5845" />
          </linearGradient>
          <linearGradient
            id="gradient2"
            gradientUnits="objectBoundingBox"
            y1="10%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#1340bd" />
            <stop offset="100%" stopColor="#ee387f" />
          </linearGradient>
          <filter id="blur">
            <feGaussianBlur stdDeviation="39" />
          </filter>
        </defs>
        <g filter="url(#blur)">
          {/* Top right */}
          <motion.path
            fill="url(#radialGradient)"
            cx="275"
            cy="272"
            r={radius}
            d="M 319.35 394.57 A 120 120 0 1 0 752.44 245.14 120 120 0 0 0 198.7 418.48 Z"
            transition={{
              repeat: Infinity,
              duration: 3,
            }}
            animate={{
              scale: [3, 2, 3],
            }}
          />
          {/* Bottom left */}
          <motion.path
            fill="url(#gradient2)"
            cx="275"
            cy="272"
            r={radius}
            d=" M 195.3 697.26 A 120 120 0 1 0 403.08 300.39 120 120 0 0 0 103.3 490.26 Z "
            transition={{
              repeat: Infinity,
              duration: 3,
            }}
            animate={{
              scale: [3, 2, 3],
            }}
          />
          {/* Bottom right object */}
          <motion.path
            fill="url(#gradient1)"
            cx="583"
            cy="392"
            rx="120"
            ry="258"
            d="M 623.99 27.01 A 258 120 90 1 0 689.46-314.03 258 120 90 0 0 662.35-195.23 Z "
            transition={{
              repeat: Infinity,
              duration: 3,
            }}
            animate={{
              rotate: [55],
              x: [200],
              y: [800],
              scale: [2, 1.5, 2],
            }}
          />
          {/* Shiny bit in the middle */}
          <motion.path
            style={{ mixBlendMode: "plus-lighter" }}
            fill="url(#radialGradient)"
            points="194.5 255.5 624.5 194.5 622.5 599.5"
            d="M 592.26 329.83 A 15 15 0 0 1 271.55 462.29 L 420.09 276.59 Z"
            transition={{
              repeat: Infinity,
              duration: 3,
            }}
            animate={{
              scale: [0.8, 0.3, 0.8],
            }}
          />
        </g>
      </motion.svg>
      <div className="size-[780px] inset-[10px] relative bg-[#0F0F0F] rounded-3xl" style={{gridRow: "1", gridColumn: "1"}}></div>
    </div>
  );
};
