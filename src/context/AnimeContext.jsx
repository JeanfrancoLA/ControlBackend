import { useState, createContext, useContext, useEffect } from "react";
import { getAnimesRequests, createAnimesRequests, deleteAnimesRequests, getAnimeRequests, updateAnimeRequests } from "../api/animes";

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

  const getAnime = async (id) => {
   const response = await getAnimeRequests(id)
    return response.data
  }

  const updateAnime = async (id, post ) => {
    const response = await updateAnimeRequests(id, post)
    console.log(response)
  }

  useEffect(() => {
    getAnimes();
  }, []);

  return (
    <animeContext.Provider 
    value={{ 
      animes, 
      getAnimes, 
      createAnime, 
      deleteAnime, 
      getAnime,
      updateAnime,
      }}>
      {children}
    </animeContext.Provider>
  );
};
