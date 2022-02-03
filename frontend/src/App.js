import "./App.css";
import React from "react";
import Header from "../src/Components/Header/Header";
import Category from "../src/Components/Categories/Categories";
import ProductList from "../src/Components/ProductList/ProductList";
import UpdateProductForm from "../src/Components/ProductForm/UpdateProductForm";
import CreateProductForm from "../src/Components/ProductForm/CreateProductForm";
import CategoryList from "../src/Components/CategoryList/CategoryList";

import { Routes, Route } from "react-router-dom";
import { fetchData } from "./middleware/requestHandler";
function App() {
  const [list, setList] = React.useState([]);
  React.useEffect(async () => {
    const res = await fetchData("/products", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (res.success) {
      setList([res.data]);
    }
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Header />
              <ProductList list={list} />
            </>
          }
        />
        <Route
          path="/add/product"
          element={
            <>
              <Header />
              <CreateProductForm />
            </>
          }
        />
        <Route
          path="/add/category"
          element={
            <>
              <Header />
              <Category />
            </>
          }
        />
        <Route
          path="/updateproduct/:id"
          element={
            <>
              <Header />
              <UpdateProductForm />
            </>
          }
        />
        <Route
          exact
          path="/category/list"
          element={
            <>
              <Header />
              <CategoryList />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
