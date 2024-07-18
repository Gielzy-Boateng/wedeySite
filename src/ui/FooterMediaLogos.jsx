import { Link } from "react-router-dom";

const FooterMediaLogos = () => {
  return (
    <div className="flex justify-center items-center space-x-10 ">
      <Link to="/" data-aos="fade-up" data-aos-duration="200">
        <img
          src="assets/fb.svg"
          alt="Facebook Logo"
          className="h-9 mt-3 space-x-6 bg-[#00000038] p-2 rounded-lg hover:bg-blue-700 transition-colors duration-400"
        />
      </Link>

      <Link
        to="/"
        data-aos="fade-up"
        data-aos-duration="300"
        data-aos-delay="100"
      >
        <img
          src="assets/twitter.svg"
          alt="Twitter Logo"
          className="h-9 space-x-10 mt-3 p-2 bg-[#00000038] rounded-lg hover:bg-blue-500 transition-colors duration-400"
        />
      </Link>
      <Link
        to="/"
        data-aos="fade-up"
        data-aos-duration="300"
        data-aos-delay="150"
      >
        <img
          src="assets/instagram.svg"
          alt="Instagram Logo"
          className="h-9 space-x-15 mt-2 p-2 bg-[#00000038] rounded-lg hover:bg-red-500 transition-colors duration-400"
        />
      </Link>
      <Link
        to="/"
        data-aos="fade-up"
        data-aos-duration="300"
        data-aos-delay="200"
      >
        <img
          src="assets/whatsapp.svg"
          alt="Whatsapp Logo"
          className="h-9 space-x-10 mt-2 mr-3 p-2 bg-[#00000038] rounded-lg hover:bg-green-500 transition duration-400"
        />
      </Link>
    </div>
  );
};

export default FooterMediaLogos;
