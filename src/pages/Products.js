import React from 'react';
import { Link } from 'react-router-dom';


const PRODUCTS = [
    { id: 'p1', title: 'Product 1' },
    { id: 'p2', title: 'Product 2' },
    { id: 'p3', title: 'Product 3' },
]
function Product(props) {
    return (
        <>
            <h1>Product Page</h1>
            <ul>
                {
                    PRODUCTS.map(i => (
                        <li key={i.id}><Link to={i.id}>{i.title}</Link></li>)
                    )
                }
            </ul>
        </>
    );
}

export default Product;