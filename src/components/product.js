import React from "react";
import { Link } from "react-router-dom";

function Product({ products }) {
  return (
    <div className="products__container">
      {products.map((product) => (
        <Link
          to={`/product/${product.id}`}
          className="product"
          key={product.id}
        >
          <div className="productImg">
            {product.imgUrl ? <img src={product.imgUrl} alt="" /> : ""}
          </div>
          <div className="product__name">{product.name}</div>
          <div className="product__model">{product.model}</div>
          <div className="product__price">{product.price}</div>
        </Link>
      ))}
    </div>
  );
}

export default Product;
