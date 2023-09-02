import '../styles/navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    function MobileNavAnimation() {
        const hamburgerMenu = document.getElementById('menuCheck') as HTMLInputElement;
        const mobileNav = document.getElementById('hamburgerNav') as HTMLInputElement;

        if (hamburgerMenu.checked) {
            mobileNav.style.translate = '0';
        } else {
            mobileNav.style.translate = '-100%';
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
                    <label id='hamburgerMenu' onClick={MobileNavAnimation}>
                        <input id='menuCheck' type='checkbox'/>
                    </label>
                </nav>
            </div>
            <div id='hamburgerNav'>
                <h2>Home</h2>
                <h2>About</h2>
                <h2>Services</h2>
                <h2>Portfolio</h2>
                <h2>Contact</h2>
            </div>
        </>
    );
}

export default Navbar;