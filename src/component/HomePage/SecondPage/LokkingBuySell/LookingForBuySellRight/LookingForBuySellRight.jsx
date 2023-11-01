import React from "react";
import classes from "./LookingForBuySellRight.module.css";
import Block from "../../../../Block/Block";
import { Container } from "react-bootstrap";
const LookingForBuySellRight = () => {
  const blockdata = [
    { imageUrl:'asset/checks.svg',
   heading:'250+ Checks',
   message:'Our Engineers check every machine in order to assure the best quality for your money.'
   },
    { imageUrl:'asset/deliveredto.svg',
    heading:'Delivered to you',
    message:'No matter which machine you select from across the country we will get it delivered to you'
  }, { imageUrl:'asset/getservice.svg',
      heading:'Get Service & C',
      message:'Origa will provide servicing for your machine so you don’t need to worry about anything...'
  },
    {
      imageUrl: "asset/FinancialSupport.svg",
      heading: "Financial Support",
      message:
        "Origa can provide a lease and loan to enable you to purchase the machine you need",
      title: "block",
    },
  ];
  return (
    <Container fluid className={classes.maindiv}>
      <Container fluid className={classes.innerdiv}>
        {blockdata.map((item, index) => (
            <Block key={index} imageurl={item.imageUrl} heading={item.heading} message={item.message}/>
        ))}
      </Container>
    </Container>
  );
};

export default LookingForBuySellRight;
