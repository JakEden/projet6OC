import React from "react";
import { useParams, Navigate } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Dropdown from "../Components/Dropdown";
import apartmentsData from "../data/logements.json";
import "../styles/Logement.scss";
import Carousel from "../Components/Carousel";
import starActive from "../assets/star-active.png";
import starInactive from "../assets/star-inactive.png";

function Logement() {
  const { id } = useParams();
  const apartment = apartmentsData.find((logement) => logement.id === id);

  if (!apartment) {
    return <Navigate to="/NotFound" />;
  }

  const rating = Number(apartment?.rating);

  const stars = Array.from({ length: 5 }, (_, index) => (
    <img
      key={index}
      src={index < rating ? starActive : starInactive}
      alt={index < rating ? "active star" : "inactive star"}
    />
  ));

  const equipmentsLogement = apartment?.equipments.map((equipment, index) => (
    <li key={index}>{equipment}</li>
  ));

  const tags = apartment?.tags.map((tag, index) => (
    <div key={index} className="tag">
      {tag}
    </div>
  ));

  return (
    <div className="logementContainer">
      <Header />
      <Carousel images={apartment.pictures} />
      <div className="appartementInformation">
        <div className="proprietorAndApartement">
          <div className="informationApartement">
            <span className="title">{apartment?.title}</span>
            <span className="location">{apartment?.location}</span>
            <div className="tags">{tags}</div>
          </div>
          <div className="proprietorInfo">
            <div className="namePicture">
              <div className="name">{apartment?.host.name}</div>
              <img
                className="picture"
                src={apartment?.host.picture}
                alt="Propriétaire"
              />
            </div>
            <div className="rating">{stars}</div>
          </div>
        </div>
        <div className="description-equipements">
          <div className="descriptionDropdown">
            <Dropdown
              titre="Description"
              description={apartment?.description}
            />
          </div>
          <div className="equipmentDropdown">
            <Dropdown titre="Équipements" description={equipmentsLogement} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Logement;
