import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="bg-blue-400 py-6">
        <div className="container flex items-center justify-between">
          <Link to="/">
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
