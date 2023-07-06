import Banner from "@/components/banner";
import OurService from "@/components/ourService";
import BookForService from "@/components/bookForService";
import TestMonial from "@/components/testMonial";

const Services = () => {
  return (
    <div className="services">
      <Banner breadcrumb="Home/services" pageTitle="services" />
      <OurService />
      <BookForService />
      <TestMonial />
    </div>
  );
};

export default Services;
