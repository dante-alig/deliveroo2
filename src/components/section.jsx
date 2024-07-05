import Obj from "./obj";

const Section = ({ categories, panier, setPanier, total, setTotal }) => {
  return (
    <section>
      {categories.map((elem, index) => {
        return (
          <div key={index}>
            <h2>{elem.name}</h2>
            <div className="boxcol">
              {elem.meals.map((elem2) => {
                return (
                  <div key={elem2.id} className="col">
                    <Obj
                      elem2={elem2}
                      panier={panier}
                      setPanier={setPanier}
                      total={total}
                      setTotal={setTotal}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Section;
