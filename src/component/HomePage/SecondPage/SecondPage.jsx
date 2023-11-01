import React from "react";
import "./Second.css";
import OrigaService from "../../OrigaService/OrigaService";
import ListofService from "./ListofService";
import LookingForBuySell from "./LokkingBuySell/LookingForBuySell";
import { Container } from "react-bootstrap";
const SecondPage = () => {
  return (
    <Container fluid>
      <Container className="secondsection">
        <div>
          {" "}
          <OrigaService />
        </div>
        <h1>The Services offered by Us</h1>
        <p className="para">
          From Machines to tools to finance everything you need in one place
        </p>
      </Container>
    </Container>
  );
};

export default SecondPage;
