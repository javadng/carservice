"use client";
import React from "react";
import { motion, Variants, Transition } from "framer-motion";

interface Props {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    transition: {
      type: "tween",
      bounce: 0.4,
      duration: 0.8,
    } as Transition,
  },
};

const ServiceItem: React.FC<Props> = ({ title, desc, icon }) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div
        className="item flex p-6 bg-light-gray rounded-md"
        variants={cardVariants}
      >
        <div className="icon text-primary text-6xl mr-6">{icon}</div>
        <div className="text">
          <h1 className="font-bold my-3 text-xl">{title}</h1>
          <p className="text-secondary">{desc}</p>
          <button className="capitalize underline my-3">read more</button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ServiceItem;
