import React from "react";
import classes from "./Footer.module.css";
import { Container } from "react-bootstrap";
const Footer = () => {
  let message =
    "Origa.market is operated by Origa Technologies Private Limited (CIN: U74999MH2021PTC366771 ). Origa Technologies Private Limited provides end to end equipment solutions, for MSME’s and Healthcare, from procurement and maintenance to disposal.";

  return (
    <Container fluid className={classes.maindiv}>
      <Container className={classes.ninthcontainer}>
        <div className={classes.messagecontainer}>
          <img
            className={classes.companylogo}
            src="asset/image 6.png"
            alt="origamarket.png"
          />
          <p>{message}</p>
        </div>

        <div className={classes.info}>
          <h3>Origa</h3>
          {/* <NavLink to="aboutus"> */}
          <p>About us</p>
          {/* </NavLink>  */}
          <p>FAQs</p>
          <p>Origa Network</p>
          <p>Partner with Us</p>
        </div>
        <div className={classes.info}>
          <h3>Used Machinery</h3>
          <p>Buy</p>
          <p>Sell</p>
          <p>Service</p>
          <p>Store</p>
        </div>
        <div className={classes.info}>
          <h3>Contact Us:</h3>
          <div className={classes.socialmediadiv}>
            <img
              className={classes.socialmedia}
              src="asset/info.svg"
              alt="ion_call-outline.svg"
            />
            <p>info@origa.com</p>
          </div>
          <div className={classes.socialmediadiv}>
            <img
              className={classes.socialmedia}
              src="asset/ion_call-outline.svg"
              alt="ion_call-outline.svg"
            />{" "}
            <p>+91-94305 45234</p>
          </div>
          <div className={classes.socialmediadiv}>
            <img
              className={classes.socialmedia}
              src="asset/location.svg"
              alt="location.svg"
            />
            <p>Andheri East, Mumbai</p>
          </div>
          <div className={classes.socialmedialogo}>
            <img
              className={classes.socialmedia}
              src="asset/facebook.svg"
              alt="facebook.svg"
            />
            <img
              className={classes.socialmedia}
              src="asset/twitter.svg"
              alt="twitter.svg"
            />
            <img
              className={classes.socialmedia}
              src="asset/instagram.svg"
              alt="instagram.svg"
            />
            <img
              className={classes.socialmedia}
              src="asset/youtube.svg"
              alt="youtube.svg"
            />
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default Footer;
