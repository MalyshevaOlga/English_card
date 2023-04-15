import Logo from "../../images/logo1.png";
import "../Header/Header.css";
import { Link } from "react-router-dom";

const Header = () => { 
return (
<header className="header">
  <div className="header__logo">
  <Link to="/">
    <img src={Logo} alt="logo" className="logo" />
    </Link>
  </div>
  <nav className="menu">
    <ul className="menuList">
      <Link to="/" className="menuItem">Home</Link>
      <Link to="/game" className="menuItem">GAME</Link>
      <Link to="/vocabulary" className="menuItem">VOCABULARY</Link>
    </ul>
  </nav>
</header>
);
};

export default Header;