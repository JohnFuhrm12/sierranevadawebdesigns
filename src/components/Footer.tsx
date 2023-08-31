import '../styles/footer.css';

function Footer() {
    return (
        <>
        <div className='fade' id="footerWrapper">
            <h2 id='footerContact'>Contact Us</h2>
            <div className='footerLinksWrapperContact'>
                <h2 className='footerLinkSmall'>snwebdesigns@gmail.com</h2>
                <h2 className='footerLinkSmall'>+1 (609)-351-0536</h2>
            </div>
            <div className="footerLinksWrapper">
                <h2 className="footerLinkTitle">Navigate</h2>
                <h2 className="footerLink">Home</h2>
                <h2 className="footerLink">About</h2>
                <h2 className="footerLink">Services</h2>
                <h2 className="footerLink">Portfolio</h2>
                <h2 className="footerLink">Contact</h2>
            </div>
            <div className="footerLinksWrapper">
                <h2 className="footerLinkTitle">Services</h2>
                <h2 className="footerLink">Web Design</h2>
                <h2 className="footerLink">Web Development</h2>
                <h2 className="footerLink">SEO Optimization</h2>
                <h2 className="footerLink">Content Creation</h2>
            </div>
        </div>
        <h2 id='copyright'>Copyright © 2023 | Sierra Nevada Web Designs LLC | All Rights Reserved</h2>
        </>
    )
}

export default Footer;