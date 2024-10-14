import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import Layout from './layouts/Layout';
import Home from './pages/Home';
import AlaFrancaise from './pages/ALaFrancaise';
import LaNoteEnchantee from './pages/LaNoteEnchantee';
import LeDeliceDesSens from './pages/LeDeliceDesSens';
import Palette from './pages/Palette';

import "./sass/main.scss";

const routes = createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="/ala-francaise" element={<AlaFrancaise />} />
    <Route path="/la-note-enchantee" element={<LaNoteEnchantee />} />
    <Route path="/le-delice-des-sens" element={<LeDeliceDesSens />} />
    <Route path="/palette" element={<Palette />} />
  </Route>
);

const router = createBrowserRouter(routes);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
