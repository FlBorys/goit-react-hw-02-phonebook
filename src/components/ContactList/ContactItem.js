export const ContactItem = ({name, number, onDelete }) => {
  return (
    <>
      <span>{name} {number} </span> <button onClick={onDelete}>Delete</button>
    </>
  );
}