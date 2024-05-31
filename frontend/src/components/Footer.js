import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-b-2 border-gray-700">
      <div className="bg-gray-800 py-10">
        <div className="container flex items-center justify-center">
          <div className="text-white font-bold text-[1.8rem] hover:rotate-3 duration-200">
            &#169; Fitness Tracker by
            <a className="text-blue-400 " href="https://www.tkrejci.cz">
              {" "}
              Tadeáš Krejčí
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
