import './navbar.css'
import logo from './logo.png'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <header className='app-header'>
            <div className='containerLogo'>
                <Link to='/'>
                <img src={logo} className="logo" alt="logo" />
                </Link>
            </div>            
            <nav className='navbar'>
                    <NavLink to='/category/colgantes' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Colgantes</NavLink>
                    <NavLink to='/category/PortaSahumerio' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Porta Sahumerio</NavLink>
                    <NavLink to='/category/PortaLlaves' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Porta Llaves</NavLink>
                    <NavLink to='/category/PortaVelas' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Porta Velas</NavLink>                 
                    
                    <CartWidget />
            </nav>

        </header>
    )
}

export default Navbar