import { Container } from 'react-bootstrap'
import React, { useEffect, useState,useRef } from "react";
import ProductBlock from "../../Block/ProductBlock";
import VectorBlock from "../../Vector/VectorBlock";
import "./SixthPage.css";
const SixthSection = () => {
    const[box,setBox]=useState(0);
    const sliderRef = useRef(null);
   
        const btnpressprev = () => {
            let width = box.clientWidth;
            box.scrollLeft = box.scrollLeft - width;
            console.log(width)
        }
    
        const btnpressnext = () => {
            let width = box.clientWidth;
            box.scrollLeft = box.scrollLeft + width;
            console.log(width)
        }
    
      const heading = "Our Product categories";
      const para =
        "From Machines to tools to finance everything you need in one place";
      const containerData = [
        {
          title: "Lubricants & Oils",
          message: "Get a one time repair service if your machin has broken down",
          discount: 25,
          productQuentity: 200,
          imageUrl: "asset/image560(2).png",
        },{
            title:'Welding & Soldering',
            message:'Get a one time repair service if your machin has broken down',
            discount:25,
            productQuentity:200,
            imageUrl:"asset/image536(2).png"
        },{
            title:'Safety Equipment',
            message:'Get a one time repair service if your machin has broken down',
            discount:25,
            productQuentity:200,
            imageUrl:"asset/image529(1).png"
        },{
            title:'Welding & Soldering',
            message:'Get a one time repair service if your machin has broken down',
            discount:25,
            productQuentity:200,
            imageUrl:"asset/image536(2).png"
        },
        {
          title: "Lubricants & Oils",
          message: "Get a one time repair service if your machin has broken down",
          discount: 25,
          productQuentity: 200,
          imageUrl: "asset/image560(2).png",
        },{
            title:'Welding & Soldering',
            message:'Get a one time repair service if your machin has broken down',
            discount:25,
            productQuentity:200,
            imageUrl:"asset/image536(2).png"
        },{
            title:'Safety Equipment',
            message:'Get a one time repair service if your machin has broken down',
            discount:25,
            productQuentity:200,
            imageUrl:"asset/image529(1).png"
        },{
            title:'Welding & Soldering',
            message:'Get a one time repair service if your machin has broken down',
            discount:25,
            productQuentity:200,
            imageUrl:"asset/image536(2).png"
        }
      ];
      useEffect(()=>{
        setBox(sliderRef.current);
      },[])
      return (
        <Container fluid className="sixthsection-maindiv">
          <Container className='sixthsection-heading'>
             <Container fluid>
                <h1>{heading}</h1>
                <p>{para}</p>
             </Container>
            <VectorBlock onMoveLeft={btnpressprev} onMoveRight={btnpressnext}/>            
          </Container>
         
          <Container className="sixthSectionSlider"  ref={sliderRef}>
            {containerData.map((product, index) => (
              <ProductBlock
                key={index}
                title={product.title}
                message={product.message}
                imageUrl={product.imageUrl}
                discount={product.discount}
                productQuentity={product.productQuentity}
              />
            ))}
          </Container>
        </Container>
      );
    };

export default SixthSection