import React from "react";
import ProductForm from "./ProductForm";
import { fetchData } from "../../middleware/requestHandler";
import AlertFunction from "../Alert/AlertFunction";
import "../ProductForm/ProductForm";
function CreateProductForm() {
  const [alert, setAlert] = React.useState(false);

  const [formValues, setFormValues] = React.useState({
    name: "",
    product_color: "",
    price: "",
    description: "",
    brand: "",
    product_categories: [],
    field: "",
  });

  const handleChange = (key, data) => {
    setFormValues({ ...formValues, [key]: data });
  };
  const submitData = async (event) => {
    event.preventDefault();

    const res = await fetchData("/create/product", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formValues),
    });

    if (res.success) {
      setAlert(true);
      setFormValues({
        name: "",
        product_color: "",
        price: "",
        description: "",
        brand: "",
        product_categories: [],
        field: "",
      });
      window.location.reload();
    }
  };

  React.useEffect(() => {
    setInterval(() => {
      setAlert(false);
    }, 5000);
  }, []);

  return (
    <div>
      <ProductForm
        handleChange={handleChange}
        product={formValues}
        onSubmit={submitData}
        btntext="Submit"
      />
      {alert && (
        <AlertFunction
          varient="success"
          message="Successfully Upload"
          des="product data sucessfully added in database"
        />
      )}
    </div>
  );
}

export default CreateProductForm;
