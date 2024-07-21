import { Link, useLocation } from "react-router-dom";
import { cn } from "../utils/cn";

const WedeyLogo = ({ className }) => {
  return (
    <div className={cn("mb-0 ", className)}>
      <Link to="/" className="">
        <img
          src="./assets/logoWedey.png"
          alt="Wedey Logo"
          className={cn("w-[150px]", className)}
        />
      </Link>
    </div>
  );
};

export default WedeyLogo;
