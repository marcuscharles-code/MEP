import './App.css';
import 'leaflet/dist/leaflet.css';
import Layout from './components/Layout';
import { LoadTop, PageTop } from './components/Top';
import { TitleProvider } from './helpers/TitleContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from './components/Loader';
import { HelmetProvider } from 'react-helmet-async';


// Lazy loading routes
const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));
const PageNotFound = lazy(() => import('./pages/PageNotFound'));
const Service = lazy(() => import('./routes/Service'));
const ServiceDetailsRoute = lazy(() => import('./routes/ServiceDetailsRoute'));
const Contact = lazy(() => import('./routes/Contact'));

function App() {
  return (
    <HelmetProvider>
      <TitleProvider>
        <Router>


          <LoadTop />
          <Layout>
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path="*" element={<PageNotFound />} />
                <Route path='/about' element={<About />} />
                <Route path='/service' element={<Service />} />
                <Route path="/service/services/:serviceId" element={<ServiceDetailsRoute />} />
                <Route path='/contact' element={<Contact />} />
              </Routes>
            </Suspense>
          </Layout>
          <PageTop />
        </Router>
      </TitleProvider>
    </HelmetProvider>
  );
}

export default App;