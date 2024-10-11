import palette from "../assets/images/palette_du_gout.jpg"

function Palette(){
    return(
        <main className="menu">
      <section className="menu__section">
        <img className="menu__img" src={palette} alt="la palette du gout"/>
     

        <div className="menu__group">
          <div className="menu__content">

            <h2 className="menu__titre">La palette du goût</h2>

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
                    Fricassée d'escargots
                  </h4>
                  <p className="menu__detail">
                    Au piment d'Espelette
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
                    Foie gras de canard mi-cuit
                  </h4>
                  <p className="menu__detail">
                    Et ses copeaux de truffe noire
                  </p>
                </div>
                <span className="menu__prix">35€</span>
                <div className="menu__check">
                  <i className="fa-regular fa-circle-check"></i>
                </div>
              </div>

              <div className="menu__menu">
                <div className="menu__cadre">
                  <h4 className="menu__text">Œuf au plat</h4>
                  <p className="menu__detail">
                    Assaisonné à la truffe sur lit de caviar
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
                  <h4 className="menu__text">Filet de bœuf aux herbes</h4>
                  <p className="menu__detail">
                    Accompagné de sa ribambelle de légumes
                  </p>
                </div>
                <span className="menu__prix"> 40€</span>
                <div className="menu__check">
                  <i className="fa-regular fa-circle-check"></i>
                </div>
              </div>

              <div className="menu__menu">
                <div className="menu__cadre">
                  <h4 className="menu__text">
                    Parmentier de queue de bœuf
                  </h4>
                  <p className="menu__detail">
                    À la truffe noire sur sa purée de panais
                  </p>
                </div>
                <span className="menu__prix">35€</span>
                <div className="menu__check">
                  <i className="fa-regular fa-circle-check"></i>
                </div>
              </div>
              <div className="menu__menu ">
                <div className="menu__cadre">
                  <h4 className="menu__text">Filet de turbot</h4>
                  <p className="menu__detail">Aux agrumes</p>
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
                <h4 className="menu__text">Paris-Brest</h4>
                <p className="menu__detail">Revisité</p>
              </div>
              <span className="menu__prix">18€</span>
              <div className="menu__check">
                <i className="fa-regular fa-circle-check"></i>
              </div>
            </div>

            <div className="menu__menu">
              <div className="menu__cadre">
                <h4 className="menu__text">
                  Macaron au chocolat d'exception
                </h4>
                <p className="menu__detail">
                  Et glace à la vanille de Madagascar
                </p>
              </div>
              <span className="menu__prix">22€</span>
              <div className="menu__check">
                <i className="fa-regular fa-circle-check"></i>
              </div>
            </div>

            <div className="menu__menu">
              <div className="menu__cadre">
                <h4 className="menu__text">Mousse au chocolat</h4>
                <p className="menu__detail">
                  Au piment d'Espelette et à la truffe noire
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
    )
}
export default Palette;