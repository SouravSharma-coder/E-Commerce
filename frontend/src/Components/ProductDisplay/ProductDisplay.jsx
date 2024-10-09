import React from "react";
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png'
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";

function ProductDisplay(props) {
  const { product } = props;

  const{addToCart}=useContext(ShopContext)
  return (
    <div className="product-display">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay_img">
          <img
            className="product-display-main-img"
            src={product.image}
            alt=""
          />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            {product.old_price}
          </div>
          <div className="productdisplay-right-price-bew">
            {product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-size">
          <h1>SELECT SIZE</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}} className="SSS">ADD TO CART</button>
        <p className="productdisplay-right-category">
          <span>Category:</span> {product.category}
        </p>
        <p className="productdisplay-right-category">
          <span>Tags:&nbsp;</span>Latest Collection
        </p>
      </div>
    </div>
  );
}

export default ProductDisplay;
