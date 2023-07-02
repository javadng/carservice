import ServiceItem from "@/components/serviceItem";
import Slider from "@/components/slider";
import { FaTools, FaUsersCog, FaCertificate } from "react-icons/fa";

const images = [
  {
    id: "im1",
    url: "/image/carousel-bg-1.jpg",
    subtitle: "CAR SERVICING",
    title: "Qualified Car Wash Service Center",
    btnText: "learn more!",
  },
  {
    id: "im2",
    url: "/image/carousel-bg-2.jpg",
    subtitle: "Fix cars",
    title: "Expert Car Services for Reliable Maintenance and Repairs",
    btnText: "learn about us!",
  },
];

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

export default function Home() {
  return (
    <div className="home">
      <Slider images={images} />
      <section className="my-5 w-[80%] mx-auto grid grid-cols-[repeat(auto-fit,minmax(17rem,_1fr))] gap-5">
        {serviceItems.map((el) => (
          <ServiceItem
            title={el.title}
            desc={el.desc}
            icon={el.icon}
            key={el.id}
          />
        ))}
      </section>
    </div>
  );
}
