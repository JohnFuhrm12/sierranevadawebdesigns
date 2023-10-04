import { useState } from 'react';
import '../styles/navbar.css';
import { Link } from 'react-router-dom';

function Navbar( {...props} ) {
    const [showingDropDown, setShowingDropDown] = useState(false);

    function MobileNavAnimation() {
        const hamburgerMenu = document.getElementById('menuCheck') as HTMLInputElement;
        const mobileNav = document.getElementById('hamburgerNav') as HTMLInputElement;

        if (hamburgerMenu.checked) {
            mobileNav.style.translate = '0';
        } else {
            mobileNav.style.translate = '-100%';
        }

    }

    function closeNav() {
        const hamburgerMenu = document.getElementById('menuCheck') as HTMLInputElement;
        const mobileNav = document.getElementById('hamburgerNav') as HTMLInputElement;

        hamburgerMenu.checked = false;
        mobileNav.style.translate = '-100%';
    }

    function showDropdown() {
        const dropDownMenu = document.getElementById('dropDownLanguage') as HTMLElement;

        if (!showingDropDown) {
            setShowingDropDown(true);
            dropDownMenu.style.translate = '0';
        } else {
            dropDownMenu.style.translate = '0 -250%';
            setShowingDropDown(false);
        }
    }

    function toggleEnglish() {
        const indicator = document.getElementById('toggleLanguage') as HTMLElement;

        if (props.language !== 'EN') {
            props.setLanguage('EN');
            showDropdown();
            indicator.innerHTML = 'EN';
        }
    }

    function toggleSpanish() {
        const indicator = document.getElementById('toggleLanguage') as HTMLElement;

        if (props.language !== 'ES') {
            props.setLanguage('ES');
            showDropdown();
            indicator.innerHTML = 'ES';
        }
    }

    function toggleLanguageMobile() {
        const indicator = document.getElementById('toggleLanguageMobile') as HTMLElement;

        if (props.language === 'EN') {
            props.setLanguage('ES');
            closeNav();
            indicator.innerHTML = 'ES';
        }

        if (props.language === 'ES') {
            props.setLanguage('EN');
            closeNav();
            indicator.innerHTML = 'EN';
        }
    }

    const englishContent = {
        home: 'Home',
        about: 'About',
        services: 'Services',
        portfolio: 'Portfolio',
        contact: 'Contact'
    }

    let content = englishContent;

    //á, é, í, ó, ú, ü, ñ, ¿, ¡)

    if (props.language === 'ES') {
        content = {
            home: 'Inicio',
            about: 'Sobre',
            services: 'Servicios',
            portfolio: 'Portfolio',
            contact: 'Contáctanos '
        }
    } else {
        content = englishContent;
    }

    return (
        <>
            <div id='wrapper'>
                <div id='navTitleLogoWrapper'>
                    <Link to='/'>
                        <img id='logo' src='https://res.cloudinary.com/dvmw658s9/image/upload/v1696441292/Sierra%20Nevada%20Web%20Designs/ojhj2hr8rris2jit0did.png' alt='logo'/>
                    </Link>
                </div>
                <nav id='navItemsWrapper'>
                    <Link to='/' className='navItem'>{content.home}</Link>
                    <Link to='/about' className='navItem'>{content.about}</Link>
                    <Link to='/services' className='navItem'>{content.services}</Link>
                    <Link to='/portfolio' className='navItem'>{content.portfolio}</Link>
                    <Link to='/contact' className='navItem'>{content.contact}</Link>
                    <h2 className='navItem' id='toggleLanguage' onClick={showDropdown}>EN</h2>
                    <label id='hamburgerMenu' onClick={MobileNavAnimation}>
                        <input id='menuCheck' type='checkbox'/>
                    </label>
                </nav>
            </div>
            <div id='dropDownLanguage'>
                <h2 className='dropItem' onClick={toggleEnglish}>English</h2>
                <h2 className='dropItem' onClick={toggleSpanish}>Español</h2>
            </div>
            <div id='hamburgerNav'>
                <Link to='/' className='mobileNavLink' onClick={closeNav}>{content.home}</Link>
                <Link to='/about' className='mobileNavLink' onClick={closeNav}>{content.about}</Link>
                <Link to='/services' className='mobileNavLink' onClick={closeNav}>{content.services}</Link>
                <Link to='/portfolio' className='mobileNavLink' onClick={closeNav}>{content.portfolio}</Link>
                <Link to='/contact' className='mobileNavLink' onClick={closeNav}>{content.contact}</Link>
                <h2 className='mobileNavLink' id='toggleLanguageMobile' onClick={toggleLanguageMobile}>EN</h2>
            </div>
        </>
    );
}

export default Navbar;