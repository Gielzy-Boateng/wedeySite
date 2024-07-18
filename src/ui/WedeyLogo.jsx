import { Link, useLocation } from "react-router-dom";
import { cn } from "../utils/cn";
import { useEffect } from "react";

const WedeyLogo = ({ className }) => {
  const pathName = useLocation();

  useEffect(
    function () {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
    [pathName]
  );

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
