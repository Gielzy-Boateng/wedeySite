import NavigationLinks from "./NavigationLinks";

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

  function handleClick(e) {
    e.stopPropagation();
  }

  return (
    <ul className="flex items-center flex-row text-white space-x-5 font-bold">
      {links.map((link) => (
        <NavigationLinks link={link} key={link.name} />
      ))}
    </ul>
  );
};

export default Links;
