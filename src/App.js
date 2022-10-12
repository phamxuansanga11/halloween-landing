import { useEffect, useState } from "react";
import AboutHalloween from "./components/AboutHalloween/AboutHalloween";
import BtnBackToTop from "./components/BtnBackToTop/BtnBackToTop";
import Discount from "./components/Discount/Discount";
import Favorite from "./components/Favorite/Favorite";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NewArrivals from "./components/NewArrivals/NewArrivals";
import OurNewsletter from "./components/OurNewsletter/OurNewsletter";
import Slider from "./components/Slider/Slider";
import TrickOrTreat from "./components/TrickOrTreat/TrickOrTreat";

function App() {
  const [isShowBtnBackToTop, setIsShowBtnBackToTop] = useState(false);
  useEffect(() => {
    let positionScroll;
    window.addEventListener("scroll", () => {
      positionScroll = window.pageYOffset;
      if (positionScroll > 700) {
        setIsShowBtnBackToTop(true);
      } else {
        setIsShowBtnBackToTop(false);
      }
    });
  });
  return (
    <>
      <Header />
      <Slider />
      <Favorite />
      <AboutHalloween />
      <TrickOrTreat />
      <Discount />
      <NewArrivals />
      <OurNewsletter />
      {isShowBtnBackToTop && <BtnBackToTop />}
      <Footer />
    </>
  );
}

export default App;
