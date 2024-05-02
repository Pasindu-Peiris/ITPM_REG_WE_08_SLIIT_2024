const Card = ({ children }) => {
  return (
    <div className="p-4  bg-white shadow-md shadow-gray-300 rounded-md mb-5">
      {children}
    </div>
  );
};

export default Card;
