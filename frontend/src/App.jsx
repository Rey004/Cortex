import React from 'react'
import { createBrowserRouter, RouterProvider  } from 'react-router-dom'
import './App.css'

// Layout - Outlet
import Layout from './layout/layout.jsx'

// Pages
import Error from './pages/Error.jsx'
import Home from './pages/Home.jsx'
import Generator from './pages/Generator.jsx'
import Gallery from './pages/Gallery.jsx'

const Router= createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error/>,
    children: [
      {index: true, element: <Home />},
      {path: 'generator', element: <Generator />},
      {path: 'gallery', element: <Gallery />}
    ]
  }
]);

function App() {

  return <RouterProvider router={Router} />;
}

export default App
