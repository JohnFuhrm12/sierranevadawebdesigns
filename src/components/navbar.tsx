import { useState } from 'react';
import '../styles/navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    const [showingDropDown, setShowingDropDown] = useState(false);
    const [language, setLanguage] = useState('EN');

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

        if (language !== 'EN') {
            setLanguage('EN');
            showDropdown();
            indicator.innerHTML = 'EN';
        }
    }

    function toggleSpanish() {
        const indicator = document.getElementById('toggleLanguage') as HTMLElement;

        if (language !== 'ES') {
            setLanguage('ES');
            showDropdown();
            indicator.innerHTML = 'ES';
        }
    }

    return (
        <>
            <div id='wrapper'>
                <div id='navTitleLogoWrapper'>
                    <Link to='/'>
                    <img id='logo' src='' alt=''/>
                    <div id='navTitleWrapper'>
                        <h2 className='titleItem'>Sierra Nevada</h2>
                        <h2 className='titleItem'>Web Designs</h2>
                    </div>
                    </Link>
                </div>
                <nav id='navItemsWrapper'>
                    <Link to='/' className='navItem'>Home</Link>
                    <Link to='/about' className='navItem'>About</Link>
                    <Link to='/services' className='navItem'>Services</Link>
                    <Link to='/portfolio' className='navItem'>Portfolio</Link>
                    <Link to='/contact' className='navItem'>Contact</Link>
                    <h2 id='toggleLanguage' onClick={showDropdown}>EN</h2>
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
                <Link to='/' className='mobileNavLink' onClick={closeNav}>Home</Link>
                <Link to='/about' className='mobileNavLink' onClick={closeNav}>About</Link>
                <Link to='/services' className='mobileNavLink' onClick={closeNav}>Services</Link>
                <Link to='/portfolio' className='mobileNavLink' onClick={closeNav}>Portfolio</Link>
                <Link to='/contact' className='mobileNavLink' onClick={closeNav}>Contact</Link>
            </div>
        </>
    );
}

export default Navbar;