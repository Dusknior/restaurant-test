import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FormProduct from "../components/FormProduct";

function EditProduct() {
  //Creamos los state donde vamos a almacenar los datos del producto y el spinner
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  //Aplicamos distructuring para extraer los valores del producto
  const { name, description, price } = product;

  const { id } = useParams();

  useEffect(() => {
    //Realizamos la peticion a la API para obtener el producto según el id
    const getProduct = async () => {
      try {
        const url = `http://localhost:4000/products/${id}`;
        const response = await fetch(url);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.log(error);
      }

      setLoading(!loading);
    };
    getProduct();
  }, []);
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Editar Producto</h1>
      <p className="mt-3">
        Utiliza este formulario para{" "}
        <span className="font-bold text-blue-900">
          editar los datos un producto
        </span>
      </p>

      <FormProduct product={product} />
    </>
  );
}

export default EditProduct;
