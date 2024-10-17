// import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listeResto } from '../redux//restoSlice';
import { Link } from 'react-router-dom';
import paletteDuGout from "../assets/images/palette_du_gout.jpg";
import gout from "../assets/images/francaise.jpg";
import enchantee from "../assets/images/note_enchantee.jpg";
import delice from "../assets/images/delice_des_sens.jpg";

function Resto() {
  const dispatch = useDispatch();
  const restaurants = useSelector((state) => state.resto.restaurants); 

  const groupes = [
    { id: "ala-francaise", src: gout, titre: "À la française", ville: "Cité Rouge" },
    { id: "la-note-enchantee", src: enchantee, titre: "La note enchantée", ville: "Folie-Méricourt" },
    { id: "le-delice-des-sens", src: delice, titre: "Le délice des sens", ville: "Ville des Fleurs" },
    { id: "la-palette-du-gout", src: paletteDuGout, titre: "La palette du goût", ville: "Folie Verte" }
  ];

  const handleAddRestaurant = (restaurant) => {
    dispatch(listeResto(restaurant));
  };

  return (
    <section className="resto">
      <h2 className="resto__menu">Restaurants</h2>
      <div className="resto__groupe">
        {groupes.map((groupe, index) => (
          <article className="resto__gout" key={index}>
            <Link title={groupe.titre} to={`/restaurants/${groupe.id}`}>
              <div className="resto__cadre">
                <div className="resto__img">
                  <img src={groupe.src} alt={groupe.titre} />
                  <span className="resto__nouve">Nouveau</span>
                </div>
                <div className="resto__content">
                  <div className="resto__description">
                    <h3 className="resto__titre">{groupe.titre}</h3>
                    <p className="resto__ville">{groupe.ville}</p>
                  </div>
                  <div className="heart" onClick={() => handleAddRestaurant(groupe)}>
                    <i className="fa-regular fa-heart heart__unchecked"></i>
                    <i className="fa-solid fa-heart heart__checked"></i>
                  </div>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>

      <h2>Restaurants ajoutés:</h2>
      <ul>
        {restaurants.map((restaurant, index) => (
          <li key={index}>{restaurant.titre} - {restaurant.ville}</li>
        ))}
      </ul>
    </section>
  );
}

export default Resto;
