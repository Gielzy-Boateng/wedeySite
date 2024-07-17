import { Link } from "react-router-dom";

const NavigationLinks = ({ link }) => {
  return (
    <li>
      <Link to={link.to}>{link.name}</Link>
    </li>
  );
};

export default NavigationLinks;
