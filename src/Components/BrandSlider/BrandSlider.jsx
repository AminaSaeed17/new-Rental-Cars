import SliderModule from "react-slick";
import { brands } from "../../assets/BrandsImg";

const Slider = SliderModule.default ?? SliderModule;

export default function BrandSlider() {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className="my-16 ">
        <Slider {...settings}>
          {brands.map((brand, index) => (
            <div key={index}>
              <img
                src={brand}
                alt="brand"
              />
            </div>
          ))}
        </Slider>
    </div>
  );
}