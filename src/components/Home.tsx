import '../styles/home.css';

function Home() {
    return (
        <>
        <div id='topContent'>
            <div id='titleWrapper'>
            <h1 id='title'>Web Design & Development For Small Businesses</h1>
            <button id='contactButtonTitle'>Work With Us</button>
            </div>
            <img id='mockup' src='https://res.cloudinary.com/dvmw658s9/image/upload/v1693372448/qntzs1n6cyxtwu3ofrql.png' alt='Display Site'/>
        </div>
        <div id='buffer'></div>
        <svg id='wave' viewBox="0 0 500 200">
            <path d="M 0 30 C 150 100 280 0 500 20 L 500 0 L 0 0" fill="rgb(0, 0, 0)"></path>
        </svg>
        <div className='fade' id='aboutContent'>
            <h2 className='subTitle'><span className='subTitleBlue'>Our</span> Mission</h2>
            <p className='infoPara'>We create fully responsive, personalized, and 100% hand coded websites for small businesses in and outside of the United States. Our goal is to create a beautiful and optimized website that will bring more traffic, and customers, to your business.</p>
        </div>
        </>
    );
}

export default Home;