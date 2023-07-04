import { AiOutlineCheck } from "react-icons/ai";
import Image from "next/image";
import ReadMoreBtn from "./readmoreBtn";

interface Props {
  imgSrc: string;
  title: string;
  paragraph: string;
  listTitles: string[];
}

const OurServiceItem: React.FC<Props> = ({
  imgSrc,
  listTitles,
  paragraph,
  title,
}) => {
  return (
    <div className="grid md:grid-cols-2 gap-5 items-center">
      <figure className="relative h-[25rem] w-full">
        <Image src={imgSrc} alt="image-services" fill={true} />
      </figure>
      <div>
        <h1>{title}</h1>
        <p>{paragraph}</p>
        <ul className="my-3">
          {listTitles.map((text, index) => (
            <li key={index} className="flex items-center my-3">
              <AiOutlineCheck className="text-green-700 mr-6 md:text-2xl" />
              <span>{text}</span>
            </li>
          ))}
        </ul>
        <ReadMoreBtn />
      </div>
    </div>
  );
};

export default OurServiceItem;
