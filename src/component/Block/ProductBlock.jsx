import React,{useState} from 'react'
import './ProductBlock.css'
import { Container } from 'react-bootstrap'
import Button from '../Button/Button';
const ProductBlock = ({title,message,discount,productQuentity,imageUrl}) => {
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
    <Container className={`productblockmaindiv ${isHovered ? "hovered":""}`} onMouseEnter={onMouseEnterhandler} onMouseLeave={onMouseLeavehandler}>
        <p className="discount">
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
  <circle cx="4" cy="4" r="4" fill="#73509E"/>
</svg>&nbsp;&nbsp;
        up to {discount}% OFF</p>
        <div className="imgdiv">
           <img src={imageUrl} alt={imageUrl} />
           </div>
        <p className="productQuentity">{productQuentity}+ Product Available</p>
        <h2 >{title}</h2>
        
      <p className={`productblockmessage  ${isHovered ? "hovered":""}`}>{message}</p>
      {isHovered && <Button message={"Avail Service"}/>}
    </Container>
  )
}

export default ProductBlock