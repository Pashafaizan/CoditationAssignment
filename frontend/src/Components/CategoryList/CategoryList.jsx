import React from "react";
import { fetchData } from "../../middleware/requestHandler";
import Accordion from "react-bootstrap/Accordion";
import "./CategoryList.css";
function CategoryList() {
  const [list, setList] = React.useState([]);

  React.useEffect(async () => {
    const res = await fetchData("/list/childandparent", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    console.log(res.data);
    setList(res.data);
    console.log(list);
  }, []);

  return (
    <div className="product_list_category">
      <h1>Category List</h1>
      {list.map((e, i) => {
        return (
          <>
            <Accordion>
              <Accordion.Item eventKey={i}>
                <Accordion.Header>{e.name}</Accordion.Header>
                {
                e.childCategories.length !=0 ? 
                    e.childCategories.map((child) => {
                    return (
                        <>
                        <Accordion.Body>
                            <div>{child.category_name}</div>
                        </Accordion.Body>
                        </>
                    );
                    })
                :
                    <>
                    <Accordion.Body>
                        <div>No Category</div>
                    </Accordion.Body>
                    </>
                }
              </Accordion.Item>
            </Accordion>
          </>
        );
      })}
    </div>
  );
}

export default CategoryList;
