import './itemlistcontainer.css'
import { useState, useEffect } from 'react'
import { getProducts } from '../asyncmock'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(response => {
            setProducts(response)
        })
    }, [])

    return (
        <div className='contenedor' >
            <h1 className='TituloPrincipal'>Colgantes</h1>
            <div className='contenedorItem'>
                <h2 className='TituloItem'>{props.greeting}</h2>
                <ItemList products={products}/>
            </div>
            
        </div>
    )
}

/* function Main() {
    return (
        <main className='mainContainer'>
            <div className='FirstContainer'>
                <p> Sitio en construcción</p>
            </div>
            <div class="preloader"></div>

        </main>
    )
} */

export default ItemListContainer