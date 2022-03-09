import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Index from "./pages/Index";
import NewProduct from "./pages/NewProduct";
import EditProduct from "./pages/EditProduct";
import SeeProduct from "./pages/SeeProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* //Agregamos el Layout para que todas las rutas sean renderizadas dentro de él */}
        <Route path="/products" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="new" element={<NewProduct />} />
          <Route path="edit/:id" element={<EditProduct />} />
          <Route path=":id" element={<SeeProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
