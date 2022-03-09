import FormProduct from "../components/FormProduct";

function NewProduct() {
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Nuevo Producto</h1>
      <p className="mt-3">
        Llena los siguientes campos para{" "}
        <span className="font-bold text-blue-900">registrar un producto</span>
      </p>

      <FormProduct />
    </>
  );
}

export default NewProduct;
