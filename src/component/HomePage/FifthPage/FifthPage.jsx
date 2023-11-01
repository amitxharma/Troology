import React from "react";
import { Container } from "react-bootstrap";
import TopSection from "../ThirdPage/TopSection/TopSection";
import "./FifthPage.css";
import ImageWithTPB from "./ImageWithTPB/ImageWithTPB";
const FifthPage = () => {
  const topsectionData = {
    heading: "Shop at Origa for",
    buttonName: "View Shop",
    message:
      "From Machines to tools to finance everything you need in one place",
  };
  const bottomSectionData = [
    {
      title: "Machine Spares",
      para: "Get a one time repair service if your machin has broken down",
      imageurl: "asset/image536a.png",
    },
    {
      title: "Machine Spares",
      para: "Get a one time repair service if your machin has broken down",
      imageurl: "asset/image 536.png",
    },
    {
      title: "Machine Spares",
      para: "Get a one time repair service if your machin has broken down",
      imageurl: "asset/image536a.png",
    },
  ];
  return (
    <Container fluid style={{ padding: "0", marginTop: "5rem" }}>
      <Container>
        <TopSection
          heading={topsectionData.heading}
          buttonName={topsectionData.buttonName}
          message={topsectionData.message}
        />
      </Container>
      <Container className="fifthpagemaindiv">
        {bottomSectionData.map((bData, index) => (
          <ImageWithTPB
            key={index}
            title={bData.title}
            para={bData.para}
            imagurl={bData.imageurl}
          />
        ))}
      </Container>
    </Container>
  );
};

export default FifthPage;
