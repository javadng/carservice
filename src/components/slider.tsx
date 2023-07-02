"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

interface ImageObj {
  id: string;
  url: string;
  subtitle: string;
  title: string;
  btnText: string;
}

interface ImageSliderProps {
  images: ImageObj[];
}

const Slider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => {
      if (prevIndex === 0) {
        return images.length - 1;
      } else {
        return prevIndex - 1;
      }
    });
  };

  const containerVariants = {
    hidden: (custom: number) => ({
      opacity: 0,
      x: custom > 0 ? 100 : -100,
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "tween",
        duration: 0.5,
      },
    },
  };

  return (
    <div className="slider relative overflow-hidden whitespace-nowrap">
      <motion.div
        className="image-container"
        key={currentImageIndex}
        custom={currentImageIndex}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <figure className="relative h-[18rem] md:h-[33rem] w-full">
          <Image
            fill={true}
            quality={100}
            src={images[currentImageIndex].url}
            alt={`Image ${currentImageIndex}`}
          />
          <div className="overlay absolute left-0 top-0 w-full h-full bg-blend-multiply bg-black bg-opacity-60"></div>
        </figure>
        <motion.div
          initial={{ translateY: "-10%", scale: 0.5 }}
          animate={{ translateY: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-white absolute top-[10%] w-[80%] left-[10%] text-center"
        >
          <h4 className="my-5 uppercase text-xs">
            {images[currentImageIndex].subtitle}
          </h4>
          <h1 className="text-lg truncate md:text-5xl mb-6 md:mb-14 w-2/3 whitespace-normal mx-auto font-bold">
            {images[currentImageIndex].title}
          </h1>
          <button className="bg-primary p-3 py-1 md:py-3 md:px-14 rounded-lg md:text-xl uppercase">
            {images[currentImageIndex].btnText}
          </button>
        </motion.div>
      </motion.div>

      <div
        className="control-left absolute left-0 top-0 h-full text-white text-5xl mx-5 flex items-center cursor-pointer"
        onClick={prevImage}
      >
        <AiOutlineLeft className="hover:scale-150 transition duration-300" />
      </div>
      <div
        className="control-right absolute right-0 top-0 h-full text-white text-5xl mx-5 flex items-center cursor-pointer"
        onClick={nextImage}
      >
        <AiOutlineRight className="hover:scale-150 transition duration-300" />
      </div>
    </div>
  );
};

export default Slider;
