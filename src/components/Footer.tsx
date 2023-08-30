import '../styles/footer.css';

function Footer() {
    return (
        <>
        <div className='fade' id="footerWrapper">
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
        <h2 id='copyright'>Copyright © 2023 | Sierra Nevada Web Designs, LLC | All Rights Reserved</h2>
        </>
    )
}

export default Footer;