import Image from "next/image";

interface Props {
  name: string;
  profession: string;
  desc: string;
  imgSrc: string;
}
const ClientItem: React.FC<Props> = ({ desc, name, profession, imgSrc }) => {
  return (
    <div className="mx-4">
      <figure className="relative w-16 h-16 rounded-full overflow-hidden mx-auto">
        <Image src={imgSrc} alt={name} fill={true} />
      </figure>
      <h2 className="font-bold text-xl">{name}</h2>
      <span className="inline-block mb-6">{profession}</span>
      <p className="p-6 text-justify bg-light-gray">{desc}</p>
    </div>
  );
};
export default ClientItem;
