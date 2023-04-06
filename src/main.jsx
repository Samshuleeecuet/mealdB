import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import TopSection from './Components/TopSection/TopSection';
import Foods from './Components/Foods/Foods';
import FoodDetails from './Components/FoodDetails/FoodDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: 'foods',
        element:<Foods></Foods>,
        loader: ()=> fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
