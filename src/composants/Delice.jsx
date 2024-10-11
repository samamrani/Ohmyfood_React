import delice from "../assets/images/delice_des_sens.jpg"

function Delice(){
    return(
      <>
      
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
              <article className="menu__article">
                <h3 className="menu__line">Entrées</h3>
  
                <div className="menu__menu">
                  <div className="menu__cadre">
                    <h4 className="menu__text">
                      Tartare de thon
                    </h4>
                    <p className="menu__detail">
                      Assaisonné au yuzu
                    </p>
                  </div>
                  <span className="menu__prix">25€</span>
                  <div className="menu__check">
                    <i className="fa-regular fa-circle-check"></i>
                  </div>
                </div>
  
                <div className="menu__menu">
                  <div className="menu__cadre">
                    <h4 className="menu__text">
                      Bouchée de homard croustillant
                    </h4>
                    <p className="menu__detail">
                      Et sa farandole de petits légumes
                    </p>
                  </div>
                  <span className="menu__prix">35€</span>
                  <div className="menu__check">
                    <i className="fa-regular fa-circle-check"></i>
                  </div>
                </div>
  
                <div className="menu__menu">
                  <div className="menu__cadre">
                    <h4 className="menu__text">Poulet rôti aux herbes de Provence</h4>
                    <p className="menu__detail">
                      Et sa crème de truffe
                    </p>
                  </div>
                  <span className="menu__prix"> 40€</span>
                  <div className="menu__check">
                    <i className="fa-regular fa-circle-check"></i>
                  </div>
                </div>
              </article>
  
              <article className="menu__article">
                <h3 className="menu__line">Plats</h3>
                <div className="menu__menu">
                  <div className="menu__cadre">
                    <h4 className="menu__text">Poulet rôti aux herbes de Provence </h4>
                    <p className="menu__detail">Et sa crème de truffe </p>
                  </div>
                  <span className="menu__prix"> 40€</span>
                  <div className="menu__check">
                    <i className="fa-regular fa-circle-check"></i>
                  </div>
                </div>
  
                <div className="menu__menu">
                  <div className="menu__cadre">
                    <h4 className="menu__text">
                      Langouste rôtie
                    </h4>
                    <p className="menu__detail">
                      Et ses légumes de saison
                    </p>
                  </div>
                  <span className="menu__prix">35€</span>
                  <div className="menu__check">
                    <i className="fa-regular fa-circle-check"></i>
                  </div>
                </div>
                <div className="menu__menu ">
                  <div className="menu__cadre">
                    <h4 className="menu__text">Côte de bœuf Angus </h4>
                    <p className="menu__detail">Et sa purée de panais</p>
                  </div>
                  <span className="menu__prix">44€</span>
                  <div className="menu__check">
                    <i className="fa-regular fa-circle-check"></i>
                  </div>
                </div>
          
            </article>
  
            <article className="menu__articles">
              <h3 className="menu__line">Desserts</h3>
              <div className="menu__menu">
                <div className="menu__cadre">
                  <h4 className="menu__text">Farandole de desserts</h4>
                  <p className="menu__detail">Du chef</p>
                </div>
                <span className="menu__prix">18€</span>
                <div className="menu__check">
                  <i className="fa-regular fa-circle-check"></i>
                </div>
              </div>
  
              <div className="menu__menu">
                <div className="menu__cadre">
                  <h4 className="menu__text">
                    Crème brulée
                  </h4>
                  <p className="menu__detail">
                    Revisitée
                  </p>
                </div>
                <span className="menu__prix">22€</span>
                <div className="menu__check">
                  <i className="fa-regular fa-circle-check"></i>
                </div>
              </div>
  
              <div className="menu__menu">
                <div className="menu__cadre">
                  <h4 className="menu__text">Tiramisu </h4>
                  <p className="menu__detail">À la noisette
                  </p>
                </div>
                <span className="menu__prix">23€</span>
                <div className="menu__check">
                  <i className="fa-regular fa-circle-check"></i>
                </div>
              </div>
  
            </article>
  
            <div className="reserver">
              <button className="reserver__btn reserver__btn--btn">
                Commander
              </button>
            </div>
          </div>
    </div>
    </section>
    </main>
    </>)
}
export default Delice;