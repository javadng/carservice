import { BsCheckLg } from "react-icons/bs";
import { AiOutlineCar } from "react-icons/ai";
import { FaUsersCog } from "react-icons/fa";
import { PiUsersThree } from "react-icons/pi";
import CountAnimation from "./CountAnimation";

const Fact = () => {
  return (
    <section className="fact my-12">
      <div className="container mx-auto w-5/6 py-20 text-3xl gap-10 text-white grid grid-cols-[repeat(auto-fit,minmax(10rem,_1fr))] font-bold">
        <div className="flex flex-col items-center">
          <BsCheckLg className="text-5xl" />
          <CountAnimation targetNumber={1234} />
          <span className="text-lg my-3 font-normal">Years Experience</span>
        </div>
        <div className="flex flex-col items-center">
          <FaUsersCog className="text-5xl" />
          <CountAnimation targetNumber={1234} />
          <span className="text-lg my-3 font-normal">Expert Technicians</span>
        </div>
        <div className="flex flex-col items-center">
          <PiUsersThree className="text-5xl" />
          <CountAnimation targetNumber={1234} />
          <span className="text-lg my-3 font-normal">Satisfied Clients</span>
        </div>
        <div className="flex flex-col items-center">
          <AiOutlineCar className="text-5xl" />
          <CountAnimation targetNumber={1234} />
          <span className="text-lg my-3 font-normal">Compleate Projects</span>
        </div>
      </div>
    </section>
  );
};

export default Fact;
