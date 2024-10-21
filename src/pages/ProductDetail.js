import React from 'react';
import { Link, useParams } from 'react-router-dom';

function ProductDetail(props) {
    const {
        productId = '',
    } = useParams()
    return (
        <>
            <h1>Product Detail1</h1>
            <p>Product ID: {productId}</p>
            <Link to='..' relative='path'>Back</Link>
        </>
    );
}

export default ProductDetail;