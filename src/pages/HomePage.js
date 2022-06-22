import { useAnime } from "../context/AnimeContext";
import {VscEmptyWindow} from 'react-icons/vsc';
import {Link} from 'react-router-dom';
import { AnimeCard } from "../components/AnimeCard";
import "../styles/HomePage.css"

export function HomePage() {
  const { animes } = useAnime();

  if (animes.length === 0) return (
    <div>
        <VscEmptyWindow/>
        <h3>No hay animes añadidos aún</h3>
    </div>
  )

  return (
    <div className="home__container">
        <Link to="/new">Crear nuevo anime</Link>
      <section className="home-animes__container">
      <h2>Animes</h2>
      <div className="home-card-animes">
        {animes.map((anime) => (
          <AnimeCard anime={anime} key={anime.id}/>
        ))}
      </div>
      </section>
    </div>
  );
}
