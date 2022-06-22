import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useAnime } from "../context/AnimeContext";
import { useNavigate } from "react-router-dom";

export const PostForm = () => {
    const  { createAnime } = useAnime();
    const navigate = useNavigate()
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
        validationSchema={Yup.object({
          name: Yup.string().required("Texto requerido"),
          description: Yup.string().required("Texto requerido"),
          front_image: Yup.string().required("Texto requerido"),
          sample_image: Yup.string().required("Texto requerido"),
          category_id: Yup.string().required("Texto requerido"),
        })}
        onSubmit={ async (values, actions) => {
           await createAnime(values);
            navigate("/");
        }}
      >
        {({handleSubmit}) => (
          <Form onSubmit={handleSubmit}>
            <Field name="name" placeholder="nombre" />
            <ErrorMessage component="p" name="name"/>       

            <Field name="description" placeholder="descripción" />
            <ErrorMessage name="description"/>  

            <Field name="front_image" placeholder="imagen principal" />
            <ErrorMessage name="front_image"/>  

            <Field name="sample_image" placeholder="imagen secundaria" />
            <ErrorMessage name="sample_image"/>  

            <Field name="category_id" placeholder="categoría" />
            <ErrorMessage name="category_id"/>  

            <button type="submit"> Guardar </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
