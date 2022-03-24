import React, { createContext } from 'react';
import data from '../data';

const products = data

export const ProductContext = createContext()

export default function ProductProvider(props) {
    return (
        <ProductContext.Provider value={products}>
            {props.children}
        </ProductContext.Provider>
    )
}