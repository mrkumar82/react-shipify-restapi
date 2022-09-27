import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import NavBar from './Components/NavBar';
import Cart from './Components/Cart';
import NavMenu from './Components/NavMenu';
import { Container } from '@chakra-ui/react';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <Router>
      <NavBar />
      <NavMenu />
      <Cart />

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/product/:handle' element={<ProductPage />} />
        <Route exact path='/about-us' element={<AboutUs />} />
        <Route exact path='/contact-us' element={<ContactUs />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
