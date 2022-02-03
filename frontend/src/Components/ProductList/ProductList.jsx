import React from "react";
import { fetchData } from "../../middleware/requestHandler";
import { Card } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "./ProductList.css";
function ProductList() {
  const [list, setList] = React.useState([]);
  React.useEffect(async () => {
    const res = await fetchData("/products", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (res.success) {
      setList(res.data);
      console.log(list);
    }
  }, []);

  return (
    <>
      <div className="product_list_category">
        <h1 style={{ textAlign: "center" }}>Product List</h1>
        <hr />
        <div className="product_list_container">
          {list.length > 0 &&
            list.map((e, i) => {
              console.log(e);
              return (
                <Card
                  bg="success"
                  key={i}
                  text={"light" === "light" ? "dark" : "white"}
                  style={{ width: "18rem" }}
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
                    <Card.Title><span className="tag">Brand: </span>{e.brand}</Card.Title>
                    <Card.Text ><span className="tag" >Price :</span> Rs.{e.price}</Card.Text>
                    <Card.Text><span className="tag">Color: </span>{e.product_color}</Card.Text>
                    <div >{e.description}</div>
                     </Card.Body>
                </Card>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default ProductList;
