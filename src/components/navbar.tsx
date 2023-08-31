import '../styles/navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <div id='wrapper'>
                <div id='navTitleLogoWrapper'>
                    <img id='logo' src='=' alt=''/>
                    <div id='navTitleWrapper'>
                        <h2 className='titleItem'>Sierra Nevada</h2>
                        <h2 className='titleItem'>Web Designs</h2>
                    </div>
                </div>
                <div id='navItemsWrapper'>
                    <Link to='/' className='navItem'>Home</Link>
                    <h2 className='navItem'>About</h2>
                    <Link to='/services' className='navItem'>Services</Link>
                    <h2 className='navItem'>Portfolio</h2>
                    <h2 className='navItem'>Contact</h2>
                </div>
            </div>
        </>
    );
}

export default Navbar;