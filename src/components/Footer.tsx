import '../styles/footer.css';
import { Link } from 'react-router-dom';

function Footer( {...props} ) {
    const englishContent = {
        aboutPara: `Sierra Nevada Web Designs is a local, NJ based web development company. 
        Our goal is to create affordable, responsive, and stunning websites for small businesses.`,
        contactHeader: 'Contact Us',
        email: 'sierranevadawebdesigns@gmail.com',
        number: '+1 (609)-351-0536',
        navHeader: 'Navigate',
        home: 'Home',
        about: 'About',
        services: 'Services',
        portfolio: 'Portfolio',
        contact: 'Contact',
        footerLink1: 'Web Design',
        footerLink2: 'Web Development',
        footerLink3: 'SEO Optimization',
        footerLink4: 'Content Creation',
        copyright: 'Copyright © 2023 | Sierra Nevada Web Designs LLC | All Rights Reserved'
    }

    let content = englishContent;

    //á, é, í, ó, ú, ü, ñ, ¿, ¡)

    if (props.language === 'ES') {
        content = {
            aboutPara: `Sierra Nevada Web Designs es una compañía local basado en NJ de desarollo web. 
            Nuestra meta es crear sitios hermosos, responsivos, y económicos para empresas pequeñas.`,
            contactHeader: 'Contáctanos',
            email: 'sierranevadawebdesigns@gmail.com',
            number: '+1 (609)-351-0536',
            navHeader: 'Navegar',
            home: 'Inicio',
            about: 'Acerca De',
            services: 'Servicios',
            portfolio: 'Portfolio',
            contact: 'Contáctanos ',
            footerLink1: 'Diseño Web',
            footerLink2: 'Desarollo Web',
            footerLink3: 'Optimización SEO',
            footerLink4: 'Creación De Contenido',
            copyright: 'Copyright © 2023 | Sierra Nevada Web Designs LLC | Todos Los Derechos Reservados.'
        }
    } else {
        content = englishContent;
    }

    return (
        <>
        <div className='fade' id="footerWrapper">
            <p id='footerAboutPara'>{content.aboutPara}</p>
            <h2 id='footerContact'>{content.contactHeader}</h2>
            <div className='footerLinksWrapperContact'>
                <h2 className='footerLinkSmall'>{content.email}</h2>
                <h2 className='footerLinkSmall'>{content.number}</h2>
            </div>
            <div className="footerLinksWrapper">
                <h2 className="footerLinkTitle">{content.navHeader}</h2>
                <Link to='/' className="footerLink">{content.home}</Link>
                <Link to='/about' className="footerLink">{content.about}</Link>
                <Link to='/services' className="footerLink">{content.services}</Link>
                <Link to='/portfolio' className="footerLink">{content.portfolio}</Link>
                <Link to='/contact' className="footerLink">{content.contact}</Link>
            </div>
            <div className="footerLinksWrapper">
                <h2 className="footerLinkTitle">{content.services}</h2>
                <Link to='/services' className="footerLink">{content.footerLink1}</Link>
                <Link to='/services' className="footerLink">{content.footerLink2}</Link>
                <Link to='/services' className="footerLink">{content.footerLink3}</Link>
                <Link to='/services' className="footerLink">{content.footerLink4}</Link>
            </div>
        </div>
        <h2 id='copyright'>{content.copyright}</h2>
        </>
    )
}

export default Footer;