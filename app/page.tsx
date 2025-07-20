import Image from "next/image";
import Navbar from "./components/Navbar";
import CustomCarousel from "./components/CustomCarousal";
import PopularProducts from "./components/Popular-Products";
import CategoryCarousel from "./components/Category";
import Brands from "./components/Brands";
import CareByCondition from "./components/CareByCondition";
import WhatsAppButton from "./components/WhatsAppBtn";

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
    </div>
  );
}
