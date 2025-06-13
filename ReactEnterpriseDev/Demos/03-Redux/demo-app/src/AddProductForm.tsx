import React from 'react'
import { useDispatch } from 'react-redux'
import productsSlice from './productsSlice'
import './AddProductForm.css'

export default function AddProductForm() {

    // Get dispatch function from React Redux.
    const dispatch : any = useDispatch()

	let descrElem = React.useRef<HTMLInputElement>(null) 
	let priceElem = React.useRef<HTMLInputElement>(null)

    // Note how we dispatch actions to Redux via the dispatch() function.
    function onAddProduct(event: any) {
		event.preventDefault()
		if (descrElem.current && priceElem.current) {
			dispatch(productsSlice.actions.addProduct({description: descrElem.current.value, price: Number(priceElem.current.value)} ))
			descrElem.current.focus()
			descrElem.current.value = ''
			priceElem.current.value = ''
		}
    }

    return (
        <div>
			<h2>Add a new product</h2>
			<form className="addProduct" onSubmit={onAddProduct}>
				<div>
					<input type="text" placeholder="Description" required ref={descrElem} />
				</div>			
				<div>
					<input type="number" placeholder="Price" required ref={priceElem} />
				</div>				
				<div>
					<button>Add Product</button>
				</div>
			</form>
		</div>
    )
}