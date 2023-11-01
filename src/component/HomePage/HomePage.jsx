import React from "react";
import SecondPage from "./SecondPage/SecondPage";
import FourthPage from "./FourthPage/FourthPage";
import Footer from "../Footer/Footer";
import classes from "./Home.module.css";
import FirstSection from "./FirstPage/FirstSection";
import SixthSection from "./SixthPage/SixthSection";
import FifthPage from "./FifthPage/FifthPage";
import SeventhPage from "./SeventhPage/SeventhPage";
import EighthPage from "./Eighth/EighthPage";
import Tenth from "./Tenth/Tenth";
import benefitsOfGlance from "./benefitsOfGlance/benefitsOfGlance";
function HomePage() {
  return (
    <div className={classes.maindiv}>
      <FirstSection />
      <SecondPage />
      {/* <ThirdPage /> */}
      {/* <FourthPage /> */}
      {/* <FifthPage /> */}
      {/* <SixthSection /> */}
      {/* <SeventhPage /> */}
      {/* <EighthPage /> */}
      <Tenth />
      <benefitsOfGlance />
      <Footer />
    </div>
  );
}

export default HomePage;
