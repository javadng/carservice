"use client";
import Image from "next/image";
import ScrollPullAnimated from "../scrollPullAnimated";
import { BsLinkedin, BsTwitter, BsInstagram } from "react-icons/bs";

interface Props {
  fullname: string;
  designation: string;
  imgSrc: string;
  duration: number;
}

const TechItem: React.FC<Props> = ({
  designation,
  fullname,
  imgSrc,
  duration,
}) => {
  return (
    <ScrollPullAnimated offscreenY={300} onscreenY={0} duration={duration}>
      <div className="tech-item cursor-pointer bg-light-gray pb-3 shadow-sm">
        <figure className="relative h-[20rem] md:h-[16rem] tech-figure after:bg-primary">
          <Image src={imgSrc} alt={fullname} fill={true} />
          <div className="tech-social text-2xl absolute transition z-20 top-1/2 left-[160px] md:left-[50px] flex items-center justify-between">
            <span className="text-primary p-2 mx-2 transition duration-200 hover:text-white bg-white hover:bg-secondary z-20 inline-block rounded-lg">
              <BsLinkedin />
            </span>
            <span className="text-primary p-2 mx-2 transition duration-200 hover:text-white bg-white hover:bg-secondary z-20 inline-block rounded-lg">
              <BsTwitter />
            </span>
            <span className="text-primary p-2 mx-2 transition duration-200 hover:text-white bg-white hover:bg-secondary z-20 inline-block rounded-lg">
              <BsInstagram />
            </span>
          </div>
        </figure>
        <h2 className="text-center font-bold text-xl my-3 capitalize">
          {fullname}
        </h2>
        <span className="text-center block">{designation}</span>
      </div>
    </ScrollPullAnimated>
  );
};

export default TechItem;
