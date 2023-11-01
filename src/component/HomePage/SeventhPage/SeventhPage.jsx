import React from 'react'
import { Container } from 'react-bootstrap'
import TopSection from '../ThirdPage/TopSection/TopSection'
import './seventhsection.css'
import ImageWithTppb from '../../SubComponent/ImageWithTppb/ImageWithTppb'
const SeventhPage = () => {
    const topsectionData={heading:'Recently Viewed Machines',message:'From Machines to tools to finance everything you need in one place',buttonName:"View Shop"}
  const bottomSectionData=[
    {
      imageurl:"asset/image 561.png",
      title:"CNC Machine",
      para:"Hitachi | Mumbai",
      time:"7 Year Old",
      price:"₹75500"
    },{
    imageurl:"asset/image 561.png",
    title:"CNC Machine",
    para:"Hitachi | Mumbai",
    time:"7 Year Old",
    price:"₹75500"
  },{
    imageurl:"asset/image 561.png",
    title:"CNC Machine",
    para:"Hitachi | Mumbai",
    time:"7 Year Old",
    price:"₹75500"
  },{
    imageurl:"asset/image 561.png",
    title:"CNC Machine",
    para:"Hitachi | Mumbai",
    time:"7 Year Old",
    price:"₹75500"
  }]
    return (
    <Container fluid className='seventhsectionmaindiv'>
            <Container><TopSection heading={topsectionData.heading} buttonName={topsectionData.buttonName} message={topsectionData.message}/></Container>
            <Container fluid className='seventhsectionbottom'>
               {
                bottomSectionData.map((product,index)=>(
                    <ImageWithTppb key={index} title={product.title} price={product.price} imgurl={product.imageurl} time={product.time} para={product.para} />
                ))
               }
            </Container>
    </Container>
  )
}

export default SeventhPage