import Banner from "@/components/banner";
import ServicesList from "@/components/servicesList";
import AboutUs from "@/components/about";
import Fact from "@/components/fact";
import OurTechnicians from "@/components/ourTechs";

const About = () => {
  return (
    <div className="about">
      <Banner breadcrumb="Home/about" pageTitle="About" />
      <ServicesList />
      <AboutUs />
      <Fact />
      <OurTechnicians />
    </div>
  );
};

export default About;
