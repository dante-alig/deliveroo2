import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Obj = ({ elem2, panier, setPanier }) => {
  return (
    <>
      <div
        onClick={() => {
          const newPanier = [...panier];
          const find = newPanier.find((find) => find.title === elem2.title);
          const findIndex = newPanier.findIndex(
            (find) => find.title === elem2.title
          );
          if (!find) {
            newPanier.push({ nbr: 1, title: elem2.title, price: elem2.price });
            setPanier(newPanier);
          } else {
            newPanier[findIndex].nbr++;
            setPanier(newPanier);
          }
        }}
      >
        <h3>{elem2.title}</h3>
        {elem2.description && <p className="cut">{elem2.description}</p>}
        <p>{elem2.price.replace(".", ",")}€</p>
        <div>
          {elem2.popular === true && (
            <p>
              <FontAwesomeIcon className="star" icon="star" />
              popular
            </p>
          )}
        </div>
      </div>

      <div>
        <div>{elem2.picture && <img src={elem2.picture} alt="visuel" />}</div>
      </div>
    </>
  );
};

export default Obj;
