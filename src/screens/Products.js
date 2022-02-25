import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/product";
import { itemAction } from "../redux/action/item";

import "./products.css";

function Products() {
  const dispatch = useDispatch();
  const productFromRedux = useSelector((state) => state.itemsList);

  const [categories, setCategories] = useState();
  const [filteredProducts, setFilteredProducts] = useState();
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  // ? get products categories
  useEffect(() => {
    axios
      .get("https://aveosoft-react-assignment.herokuapp.com/categories")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // ? get product from api and putting it into redux store
  useEffect(() => {
    axios
      .get("https://aveosoft-react-assignment.herokuapp.com/products")
      .then((res) => {
        dispatch(itemAction.createList(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch]);

  // ? filter
  useEffect(() => {
    if (!selectedCategoryId && productFromRedux) {
      setFilteredProducts(productFromRedux);
    } else if (selectedCategoryId && productFromRedux) {
      const result = productFromRedux.filter(
        (product) => parseInt(selectedCategoryId) === product.categoryId
      );

      setFilteredProducts(result);
    }
  }, [productFromRedux, selectedCategoryId]);

  return (
    <div>
      <div className="categories">
        <div className="categories__label">Product Category</div>

        {categories ? (
          <select
            onChange={(e) => {
              setSelectedCategoryId(e.target.value);
            }}
          >
            <option value="">All</option>
            {categories.map((cat) => (
              <option value={cat.id} key={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        ) : (
          ""
        )}
      </div>

      {filteredProducts ? <Product products={filteredProducts} /> : "loading"}
    </div>
  );
}

export default Products;
