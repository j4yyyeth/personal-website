import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
    return (
        <nav id="nav">
            <Link className='logo-box' to='#home' smooth><img className='logo' src={require('../logo.png')} alt='logo'/></Link>
            <Link to='#about' smooth>About</Link>
            <Link to='#projects' smooth>Projects</Link>
            <Link to='#contact' smooth>Contact</Link>
        </nav>
    )
}

export default Navbar;