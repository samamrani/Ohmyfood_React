function Localisez(){
    return(

        <section className="section__localisez">
        <div className="localisez">
          <div className="localisez__content">
            <i className="fa-solid fa-location-dot"></i>
          </div>
          <div className="localisez__ville">
            <a title="localisation" href="#">Paris, Belleville</a>
          </div>
        </div>

        <div className="reserver">
          <div className="reserver__content">
            <h2 className="reserver__titre">
              Réservez le menu qui vous convient
            </h2>
            <p className="reserver__texte">
              Découvrez des restaurants d'exception, sélectionnés par nos
              soins.
            </p>
          </div>
          <button className="reserver__btn">Explorer nos restaurants</button>
        </div>
      </section>  
    )
}

export default Localisez;