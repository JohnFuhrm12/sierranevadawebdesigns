import '../styles/contact.css';
import { useForm, ValidationError } from '@formspree/react';

function Contact( {...props} ) {
    const [state, handleSubmit] = useForm("xvolwzaq");
    
    if (state.succeeded) {
        return (
            <p className='successMessage'>Thank you, we will get back to you shortly!</p>
        )
    }

    const englishContent = {
        titleBlue: 'Contact',
        title: 'Us',
        subtitleBlue: 'Send',
        subtitle: 'Us A Message',
        infoParagraph1: `Fill out the form below or contact us at snwebdesigns@gmail.com.`,
        infoParagraph2: `Send us a call at +1 (609)-351-0536`,
        namePlaceholder: 'Full Name',
        businessPlaceholder: 'Business Name',
        phonePlaceholder: '+X (XXX)-(XXX)-(XXXX)',
        emailPlaceholder: 'myname@gmail.com',
        messagePlaceholder: 'Send us a message!',
        submitButton: 'Send Message'
    }

    let content = englishContent;

    //á, é, í, ó, ú, ü, ñ, ¿, ¡)

    if (props.language === 'ES') {
        content = {
            titleBlue: 'Contactános',
            title: '',
            subtitleBlue: 'Mandanos',
            subtitle: 'Un Mensaje',
            infoParagraph1: `Completa el formulario abajo o contactános por snwebdesigns@gmail.com.`,
            infoParagraph2: `Mándanos una llamada por +1 (609)-351-0536`,
            namePlaceholder: 'Nombre Completo',
            businessPlaceholder: 'Nombre de Empresa',
            phonePlaceholder: '+X (XXX)-(XXX)-(XXXX)',
            emailPlaceholder: 'minombre@gmail.com',
            messagePlaceholder: 'Mándanos un mensaje!',
            submitButton: 'Mandar Mensaje'
        }
    } else {
        content = englishContent;
    }

    return (
        <>
        <div id='contactBackground'>
          <h1 className='title'><span className='titleBlue'>{content.titleBlue}</span>{content.title}</h1>
          <div id='infoBlocksContact'>
            <div className='infoBlock'>
                <h2 className='subTitlePage'><span className='titleBlue'>{content.subtitleBlue}</span>{content.subtitle}</h2>
                <p className='infoPara'>{content.infoParagraph1}</p>
                <p className='infoPara'>{content.infoParagraph2}</p>
            </div>
            <div id='contactFormBackground'>
                <form id='contactForm' onSubmit={handleSubmit}>
                    <ValidationError prefix="Email" field="email" errors={state.errors}/>
                    <input type='text' name='name' placeholder={content.namePlaceholder} required/>
                    <input type='text' name='business' placeholder={content.businessPlaceholder} required/>
                    <input type='text' name='phone' placeholder={content.phonePlaceholder} required/>
                    <input type='text' name='email' placeholder={content.emailPlaceholder} required/>
                    <textarea name='message' placeholder={content.messagePlaceholder} required/>
                    <button id='contactSubmitButton' type='submit' disabled={state.submitting}>{content.submitButton}</button>
                </form>
            </div>
          </div>
        </div>
        </>
    )
}

export default Contact;