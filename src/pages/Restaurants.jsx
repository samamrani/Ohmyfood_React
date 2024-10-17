import Menu from "../composants/Menu";
import { useParams } from 'react-router-dom';
import deliceImage from '../assets/images/delice_des_sens.jpg';
import paletteImage from '../assets/images/palette_du_gout.jpg';
import francaiseImage from '../assets/images/francaise.jpg';
import enchanteeImage from '../assets/images/note_enchantee.jpg';
import data from "../data/restosData.json";

const images = {
  "delice_des_sens.jpg": deliceImage,
  "palette_du_gout.jpg": paletteImage,
  "francaise.jpg": francaiseImage,
  "note_enchantee.jpg": enchanteeImage,
};

function Restaurants(){
  const { id } = useParams(); // Récupère l'ID de l'URL
  const numericId = parseInt(id, 10);//Convertir
  const selectedResto = data.find(rest => rest.id === numericId);
 
  if (!selectedResto) {
    return <p>Restaurant non trouvé !</p>;
  }

  return(
    <main className="menu">
      <section className="menu__section">
        <img className="menu__img" src={images[selectedResto.src]} alt={selectedResto.titre}/>
        <div className="menu__group">
            <div className="menu__content">
            <h2 className="menu__titre">{selectedResto.titre}</h2>
            <div className="heart">
              <i className="fa-regular fa-heart heart__unchecked"></i>
              <i className="fa-solid fa-heart heart__checked"></i>
            </div>
          </div>
          <div className="menu__articles"> 
              <Menu title="Entrées" items={selectedResto.entrees} />
              <Menu title="Plats" items={selectedResto.plats} />
              <Menu title="Desserts" items={selectedResto.desserts} />
          </div>
          <div className="reserver">
            <button className="reserver__btn reserver__btn--btn">
              Commander
            </button>
          </div>
          </div>  
      </section>
    </main>
  )
}
export default Restaurants;