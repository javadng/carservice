import Image from "next/image";
import ReadMoreBtn from "./readmoreBtn";

const About = () => {
  return (
    <section className="about grid md:grid-cols-2 gap-10 mt-32">
      <div className="image">
        <figure className="relative h-[30rem] md:h-[34rem]">
          <div className="sticky-title absolute -right-5 -top-5 bg-black bg-opacity-10 z-40 p-8 text-white text-3xl w-64">
            <span className="capitalize">
              <b className="text-4xl">15</b> years of Experience
            </span>
          </div>
          <Image src="/image/about.jpg" fill={true} alt="about-image" />
        </figure>
      </div>
      <div className="desc">
        <h3 className="uppercase text-primary font-bold my-3">about us</h3>
        <h1 className="capitalize text-4xl text-secondary mb-6 font-bold">
          <b className="text-primary">CarServ</b> Is the best place for your
          auto care
        </h1>
        <p>
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
          diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
          lorem sit clita duo justo magna dolore erat amet
        </p>

        <ul className="my-6">
          <li className="my-5 flex items-center">
            <span className="font-bold inline-block p-3 bg-light-gray">01</span>
            <div className="ml-4">
              <h2 className="font-bold">Professional & Expert</h2>
              <p>Diam dolor diam ipsum sit amet diam et eos</p>
            </div>
          </li>
          <li className="my-5 flex items-center">
            <span className="font-bold inline-block p-3 bg-light-gray">02</span>
            <div className="ml-4">
              <h2 className="font-bold">Quality Servicing Center</h2>
              <p>Diam dolor diam ipsum sit amet diam et eos</p>
            </div>
          </li>
          <li className="my-5 flex items-center">
            <span className="font-bold inline-block p-3 bg-light-gray">03</span>
            <div className="ml-4">
              <h2 className="font-bold">Awards Winning Workers</h2>
              <p>Diam dolor diam ipsum sit amet diam et eos</p>
            </div>
          </li>
        </ul>
        <ReadMoreBtn />
      </div>
    </section>
  );
};

export default About;
