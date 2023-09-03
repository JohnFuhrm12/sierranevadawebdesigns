import '../styles/home.css';
import { Link } from 'react-router-dom';

function Home() {

    return (
        <>
        <div id='topContent'>
            <div id='titleWrapper'>
            <h1 id='title'>Web Design & Development For Small Businesses</h1>
            <Link to='/contact' id='contactButtonTitle'>Work With Us</Link>
            </div>
            <img id='mockup' src='https://res.cloudinary.com/dvmw658s9/image/upload/v1693713116/Sierra%20Nevada%20Web%20Designs/keitflfmcmhdzd9zne2u.png' alt='Display Site'/>
        </div>
        <div id='buffer'></div>
        <svg id='wave' viewBox="0 0 500 200">
            <path d="M 0 30 C 150 100 280 0 500 20 L 500 0 L 0 0" fill="rgb(0, 0, 0)"></path>
        </svg>
        <div className='fade' id='aboutContent'>
            <h2 className='subTitle'><span className='subTitleBlue'>Our</span> Mission</h2>
            <p className='infoPara'>We create fully responsive, personalized, and 100% hand coded websites for small businesses in and outside of the United States. Our goal is to create a beautiful and optimized website that will bring more traffic, and customers, to your business.</p>
        </div>
        <div className='fade' id='offerContent'>
            <h2 className='subTitle'><span className='subTitleBlue'>What</span> You Get</h2>
            <p className='infoPara'>You will recieve a completely handcoded and personalized website that is fully responsive and optimized, no website builders. You are taken through the design process and will be able to make as many changes and improvements as you would like before, during, and even the first month after launch. Websites are available in English, Spanish, or both! </p>
            <p className='infoPara'>We stay in contact and walk you through domains, hosting, and maintenance, and we only deliver if you are 100% satisfied with your site.</p>
            <div id='homePortfolioWrapper'>
                <img id='surfMockup' className='mockupPortfolio' src='https://res.cloudinary.com/dvmw658s9/image/upload/v1693713117/Sierra%20Nevada%20Web%20Designs/rozlfcmjmwalnfhlrgje.png' alt='Hawaii Surf Site'/>
                <img className='mockupPortfolio' src='https://res.cloudinary.com/dvmw658s9/image/upload/v1693713116/Sierra%20Nevada%20Web%20Designs/keitflfmcmhdzd9zne2u.png' alt='Reef Supplies Site'/>
                <img className='mockupPortfolio' src='https://res.cloudinary.com/dvmw658s9/image/upload/v1693713117/Sierra%20Nevada%20Web%20Designs/tebqfmvckgun9kpgyi1b.png' alt='Pastry Site'/>
            </div>
            <Link to='/portfolio' id='portfolioButton'>View Our Portfolio</Link>
        </div>
        </>
    );
}

export default Home;