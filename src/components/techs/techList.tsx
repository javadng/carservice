import TechItem from "./techsItem";

const techArray = [
  {
    id: "t1",
    fullname: "fullname",
    designation: "designation",
    imgSrc: "/image/team-1.jpg",
    duration: 0.3,
  },
  {
    id: "t2",
    fullname: "fullname",
    designation: "designation",
    imgSrc: "/image/team-2.jpg",
    duration: 0.5,
  },
  {
    id: "t3",
    fullname: "fullname",
    designation: "designation",
    imgSrc: "/image/team-3.jpg",
    duration: 0.7,
  },
  {
    id: "t4",
    fullname: "fullname",
    designation: "designation",
    imgSrc: "/image/team-4.jpg",
    duration: 0.9,
  },
];

const TechList = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(15rem,_1fr))] gap-6">
      {techArray.map((el) => (
        <TechItem
          key={el.id}
          fullname={el.fullname}
          designation={el.designation}
          imgSrc={el.imgSrc}
          duration={el.duration}
        />
      ))}
    </div>
  );
};

export default TechList;
