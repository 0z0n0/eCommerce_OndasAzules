import "./itemDetail.css"
const ItemDetail = ({description,img,price, name}) =>{
    return (
        <>           
            <div className="container">
                <div className="column">
                    <img src={img} alt={name}/>
                    <div className="Detail">
                        <h1 className="title">{name}</h1>
                        <h3 className="description">Descripción</h3>
                        <p>{description}</p>
                        <p>${price}</p>
                        <button>Comprar</button>
                    </div>
                </div>
            </div>
        </>
    )

}
export default ItemDetail