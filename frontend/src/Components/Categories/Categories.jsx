import React from "react";
import { Form, Button, Container, Col } from "react-bootstrap";
import { fetchData } from "../../middleware/requestHandler";
import AlertFunction from "../Alert/AlertFunction";
function Categories() {
  const [category_name, setName] = React.useState("");
  const [category, setCategory] = React.useState([]);
  const [parent_id, setParentCategory] = React.useState(null);
  const [effect, setEffect] = React.useState("calll");
  const [alert, setAlert] = React.useState(false);
  const submitData = async (event) => {
    event.preventDefault();
    let payload = {
      category_name,
      parent_id,
    };
    console.log("faizan pasha");
    console.log(payload);
    const res = await fetchData("/add/category", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    console.log(res.success);
    if (res.success) {
      setEffect("effect");
      setParentCategory(" ");
      setName(" ");
      setAlert(true);
      console.log("faizan pasha ");
      window.location.reload();
    }
  };
  React.useEffect(async () => {
    const list = await fetchData("/list/categories", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (list.success) {
      setCategory(list.data);

      return;
    }
  }, []);

  React.useEffect(() => {
    setInterval(() => {
      setAlert(false);
    }, 5000);
  }, []);

  return (
    <div >
      <Container className="product_container">
        <h1>Category Form</h1>
        <hr />
        <Form.Group className="mb-3" controlId="formBaiscNamr">
          <Form.Control
            type="text"
            placeholder="Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Select
            aria-label="Default select example"
            onChange={(e) => {
              console.log(e.target.value);
              setParentCategory(e.target.value);
            }}
          >
            <option>Parent Category</option>
            {category.map((e) => {
              return (
                <>
                  <option value={e._id}>{e.category_name}</option>
                </>
              );
            })}
          </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={submitData}>
          Submit
        </Button>
      </Container>
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

export default Categories;
