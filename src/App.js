import AboutHalloween from "./components/AboutHalloween/AboutHalloween";
import Discount from "./components/Discount/Discount";
import Favorite from "./components/Favorite/Favorite";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NewArrivals from "./components/NewArrivals/NewArrivals";
import OurNewsletter from "./components/OurNewsletter/OurNewsletter";
import Slider from "./components/Slider/Slider";
import TrickOrTreat from "./components/TrickOrTreat/TrickOrTreat";

function App() {
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
      <Footer />
    </>
  );
}

export default App;
