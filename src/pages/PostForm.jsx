import { Formik, Form, Field } from "formik";
import { useAnime } from "../context/AnimeContext";
import { useNavigate } from "react-router-dom";

export const PostForm = () => {
    const  { createAnime } = useAnime();
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          description: "",
          front_image: "",
          sample_image: "",
          category_id: "",
        }}
        onSubmit = {(values,actions) => {
            createAnime(values);
        }}
      >
        {({handleSubmit}) => (
          <Form onSubmit={handleSubmit}>
            <Field name="name" placeholder="nombre" />
            <Field name="description" placeholder="descripción" />
            <Field name="front_image" placeholder="imagen principal" />
            <Field name="sample_image" placeholder="imagen secundaria" />
            <Field name="category_id" placeholder="categoría" />
            <button type="submit"> Guardar </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
