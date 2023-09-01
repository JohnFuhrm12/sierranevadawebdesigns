import '../styles/navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <div id='wrapper'>
                <div id='navTitleLogoWrapper'>
                    <Link to='/'>
                    <img id='logo' src='=' alt=''/>
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
                </nav>
            </div>
        </>
    );
}

export default Navbar;