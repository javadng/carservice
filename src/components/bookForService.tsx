"use client";
import BookForm from "./booking/bookform";
import ScrollPullAnimated from "./scrollPullAnimated";

const BookForService = () => {
  return (
    <section className="book-service my-12 text-white">
      <div className="gap-10 grid md:grid-cols-2 container w-5/6 mx-auto">
        <ScrollPullAnimated offscreenY={300} onscreenY={0}>
          <div className="desc p-8">
            <h1 className="capitalize text-2xl md:text-4xl font-bold my-6">
              Certified and Award Winning Car Repair Service Provider
            </h1>
            <p>
              Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd
              ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo
              rebum sea invidunt voluptua. Eos vero eos vero ea et dolore eirmod
              et. Dolores diam duo invidunt lorem. Elitr ut dolores magna sit.
              Sea dolore sanctus sed et. Takimata takimata sanctus sed.
            </p>
          </div>
        </ScrollPullAnimated>
        <ScrollPullAnimated offscreenY={300} onscreenY={0} scale={true}>
          <BookForm />
        </ScrollPullAnimated>
      </div>
    </section>
  );
};

export default BookForService;
