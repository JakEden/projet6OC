import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="Header">
            <Link to="/">HOME</Link>
            <Link to="/about">A Propos</Link>
        </div>
    );
}

export default Header;