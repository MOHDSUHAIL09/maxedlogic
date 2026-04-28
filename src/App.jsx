import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './assets/css/main.css';
import './assets/css/bootstrap.min.css';
import './assets/css/jquery-ui.css';
import './assets/css/animate.css';
import './assets/css/magnific-popup.css';
import './assets/css/meanmenu.css';
import './assets/css/nice-select.css';
import ScrollEffects from './components/ScrollEffects';
import Preloader from './Preloader';
import { HelmetProvider } from 'react-helmet-async';

const App = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 200); 
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader/>;
  }



  return (
    
    <div className="page-wrapper">
      <HelmetProvider>
      <Header />
      <ScrollEffects>
        <Outlet />
      </ScrollEffects>
      <Footer />
      </HelmetProvider>
    </div>
  );
};

export default App;