import './styles/App.css';
import Navbar from './components/navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Services from './components/Services';
import Contact from './components/Contact';

import { Routes, Route } from 'react-router-dom';

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
      <Route path='/' element={ <Home/> }></Route>
      <Route path='/services' element={ <Services/> }></Route>
      <Route path='/contact' element={ <Contact/> }></Route>
    </Routes>
    <Footer/>
    </>
  )
}

export default App;
