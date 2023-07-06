import Banner from "@/components/banner";
import BookForService from "@/components/bookForService";

const Booking = () => {
  return (
    <div className="booking">
      <Banner breadcrumb="Home/booking" pageTitle="booking" />
      <BookForService />
    </div>
  );
};

export default Booking;
