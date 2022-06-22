import { Routes, Route } from "react-router-dom";
import { HomePage, NotFoundPage, PostForm } from "./pages";
import { AnimeProvider } from "./context/AnimeContext";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <AnimeProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new" element={<PostForm />} />
        <Route path="/animes/:id" element={<PostForm />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Toaster/>
    </AnimeProvider>
  );
};

export default App;
