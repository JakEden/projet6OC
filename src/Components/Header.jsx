import { Link } from "react-router-dom";
import logo from '../assets/logo_kasa.png';

const Header = () => {
  return (
    <div className="Header">
      <div className="Logo">
      <img src={logo} alt=" logo_Kasa" />
      </div>
      <div className="Link">
        <Link to="/">Accueil</Link>
        <Link to="/about">A Propos</Link>
      </div>
    </div>
  );
}

export default Header;
