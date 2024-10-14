
import delice from "../assets/images/delice_des_sens.jpg"
import entrees from "../data/entrees.json";
import plats from "../data/plats.json";
import desserts from "../data/desserts.json";
import MenuDelice from "../composants/MenuDelice";

function Delice(){
    return(
      <main className="menu">
        <section className="menu__section">
          <img className="menu__img" src={delice} alt="Delice"/>
  
          <div className="menu__group">
            <div className="menu__content">
              <h2 className="menu__titre">Le délice des sens</h2>
              <div className="heart">
                <i className="fa-regular fa-heart heart__unchecked"></i>
                <i className="fa-solid fa-heart heart__checked"></i>
              </div>
            </div>
            
            <div className="menu__articles"> 
                <MenuDelice title="Entrées" items={entrees} />
                <MenuDelice title="Plats" items={plats} />
                <MenuDelice title="Desserts" items={desserts} />
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
export default Delice;