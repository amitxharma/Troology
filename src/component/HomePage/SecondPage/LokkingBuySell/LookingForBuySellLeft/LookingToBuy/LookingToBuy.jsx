import React from 'react'
import './LookingToBuy.css';
import Button from '../../../../../Button/Button';
import { Container } from 'react-bootstrap';
import Search from '../../../../../SubComponent/Search/Search';
const LookingToBuy = () => {
  return (
    <Container fluid className='lookingtobuy'>
    <p className="lookingtobuy-heading">Search for a Machine</p>
    <div>
      <p className="lookingtobuy-message">Find a wide variety of machines from across India to fit your requirements</p>
    </div>
    <div>
    <Search message={"Which Machine are you looking for?"} microphone={false}/>
    </div>

    <div className="buttonAndLearnBox">
    <Button message='Search'/>
    <p>Learn More</p>
    </div>
    </Container>
  )
}

export default LookingToBuy