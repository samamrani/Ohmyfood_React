
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './layouts/Layout';
import Home from './pages/Home';

import "./sass/main.scss";


const routes = createRoutesFromElements(
  <Route path= "/" element={<Layout />} >

    <Route index element= {<Home />} />
   
  </Route>
);

const router = createBrowserRouter(routes);


function App() {

  return (
   <RouterProvider router={router} />
  )
}

export default App
