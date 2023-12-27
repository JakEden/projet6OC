import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import image from "../assets/IMG.png";
import apartmentsData from "../data/logements.json";
import ApartmentCard from "../components/ApartmentCard";
import Banner from "../components/Banner";

function Home() {
  return (
    <div className="home">
      <Header />
      <div className="main_Home">
        <Banner image={image} texte="Chez vous partout et ailleur" />
        <div className="apartmentCards-container">
          {apartmentsData.map((apartment) => (
            <ApartmentCard key={apartment.id} apartment={apartment} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
