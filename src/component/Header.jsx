import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/TestImg">Test Img Onclick</Link>
        <Link to="/TestShowAllImg">Test Show All Img </Link>
      </nav>
    </header>
  );
};

export default Header;
