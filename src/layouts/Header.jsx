import "../sass/main.scss";

function Header(){
    return(
        <header className="header">
        <a href="../index.html" className="header__back">
          <i className="fa-solid fa-light fa-arrow-left"></i>
        </a>
        <a title="ohmyfood" href="../index.html">
          <h1 className="logo">ohmyfood</h1>
        </a>
      </header>
    )
}
export default Header;