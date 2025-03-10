import { Link } from "react-router";

const PrimaryLogo = () => {
  return (
    <Link to="/" className="w-[234px] h-full">
      <img
        src="/assets/img/logo.png"
        alt="Myproworker Logo"
        className="w-full h-full object-cover object-center"
      />
    </Link>
  );
};

export default PrimaryLogo;
