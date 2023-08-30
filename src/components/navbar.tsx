import '../styles/navbar.css';

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
                    <h2 className='navItem'>Home</h2>
                    <h2 className='navItem'>About</h2>
                    <h2 className='navItem'>Services</h2>
                    <h2 className='navItem'>Portfolio</h2>
                    <h2 className='navItem'>Contact</h2>
                </div>
            </div>
        </>
    );
}

export default Navbar;