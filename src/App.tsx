import './styles/App.css';
import Navbar from './components/navbar';
import Home from './components/Home';
import Footer from './components/Footer';

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
    <Home/>
    <Footer/>
    </>
  );
}

export default App;
