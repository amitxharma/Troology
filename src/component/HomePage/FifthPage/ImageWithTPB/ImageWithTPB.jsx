import React,{useState} from 'react'
import { Container,Image } from 'react-bootstrap'
import Button from '../../../Button/Button'
import './ImageWithTPB.css'
const ImageWithTPB = ({title,para,imagurl}) => {
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
   <Container className={`imagewithtpb ${isHovered ? "hovered":""}` } onMouseEnter={onMouseEnterhandler} onMouseLeave={onMouseLeavehandler}>
    <Image src={imagurl}/>
    <h1>{title}</h1>
    <p>{para}</p>
    <Button message={"Search"}/>
   </Container>
  )
}

export default ImageWithTPB