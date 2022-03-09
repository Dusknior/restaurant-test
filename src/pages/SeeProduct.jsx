import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

function SeeProduct() {
  //Creamos los state donde vamos a almacenar los datos del producto y el spinner
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  //Aplicamos distructuring para extraer los valores del producto
  const { name, description, price } = product;

  const { id } = useParams();

  useEffect(() => {
    //Realizamos la peticion a la API para obtener el producto seleccionado
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

  return loading ? (
    <Spinner />
  ) : Object.keys(product).length === 0 ? (
    <p className="font-black text-5xl text-blue-900">No hay resultados</p>
  ) : (
    <div>
      <h1 className="font-black text-5xl text-blue-900">
        Ver Producto: <span className="text-gray-700">{name}</span>
      </h1>
      <p className="text-xl mt-5">Información del Producto</p>

      {name && (
        <p className="text-3xl text-gray-600 mt-8">
          <span className="text-gray-800 font-bold uppercase">Nombre:</span>{" "}
          {name}
        </p>
      )}
      {description && (
        <p className="text-xl text-gray-600 mt-4">
          <span className="text-gray-800 font-bold uppercase">
            Descripción:
          </span>{" "}
          {description}
        </p>
      )}
      {price && (
        <p className="text-xl text-gray-600 mt-4">
          <span className="text-gray-800 font-bold uppercase">Precio:</span>{" "}
          {price}
        </p>
      )}
    </div>
  );
}

export default SeeProduct;
