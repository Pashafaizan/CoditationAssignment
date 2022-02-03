import React, { useState } from "react";
import { Form, Button, Container, Col } from "react-bootstrap";
import MultiSelect from "../MultiSelect/MultiSelect";
import AlertFunction from "../Alert/AlertFunction";
import "./productForm.css";
import { fetchData } from "../../middleware/requestHandler";
import { useNavigate } from "react-router-dom";
function ProductForm(props) {
  const navigate = useNavigate();

  const [alert, setAlert] = useState(false);

  const [categories, setCategories] = useState([]);

  React.useEffect(async () => {
    const list = await fetchData("/list/categories", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (list.success) {
      setCategories(list.data);
      console.log(list.data);
      console.log(categories);

      return;
    }
  }, []);

  return (
    <div className="box">
      {/* <h1 className="product_heading">Add Product</h1> */}
      <Container className="product_container">
        <div
          className="back_icon"
          onClick={() => {
            navigate("/");
          }}
        >
          <ion-icon name="arrow-back-circle-outline"></ion-icon>
        </div>
        <h1>Product Form</h1>
        <div>
          <Form>
            <Form.Group className="mb-3" controlId="formBaiscNamr">
              <Form.Label className="text">Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                value={props.product.name}
                onChange={(e) => {
                  props.handleChange("name", e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPrice">
              <Form.Label className="text">Price</Form.Label>
              <Form.Control
                type="text"
                placeholder="price"
                value={props.product.price}
                onChange={(e) => {
                  props.handleChange("price", e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicdes">
              <Form.Label className="text">Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="description"
                value={props.product.description}
                onChange={(e) => {
                  props.handleChange("description", e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicColor">
              <Form.Label className="text">Color</Form.Label>
              <Form.Control
                type="text"
                placeholder="Color"
                value={props.product.product_color}
                onChange={(e) => {
                  props.handleChange("product_color", e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicBrand">
              <Form.Label className="text">Brand</Form.Label>
              <Form.Control
                type="text"
                placeholder="Brand"
                value={props.product.brand}
                onChange={(e) => {
                  props.handleChange("brand", e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicBrand">
              <MultiSelect
                options={categories}
                value={props.product.categories}
                handleChange={(v) => props.handleChange("categories", v)}
              />
            </Form.Group>
            <Button variant="secondary" onClick={props.onSubmit} type="submit">
              {props.btntext}
            </Button>
          </Form>
        </div>
      </Container>
      <div
        style={{
          position: "relative",
          top: 20,
          left: 0,
          width: 400,
          height: 300,
        }}
      >
        {alert && (
          <AlertFunction
            varient="success"
            message="Successfully Upload"
            des="product data sucessfully added in database"
          />
        )}
      </div>
    </div>
  );
}

export default ProductForm;
