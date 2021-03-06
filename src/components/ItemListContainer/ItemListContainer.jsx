import './itemlistcontainer.css'
import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory } from '../asyncmock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

import { getDocs, collection, query, where} from 'firebase/firestore'
import { db } from '../../services/firebase'

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoryId} = useParams() // traemos el ID desde la url
    
   /*  useEffect(() => {
        const onRize = () => {
            console.log('cambio de tamaño') 
        }

        window.addEventListener('resize', onRize) // hay que decirle qué tipo de evento y el nombre
        return() => {
            window.removeEventListener('resize', onRize)
        }
    },[]) */


    useEffect(() => {
        setLoading(true)       

        const collectionRef = categoryId ? ( 
            query(collection(db, 'products'), where('category', '==', categoryId))
        ) : ( collection(db, 'products') )

        getDocs(collectionRef).then(response => {
            console.log(response)
            const productsFormatted = response.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            })
            setProducts(productsFormatted)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })        
    }, [categoryId])

    if(loading) {
        return <h1>Cargando...</h1>
    }
    return (
        <div>      
            <h1>{props.greeting}</h1>
            {products.length > 0 
                ? <ItemList products={products}/>
                : <h1>No hay productos</h1>
            }         
        </div>
    )
}
export default ItemListContainer