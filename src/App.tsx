import './styles/App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Services from './components/Services';
import Contact from './components/Contact';
import About from './components/About';
import Portfolio from './components/Portfolio';
import PageNotFound from './components/PageNotFound';

import { Routes, Route, Navigate } from 'react-router-dom';

function App() {

  window.addEventListener('scroll', fadeIn);

  function fadeIn() {
    const fade = document.querySelectorAll('.fade')

    for (let i = 0; i < fade.length; i++) {
      const windowheight = window.innerHeight;
      const revealtop = fade[i].getBoundingClientRect().top;
      const revealpoint = 10;

      if (revealtop < windowheight - revealpoint) {
        fade[i].classList.add('active');
      } else {
        fade[i].classList.remove('active');
      }
    }
  } 

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={ <Home/> }/>
      <Route path='/about' element={ <About/> }/>
      <Route path='/services' element={ <Services/> }/>
      <Route path='/portfolio' element={ <Portfolio/> }/>
      <Route path='/contact' element={ <Contact/> }/>
      <Route path="/404" element={<PageNotFound/>}/>
      <Route path="*" element={<Navigate to="/404"/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App;
