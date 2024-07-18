import { Link } from "react-router-dom";
import { cn } from "../utils/cn";

const PageNav = ({ className }) => {
  return (
    <span
      className={cn(
        "hidden desktop:flex desktop:items-center font-lightbold desktop:justify-center",
        className
      )}
    >
      <Link
        to="/#"
        className="text-lg hover:transform hover:-translate-y-1 hover:text-green-500 transition duration-300 "
      >
        <a href="#home">Home</a>
      </Link>

      <Link
        to="/about"
        className="text-lg hover:transform hover:-translate-y-1 hover:text-green-500 transition duration-300"
      >
        About
      </Link>

      <a
        href="#features"
        className="transition duration-300 hover:transform hover:-translate-y-1 hover:text-green-500"
      >
        Features
      </a>
      <a
        href="#contact"
        className="hover:transform hover:-translate-y-1 hover:text-green-500 transition duration-300"
      >
        Contact
      </a>
    </span>
  );
};

export default PageNav;
