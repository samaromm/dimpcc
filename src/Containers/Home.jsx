import React from "react";
import Header from "../Components/Header";
import Info from "../Components/InfoUnderHeader";
import WhoAreWe from "../Components/WhoAreWe";
import Fields from "../Components/OurFields";
import Gallery from "../Components/ImgGallery";
import CEOWord from "../Components/CEOWord";
import Contact from "../Components/Contact";
import Credit from '../Components/Credit'
import "../Components/Styles.css";

const Home = () => {
  return (
    <div>
      <div className="relative">
        <Header />
        <Info />
      </div>
      <WhoAreWe />
      <Fields />
      <Gallery />
      <CEOWord />
      <Contact />
      <Credit/>
    </div>
  );
};

export default Home;
