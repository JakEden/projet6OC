import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import image from "../assets/IMG.png";
import apartmentsData from "../data/logements.json";
import ApartmentCard from "../Components/ApartmentCard";
import Banner from "../Components/Banner";

function Home() {
  return (
    <div className="home">
      <Header />
      <div className="main_Home">
        <Banner image={image} texte="Chez vous, partout et ailleurs" />
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
