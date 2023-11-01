import React from "react";
import classes from "./BottomSection.module.css";
import ServiceBlock from "./ServiceBlock/ServiceBlock";
import { Container } from "react-bootstrap";
const BottomSection = () => {
  const data = [
    { title: "Commissioning & Decommissioning", message: "Avail transportation services from to get your machine moved tansportation services from to get your machine moved across", imageurl: "asset/image529.png", bottomTitle: "One Time Repair" },
    { title: "Commissioning & Decommissioning", message: "Avail transportation services from to get your machine moved tansportation services from to get your machine moved across", imageurl: "asset/image560.png", bottomTitle: "AMC" },
    { title: "Commissioning & Decommissioning", message: "Avail transportation services from to get your machine moved tansportation services from to get your machine moved across", imageurl: "asset/image560(1).png", bottomTitle: "AMC" },
    { title: "Commissioning & Decommissioning", message: "Avail transportation services from to get your machine moved tansportation services from to get your machine moved across", imageurl: "asset/image558.png", bottomTitle: "Logistics" },
  ];
  return (
    <Container fluid className={classes.maindiv}>
    {data.map((item,index)=>(
        <ServiceBlock key={index} pos={index} title={item.title} message={item.message} imageurl={item.imageurl} bottomTitle={item.bottomTitle}/>
)    )}
    </Container>
  );
};

export default BottomSection;
