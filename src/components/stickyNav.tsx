"use client";

import React, { useEffect } from "react";
import {
  motion,
  useViewportScroll,
  useTransform,
  useScroll,
} from "framer-motion";
import Navigation from "./navigation";

const StickyNav: React.FC = () => {
  const { scrollY } = useScroll();
  // const yRange = useTransform(scrollY, [0, 200], [0, 1]); // Adjust the scroll range as needed
  const yRange = useTransform(scrollY, [0, 200], [0, 1]); // Adjust the scroll range as needed
  const opacity = useTransform(yRange, [0, 1], [0, 1]);

  useEffect(() => {
    return () => {
      scrollY.set(0); // Reset scroll position when component unmounts
    };
  }, [scrollY]);

  return (
    <motion.nav
      style={{
        position: "sticky",
        top: 0,
        left: 0,
        right: 0,
        opacity,
        zIndex: 1000,
      }}
    >
      <Navigation />
    </motion.nav>
  );
};

export default StickyNav;
