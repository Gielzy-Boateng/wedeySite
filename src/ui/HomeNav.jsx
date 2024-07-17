import { Link } from "react-router-dom";
import { cn } from "../utils/cn";

const HomeNav = ({ className }) => {
  return (
    <nav
      className={cn(
        "flex items-center font-lightbold justify-center",
        className
      )}
    >
      <Link
        to="/#"
        className="text-lg hover:transform hover:-translate-y-1 hover:text-green-500 transition duration-300"
        data-aos="fade-right"
        data-aos-duration="400"
      >
        Home
      </Link>

      <Link
        to="/about"
        className="text-lg hover:transform hover:-translate-y-1 hover:text-green-500 transition duration-300"
        data-aos="fade"
        data-aos-duration="400"
      >
        About
      </Link>

      <a
        href="/about#features"
        className="transition duration-300 hover:transform hover:-translate-y-1 hover:text-green-500"
        data-aos="fade-left"
        data-aos-duration="400"
      >
        Features
      </a>
    </nav>
  );
};

export default HomeNav;
