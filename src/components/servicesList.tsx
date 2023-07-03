import ServiceItem from "./serviceItem";
import { FaTools, FaUsersCog, FaCertificate } from "react-icons/fa";

const serviceItems = [
  {
    id: "s1",
    title: "Quality Servicing",
    desc: "Diam dolor diam ipsum sit amet diam et eos erat ipsum",
    icon: <FaTools />,
  },
  {
    id: "s2",
    title: "Expert Workers",
    desc: "Diam dolor diam ipsum sit amet diam et eos erat ipsum",
    icon: <FaUsersCog />,
  },
  {
    id: "s3",
    title: "Modern Equipment",
    desc: "Diam dolor diam ipsum sit amet diam et eos erat ipsum",
    icon: <FaCertificate />,
  },
];

const ServicesList = () => {
  return (
    <section className="container mx-auto w-5/6 my-5 mb-16 grid grid-cols-[repeat(auto-fit,minmax(20rem,_1fr))] gap-5">
      {serviceItems.map((el) => (
        <ServiceItem
          title={el.title}
          desc={el.desc}
          icon={el.icon}
          key={el.id}
        />
      ))}
    </section>
  );
};

export default ServicesList;
