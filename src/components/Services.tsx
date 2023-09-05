import '../styles/services.css';

function Services( {...props} ) {
    const englishContent = {
        titleBlue: 'Our',
        title: 'Services',
        designSubtitleBlue: 'Web',
        designSubtitle: 'Design & Development',
        designParagraph1: `We design the layout and content of your site and then diligently hand code it from the ground up. 
        You end up recieving a fast, optimized site without any unnecessary bloat from page builders. 
        We keep in constant contact throughout the entire design process to make sure that you not only love the design, but are able to make all of the changes you want at any time.`,
        designParagraph2: `When you are happy with the design and layout of the site, we build it and provide you with a demo link after completion so that you can approve everything and make any changes before your site is live.`,
        seoSubtitleBlue: 'SEO',
        seoSubtitle: 'Optimized & Responsive',
        seoParagraph: `We create clean code and include keywords that will ensure your site is well ranked for search engines. 
        All sites are designed with a mobile-first approach and will have a great layout for both desktops and mobile devices.`,
        transparentTitle: 'Working With Us Means',
        transparentSubtitleBlue1: 'Personalized',
        transparentSubtitle1: ', professional websites built from scratch.',
        transparentSubtitleBlue2: 'Communication',
        transparentSubtitle2: ' to ensure that you are happy with your site.',
        transparentSubtitleBlue3: 'Affordable',
        transparentSubtitle3: 'prices for a non-page builder site.',
        transparentSubtitleBlue4: 'SEO',
        transparentSubtitle4: ' optimization to ensure a good ranking on search engines.',
        transparentSubtitleBlue5: 'Responsive',
        transparentSubtitle5: ', mobile first website design.',
        transparentSubtitleBlue6: 'Free',
        transparentSubtitle6: ' maintenance and updates for the first month after launch.',
        transparentSubtitleBlue7: 'Satisfaction',
        transparentSubtitle7: ` is 100% guaranteed, and until then you don't pay anything.`,
        maintananceSubtitleBlue: 'Maintenance',
        maintananceSubtitle: 'For The First Month',
        maintananceParagraph: `We will solve any problems that you run into with the site, make any required changes, and continue to monitor and optimize SEO and traffic, all free of charge for the first month after launch.`
    }

    let content = englishContent;

    //á, é, í, ó, ú, ü, ñ, ¿, ¡)

    if (props.language === 'ES') {
        content = {
            titleBlue: 'Nuestros',
            title: 'Servicios',
            designSubtitleBlue: 'Diseño',
            designSubtitle: '& Desarollo Web',
            designParagraph1: `Nosotros diseñamos el contenido y el formato de tu sitio y lo hacemos desde cero con diligencia. 
            Usted termina con un sitio rápido, optimizado, y sin saturación innecesario que viene con programas de creadores de sitios.
            Nosotros mantenemos en contacto constantamente durante todo el proceso de diseño para asegurarle que no solamante amas el diseño, pero que puede hacer todos los cambios que desea.`,
            designParagraph2: `Cuando estás feliz con el diseño y el formato de su sitio, nosotros lo construimos y te damos un enlace de prueba despues de su completación así puede aprobar de todo y realizar cualquieres cambios antes del lanzamiento del sitio.`,
            seoSubtitleBlue: 'SEO',
            seoSubtitle: 'Optimizado & Responsivo',
            seoParagraph: `Nosotro creamos código limpio e incluimos palabras claves que hará que su sitio esta bien clasificado por buscadores.
            Todos los sitios son diseñados con un enfoque en diseño móvil y tendrá un formato genial para ambos dispositivos móviles y escritorios.`,
            transparentTitle: 'Trabajando Con Nosotros Significa',
            transparentSubtitleBlue1: 'Sitios Personalizados',
            transparentSubtitle1: 'y hecho desde cero.',
            transparentSubtitleBlue2: 'Communicación',
            transparentSubtitle2: ' para asegurarle que quedas feliz con su sitio.',
            transparentSubtitleBlue3: 'Precios Económicos',
            transparentSubtitle3: ' para un sitio casero hecho desde cero.',
            transparentSubtitleBlue4: 'SEO',
            transparentSubtitle4: ' y optimización para asegurar que el sitio queda bien clasificado para buscadores.',
            transparentSubtitleBlue5: 'Diseño',
            transparentSubtitle5: ' responsivo, con enfoque en diseño móvil.',
            transparentSubtitleBlue6: 'Mantenimiento',
            transparentSubtitle6: ' gratis y cambios para el primer mes despues del lanzamiento.',
            transparentSubtitleBlue7: 'Satisfacción',
            transparentSubtitle7: ` es 100% garantizado, y hasta estés satisfecho usted no paga nada.`,
            maintananceSubtitleBlue: 'Mantenimiento',
            maintananceSubtitle: 'Para El Primer Mes',
            maintananceParagraph: `Nosotros resolvemos cualquier problema que occure con el sitio, hacemos cualquieres cambios necesarios, y seguimos a monitorear trafico y optimizar SEO, todo gratis para el primer mes despues del lanzamiento.`
        }
    } else {
        content = englishContent;
    }

    return (
        <>
        <div id='servicesBackground'>
          <h1 id='servicesTitle' className='title'><span className='titleBlue'>{content.titleBlue}</span>{content.title}</h1>
          <div className='infoBlocks'>
            <div className='infoBlock'>
                <div className='contentWrapperServices'>
                    <div className='contentBlockImg'>
                        <img className='infoImg' src='https://res.cloudinary.com/dvmw658s9/image/upload/v1693712629/Sierra%20Nevada%20Web%20Designs/k8avu17x0gy7oupxpxkb.jpg'/>
                    </div>
                    <div className='contentBlockText'>
                        <h2 className='subTitlePage'><span className='titleBlue'>{content.designSubtitleBlue}</span>{content.designSubtitle}</h2>
                        <p className='infoParaLarge'>{content.designParagraph1}</p>
                        <p className='infoParaLarge'>{content.designParagraph2}</p>
                    </div>
                </div>
            </div>
            <div className='infoBlock'>
                <h2 className='subTitlePage'><span className='titleBlue'>{content.seoSubtitleBlue}</span>{content.seoSubtitle}</h2>
                <p className='infoParaLarge'>{content.seoParagraph}</p>
            </div>
            <div id='servicesSecondBackground'>
                <div className='infoBlockTransparent'>
                    <h2 className='subTitlePage'>{content.transparentTitle}</h2>
                    <h2 className='subTitleSmall'><span className='subTitleSmallBlue'>{content.transparentSubtitleBlue1}</span>{content.transparentSubtitle1}</h2>
                    <h2 className='subTitleSmall'><span className='subTitleSmallBlue'>{content.transparentSubtitleBlue2}</span>{content.transparentSubtitle2}</h2>
                    <h2 className='subTitleSmall'><span className='subTitleSmallBlue'>{content.transparentSubtitleBlue3} </span>{content.transparentSubtitle3}</h2>
                    <h2 className='subTitleSmall'><span className='subTitleSmallBlue'>{content.transparentSubtitleBlue4} </span> {content.transparentSubtitle4}</h2>
                    <h2 className='subTitleSmall'><span className='subTitleSmallBlue'>{content.transparentSubtitleBlue5}</span>{content.transparentSubtitle5}</h2>
                    <h2 className='subTitleSmall'><span className='subTitleSmallBlue'>{content.transparentSubtitleBlue6}</span>{content.transparentSubtitle6}</h2>
                    <h2 className='subTitleSmall'><span className='subTitleSmallBlue'>{content.transparentSubtitleBlue7} </span>{content.transparentSubtitle7}</h2>
                </div>
            </div>
            <div className='infoBlock'>
                <h2 className='subTitlePage'><span className='titleBlue'>{content.maintananceSubtitleBlue}</span>{content.maintananceSubtitle}</h2>
                <p className='infoParaLarge'>{content.maintananceParagraph}</p>
            </div>
          </div>
        </div>
        </>
    )
}

export default Services;