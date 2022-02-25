import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import "./item.css";

function Item() {
  const productFromRedux = useSelector((state) => state.itemsList);

  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const result = productFromRedux.find(
      (product) => parseInt(product.id) === parseInt(id)
    );

    setProduct(result);
  }, [id, productFromRedux]);

  console.log(product);

  return (
    <div>
      {product ? (
        <div className="item__product">
          <div className="productImg">
            {product.imgUrl ? <img src={product.imgUrl} alt="" /> : ""}
          </div>
          <div className="product__detail">
            <div className="product__name">{product.name}</div>
            <div className="product__model">{product.model}</div>
            <div className="product__price">{product.price}</div>
            <div className="product__price">{product.description}</div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Item;
