// import React from "react";

function MenuDelice({title, items}){
    return (
        <div className="menu__articles"> 
              <article className="menu__article">
                <h3 className="menu__line">{title}</h3>
                {items.map((item, index)=>(
                <div className="menu__menu" key={index}>
                  <div className="menu__cadre">
                    <h4 className="menu__text">
                      {item.text}
                    </h4>
                    <p className="menu__detail">
                      
                      {item.detail}
                    </p>
                  </div>
                  <span className="menu__prix">{item.prix}</span>
                  <div className="menu__check">
                    <i className="fa-regular fa-circle-check" aria-label="Item validé"></i>
                  </div>
                </div>
                ))  }
              </article>
        </div>
    );
};

export default MenuDelice;