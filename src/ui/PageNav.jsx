import { Link } from "react-router-dom";
import { cn } from "../utils/cn";

const PageNav = ({ className }) => {
  return (
    <nav
      className={cn(
        "hidden smDesktop:block smDesktop:mr-14 desktop:flex desktop:items-center font-lightbold desktop:justify-center desktop:mr-1",
        className
      )}
    >
      <Link
        to="/"
        className="text-lg hover:transform hover:-translate-y-1 hover:text-green-500 transition duration-300 "
      >
        Home
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
    </nav>
  );
};

export default PageNav;
