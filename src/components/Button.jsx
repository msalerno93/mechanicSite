import { useNavigate } from "react-router";

const Button = ({ label, destination }) => {
const navigate = useNavigate()

    const handleClick = () => {
        navigate(destination)
    }

  return (
    <button onClick={handleClick} className="flex justify-center items-center w-[65%] font-bold rounded-full bg-gray-900 border-black text-white hover:text-blue-500 gap-2 px-7 py-4 border font-montserrat text-lg leading-none">
        {label}
    </button>
  );
};

export default Button;
