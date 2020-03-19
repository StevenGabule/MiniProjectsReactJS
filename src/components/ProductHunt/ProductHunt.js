import React from 'react';
import ProductList from "./ProductList";

function ProductHunt() {

    return (
        <div className={"main ui text container"}>
            <h1 className={"ui dividing centered header"}>Teachers hunt</h1>
            <ProductList />
        </div>
    )
}

export default ProductHunt;