import React from "react";
import { useParams } from "react-router-dom";
import ProductForm from "./ProductForm";
import { fetchData } from "../../middleware/requestHandler";
import AlertFunction from "../Alert/AlertFunction";
import { useNavigate } from "react-router-dom";

function UpdateProductForm() {
  const [alert, setAlert] = React.useState(false);
  const navigate = useNavigate();
  const [formValues, setFormValues] = React.useState({
    name: "",
    price: "",
    product_color: "",
    description: "",
    brand: "",
    categories: [],
    field: "",
  });

  const { id } = useParams();

  const submitData = async (event) => {
    event.preventDefault();

    const res = await fetchData(`/update/product/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formValues),
    });

    if (res.success) {
      setAlert(true);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  };
  const handleChange = (key, data) => {
    setFormValues({ ...formValues, [key]: data });
  };

  React.useEffect(async () => {
    const res = await fetchData(`/product/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    const {
      name,
      product_color,
      description,
      brand,
      product_categories,
      price,
      field,
    } = res.data;
    setFormValues({
      name,
      product_color,
      description,
      brand,
      product_categories,
      price,
      field,
    });
  }, []);

  React.useEffect(() => {
    setInterval(() => {
      setAlert(false);
    }, 5000);
  }, []);

  return (
    <div>
      <ProductForm
        handleChange={handleChange}
        onSubmit={submitData}
        product={formValues}
        btntext="Update Product"
      />
      {alert && (
        <AlertFunction
          varient="success"
          message="Successfully Update"
          des="product data sucessfully update in database"
        />
      )}
    </div>
  );
}

export default UpdateProductForm;
