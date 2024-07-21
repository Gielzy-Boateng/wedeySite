import { Link } from "react-router-dom";

const LinkItem = ({ social, isNav }) => {
  return (
    <Link
      to={social.to}
      data-aos-duration="600"
      data-aos={isNav ? `fade-down` : `fade-up`}
      data-aos-delay={`${social.delay}`}
    >
      <img
        src={social.src}
        alt={social.alt}
        className={`h-9 space-x-8 mt-3 transition-colors duration-300 p-2 bg-[#00000038] rounded-lg hover:bg-${social.bg}`}
      />
    </Link>
  );
};

export default LinkItem;
