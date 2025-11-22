import { Link } from "react-router-dom";

const buttonStyle = `
  bg-[#8200FF]
  text-white
  uppercase
  px-[20.24px] py-[10.46px]
  rounded-[70px]
  cursor-pointer
`;

const Button = ({ label, url = null, className = "", onClick }) => {
  const merged = `${buttonStyle} ${className}`;

  if (url) {
    return (
      <Link to={url} className={merged}>
        {label}
      </Link>
    );
  }

  return (
    <button className={merged} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
