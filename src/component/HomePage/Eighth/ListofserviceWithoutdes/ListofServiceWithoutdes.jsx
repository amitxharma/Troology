import React from 'react'
import { Container } from 'react-bootstrap'
import './Listofservicewithoutdes.css'
const ListofServiceWithoutdes = ({svgcode,title}) => {
  return (
   <Container fluid className="listofservicewithoutdes">
     {svgcode}
    <p className="listofservicewithoutdes-title">{title}</p>
   </Container>
  )
}

export default ListofServiceWithoutdes