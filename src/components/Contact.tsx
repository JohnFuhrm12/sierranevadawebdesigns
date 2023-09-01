import '../styles/contact.css';

function Contact() {
    return (
        <>
        <div id='contactBackground'>
          <h1 className='title'><span className='titleBlue'>Contact</span>Us</h1>
          <div id='infoBlocksContact'>
            <div className='infoBlock'>
                <h2 className='subTitlePage'><span className='titleBlue'>Send</span>Us A Message</h2>
                <p className='infoPara'>Fill out the form below or contact us at snwebdesigns@gmail.com.</p>
                <p className='infoPara'>Send us a call at +1 (609)-351-0536</p>
            </div>
            <div id='contactFormBackground'>
                <form id='contactForm'>
                    <input type='text' name='name' placeholder='Full Name' required/>
                    <input type='text' name='business' placeholder='Business Name' required/>
                    <input type='text' name='phone' placeholder='+X (XXX)-(XXX)-(XXXX)' required/>
                    <input type='text' name='email' placeholder='myname@gmail.com' required/>
                    <textarea placeholder='Send us a message!' required/>
                    <button id='contactSubmitButton'>Send Message</button>
                </form>
            </div>
          </div>
        </div>
        </>
    )
}

export default Contact;