import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import Services from './pages/Services.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "services",
        element: <Services />,
      }
    ]
  }
]);


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);