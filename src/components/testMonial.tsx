"use client";
import Carousel from "./carousel/carousel";

const DUMMY_CLIENT = [
  {
    id: "c1",
    name: "Client name",
    profession: "profession",
    desc: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
    imgSrc: "/image/testimonial-1.jpg",
  },
  {
    id: "c2",
    name: "Client name",
    profession: "profession",
    desc: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
    imgSrc: "/image/testimonial-2.jpg",
  },
  {
    id: "c3",
    name: "Client name",
    profession: "profession",
    desc: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
    imgSrc: "/image/testimonial-3.jpg",
  },
  {
    id: "c4",
    name: "Client name",
    profession: "profession",
    desc: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
    imgSrc: "/image/testimonial-4.jpg",
  },
];

const TestMonial = () => {
  return (
    <section className="text-center container w-5/6 mx-auto my-10">
      <h3 className="text-primary mb-8 text-xl md:text-2xl font-bold">
        TESTIMONIAL
      </h3>
      <h1 className="capitalize md:text-4xl text-2xl text-secondary font-bold">
        Our Clients Say!
      </h1>
      <Carousel clients={DUMMY_CLIENT} />
    </section>
  );
};

export default TestMonial;
