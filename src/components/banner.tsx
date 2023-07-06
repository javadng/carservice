interface Props {
  breadcrumb: string;
  pageTitle: string;
}

const Banner: React.FC<Props> = ({ breadcrumb, pageTitle }) => {
  const slangs = breadcrumb.split("/");

  return (
    <section className="banner p-6 mb-9 text-white">
      <h1 className="font-bold capitalize text-3xl md:text-5xl text-center my-10">
        {pageTitle}
      </h1>
      <ul className="flex items-center justify-center mb-8">
        {slangs.map((el, index) => (
          <li
            key={index}
            className="text-primary brearcrumb text-sm md:text-xl mx-1 last-of-type:text-white"
          >
            <span className="cursor-pointer">{el}</span>
            <span className="text-gray ml-1 slash">/</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Banner;
