import { useState, createContext, useContext, useEffect } from "react";
import { getAnimesRequests, createAnimesRequests, deleteAnimesRequests } from "../api/animes";

const animeContext = createContext();

export const useAnime = () => {
  const context = useContext(animeContext);
  return context;
};

export const AnimeProvider = ({ children }) => {
  const [animes, setAnimes] = useState([]);

  const getAnimes = async () => {
    const response = await getAnimesRequests();
    setAnimes(response.data)
  };
  const createAnime = async (post) => {
     const response = await createAnimesRequests(post);
     setAnimes([...animes, response.data])
    
  };

  const deleteAnime = async (id) => {
    const response = await deleteAnimesRequests(id);
    if (response.status === 204) {
      setAnimes(animes.filter((anime) => anime.id !== id));
    }
  };

  useEffect(() => {
    getAnimes();
  }, []);

  return (
    <animeContext.Provider value={{ animes, getAnimes ,createAnime, deleteAnime }}>
      {children}
    </animeContext.Provider>
  );
};
