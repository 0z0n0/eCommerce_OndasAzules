import './item.css'
import { Link } from 'react-router-dom'

const Item = ({ id, name, img, price, category }) => {
    return (
        
            <div className="ContenedorHijo">
                <h1 className="Header">{name}</h1>
                <h3 className="category">{category}</h3>
                <section className="img">
                    <img src={img} alt={name}/>
                </section>
                <div className="information">                                     
                    
                    <h4 className="price">${price}</h4>                    
                    <button className="buttonDetail">
                        <Link to={`/detail/${id}`}>Más detalle</Link>
                    </button>
                    <button className="buttonCart">Agregar al carrito</button>
                    
                </div>
                
            </div>
        

        
    )
}

export default Item

