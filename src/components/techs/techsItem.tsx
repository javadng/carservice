"use client";
import Image from "next/image";
import ScrollPullAnimated from "../scrollPullAnimated";

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
      <div className="bg-light-gray pb-3">
        <figure className="relative h-[20rem] md:h-[15rem]">
          <Image src={imgSrc} alt={fullname} fill={true} />
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
