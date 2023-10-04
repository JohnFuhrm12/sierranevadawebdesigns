import '../styles/App.css';
import '../styles/portfolio.css';

function Portfolio( {...props} ) {
    function aquatics() {
        window.open('https://reefstore.netlify.app//', '_blank');
    }

    function surf() {
        window.open('https://hawaiisurf.netlify.app/', '_blank');
    }

    function dharma() {
        window.open('https://dharmapasteleria.netlify.app/', '_blank');
    }

    const englishContent = {
        titleBlue: 'Our ',
        title: 'Work',
        subtitlePortfolioBlue: 'What ',
        subtitlePortfolio: 'We Have Created',
        portfolioButton: 'Visit Site',
        portfolioPieceSubtitleBlue1: 'JF ',
        portfolioPieceSubtitle1: 'Aquatics',
        portfolioPieceParagraph1: `A reefing e-commerce site selling fish, corals, and tanks. 
        Firebase was used as a back-end to store all of the products.
        The site is integrated with Paypal to easily conduct e-commerce.`,
        portfolioPieceSubtitleBlue2: `Hawai'i `,
        portfolioPieceSubtitle2: 'Surf',
        portfolioPieceParagraph2: `A surf and weather forecast application centered around Hawai'i. 
        The site draws buoy data from around the islands and makes use of an algorithm to predict wave heights and conditions. 
        Users can login and add their favorite surf spots to their account to track.`,
        portfolioPieceSubtitleBlue3: 'Dharma ',
        portfolioPieceSubtitle3: 'Pastelería',
        portfolioPieceParagraph3: `A pastry and bakery business in Buenos Aires, Argentina. 
        Firebase was incorporated as a back-end along with a client-side admin page to easily update products. 
        The site is also integrated with Paypal.`
    }

    let content = englishContent;

    //á, é, í, ó, ú, ü, ñ, ¿, ¡)

    if (props.language === 'ES') {
        content = {
            titleBlue: 'Nuestro ',
            title: 'Trabajo',
            subtitlePortfolioBlue: 'Lo Que ',
            subtitlePortfolio: 'Hemos Creado',
            portfolioButton: 'Visitar Sitio',
            portfolioPieceSubtitleBlue1: 'JF ',
            portfolioPieceSubtitle1: 'Aquatics',
            portfolioPieceParagraph1: `Un sitio e-commerce que vende peces, corales, y peceras.
            Firebase fue usado como un back-end para guardar todos los productos.
            El sitio está integrado con Paypal para facilitar la venta de productos.`,
            portfolioPieceSubtitleBlue2: `Hawai'i `,
            portfolioPieceSubtitle2: 'Surf',
            portfolioPieceParagraph2: `Una aplicación de surf y pronóstico de clima con un enfoque de Hawai'i.
            El sitio saca data de boyas que flotan alredador de las islas. Un algoritmo predice la altura de las olas y las condiciónes.
            Los usaarios pueden realizar el login y agregar sus sitios de surf favortios a su cuenta para rastrear.`,
            portfolioPieceSubtitleBlue3: 'Dharma ',
            portfolioPieceSubtitle3: 'Pastelería',
            portfolioPieceParagraph3: `Una pastelería que se encuentra en Buenos Aires, Argentina. 
            Firebase fue incorporado como un back-end junto con una página de admin client-side para fácilmente editar y agregar productos.
            El sitio también está incorporado con Paypal.`
        }
    } else {
        content = englishContent;
    }

    return (
        <>
        <div className='background' id='portfolioBackground'>
          <h1 id='servicesTitle' className='pageTitle'><span className='titleColor'>{content.titleBlue}</span>{content.title}</h1>
          </div>
          <div className='infoBlocks'>
            <div className='infoBlock'>
                <h2 id='subtitlePortfolio' className='subTitle'><span className='subTitleColor'>{content.subtitlePortfolioBlue}</span>{content.subtitlePortfolio}</h2>
                <div className='contentWrapperPortfolio'>
                    <div className='contentBlockImgPortfolio'>
                        <img className='portfolioMockupImg' src='https://res.cloudinary.com/dvmw658s9/image/upload/v1693713116/Sierra%20Nevada%20Web%20Designs/keitflfmcmhdzd9zne2u.png'/>
                        <button className='button' onClick={aquatics}>{content.portfolioButton}</button>
                    </div>
                    <div className='contentBlockTextPortfolio'>
                        <h2 className='subTitle'><span className='subTitleColor'>{content.portfolioPieceSubtitleBlue1}</span>{content.portfolioPieceSubtitle1}</h2>
                        <p className='infoParaLarge'>{content.portfolioPieceParagraph1}</p>
                    </div>
                </div>
                <div className='contentWrapperPortfolio'>
                    <div className='contentBlockTextPortfolio'>
                        <h2 className='subTitle'><span className='subTitleColor'>{content.portfolioPieceSubtitleBlue2}</span>{content.portfolioPieceSubtitle2}</h2>
                        <p className='infoParaLarge'>{content.portfolioPieceParagraph2}</p>
                    </div>
                    <div className='contentBlockImgPortfolio'>
                        <img className='portfolioMockupImg' src='https://res.cloudinary.com/dvmw658s9/image/upload/v1693713117/Sierra%20Nevada%20Web%20Designs/rozlfcmjmwalnfhlrgje.png'/>
                        <button className='button' onClick={surf}>{content.portfolioButton}</button>
                    </div>
                </div>
                <div className='contentWrapperPortfolio'>
                    <div className='contentBlockImgPortfolio'>
                        <img className='portfolioMockupImg' src='https://res.cloudinary.com/dvmw658s9/image/upload/v1693713117/Sierra%20Nevada%20Web%20Designs/tebqfmvckgun9kpgyi1b.png'/>
                        <button className='button' onClick={dharma}>{content.portfolioButton}</button>
                    </div>
                    <div className='contentBlockTextPortfolio'>
                        <h2 className='subTitle'><span className='subTitleColor'>{content.portfolioPieceSubtitleBlue3}</span>{content.portfolioPieceSubtitle3}</h2>
                        <p className='infoParaLarge'>{content.portfolioPieceParagraph3}</p>
                    </div>
                </div>
            </div>
          </div>
        </>
    )
}

export default Portfolio;