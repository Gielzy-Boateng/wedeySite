import { Link } from "react-router-dom";

const Links = () => {
  const links = [
    [
      {
        name: "Home",
        to: "/",
        direction: "fade-right",
        duration: "300",
        color: "green",
      },
      {
        name: "About",
        to: "/about",
        direction: "fade",
        duration: "300",
        color: "green",
      },
      {
        name: "Features",
        to: "#features",
        direction: "fade-left",
        duration: "300",
        color: "green",
      },
    ],
  ];

  return (
    <ul className="flex items-center flex-row text-white space-x-5 font-bold">
      {links.map((link) => (
        <li key={link.name}>
          <Link to={link.to}>{link.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Links;
