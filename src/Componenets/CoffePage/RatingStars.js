import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import './Stars.css'
const RatingStars = ({ rating }) => {
  // Rendre les étoiles pleines (FaStar) pour chaque valeur entière de la note,
  // et une demi-étoile (FaStar-half-alt) si la note est un nombre décimal.
  const renderStars = () => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} />);
    }
    if (hasHalfStar) {
      stars.push(<FaStar half key="half" />);
    }
    return stars;
  };

  return <div className="rating-stars">{renderStars()}</div>;
  
};

export default RatingStars;
