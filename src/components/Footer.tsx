import '../styles/footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
        <div className='fade' id="footerWrapper">
            <p id='footerAboutPara'>Sierra Nevada Web Designs is a local, NJ based web development company. Our goal is to create affordable, responsive, and stunning websites for small businesses.</p>
            <h2 id='footerContact'>Contact Us</h2>
            <div className='footerLinksWrapperContact'>
                <h2 className='footerLinkSmall'>snwebdesigns@gmail.com</h2>
                <h2 className='footerLinkSmall'>+1 (609)-351-0536</h2>
            </div>
            <div className="footerLinksWrapper">
                <h2 className="footerLinkTitle">Navigate</h2>
                <Link to='/' className="footerLink">Home</Link>
                <Link to='/about' className="footerLink">About</Link>
                <Link to='/services' className="footerLink">Services</Link>
                <Link to='/portfolio' className="footerLink">Portfolio</Link>
                <Link to='/contact' className="footerLink">Contact</Link>
            </div>
            <div className="footerLinksWrapper">
                <h2 className="footerLinkTitle">Services</h2>
                <Link to='/services' className="footerLink">Web Design</Link>
                <Link to='/services' className="footerLink">Web Development</Link>
                <Link to='/services' className="footerLink">SEO Optimization</Link>
                <Link to='/services' className="footerLink">Content Creation</Link>
            </div>
        </div>
        <h2 id='copyright'>Copyright © 2023 | Sierra Nevada Web Designs LLC | All Rights Reserved</h2>
        </>
    )
}

export default Footer;