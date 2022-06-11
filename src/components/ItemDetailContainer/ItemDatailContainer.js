
import { useState, useEffect } from 'react'
import { getProducts } from '../asyncmock'


const ItemDatailContainer = (props) => {
    const [products, setProducts] = useState([])
    const {} = useParams()
    useEffect(() => {
        getProducts().then(response => {
            setProducts(response)
        })
    }, [])

    return (
        <div className='row' >
            <h1 className='TituloPrincipal'>Colgantes</h1>            
                <div className='contenedorItem'>
                    <h2 className='TituloItem'>{props.greeting}</h2>
                    <ItemList products={products}/>
                </div>            
        </div>
    )
}
export default ItemDatailContainer