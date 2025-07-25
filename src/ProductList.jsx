import ProductItem from './ProductItem.jsx';
import React from 'react';

function ProductList()
{
    const products = [
        {id: 1, name: 'Product 1', price: '$10'},
        {id: 2, name: 'Product 2', price: '$20'},
        {id: 3, name: 'Product 3', price: '$30'},
        {id: 4, name: 'Product 4', price: '$40'},
        {id: 5, name: 'Product 5', price: '$50'},
        {id: 6, name: 'Product 6', price: '$60'},
        {id: 7, name: 'Product 7', price: '$70'},
    ]
    return (
        <div className='card p-3 m-3 shadow-sm bg-dark text-white'>
            <h2 className='card-title text-center mb-3'>Our Products</h2>
            <ul className='list-group list-group-flush'>
                {
                    products.map(product => (
                        <ProductItem key={product.id} name={ product.name} price={product.price} />
                    ))}

            </ul>
        </div>
    )
}

export default ProductList;