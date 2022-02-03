import React from "react";
import { fetchData } from "../../middleware/requestHandler";
import { Form, Button, Container, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "./ProductList.css";
function ProductList() {
  const [list, setList] = React.useState([]);
  const [category, setCategory] = React.useState([]);
  const [query, setQuery] = React.useState("all");

  React.useEffect(async () => {
    const res = await fetchData(`/products?cateogry=${query}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (res.success) {
      setList(res.data);
    }
  }, [query]);

  React.useEffect(async () => {
    const list = await fetchData(`/list/categories`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (list.success) {
      setCategory(list.data);

      return;
    }
  }, []);

  return (
    <>
      <div className="product_list_category">
        <div className="flex">
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            >
              <option value={"all"}>All</option>
              {category.map((e) => {
                return (
                  <>
                    <option value={e._id}>{e.category_name}</option>
                  </>
                );
              })}
            </Form.Select>
          </Form.Group>
          <h1 style={{ textAlign: "center" }}>Product List</h1>
        </div>
        <hr />
        <div className="product_list_container">
          {list.length > 0 ? (
            list.map((e, i) => {
              return (
                <Card
                  bg="success"
                  key={i}
                  text={"light" === "light" ? "dark" : "white"}
                  style={{ width: "18rem", height: 300 }}
                  className="mb-2"
                >
                  <Card.Header>
                    <div className="product_header">
                      <h5>{e.name}</h5>
                      <Link to={`/updateproduct/${e._id}`}>
                        {" "}
                        <ion-icon
                          name="create-outline"
                          class="edit_icon"
                        ></ion-icon>
                      </Link>{" "}
                    </div>
                  </Card.Header>
                  <Card.Body>
                    <Card.Title>
                      <span className="tag">Brand: </span>
                      {e.brand}
                    </Card.Title>
                    <Card.Text>
                      <span className="tag">Price :</span> Rs.{e.price}
                    </Card.Text>
                    <Card.Text>
                      <span className="tag">Color: </span>
                      {e.product_color}
                    </Card.Text>
                    <div className="des">{e.description}</div>
                  </Card.Body>
                </Card>
              );
            })
          ) : (
            <div className="no-content">No Product</div>
          )}
        </div>
      </div>
    </>
  );
}

export default ProductList;
