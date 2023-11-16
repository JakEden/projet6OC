import React from 'react';
import Header from "../Components/Header";
import Footer from '../Components/Footer';
import image from '../assets/IMG_About.png';
import Banner from '../Components/Banner';
import '../styles/About.scss';
import Dropdown from '../Components/Dropdown';



const About = () => {
  return (
    <div className="About">
      <Header />
      <Banner image={image} texte=""/>
      <div className='containerColapse'>
      <Dropdown titre="Fiabilité" description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." />
      <Dropdown titre="Respect" description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
      <Dropdown titre="Service" description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
      <Dropdown titre="Sécurité" description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
      </div>
      <Footer />
    </div>
  );
}

export default About;
