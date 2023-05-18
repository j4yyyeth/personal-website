import { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
    const [ color, setColor ] = useState(false);

    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true);
        }
        else {
            setColor(false);
        }
    }

    window.addEventListener('scroll', changeColor)
    return (
        <nav id="nav" className={color ? 'nav-color' : 'no-color'}>
            <Link className='logo-box' to='#main' smooth><img className='logo' src={require('../logo.png')} alt='logo'/></Link>
            <Link to='#about' smooth>About</Link>
            <Link to='#projects' smooth>Projects</Link>
            <Link to='#contact' smooth>Contact</Link>
        </nav>
    )
}

export default Navbar;