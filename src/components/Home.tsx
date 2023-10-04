import '../styles/App.css';
import '../styles/home.css';
import { Link } from 'react-router-dom';

function Home( {...props} ) {

    const englishContent = {
        title: 'Web Design & Development For Small Businesses',
        contactButton: 'Work With Us',
        introSubtitleBlue: 'Our',
        introSubtitle: ' Mission',
        introParagraph: `We create fully responsive, personalized, and 100% hand coded websites for small businesses in and outside of the United States. 
        Our goal is to create a beautiful and optimized website that will bring more traffic, and customers, to your business.`,
        offerSubtitleBlue: 'What',
        offerSubtitle: ' You Get',
        offerParagraph1: `You will recieve a completely handcoded and personalized website that is fully responsive and optimized, no website builders. 
        You are taken through the design process and will be able to make as many changes and improvements as you would like before, during, and even the first month after launch. 
        Websites are available in English, Spanish, or both!`,
        offerParagraph2: `We stay in contact and walk you through domains, hosting, and maintenance, and we only deliver if you are 100% satisfied with your site.`,
        portfolioButton: 'View Our Portfolio'
    }

    let content = englishContent;

    //á, é, í, ó, ú, ü, ñ, ¿, ¡)

    if (props.language === 'ES') {
        content = {
            title: 'Diseño & Desarollo Web Para Empresas Pequeñas',
            contactButton: 'Trabaja Con Nosotros',
            introSubtitleBlue: 'Nuestra',
            introSubtitle: ' Misión',
            introParagraph: `Nosotros hacemos sitios completamente responsivos, personalizados, y 100% casero para empresas pequeñas dentro y afuera de los Estados Unidos.
            Nuestra meta es crear un sitio hermoso y bien optimizado que atraerá más tráfico, y clientes, a su empresa.`,
            offerSubtitleBlue: 'Lo Que',
            offerSubtitle: ' Recibes',
            offerParagraph1: `Usted recibará un sito completamente personalizado y casero que es completamente responsivo y optimizado, no usamos creadores de sitios. Te acompañamos por el proceso de diseño y usted puede realizar todos los cambios que quiere, antes, durante, y incluso después del primer mes de lanzamiento. 
            ¡Podemos hacer su sitio en Inglés, Español, o en ambos idiomas!`,
            offerParagraph2: `Nosotros mantenemos en contacto y le acompañamos por el proceso de dominios, alojamiento de su sitio, y mantenimiento, y solamente le entregamos su sitio si queda 100% satisfescho con el resultado.`,
            portfolioButton: 'Ver Nuestros Sitios'
        }
    } else {
        content = englishContent;
    }

    return (
        <>
        <div id='topBackground'>
            <div id='topContent'>
                <div id='titleWrapper'>
                <h1 id='title'>{content.title}</h1>
                <Link to='/contact' className='button' id='contactButtonTitle'>{content.contactButton}</Link>
                </div>
            </div>
        </div>
        <div className='fade' id='aboutContent'>
            <h2 className='subTitle'><span className='subTitleColor'>{content.introSubtitleBlue}</span>{content.introSubtitle}</h2>
            <p className='infoPara'>{content.introParagraph}</p>
        </div>
        <div className='fade' id='offerContent'>
            <h2 className='subTitle'><span className='subTitleColor'>{content.offerSubtitleBlue}</span>{content.offerSubtitle}</h2>
            <p className='infoPara'>{content.offerParagraph1}</p>
            <p className='infoPara'>{content.offerParagraph2}</p>
            <div id='homePortfolioWrapper'>
                <img id='surfMockup' className='mockupPortfolio' src='https://res.cloudinary.com/dvmw658s9/image/upload/v1693713117/Sierra%20Nevada%20Web%20Designs/rozlfcmjmwalnfhlrgje.png' alt='Hawaii Surf Site'/>
                <img className='mockupPortfolio' src='https://res.cloudinary.com/dvmw658s9/image/upload/v1693713116/Sierra%20Nevada%20Web%20Designs/keitflfmcmhdzd9zne2u.png' alt='Reef Supplies Site'/>
                <img className='mockupPortfolio' src='https://res.cloudinary.com/dvmw658s9/image/upload/v1693713117/Sierra%20Nevada%20Web%20Designs/tebqfmvckgun9kpgyi1b.png' alt='Pastry Site'/>
            </div>
            <Link to='/portfolio' className='button' id='portfolioButton'>{content.portfolioButton}</Link>
        </div>
        </>
    );
}

export default Home;