"use client";
import React, { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";

interface MyComponentProps {
  targetNumber: number;
}

const CountAnimation: React.FC<MyComponentProps> = ({ targetNumber }) => {
  const countVariants: Variants = {
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1 },
  };

  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        const newCount = prevCount + 1;
        if (newCount >= targetNumber) {
          clearInterval(interval);
        }
        return newCount;
      });
    }, 0.5);

    return () => {
      clearInterval(interval);
    };
  }, [targetNumber]);

  return <span>{count}</span>;
};

export default CountAnimation;
