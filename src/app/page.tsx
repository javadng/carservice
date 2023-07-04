import About from "@/components/about";
import BookForService from "@/components/bookForService";
import Fact from "@/components/fact";
import OurService from "@/components/ourService";
import OurTechnicians from "@/components/ourTechs";
import ServicesList from "@/components/servicesList";
import Slider from "@/components/slider";

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

export default function Home() {
  return (
    <div className="home">
      <Slider images={images} />
      <ServicesList />
      <About />
      <Fact />
      <OurService />
      <BookForService />
      <OurTechnicians />
    </div>
  );
}
