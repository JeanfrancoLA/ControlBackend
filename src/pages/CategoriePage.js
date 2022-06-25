import { useCategorie } from "../context/CategoriaContext";
import { VscEmptyWindow } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { CategorieCard } from "../components/CategorieCard";
import "../styles/HomePage.css";

export function CategoriePage() {
  const { categories } = useCategorie();

  const renderCategorie = () => {
    if (categories.length === 0)
      return (
        <div>
          <VscEmptyWindow />
          <h3>No hay categorias añadidos aún</h3>
        </div>
      );

    return (
      <div className="home__container">
        <section className="home-animes__container">
          <h2>Animes</h2>
          <div className="home-card-animes">
            {categories.map((categorie) => (
              <CategorieCard anime={categorie} key={categorie.id} />
            ))}
          </div>
        </section>
      </div>
    );
  };

  return (
    <main>
      <header>
        <Link to="/new">Crear nuevo anime</Link>
      </header>
      {renderCategorie()}
    </main>
  );
}