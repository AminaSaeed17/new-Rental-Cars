import AboutUs from "../../Components/AboutUs/AboutUs";
import BrandsSlider from "../../Components/BrandSlider/BrandSlider";
import Downloadapp from "../../Components/Downloadapp/Downloadapp";
import HeroSection from "../../Components/HeroSection/HeroSection";
import HowWork from "../../Components/HowWork/HowWork";
import RentalCars from "../../Components/RentalCars/RentalCars";
import WhyChoose from "../../Components/WhyChoose/WhyChoose";
import Reveal from "../../Components/Reveal/Reveal";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />

      <Reveal delay={500}><RentalCars /></Reveal>
      <Reveal delay={500}><HowWork /></Reveal>
      <Reveal delay={500}><BrandsSlider /></Reveal>
      <Reveal delay={500}><WhyChoose /></Reveal>
      <Reveal delay={500}><AboutUs /></Reveal>
      <Reveal delay={500}><Downloadapp /></Reveal>
    </div>
  );
}