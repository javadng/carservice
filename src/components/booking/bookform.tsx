"use client";
import BookInput from "./bookInput";

const BookForm = () => {
  const submitHandler = (e: any) => {
    e.preventDefault();

    // request handler here ...
  };
  return (
    <form onSubmit={submitHandler} className="bg-primary px-8 py-4">
      <h1 className="md:text-4xl font-bold text-2xl my-8 text-center">
        Book For A Service
      </h1>
      <div className="form-row grid grid-cols-2 gap-5 my-3">
        <BookInput id="name" labelText="Your Name" type="text" />
        <BookInput id="email" labelText="Your Email" type="email" />
      </div>
      <div className="form-row grid grid-cols-2 gap-5 my-3 text-secondary">
        <div className="input-container">
          {/* <label htmlFor="service">Your Name</label> */}
          <select
            id="service"
            defaultValue={0}
            className="rounded-lg block w-full p-4"
          >
            <option value={0} disabled>
              Select A Service
            </option>
            <option value="Service 1">Service 1</option>
            <option value="Service 2">Service 2</option>
            <option value="Service 3">Service 3</option>
          </select>
        </div>
        <div className="input-container">
          <input
            type="date"
            name=""
            id=""
            className="rounded-lg block w-full p-4"
          />
        </div>
      </div>
      <div className="form-row">
        {/* <label htmlFor="special">Special Request</label> */}
        <textarea
          name=""
          id=""
          rows={2}
          className="resize-none w-full block my-3 text-black"
          placeholder="Special Request"
        />
      </div>
      <button className="block w-full bg-secondary p-4 font-bold hover:bg-secondary-hover transition duration-200 mb-6">
        Book Now
      </button>
    </form>
  );
};
export default BookForm;
