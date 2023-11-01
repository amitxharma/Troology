import React from 'react'
import OrigaService from '../../../OrigaService/OrigaService'
import classes from './TopSection.module.css';
import Vector from '../../../Vector/Vector';
import { Container } from 'react-bootstrap';
const TopSection = ({heading,buttonName,message}) => {
  return (
    <>
    <Container><OrigaService/></Container>
    <Container  className={classes.maindiv}>
       <h1 className={classes.h1}>{heading}</h1>
        <div className={classes.learnMorediv}><button>{buttonName}</button><Vector move={true}/></div>
    </Container>
    <Container><p className={classes.p}>{message}</p></Container>
    </>
  )
}

export default TopSection