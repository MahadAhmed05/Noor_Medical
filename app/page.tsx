import Navbar from "./components/Navbar";
import CustomCarousel from "./components/CustomCarousal";
import PopularProducts from "./components/Popular-Products";
import CategoryCarousel from "./components/Category";
import Brands from "./components/Brands";
import CareByCondition from "./components/CareByCondition";
import WhatsAppButton from "./components/WhatsAppBtn";
import PharmacyContactSection from "./components/Location";
import Footer from "./components/Footer";

export default function Home() {

  return (
    <div>
      <Navbar/>
      <CustomCarousel/>
      <PopularProducts/>
      <CategoryCarousel/>
      <CareByCondition/>
      <Brands/>
      <WhatsAppButton/>
      <PharmacyContactSection/>
      <Footer/>
    </div>
  );
}
