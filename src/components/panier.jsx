import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Panier = ({ panier, setPanier }) => {
  let findIndex = [];
  return (
    <div className="panier">
      {panier.length === 0 ? (
        <>
          <button>Valider mon panier</button>
          <p>Votre panier est vide</p>
        </>
      ) : (
        <>
          <button className="panier-select">Valider mon panier</button>
          {panier.map((objet) => {
            let calculPrice = objet.price * objet.nbr;
            return (
              <div key={objet.title} className="panier-box">
                <div className="panier-title">
                  <div className="panier-counter">
                    <div
                      onClick={() => {
                        findIndex = panier.findIndex(
                          (find) => find.title === objet.title
                        );
                        const newPanier = [...panier];
                        newPanier[findIndex].nbr++;
                        setPanier(newPanier);
                        console.log(findIndex);
                      }}
                    >
                      <FontAwesomeIcon className="plus" icon="plus" />
                    </div>
                    <div>{objet.nbr}</div>
                    <div
                      onClick={() => {
                        const findIndex = panier.findIndex(
                          (find) => find.title === objet.title
                        );
                        const newPanier = [...panier];
                        newPanier[findIndex].nbr--;
                        setPanier(newPanier);
                      }}
                    >
                      <FontAwesomeIcon className="minus" icon="minus" />
                    </div>
                  </div>

                  <div>{objet.title}</div>
                </div>

                <div className="panier-price">{calculPrice}€</div>
              </div>
            );
          })}
          <div className="panier-calcul">
            <div className="calc">
              <p>Sous-total</p>
              <p>Frais de livraison</p>
            </div>
            <div>
              <p>100$</p>
              <p>2€50</p>
            </div>
          </div>
          <div className="panier-total">
            <p>Total</p>
            <p>1000€</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Panier;
