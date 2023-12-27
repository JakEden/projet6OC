import React from "react";

function Banner({ image, texte }) {
  return (
    <div className="imgHome">
      <img src={image} alt="img Home" />
      <div className="imgText">{texte}</div>
    </div>
  );
}
export default Banner;
