import { useSelector } from 'react-redux'
import AddProductForm from './AddProductForm'
import Product from './Product'

export default function Products() {

    const products : any = useSelector((store: any) => store.products)

    let productsToDisplay = (products.length === 0) 
                                ? <div>No products to display</div> 
                                : products.map( (p:any, i: number) => <Product key={i} {...p} /> )
    
    return (
        <>
			<h1>Products</h1>
            {productsToDisplay}
            <AddProductForm />
        </>
    )
}