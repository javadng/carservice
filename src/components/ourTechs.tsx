import TechList from "./techs/techList";

const OurTechnicians = () => {
  return (
    <section className="container w-5/6 mx-auto my-6">
      <h3 className="uppercase text-primary text-center font-bold mb-6">
        OUR TECHNICIANS
      </h3>
      <h1 className="capitalize text-3xl text-center font-bold my-6">
        Our Expert Technicians
      </h1>
      <TechList />
    </section>
  );
};

export default OurTechnicians;
