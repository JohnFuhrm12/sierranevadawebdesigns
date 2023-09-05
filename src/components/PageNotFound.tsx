import '../styles/App.css';

function PageNotFound( {...props} ) {
    const englishContent = {
        error: 'Error',
        errorRed: '404',
        pageNotFound: ': Page Not Found'
    }

    let content = englishContent;

    //á, é, í, ó, ú, ü, ñ, ¿, ¡)

    if (props.language === 'ES') {
        content = {
            error: 'Error',
        errorRed: '404',
        pageNotFound: ': Página No Encontrado'
        }
    } else {
        content = englishContent;
    }

    return (
        <>
        <h2 id="pageNotFoundMessage">{content.error} <span id='errorRed'>{content.errorRed}</span>{content.pageNotFound}</h2>
        </>
    )
}

export default PageNotFound;