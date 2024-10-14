import { Link } from 'react-router-dom';
import palete from "../assets/images/palette_du_gout.jpg";
import gout from "../assets/images/palette_du_gout.jpg";
import enchantee from "../assets/images/palette_du_gout.jpg";
import delice from "../assets/images/palette_du_gout.jpg";

function Resto() {
    const groupes = [
        { link: "/palette-du-gout", src: palete, titre: "La palette du goût", ville: "Ménilmontant" },
        { link: "/ala-francaise", src: gout, titre: "À la française", ville: "Cité Rouge" },
        { link: "/la-note-enchantee", src: enchantee, titre: "La note enchantée", ville: "Folie-Méricourt" },
        { link: "/le-delice-des-sens", src: delice, titre: "Le délice des sens", ville: "Folie-Méricourt" }
    ];

    return (
        <section className="resto">
            <h2 className="resto__menu">Restaurants</h2>

            <div className="resto__groupe">
                {groupes.map((groupe, index) => (
                    <article className="resto__gout" key={index}>
                        <Link title={groupe.titre} to={groupe.link}>
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
                                    <div className="heart">
                                        <i className="fa-regular fa-heart heart__unchecked"></i>
                                        <i className="fa-solid fa-heart heart__checked"></i>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Resto;
