import React from 'react';

function Banner ({image, texte}) {
    return (
        <div className="img_Home">
        <img src={image} alt="img Home" />
        <div className="img-text">{texte}</div>
      </div>
    )
}
export default Banner;