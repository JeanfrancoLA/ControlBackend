import { useState, createContext, useContext, useEffect } from "react";
import {
  getCategoriesRequests,
  createCategoriesRequest,
  deleteCategoriesRequest,
  getCategorieRequest,
  updateCategorieRequest,
} from "../api/categories";

const categorieContext = createContext();

export const useCategorie = () => {
  const context = useContext(categorieContext);
  return context;
};


export const AnimeProvider = ({ children }) => {
  const [animes, setAnimes] = useState([]);

  // useEffect(() => {
  //   (async () => {
  //     const response = await getAnimeRequest();
  //     setAnimes(response.data);
  //   })();
  // }, []);

  const getAnimes = async () => {
    const response = await getCategoriesRequests();
    setAnimes(response.data);
  };

  const createAnime = async (post) => {
    const response = await createCategoriesRequest(post);
    setAnimes([...animes, response.data]);
  };

  const deleteAnime = async (id) => {
    const response = await deleteCategoriesRequest(id);
    if (response.status === 204) {
      setAnimes(animes.filter((anime) => anime.id !== id));
    }
  };

  const getAnime = async (id) => {
    const response = await getCategorieRequest(id);
    return response.data;
  };

  const updateAnime = async (id, anime) => {
    const response = await updateCategorieRequest(id, anime);
    setAnimes(animes.map((anime) => (anime.id === id ? response.data : anime)));
  };

  useEffect(() => {
    getAnimes();
  }, []);

  return (
    <categorieContext.Provider
      value={{
        animes,
        // getAnimes,
        createAnime,
        deleteAnime,
        getAnime,
        updateAnime,
      }}
    >
      {children}
    </categorieContext.Provider>
  );
};