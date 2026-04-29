import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, useLocation } from 'react-router-dom';
import './index.css';
import App from './App.jsx';

import Home from './components/Home.jsx';
import Contact from './Pages/Contact.jsx';
import Service from "./Pages/Service/Service.jsx";
import About from './Pages/About/About.jsx';
import Products from './Pages/Products.jsx';
import Blogs from './Pages/Blogs.jsx';


const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Wrap App with ScrollToTop
const AppWithScroll = () => (
  <>
    <ScrollToTop />
    <App />
  </>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppWithScroll />,
    children: [
      { index: true, element: <Home /> },
      { path: 'contact', element: <Contact /> },
      { path: 'service', element: <Service /> },        
      { path: 'about', element: <About /> },   
      {path: "Products", element: <Products/>},
      {path: "blogs", element: <Blogs/>}
           
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);