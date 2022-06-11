import './item.css'
const Item = ({ id, name, img, price, description }) => {
    return (
        
            <div className="ContenedorHijo">
                <h1 className="Header">{name}</h1>
                <section className="img">
                    <img src={img} alt={name}/>
                </section>
                <div className="informacion">
                    <p>{description}</p>                    
                    <button>Más detalle</button>
                    <h4>${price}</h4>
                    <div>
                    <button>Agregar al carrito</button>
                    </div>
                </div>
                
            </div>
        

        
    )
}

export default Item

