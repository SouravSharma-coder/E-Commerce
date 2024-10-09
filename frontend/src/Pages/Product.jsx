import React, { useContext } from 'react'
import {ShopContext} from '../Context/ShopContext'
import {useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrum/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';


function Product() {
    // eslint-disable-next-line no-unused-vars
    const {all_product}= useContext(ShopContext);
    const {productId}= useParams();
    const product = all_product.find((e)=> e.id === Number(productId));

    

    // console.log(product);
    return (
        <div>
        <Breadcrum product={product}/>
          <ProductDisplay product={product}/>
          <DescriptionBox/>
          <RelatedProducts/>
          
          </div>
    );
}

export default Product
