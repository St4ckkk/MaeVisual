import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import MyWork from './pages/MyWork.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';


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
        path: "my-work",
        element: <MyWork />,
      },
      {
        path: "contact",
        element: <Contact/>
      }
    ]
  }
]);


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);