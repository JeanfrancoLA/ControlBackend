import { useState, createContext, useContext, useEffect } from "react";
import { getAnimesRequests, createAnimesRequests } from "../api/animes";

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

  useEffect(() => {
    getAnimes();
  }, []);

  return (
    <animeContext.Provider value={{ animes, getAnimes ,createAnime }}>
      {children}
    </animeContext.Provider>
  );
};
