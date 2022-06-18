import "./itemDetail.css"
import { useState, useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import CartContext from '../../context/CartContext'
import { Link } from 'react-router-dom'



const ItemDetail = ({id,description,img,price,name,stock,category}) =>{
    const [quantityAdded, setQuantityAdded] = useState(0)
    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        console.log(`se agregaron ${quantity} ${name}`)
        addItem({ id, name, price, quantity})
        setQuantityAdded(quantity)
    }



    return (
        <>           
            <div className="container">
                <div className="column">
                    <img src={img} alt={name}/>
                    <div className="Detail">
                        <h1 className="title">{name}</h1>
                        <h4 className="category">Categoria:<p>{category}</p></h4> 
                        <h3 className="description">Descripción</h3>
                        <p>{description}</p>
                        <p>${price}</p>
                        <div className="botonCompra">
                        { quantityAdded === 0 
                            ? <ItemCount stock={stock} onAdd={handleOnAdd} />
                            : <Link to='/cart'>Finalizar compra</Link>
                        }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
export default ItemDetail