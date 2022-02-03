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
    category: [],
    field: "",
  });

  const handleChange = (key, data) => {
    console.log(data);
    if ([key] == "category") {
      let arr = [];
      data.map((e, i) => {
        arr[i] = e._id;
      });
      setFormValues({ ...formValues, [key]: arr });
      return;
    }
    setFormValues({ ...formValues, [key]: data });
  };
  const submitData = async (event) => {
    event.preventDefault();
    console.log("faizn pasha");

    const res = await fetchData("/create/product", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formValues, product_categories: formValues.category }),
    });
    console.log(res.success);
    if (res.success) {
      setAlert(true);
      setFormValues({
        name: "",
        product_color: "",
        price: "",
        description: "",
        brand: "",
        category: [],
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

  console.log(formValues);

  return (
    <div>
      <ProductForm
        handleChange={handleChange}
        product={formValues}
        onSubmit={submitData}
        btntext="submit"
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
