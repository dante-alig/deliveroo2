import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Panier = ({ panier, setPanier, total, setTotal }) => {
  let findIndex = [];
  let calculeTotal = total + 2.5;
  return (
    <div className="panier">
      {panier.length === 0 ? (
        <>
          <button>Valider mon panier</button>
          <p id="panier-center">Votre panier est vide</p>
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
                        setTotal(total + Number(objet.price));
                      }}
                    >
                      <FontAwesomeIcon className="fa-regular" icon="plus" />
                    </div>
                    <div>{objet.nbr}</div>
                    <div
                      onClick={() => {
                        const findIndex = panier.findIndex(
                          (find) => find.title === objet.title
                        );
                        const newPanier = [...panier];
                        newPanier[findIndex].nbr--;
                        if (objet.nbr <= 0) {
                          newPanier.splice(findIndex, 1);
                          setPanier(newPanier);
                        } else {
                          setPanier(newPanier);
                          setTotal((total = total - Number(objet.price)));
                        }
                      }}
                    >
                      <FontAwesomeIcon className="fa-regular" icon="minus" />
                    </div>
                  </div>

                  <div>{objet.title}</div>
                </div>

                <div className="panier-price">{calculPrice.toFixed(2)}€</div>
              </div>
            );
          })}
          <div className="panier-calcul">
            <div>
              <p>Sous-total</p>
              <p>Frais de livraison</p>
            </div>
            <div>
              <p>{total.toFixed(2)}€</p>
              <p>2.50€</p>
            </div>
          </div>
          <div className="panier-total">
            <h2>Total</h2>
            <p>{calculeTotal.toFixed(2)}€</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Panier;
