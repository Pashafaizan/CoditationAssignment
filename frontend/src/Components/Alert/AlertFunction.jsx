import React from "react";
import { Alert } from "react-bootstrap";
function AlertFunction({ varient, message, des }) {
  return (
    <div style={{ position: "absolute", bottom: 0, transition: "50s easeIn" }}>
      <Alert variant={varient}>
        <Alert.Heading>{message}</Alert.Heading>
        <p>{des}</p>
        {/* <hr />
  <p className="mb-0">
    Whenever you need to, be sure to use margin utilities to keep things nice
    and tidy.
  </p> */}
      </Alert>
    </div>
  );
}

export default AlertFunction;
