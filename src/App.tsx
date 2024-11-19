import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import ContactUs from './pages/Contact';
import Business from './pages/business';
import Navbar from './components/header';
import Footer from './components/footer';
import NewsCenter from './pages/newsCenter/news';
import NewsDetailPage from './pages/newsCenter/NewsDetails';

const NotFound = () => <div>404 - Page Not Found</div>;

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/business" element={<Business />} />
          <Route path="/news-center" element={<NewsCenter />} /> 
          <Route path="/news/:id" element={<NewsDetailPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
