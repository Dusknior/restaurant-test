import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit, faEye } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Product({ product }) {
  const navigate = useNavigate();

  //Aplicamos distructuring para extraer los valores del producto
  const { name, description, price, id } = product;
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="p-3">{name}</td>
      <td className="p-3">
        <p>{description}</p>
      </td>
      <td className="p-3">${price}</td>
      <td className="p-3 flex items-center">
        <button
          type="button"
          className="bg-yellow-500 hover:bg-yellow-600 block w-full text-white p-2 text-center uppercase font-bold"
          onClick={() => navigate(`/products/${id}`)}
        >
          <FontAwesomeIcon icon={faEye} />
        </button>
        <button
          type="button"
          className="bg-blue-600 ml-2 hover:bg-blue-700 block w-full text-white p-2 text-center uppercase font-bold"
          onClick={() => navigate(`/products/edit/${id}`)}
        >
          <FontAwesomeIcon icon={faEdit} />
        </button>
        <button
          type="button"
          className="bg-red-600 ml-2 hover:bg-red-700  w-full text-white p-2 text-center uppercase font-bold"
        >
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </td>
    </tr>
  );
}

export default Product;
