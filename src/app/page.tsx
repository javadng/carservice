import About from "@/components/about";
import Fact from "@/components/fact";
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
      <div className="container mx-auto w-5/6">
        <ServicesList />
        <About />
      </div>
      <Fact />
    </div>
  );
}
