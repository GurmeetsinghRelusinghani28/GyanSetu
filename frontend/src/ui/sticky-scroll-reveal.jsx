import React, { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent, motion } from "framer-motion";
import cn from "../lib/utils";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

export const StickyScroll = ({ content, contentClassName }) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint);
      if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
        return index;
      }
      return acc;
    }, 0);
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "#140d04", "#241000", "#3b1c0a", "#4e260f", "#693e20",
  ];
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen">
      {/* Go Back */}
      <div className="fixed top-4 left-4 z-[999] flex items-center space-x-2 cursor-pointer">
        <ArrowBackIcon color="primary" fontSize="medium" />
        <p onClick={() => navigate("/dashboard")} className="text-blue-500 text-sm sm:text-base">
          Go back
        </p>
      </div>

      {/* Main Scroll Container */}
      <motion.div
        animate={{
          backgroundColor: backgroundColors[activeCard % backgroundColors.length],
        }}
        className="relative flex flex-col lg:flex-row w-full h-full justify-start lg:space-x-10 overflow-y-auto rounded-md px-4 sm:px-6 lg:px-10"
        ref={ref}
      >
        {/* Text Section */}
        <div className="relative flex items-start w-full lg:w-2/3">
          <div className="max-w-xl sm:max-w-2xl">
            {content.map((item, index) => (
              <div key={item.title + index} className="my-16 sm:my-20">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="text-xl sm:text-2xl font-bold text-slate-100"
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="text-base sm:text-lg mt-6 max-w-sm sm:max-w-md text-slate-300"
                >
                  {item.description}
                </motion.p>

                {/* Show image inline for mobile/tablet */}
                <div className="mt-6 lg:hidden">{item.content}</div>
              </div>
            ))}
            <div className="h-20 sm:h-40" />
          </div>
        </div>

        {/* Sticky Image Preview (desktop only) */}
        <div
          style={{ background: "transparent" }}
          className={cn(
            "hidden lg:block sticky top-32 h-80 w-[400px] overflow-hidden rounded-md bg-white shadow-lg",
            contentClassName
          )}
        >
          {content[activeCard].content ?? null}
        </div>
      </motion.div>
    </div>
  );
};
