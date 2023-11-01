import React from "react";
import './ListofService.css'
import { Container} from "react-bootstrap";
import ImagewithTitlep from "../../SubComponent/ImagewithTitlep/ImagewithTitlep";
const ListofService = () => {

  const services = [
    { title: "Buy Machine", imageSource: "asset/buy_machine.svg" ,message:'Over 5000 Machines Available' },
    { title: "Sell Machine", imageSource: "asset/sell_machine.svg",message:'Over 5000 Machines Available' },
    { title: "Servicing", imageSource: "asset/Servicing.svg" ,message:'Over 5000 Machines Available' },
    { title: "Lease Equipment", imageSource: "asset/lease_equipment.svg",message:'Over 5000 Machines Available' },
    { title: "Equipment Loan", imageSource: "asset/equipment_loan.svg" ,message:'Over 5000 Machines Available' },
    {title:"Shop",imageSource:"asset/shop.svg",message:'Over 5000 Machines Available' }
  ];
  return (
  <Container fluid className="listofservice-maindiv">{
    services.map(({title,imageSource,message},index)=>
    <ImagewithTitlep title={title} imageSource={imageSource} index={index} message={message}/>
    )
  }</Container>
  );
};

export default ListofService;
