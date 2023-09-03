import '../styles/portfolio.css';

function Portfolio() {
    function aquatics() {
        window.open('https://reefstore.netlify.app//', '_blank');
    }

    function surf() {
        window.open('https://hawaiisurf.netlify.app/', '_blank');
    }

    function dharma() {
        window.open('https://dharmapasteleria.netlify.app/', '_blank');
    }

    return (
        <>
        <div id='portfolioBackground'>
          <h1 id='servicesTitle' className='title'><span className='titleBlue'>Our</span>Work</h1>
          <div className='infoBlocks'>
            <div className='infoBlock'>
                <h2 id='subtitlePortfolio' className='subTitlePage'><span className='titleBlue'>What</span>We Have Created</h2>
                <div className='contentWrapperPortfolio'>
                    <div className='contentBlockImgPortfolio'>
                        <img className='portfolioMockupImg' src='https://res.cloudinary.com/dvmw658s9/image/upload/v1693713116/Sierra%20Nevada%20Web%20Designs/keitflfmcmhdzd9zne2u.png'/>
                        <button className='portfolioButton' onClick={aquatics}>Visit Site</button>
                    </div>
                    <div className='contentBlockTextPortfolio'>
                        <h2 className='subTitlePage'><span className='titleBlue'>JF</span>Aquatics</h2>
                        <p className='infoParaLarge'>A reefing e-commerce site selling fish, corals, and tanks. Firebase was used as a back-end to store all of the products. The site is integrated with Paypal to easily conduct e-commerce.</p>
                    </div>
                </div>
                <div className='contentWrapperPortfolio'>
                    <div className='contentBlockTextPortfolio'>
                        <h2 className='subTitlePage'><span className='titleBlue'>Hawai'i Surf</span>Surf</h2>
                        <p className='infoParaLarge'>A surf and weather forecast application centered around Hawai'i. The site draws buoy data from around the islands and makes use of an algorithm to predict wave heights and conditions. Users can login and add their favorite surf spots to their account to track.</p>
                    </div>
                    <div className='contentBlockImgPortfolio'>
                        <img className='portfolioMockupImg' src='https://res.cloudinary.com/dvmw658s9/image/upload/v1693713117/Sierra%20Nevada%20Web%20Designs/rozlfcmjmwalnfhlrgje.png'/>
                        <button className='portfolioButton' onClick={surf}>Visit Site</button>
                    </div>
                </div>
                <div className='contentWrapperPortfolio'>
                    <div className='contentBlockImgPortfolio'>
                        <img className='portfolioMockupImg' src='https://res.cloudinary.com/dvmw658s9/image/upload/v1693713117/Sierra%20Nevada%20Web%20Designs/tebqfmvckgun9kpgyi1b.png'/>
                        <button className='portfolioButton' onClick={dharma}>Visit Site</button>
                    </div>
                    <div className='contentBlockTextPortfolio'>
                        <h2 className='subTitlePage'><span className='titleBlue'>Dharma</span>Pastelería</h2>
                        <p className='infoParaLarge'>A pastry and bakery business in Buenos Aires, Argentina. Firebase was incorporated as a back-end along with a client-side admin page to easily update products. The site is also integrated with Paypal.</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
        </>
    )
}

export default Portfolio;