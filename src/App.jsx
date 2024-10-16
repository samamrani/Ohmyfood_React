
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import Layout from './layouts/Layout';
import Home from './pages/Home';
import Restaurants from './pages/Restaurants'; 
import "./sass/main.scss";

const routes = createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="/restaurants" element={<Restaurants />} />
    <Route path="/restaurants/:id" element={<Restaurants /> } />
    
  
  </Route>
);

// const router = createBrowserRouter(routes);
const router = createBrowserRouter(routes, { basename: '/Ohmyfood_React' });
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
