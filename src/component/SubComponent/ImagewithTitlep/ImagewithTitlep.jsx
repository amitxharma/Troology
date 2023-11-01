import React,{useState} from 'react'
import { Container,Image } from "react-bootstrap";
import './ImagewithTitle.css'
const ImagewithTitlep = ({title,imageSource,message,index}) => {
    const [isHovered, setIsHovered] = useState(false);

    const onMouseEnterhandler = () => {
      setIsHovered(true);
      console.log("i am working");
    };
  
    const onMouseLeavehandler = () => {
      setIsHovered(false);
      console.log("i am not working");
    };
  return (
    <Container fluid onMouseEnter={onMouseEnterhandler} onMouseLeave={onMouseLeavehandler} className={`listofservices ${isHovered ? "hovered":null}`} key={index}>
    <Image src={imageSource} alt={imageSource} />
    <p className={`listofservice-title ${isHovered ? "hovered":""}`}>{title}</p>
    <p className={`listofservice-message ${isHovered ? "hovered":""}`}>{message}</p>
    </Container>
  )
}

export default ImagewithTitlep