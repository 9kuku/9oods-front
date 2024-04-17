/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import ProductList from "../component/itemList/products";
import useAuth from "../hooks/useAuth";
import { mainContainer } from "../shared/globalStyle";
import { getAllProductApi } from "../api/products";
import ProductContextWrapper from "../context/ProductsContext";
import ProductsList from "../component/itemList/products";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  function handleAllProductClick() {
    navigate("/products/allProducts");
  }
  function handleSellerProductClick() {
    navigate("/sellerproducts");
  }
  return (
    <>
      <section css={mainContainer}>
        <div onClick={handleAllProductClick} style={{ cursor: "pointer", color: "white" }}>상품등록</div>
        <div onClick={handleSellerProductClick} style={{ cursor: "pointer", color: "white" }}>상품수정</div>
        <div onClick={handleSellerProductClick} style={{ cursor: "pointer", color: "white" }}>상품통계</div>
      </section>
    </>
  );
};
export default Products;