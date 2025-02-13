import Footer from "../Components/Footer";
import Header from "../Components/Header";
import notfound from "../assets/404.png";
import { Link } from "react-router-dom";


const Notfound = () => {
  return (
    <div className="NotFound">
      <Header />
      <div className="notfoundContainer">
        <div>
          <img src={notfound} alt="404" />
        </div>
        <p className="containerText">
          Oups! La page que vous demandez n'existe pas
        </p>
        <Link to="/">Retourner sur la page d'accueil </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Notfound;
