import francaise from "../assets/images/francaise.jpg"

function Francaise(){
    return(
        <main className="menu">
      <section className="menu__section">
        <img src={francaise} alt="la francaise"/>

        <div className="menu__group">
          <div className="menu__content">
            <h2 className="menu__titre">À la française</h2>

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
                    Tartare de poulpe acidulé
                  </h4>
                  <p className="menu__detail">
                    Aux zestes d'orange
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
                    Velouté de légumes d'antan
                  </h4>
                  <p className="menu__detail">
                    Carotte, panais, topinambour
                  </p>
                </div>
                <span className="menu__prix">35€</span>
                <div className="menu__check">
                  <i className="fa-regular fa-circle-check"></i>
                </div>
              </div>

              <div className="menu__menu">
                <div className="menu__cadre">
                  <h4 className="menu__text">Soupe à l'oignon</h4>
                  <p className="menu__detail">
                    Revisitée
                  </p>
                </div>
                <span className="menu__prix"> 20€</span>
                <div className="menu__check">
                  <i className="fa-regular fa-circle-check"></i>
                </div>
              </div>

            </article>

            <article className="menu__article">
              <h3 className="menu__line">Plats</h3>
              <div className="menu__menu">
                <div className="menu__cadre">
                  <h4 className="menu__text">Coquilles Saint-Jacques </h4>
                  <p>Accompagnées d'une purée de panais</p>
                </div>
                <span className="menu__prix"> 40€</span>
                <div className="menu__check">
                  <i className="fa-regular fa-circle-check"></i>
                </div>
              </div>

              <div className="menu__menu">
                <div className="menu__cadre">
                  <h4 className="menu__text">
                    Magret de canard
                  </h4>
                  <p className="menu__detail">
                    Et parmentier de pommes de terre
                  </p>
                </div>
                <span className="menu__prix">35€</span>
                <div className="menu__check">
                  <i className="fa-regular fa-circle-check"></i>
                </div>
              </div>
              <div className="menu__menu ">
                <div className="menu__cadre">
                  <h4 className="menu__text">Pigeonneau d’Ille-et-Vilaine </h4>
                  <p className="menu__detail">Sur son lit de gnocchis aux légumes</p>
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
                <h4 className="menu__text">Pétales de violettes glacés</h4>
                <p className="menu__detail">Et purée de noisettes</p>
              </div>
              <span className="menu__prix">18€</span>
              <div className="menu__check">
                <i className="fa-regular fa-circle-check"></i>
              </div>
            </div>

            <div className="menu__menu">
              <div className="menu__cadre">
                <h4 className="menu__text">
                  Fondant au chocolat
                </h4>
                <p className="menu__detail">
                  Revisité
                </p>
              </div>
              <span className="menu__prix">22€</span>
              <div className="menu__check">
                <i className="fa-regular fa-circle-check"></i>
              </div>
            </div>

            <div className="menu__menu">
              <div className="menu__cadre">
                <h4 className="menu__text">Millefeuille croustillant </h4>
                <p> Myrtilles et pâte d’amande</p>
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

    )
}
export default Francaise;