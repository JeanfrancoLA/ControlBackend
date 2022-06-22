import { Routes, Route } from "react-router-dom";
import { HomePage, NotFoundPage, PostForm } from "./pages";
import { AnimeProvider } from "./context/AnimeContext";

const App = () => {
  return (
    <AnimeProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new" element={<PostForm />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AnimeProvider>
  );
};

export default App;
