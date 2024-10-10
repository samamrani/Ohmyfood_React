import "../sass/main.scss";

function Footer(){
    return(
        <footer className="footer">
        <div className="footer__logo">
          <a title="ohmyfood" className="footer__logo" href="#">ohmyfood</a>
        </div>
        <div className="footer__titre">
          <div className="footer__content">
            <i className="fas fa-utensils"></i>
            <a title="Proposer un menu" href="#">Proposer un menu</a>
          </div>
    
          <div className="footer__content">
            <i className="fas fa-hands-helping icon"></i>
            <a title="Devenir Partenaire" href="#">Devenir Partenaire</a>
          </div>
    
          <div className="footer__content">
            <a title="Mentions légales" href="#">Mentions légales</a>
          </div>
    
          <div className="footer__content">
            <a title="Contact" href="mailto:email@example.com">Contact</a>
          </div>
        </div>
      </footer>
    )
}
export default Footer;