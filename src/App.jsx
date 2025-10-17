import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import OurServices from './components/OurServices/OurServices';
import AboutUs from './components/AboutUs/AboutUs';
import Products from './components/Products/Products';
import Expertise from './components/Expertise/Expertise';
import Conclusion from './components/Conclusion/Conclusion';
import OurClient from './components/OurClient/OurClient';
import Footer from './components/Footer/Footer';
import Procurement from './Pages/Procurement/Procurement';
import Logistics from './Pages/Logistics/Logistics';
import OurServicesPage from './Pages/OurServicesPage/OurServicesPage';
import ContactUs from './Pages/ContactUs/ContactUs';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Hero />
              <OurServices />
              <Expertise />
              <Products />
              <Conclusion />
              <OurClient />
            </>
          }
        />
        <Route path='/About-Us' element={<AboutUs />} />
        <Route path='/Procurement' element={<Procurement />} />
        <Route path='/Logistics-Hauling-Services' element={<Logistics />} />
        <Route path='/Our-Services' element={<OurServicesPage />} />
        <Route path='/Contact-us' element={<ContactUs/>}/>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

