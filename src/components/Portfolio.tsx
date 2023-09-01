import '../styles/portfolio.css';

function Portfolio() {
    return (
        <>
        <div id='portfolioBackground'>
          <h1 id='servicesTitle' className='title'><span className='titleBlue'>Our</span>Work</h1>
          <div className='infoBlocks'>
            <div className='infoBlock'>
                <h2 id='subtitlePortfolio' className='subTitlePage'><span className='titleBlue'>What</span>We Have Created</h2>
                <div className='contentWrapperPortfolio'>
                    <div className='contentBlockImgPortfolio'>
                        <img className='portfolioMockupImg' src='https://res.cloudinary.com/dvmw658s9/image/upload/v1693372448/qntzs1n6cyxtwu3ofrql.png'/>
                    </div>
                    <div className='contentBlockTextPortfolio'>
                        <h2 className='subTitlePage'><span className='titleBlue'>JF</span>Aquatics</h2>
                        <p className='infoParaLarge'>We will solve any problems that you run into with the site, make any required changes, and continue to monitor and optimize SEO and traffic, all free of charge for the first month after launch.</p>
                    </div>
                </div>
                <div className='contentWrapperPortfolio'>
                    <div className='contentBlockTextPortfolio'>
                        <h2 className='subTitlePage'><span className='titleBlue'>Hawai'i Surf</span>Surf</h2>
                        <p className='infoParaLarge'>We will solve any problems that you run into with the site, make any required changes, and continue to monitor and optimize SEO and traffic, all free of charge for the first month after launch.</p>
                    </div>
                    <div className='contentBlockImgPortfolio'>
                        <img className='portfolioMockupImg' src='https://res.cloudinary.com/dvmw658s9/image/upload/v1693463575/mammqpa0fuijhg960yvf.png'/>
                    </div>
                </div>
                <div className='contentWrapperPortfolio'>
                    <div className='contentBlockImgPortfolio'>
                        <img className='portfolioMockupImg' src='https://res.cloudinary.com/dvmw658s9/image/upload/v1693509632/zf8pwwcboovysxfae2c8.png'/>
                    </div>
                    <div className='contentBlockTextPortfolio'>
                        <h2 className='subTitlePage'><span className='titleBlue'>Dharma</span>Pastelería</h2>
                        <p className='infoParaLarge'>We will solve any problems that you run into with the site, make any required changes, and continue to monitor and optimize SEO and traffic, all free of charge for the first month after launch.</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
        </>
    )
}

export default Portfolio;