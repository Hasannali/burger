import Banner from "./components/Banner";
import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Progressor from "./components/Progressor";
import Offer from "./components/Offer";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Menuitem from "./components/Menuitem";
import ReservationSection from "./components/Reservation";


export default function App() {
  return (
    <div className="bg-gradient-to-r from-black to-slate-900">
      <Navbar></Navbar>
      <Carousel></Carousel>
      <Progressor></Progressor>
      <Products></Products>
      <Banner></Banner>
      <Menuitem></Menuitem>
      <Offer></Offer>
      <Cards></Cards>
      <ReservationSection />
      <Footer></Footer>
    </div>
  );
}
