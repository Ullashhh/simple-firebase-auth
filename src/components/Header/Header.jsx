import { Link } from "react-router-dom";

const Header = () => {
    return (
      <div className="py-5 flex items-center justify-center w-full bg-white">
        <Link className="mr-20 font-bold text-black" to="/">
          Home
        </Link>
        <Link className="mr-20 font-bold text-black" to="/login">
          Login
        </Link>
        <Link className="font-bold text-black" to="/register">
          Sign Up
        </Link>
      </div>
    );
};

export default Header;