import { cn } from "../utils/cn";
import WedeyLogo from "./WedeyLogo";
import NavMediaLogos from "./NavMediaLogos";
import PageNav from "./PageNav";
import { useLocation } from "react-router-dom";
import WidthConstraint from "../pages/WidthConstraint";

const Header = ({ about }) => {
  const location = useLocation();

  return (
    <header className={cn("fixed -top-8 w-screen z-50", about && "bg-white")}>
      <WidthConstraint className="flex items-center justify-between">
        <WedeyLogo className="z-50 ml-[5px]" />
        {location.pathname === "/about" && <PageNav className="space-x-6" />}
        <NavMediaLogos className="mr-28" isNav />
      </WidthConstraint>
    </header>
  );
};

export default Header;
