import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import logo from "./assets/deliveroo.svg";
import Section from "../../section";
import Panier from "./components/panier";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
library.add(faStar, faPlus, faMinus);

function App() {
  const [loading, setLoading] = useState(true);
  const [restoInfos, setRestoInfos] = useState();
  const [categories, setCategories] = useState([]);
  const [panier, setPanier] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3200/");
        const filteredCat = response.data.categories.filter(
          (cat) => cat.meals.length > 0
        );
        setRestoInfos(response.data.restaurant);
        setCategories(filteredCat);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return loading ? (
    <main>
      <p>Loading...</p>
    </main>
  ) : (
    <>
      {/* -----------------HEADER----------------- */}
      <header>
        <div className="container">
          <img src={logo} alt="logo" />
        </div>
      </header>
      <main>
        {/* -----------------PRESENTATION----------------- */}
        <div className="box-pres">
          <div className="pres">
            <div>
              <h1>{restoInfos.name}</h1>
              <p>{restoInfos.description}</p>
            </div>
            <div>
              <img src={restoInfos.picture} alt="" />
            </div>
          </div>
        </div>

        {/* -----------------SECTION----------------- */}

        <div className="big-box">
          <Section
            categories={categories}
            panier={panier}
            setPanier={setPanier}
            total={total}
            setTotal={setTotal}
          />

          {/* -----------------PANIER----------------- */}
          <Panier
            panier={panier}
            setPanier={setPanier}
            total={total}
            setTotal={setTotal}
          />
        </div>
      </main>
    </>
  );
}

export default App;
