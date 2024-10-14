function Fonctionnement(){ 

    const groupes = [
        {num:1, texte:"Choisissez un restaurant"},
        {num:2, texte:"Composez votre menu"},
        {num:3, texte:"Dégustez au restaurant"}
    ]
    return(
        <section className="fonctionnement">
          <h3 className="fonctionnement__titre">Fonctionnement</h3>

          <div className="fonctionnement__groupe">
            {groupes.map((groupe, index)=>(
                <div className="fonctionnement__content" key={index}>
                <div className="fonctionnement__rectangle">
                  <div className="fonctionnement__numeros">
                    <span className="fonctionnement__numeros--un">{groupe.num}</span>
                  </div>
                  <div className="fonctionnement__icon">
                    <i className="fas fa-mobile-alt"></i>
                    <p className="fonctionnement__texte">{groupe.texte}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
    )
}
export default Fonctionnement;