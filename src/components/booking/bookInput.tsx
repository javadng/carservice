interface Props {
  labelText: string;
  type: string;
  id: string;
}
const BookInput: React.FC<Props> = ({ id, labelText, type }) => {
  return (
    <div className="input-container relative">
      {/* <label htmlFor="Name" className="absolute left-1 md:left-5 top-2 md:top-4 text-secondary">
        {labelText}
      </label> */}
      <input
        type={type}
        placeholder={labelText}
        id={id}
        className="block md:p-4 w-full rounded-lg text-secondary"
      />
    </div>
  );
};
export default BookInput;
