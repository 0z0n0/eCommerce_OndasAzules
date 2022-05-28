import './navbar.css'
import logo from './logo.png';

function Navbar() {
    return (
        <header className='app-header'>
            <div className='containerLogo'>
                <img src={logo} className="logo" alt="logo" />
                
            </div>
            <h1 className='titulo'>Productos Artesanales</h1>
            <nav className='navbar'>
                <ul>
                    <li><a href="/">Nosotros</a></li>
                    <li><a href="/">Productos</a></li>
                    <li><a href="/">Galeria</a></li>
                </ul>
            </nav>

        </header>
    )
}

export default Navbar