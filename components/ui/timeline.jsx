"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full font-body" ref={containerRef}>
      <div ref={ref} className="relative max-w-[1440px] mx-auto pb-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-24 md:gap-10"
          >
            {/* Sticky left: dot + title */}
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-surface flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-surface-container-high border border-outline-variant/30 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-4xl font-bold font-headline text-on-surface-variant">
                {item.title}
              </h3>
            </div>

            {/* Content */}
            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold font-headline text-on-surface-variant">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}

        {/* Animated vertical line */}
        <div
          style={{ height: height + "px" }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-gradient-to-b from-transparent via-outline-variant/30 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-[#29EAC4] via-[#4284DB] to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
