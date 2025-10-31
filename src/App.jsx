import React, { Suspense, lazy, memo, useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import FadeInSection from './components/FadeInSection/FadeInSection';

const Hero = lazy(() => import('./components/Hero/Hero'));
const OurServices = lazy(() => import('./components/OurServices/OurServices'));
const AboutUs = lazy(() => import('./components/AboutUs/AboutUs'));
const Products = lazy(() => import('./components/Products/Products'));
const Expertise = lazy(() => import('./components/Expertise/Expertise'));
const Conclusion = lazy(() => import('./components/Conclusion/Conclusion'));
const OurClient = lazy(() => import('./components/OurClient/OurClient'));
const Footer = lazy(() => import('./components/Footer/Footer'));
const Procurement = lazy(() => import('./Pages/Procurement/Procurement'));
const Logistics = lazy(() => import('./Pages/Logistics/Logistics'));
const OurServicesPage = lazy(() =>
  import('./Pages/OurServicesPage/OurServicesPage')
);
const ContactUs = lazy(() => import('./Pages/ContactUs/ContactUs'));

const MemoizedNavbar = memo(Navbar);
const MemoizedFadeInSection = memo(FadeInSection);

const App = () => {
  // const location = useLocation();
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <MemoizedNavbar />
      <Suspense
        fallback={
          <div className='loading-container'>
            <div className='loading-spinner'></div>
            <p>Loading...</p>
          </div>
        }
      >
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Hero />
                {isDesktop ? (
                  <MemoizedFadeInSection>
                    <OurServices />
                  </MemoizedFadeInSection>
                ) : (
                  <OurServices />
                )}
                <MemoizedFadeInSection>
                  <Expertise />
                </MemoizedFadeInSection>
                <MemoizedFadeInSection>
                  <Products />
                </MemoizedFadeInSection>
                <MemoizedFadeInSection>
                  <Conclusion />
                </MemoizedFadeInSection>
                <MemoizedFadeInSection>
                  <OurClient />
                </MemoizedFadeInSection>
              </>
            }
          />
          <Route path='/About-Us' element={<AboutUs />} />
          <Route path='/Procurement' element={<Procurement />} />
          <Route path='/Logistics-Hauling-Services' element={<Logistics />} />
          <Route path='/Our-Services' element={<OurServicesPage />} />
          <Route path='/Contact-Us' element={<ContactUs />} />
        </Routes>
        <MemoizedFadeInSection>
          <Footer />
        </MemoizedFadeInSection>
      </Suspense>
    </div>
  );
};

export default App;

