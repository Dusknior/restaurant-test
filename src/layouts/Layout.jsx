import { Outlet, Link, useLocation } from "react-router-dom";

function Layout() {
  const location = useLocation();

  //Nos ubicamos sobre la ruta actual
  const urlActual = location.pathname;

  return (
    <div className="md:flex md:min-h-screen">
      <div className="md:w-1/4 bg-blue-900 px-10 py-10">
        <h2 className="text-4xl font-black text-center text-white">
          Restaurante de Jose
        </h2>
        <nav className="mt-10 ">
          <Link
            className={`${
              urlActual === "/products" ? "text-blue-300" : "text-white"
            } text-white text-2xl block mt-2 hover:text-blue-300`}
            to="/products"
          >
            Productos
          </Link>
          <Link
            className={`${
              urlActual === "/products/new" ? "text-blue-300" : "text-white"
            } text-white text-2xl block mt-2 hover:text-blue-300`}
            to="/products/new"
          >
            Nuevo Producto
          </Link>
        </nav>
      </div>
      <div className="md:w-3/4 p-10 md:h-screen overflow-scroll">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
