import './CartWidget.css'
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import { Link } from 'react-router-dom'

const CartWidget = () => {

    const { getCartQuantity, totalQuantity } = useContext(CartContext)

    

    return(
        <div className="CartWidget">
            <Link to="/Cart" >
                <img src='../../../assets/img/cart.png' alt='cart' className='CartImg'/>
                { totalQuantity }
            </Link>
        </div>
       
    );
}

export default CartWidget