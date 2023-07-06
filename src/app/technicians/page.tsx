import Banner from "@/components/banner";
import OurTechnicians from "@/components/ourTechs";

const Technicians = () => {
  return (
    <div className="technicians">
      <Banner breadcrumb="Home/technicians" pageTitle="Technicians" />
      <OurTechnicians />
    </div>
  );
};

export default Technicians;
