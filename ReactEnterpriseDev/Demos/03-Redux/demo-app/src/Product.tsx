import { useDispatch } from 'react-redux'
import productsSlice from './productsSlice'
import './Product.css'

export default function Product(p : any) {

    const dispatch = useDispatch()

    return (
        <div className="product">
            <h2>{p.description}</h2>
            <div>ID: {p.id}</div>
            <div>Price: {p.price}</div>
            <div>Likes: {p.likes}</div>
            
            <button onClick={() => dispatch(productsSlice.actions.likeProduct(p.id))}>
                Like
            </button>
            
            <button onClick={() => dispatch(productsSlice.actions.removeProduct(p.id))}>
                Remove
            </button>
        </div>
    )
}