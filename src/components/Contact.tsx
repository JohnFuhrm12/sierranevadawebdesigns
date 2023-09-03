import '../styles/contact.css';
import { useForm, ValidationError } from '@formspree/react';

function Contact() {

    const [state, handleSubmit] = useForm("xvolwzaq");
    if (state.succeeded) {
        return (
            <p className='successMessage'>Thank you, we will get back to you shortly!</p>
        )
    }

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
                <form id='contactForm' onSubmit={handleSubmit}>
                    <ValidationError prefix="Email" field="email" errors={state.errors}/>
                    <input type='text' name='name' placeholder='Full Name' required/>
                    <input type='text' name='business' placeholder='Business Name' required/>
                    <input type='text' name='phone' placeholder='+X (XXX)-(XXX)-(XXXX)' required/>
                    <input type='text' name='email' placeholder='myname@gmail.com' required/>
                    <textarea name='message' placeholder='Send us a message!' required/>
                    <button id='contactSubmitButton' type='submit' disabled={state.submitting}>Send Message</button>
                </form>
            </div>
          </div>
        </div>
        </>
    )
}

export default Contact;