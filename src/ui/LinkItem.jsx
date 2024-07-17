import { Link } from "react-router-dom";

const LinkItem = ({ social }) => {
  return (
    <Link
      to={social.to}
      data-aos-duration="600"
      data-aos="fade-down"
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
