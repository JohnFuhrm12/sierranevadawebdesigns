import '../styles/about.css';

function About( {...props} ) {
  const englishContent = {
    titleBlue: 'About',
    title: 'Us',
    subtitleBlue: 'About',
    subtitle: 'Sierra Nevada Web Designs',
    inforPara1: `We named our company after the breathaking views of the Sierra Nevada Mountains in Colombia, and we want to bring that same stunning design to your business. 
    My name is John, and as the sole developer with nearly 2 years of experience building and designing websites, my mission is to build an amazing website for your business.`,
    infoPara2: `A website is a first impression of your business that is contantly selling your services, it is important that the impression it gives is a great one. 
    I hand code all of my websites, I never use page builders. This allows me to build fast, and 100% customizable websites that can cater to any need. 
    My goal is to offer personalized websites to small businesses at an affordable price, so they can offer the same great digital impression that larger business can.`
}

let content = englishContent;

//á, é, í, ó, ú, ü, ñ, ¿, ¡)

if (props.language === 'ES') {
    content = {
      titleBlue: 'Acerca De',
      title: 'Nosotros',
      subtitleBlue: 'Acerca De',
      subtitle: 'Sierra Nevada Web Designs',
      inforPara1: `El nombre de nuestra compañia viene de las vistas impresionantes de las montañas de la Sierra Nevada en Colombia, y queremos traer esa misma diseña imponente a su empresa.
      Me llamo John, y como el único desarollador con casi 2 años de experiencia construyendo y diseñando sitios web, mi misión es constuir un sitio increíble para su empresa.`,
      infoPara2: `Un sitio web es la primera impresión de su empresa que constantamente vende sus servicios, es importante su impresión sea una buena.
      Yo hago todos mis sitios desde cero, nunca uso creadores de sitios. Esto me permite hacer sitios rapidos y 100% personalizados para cualquier necesidad.
      Mi meta es ofrecer sitios personalizados a empresas pequeñas a un precio económico, así pueden dar la misma primera impresión que pueden dar empresas más grandes.`
    }
} else {
    content = englishContent;
}

    return (
        <>
        <div id='aboutBackground'>
          <h1 id='titleAbout' className='title'><span className='titleBlue'>{content.titleBlue}</span>{content.title}</h1>
          <div className='infoBlocks'>
            <div className='infoBlock'>
                <h2 className='subTitlePage'><span className='titleBlue'>{content.subtitleBlue}</span>{content.subtitle}</h2>
                <p className='infoParaLarge'>{content.inforPara1}</p>
                <p className='infoParaLarge'>{content.infoPara2}</p>
            </div>
          </div>
        </div>
        </>
    )
}

export default About;