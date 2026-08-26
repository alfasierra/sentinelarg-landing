import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import DemoForm from './components/DemoForm';
import Footer from './components/Footer';
import ProductBanner from './components/product/ProductBanner';

// Pages
import SentinelArgPage from './pages/SentinelArg';

function App() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [showProductDetails, setShowProductDetails] = useState(false);

  const handleProductLearnMore = () => {
    navigate('/sentinelarg');
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <ToastContainer />
      
      <Routes>
        <Route path="/sentinelarg" element={
          <>
            <Navbar />
            <SentinelArgPage />
            <Footer />
          </>
        } />
        
        <Route path="/" element={
          <>
            <Navbar />
            <main>
              <Hero />
              <ProductBanner onLearnMore={handleProductLearnMore} />
              <Features />
              <About />
              <DemoForm />
            </main>
            <Footer />
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;
