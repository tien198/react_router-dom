import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail(props) {
    const {
        productId = '',
        categoryId = ''
    } = useParams()
    return (
        <>
            <h1>Product Detail1</h1>
            <p>Product ID: {productId}</p>
        </>
    );
}

export default ProductDetail;