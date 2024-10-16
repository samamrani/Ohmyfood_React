import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import Layout from './layouts/Layout';
import Home from './pages/Home';
import Restaurants from './pages/Restaurantst'; 
import "./sass/main.scss";

const routes = createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="/restaurants" element={<Restaurants />} />
    <Route path="/restaurants/:id" element={<Restaurants /> } />
    
  
  </Route>
);

const router = createBrowserRouter(routes);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
