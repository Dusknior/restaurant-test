import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import Error from "./Error";
import { useNavigate } from "react-router-dom";

function FormProduct({ product }) {
  //Creamos el schema de validación
  const form = true;
  const navigate = useNavigate();

  //Añadimos todos los paramentros que necesitamos para validar el formulario
  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .min(2, "El nombre es muy corto")
      .max(26, "El nombre es muy largo")
      .required("El nombre del producto es obligatorio"),
    description: yup
      .string()
      .min(3, "La descripción de la descripción es muy corto")
      .max(100, "La descripción de la descripción es muy largo")
      .required("La descripción de la descripción es obligatorio"),
    price: yup
      .number()
      .positive("El precio no es válido")
      .integer("El precio no es válido")
      .min(1, "El precio es muy bajo")
      .max(1000000, "El precio es muy alto")
      .typeError("El precio no es válido")
      .required("El precio es obligatorio"),
  });

  //Luego almacenamos esos valores en el archivo db.json
  const handleSubmit = async (values) => {
    try {
      const url = "http://localhost:4000/products";

      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();

      navigate("/products");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto">
      <h1 className="text-gray-600 font-bold text-2xl uppercase text-center">
        {product?.name ? "Editar Producto" : "Agregar Producto"}
      </h1>

      <Formik
        //Setteamos los valores iniciales y validamos con el schema de validación
        initialValues={{
          name: product?.name ?? "",
          description: product?.description ?? "",
          price: product?.price ?? "",
        }}
        enableReinitialize={true}
        onSubmit={async (values, { resetForm }) => {
          handleSubmit(values);
          resetForm();
        }}
        validationSchema={validationSchema}
      >
        {/* Escuchamos los cambios en los valores del formulario para mostrar los
        errores */}
        {({ errors, touched }) => {
          return (
            <Form className="mt-6">
              <div className="mb-4">
                <label className="text-gray-800 font-bold" htmlFor="name">
                  Nombre
                </label>
                <Field
                  type="text"
                  className="mt-2 block w-full p-3 bg-gray-50"
                  id="name"
                  placeholder="Nombre del Producto"
                  name="name"
                />

                {errors.name && touched.name ? (
                  <Error>
                    <p>{errors.name}</p>
                  </Error>
                ) : null}
              </div>
              <div className="mb-4">
                <label
                  className="text-gray-800 font-bold"
                  htmlFor="description"
                >
                  Descripción
                </label>
                <Field
                  as="textarea"
                  type="text"
                  className="mt-2 block w-full p-3 bg-gray-50"
                  id="description"
                  placeholder="Descripción del Producto"
                  name="description"
                />

                {errors.description && touched.description ? (
                  <Error>
                    <p>{errors.description}</p>
                  </Error>
                ) : null}
              </div>

              <div className="mb-4">
                <label className="text-gray-800 font-bold" htmlFor="price">
                  Precio
                </label>
                <Field
                  type="number"
                  className="mt-2 block w-full p-3 bg-gray-50"
                  id="price"
                  placeholder="Precio del Producto"
                  name="price"
                />

                {errors.price && touched.price ? (
                  <Error>
                    <p>{errors.price}</p>
                  </Error>
                ) : null}
              </div>
              <input
                type="submit"
                value={product?.name ? "Editar Producto" : "Agregar Producto"}
                className="mt-5 w-full bg-blue-800 hover:bg-blue-300 p-3 text-white uppercase font-bold text-lg rounded-md"
              />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

FormProduct.defaultProps = {};

export default FormProduct;
