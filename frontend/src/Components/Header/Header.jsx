import React from "react";
import Navbar from "react-bootstrap/Navbar";
import {
  Container,
  Nav,
  Offcanvas

} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
function Header() {
  return (
    <div>
      <Navbar bg="primary" expand={false}>
        <Container fluid>
          <Navbar.Brand  href="/">Coditation Assignment</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link className="header_item" href="/">
                <ion-icon name="list-outline"></ion-icon>
                  <div>Product list</div>
                </Nav.Link>

                <Nav.Link className="header_item" href="/add/product">
                  <ion-icon name="add-circle-outline"></ion-icon>
                  <div> Add Product</div>
                </Nav.Link>
                <Nav.Link className="header_item" href="/category/list">
                <ion-icon name="list-outline"></ion-icon>
                  <div>Category list</div>
                </Nav.Link>

                <Nav.Link className="header_item" href="/add/category">
                  <ion-icon name="add-circle-outline"></ion-icon>
                  <div> Add Category</div>
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
