import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="border-b-2 border-gray-700">
      <div className="bg-gray-800 py-6">
        <div className="container flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-6
          "
          >
            <img src="/logo.png" />
            <h2 className="text-white font-black">Fitness Tracker</h2>
          </Link>
          <div className="flex gap-20 text-white font-bold text-[1.8rem]">
            <Link to="/">Home</Link>
            <Link to="/tracker">Tracker</Link>
            <Link to="/">Fitness Tracker</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
