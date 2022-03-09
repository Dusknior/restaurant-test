import { useState, useEffect } from "react";
import Product from "../components/Product";

function Index() {
  //Creamos los state donde vamos a almacenar los datos de los productos
  const [products, setProducts] = useState([]);

  useEffect(() => {
    //Realizamos la peticion a la API para obtener los productos
    const getProducts = async () => {
      try {
        const url = "http://localhost:4000/products";
        const response = await fetch(url);
        const data = await response.json();

        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, []);

  return (
    <div>
      <h1 className="font-black text-4xl text-blue-900">Productos</h1>
      <p className="mt-3">
        Administra tus{" "}
        <span className="font-bold text-blue-900">productos</span>
      </p>

      <table className="w-full mt-5 table-auto shadow-md bg-white">
        <thead className="bg-blue-900 text-white">
          <tr>
            <th className="p-2">Nombre</th>
            <th className="p-2">Descripción</th>
            <th className="p-2">Precio</th>
            <th className="p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {/* Listamos los productos con un mapeo */}
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Index;
