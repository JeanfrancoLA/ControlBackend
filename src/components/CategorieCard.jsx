import toast from "react-hot-toast";
import { useCategorie } from "../context/CategoriaContext"; 
import { useNavigate } from "react-router-dom";

export function CategorieCard({ anime }) {
  const { deleteAnime } = useCategorie();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    toast((t) => (
      <div>
        <p>
          Do you want to delete? <strong>{id}</strong>{" "}
        </p>
        <div>
          <button
            onClick={(e) => {
              deleteAnime(id);
              toast.dismiss(t.id);
              window.location.reload();
            }}
          >
          </button>
          <button onClick={(e) => toast.dismiss(t.id)}> Cancel </button>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <div
        className="card-anime"
        onClick={() => navigate(`/animes/${anime.id}`)}
      >
        <h3>{anime.name}</h3>
        <p>{anime.description}</p>
        <button
          className="myButton"
          onClick={(e) => {
            e.stopPropagation();
            handleDelete(anime.id);
          }}
        >
          delete
        </button>
      </div>
    </div>
  );
}