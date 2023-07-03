import { AiOutlineArrowRight } from "react-icons/ai";

const ReadMoreBtn = () => {
  return (
    <button className="py-4 px-10 my-3 text-md bg-primary hover:bg-primary-hover transition duration-300 text-white uppercase flex items-center">
      <span className="mr-3">Read more</span>
      <AiOutlineArrowRight className="text-2xl" />
    </button>
  );
};

export default ReadMoreBtn;
