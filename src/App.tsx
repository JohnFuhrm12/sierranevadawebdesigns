import './styles/App.css';
import Navbar from './components/navbar';

function App() {

  return (
    <>
    <div id='topContent'>
      <Navbar/>
        <div id='titleWrapper'>
          <h1 id='title'>Web Design & Development For Small Businesses</h1>
          <button id='contactButtonTitle'>Work With Us</button>
        </div>
        <img id='mockup' src='https://res.cloudinary.com/dvmw658s9/image/upload/v1693372448/qntzs1n6cyxtwu3ofrql.png' alt='Display Site'/>
    </div>
    <div id='buffer'></div>
    <svg id='wave' viewBox="0 0 500 200">
      <path d="M 0 30 C 150 100 280 0 500 20 L 500 0 L 0 0" fill="rgb(0, 0, 0)"></path>
    </svg>
    </>
  );
}

export default App;
