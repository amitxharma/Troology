import React from 'react'
import classes from './FourthPage.module.css';
import OrigaService from '../../OrigaService/OrigaService';
import { Container } from 'react-bootstrap';

const FourthPage = () => {
    const heading='We offer Equipment Financing'
    const para='Origa provides tailored machine finance solutions, offering flexible lease and loan options to help you get the Equipment according to your needs'
  return (
    <Container fluid className={classes.maindiv}>
      <div><OrigaService/></div>
      <Container className={classes.headingpara}>
      <h1>{heading}</h1>
      <p>{para}</p>
      </Container>
    <Container  fluid className={classes.fourthpagecontainer}>

        <Container><img src="asset/image276.png" alt="image276.png" /><p>Lease Equipment</p></Container>
        <Container><img src="asset/image276(1).png" alt="image276(1)" /><p>Equipment Loan</p></Container>
    </Container>
    </Container>
  )
}

export default FourthPage