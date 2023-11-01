import React from 'react'
import { Container } from 'react-bootstrap'
import './Block.css'
const Block = ({imageurl,heading,message}) => {
  return (
    <Container fluid className="block">
    <div >
    <img src={imageurl} alt={imageurl} />
    </div>
      
      <h2>{heading}</h2>
      <p>{message}</p>
    </Container>
  )
}

export default Block