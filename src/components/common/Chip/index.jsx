const Chip = ({ value, isActive, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`px-5 py-2 rounded-full cursor-pointer ${
        isActive ? "bg-[#8200FF]" : "bg-[#262626]"
      } text-white shadow-md`}
    >
      {value}
    </div>
  );
};

export default Chip;
