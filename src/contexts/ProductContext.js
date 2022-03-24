import React, { createContext } from 'react';

const ProductContext = createContext();

export default ProductContext;

// export default function ProductProvider(props) {
//     return (
//         <ProductContext.Provider value={products}>
//             {props.children}
//         </ProductContext.Provider>
//     )
// }