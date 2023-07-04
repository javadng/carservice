interface Props {
  labelText: string;
  type: string;
  id: string;
}
const BookInput: React.FC<Props> = ({ id, labelText, type }) => {
  return (
    <div className="input-container relative">
      <label htmlFor="Name" className="absolute left-5 top-4 text-secondary">
        {labelText}
      </label>
      <input type={type} id={id} className="block p-4 w-full rounded-lg" />
    </div>
  );
};
export default BookInput;
