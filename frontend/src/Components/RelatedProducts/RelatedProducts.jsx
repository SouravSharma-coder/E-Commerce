import React, {useEffect,useState} from 'react'
import './RelatedProducts.css'
// import data_product from '../Assets/data'
import Item from '../Item/Item'

function RelatedProducts() {
  const [relatedProducts,setRelatedProducts]=useState([]);


  useEffect(()=>{
    fetch('http://localhost:4000/popularinwomen')
    .then((response)=>response.json())
    .then((data)=>setRelatedProducts(data));
  })
  

  return (
    <div className='relatedproducts'>
      <h1>Realted Products</h1>
      <hr/>
      <div className='relatedproducts-item'>
        {relatedProducts.map((item,i)=>{
          return <Item  key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default RelatedProducts
