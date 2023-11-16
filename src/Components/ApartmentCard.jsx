import React from "react";
import { Link } from "react-router-dom";

function ApartmentCard({ apartment }) {
  return (
    <div className="apartment-card">
      <Link to={`/apartments/${apartment.id}`}>
        <img src={apartment.cover} alt={apartment.title} />
        <h2 className="title">{apartment.title}</h2>
      </Link>
    </div>
  );
}

export default ApartmentCard;
