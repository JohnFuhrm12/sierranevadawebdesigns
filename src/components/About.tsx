import '../styles/about.css';

function About() {
    return (
        <>
        <div id='aboutBackground'>
          <h1 id='titleAbout' className='title'><span className='titleBlue'>About</span>Us</h1>
          <div className='infoBlocks'>
            <div className='infoBlock'>
                <h2 className='subTitlePage'><span className='titleBlue'>About</span>Sierra Nevada Web Designs</h2>
                <p className='infoParaLarge'>We named our company after the breathaking views of the Sierra Nevada Mountains in Colombia, and we want to bring that same stunning design to your business. My name is John, and as the sole developer with nearly 2 years of experience building and designing websies, my mission is to build an amazing website for your business.</p>
                <p className='infoParaLarge'>A website is a first impression of your business that is contantly selling your services, it is important that the impression it gives is a great one. I hand code all of my websites, I never use page builders. This allows me to build fast, and 100% customizable websites that can cater to any need. My goal is to offer personalized websites to small businesses at an affordable price, so they can offer the same great digital impression that larger business can.</p>
            </div>
          </div>
        </div>
        </>
    )
}

export default About;