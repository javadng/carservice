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
    <section>
      <Slider images={images} />
    </section>
  );
}
