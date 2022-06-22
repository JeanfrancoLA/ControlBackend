import { useAnime } from "../context/AnimeContext";
import {VscEmptyWindow} from 'react-icons/vsc';
import {Link} from 'react-router-dom';
import { PostCard } from "../components/PostCard";
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
    <div>
        <Link to="/new">Crear nuevo anime</Link>
      <h2>HomePage de Gina</h2>
      <div>
        {animes.map((anime) => (
          <PostCard anime={anime} key={anime.id}/>
        ))}
      </div>
    </div>
  );
}
