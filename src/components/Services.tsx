import '../styles/services.css';

function Services() {
    return (
        <>
        <div id='servicesBackground'>
          <h1 id='servicesTitle' className='title'><span className='titleBlue'>Our</span>Services</h1>
          <div className='infoBlocks'>
            <div className='infoBlock'>
                <div className='contentWrapperServices'>
                    <div className='contentBlockImg'>
                        <img className='infoImg' src='https://res.cloudinary.com/dvmw658s9/image/upload/v1693547686/dw0p59l0ij52jkc0z0ij.jpg'/>
                    </div>
                    <div className='contentBlockText'>
                        <h2 className='subTitlePage'><span className='titleBlue'>Web</span>Design & Development</h2>
                        <p className='infoParaLarge'>We design the layout and content of your site and then diligently hand code it from the ground up. You end up recieving a fast, optimized site without any unnecessary bloat from page builders. We keep in constant contact throughout the entire design process to make sure that you not only love the design, but are able to make all of the changes you want at any time.</p>
                        <p className='infoParaLarge'>When you are happy with the design and layout of the site, we build it and provide you with a demo link after completion so that you can approve everything and make any changes before your site is live.</p>
                    </div>
                </div>
            </div>
            <div className='infoBlock'>
                <h2 className='subTitlePage'><span className='titleBlue'>SEO</span>Optimized & Responsive</h2>
                <p className='infoParaLarge'>We create clean code and include keywords that will ensure your site is well ranked for search engines. All sites are designed with a mobile-first approach and will have a great layout for both desktops and mobile devices.</p>
            </div>
            <div id='servicesSecondBackground'>
                <div className='infoBlockTransparent'>
                    <h2 className='subTitlePage'>Working With Us Means</h2>
                    <h2 className='subTitleSmall'><span className='subTitleSmallBlue'>Personalized</span>, professional websites built from scratch.</h2>
                    <h2 className='subTitleSmall'><span className='subTitleSmallBlue'>Communication</span> to ensure that you are happy with your site.</h2>
                    <h2 className='subTitleSmall'><span className='subTitleSmallBlue'>Affordable </span>prices for a non-page builder site.</h2>
                    <h2 className='subTitleSmall'><span className='subTitleSmallBlue'>SEO </span> optimization to ensure a good ranking on search engines.</h2>
                    <h2 className='subTitleSmall'><span className='subTitleSmallBlue'>Responsive</span>, mobile first website design.</h2>
                    <h2 className='subTitleSmall'><span className='subTitleSmallBlue'>Free </span>maintenance and updates for the first month after launch.</h2>
                    <h2 className='subTitleSmall'><span className='subTitleSmallBlue'>Satisfaction </span> is 100% guaranteed, and until then you don't pay anything.</h2>
                </div>
            </div>
            <div className='infoBlock'>
                <h2 className='subTitlePage'><span className='titleBlue'>Maintenance</span>For The First Month</h2>
                <p className='infoParaLarge'>We will solve any problems that you run into with the site, make any required changes, and continue to monitor and optimize SEO and traffic, all free of charge for the first month after launch.</p>
            </div>
          </div>
        </div>
        </>
    )
}

export default Services;