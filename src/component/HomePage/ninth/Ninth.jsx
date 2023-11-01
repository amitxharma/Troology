import React from 'react'
import { Container } from 'react-bootstrap'

const Ninth = () => {
  return (
    <Container fluid>
        
  <Container className="ninth-left">
          <Container
            fluid
            className="ninth-left-top"
            style={{ paddingRight: 0 }}
          >
            <OrigaService />
            <HeadingPara heading={heading} para={para} />
      
          </Container>
    </Container>
    </Container>
  )
}

export default Ninth