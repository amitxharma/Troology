import React from 'react'
import './LookingForBuySell.css'
import LookingForBuySellLeft from './LookingForBuySellLeft/LookingForBuySellLeft'
import LookingForBuySellRight from './LookingForBuySellRight/LookingForBuySellRight'
import { Container } from 'react-bootstrap'
const LookingForBuySell = () => {
  return (
    <Container fluid className='Lookingforbuysell'>
     <Container fluid style={{padding:'0',margin:'0'}}><LookingForBuySellLeft/></Container>
     <Container fluid style={{padding:'0',margin:'0'}}><LookingForBuySellRight/></Container>  
     </Container>
  )
}

export default LookingForBuySell