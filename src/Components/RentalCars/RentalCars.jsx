import { useContext } from "react";
import { carContext } from "../../Context/CarsContext";
import CarCard from "../CarCard/CarCard";
import { useNavigate } from "react-router-dom";
import HeaderShare from "../HeaderShare/HeaderShare";

export default function RentalCars() {
  const { cars } = useContext(carContext);
  const navigate = useNavigate();
  const currentCars = cars?.slice(0, 4);
  console.log(currentCars);
  return (
    <>
      <section className="px-5 flex flex-col justify-center items-center gap-16">
        <div className="text-center">
          <HeaderShare title={'POPULAR RENTAL DEALS'} subTitle={'Most popular cars rental deals'}/>
        </div>
        <div className="flex justify-center gap-8 flex-wrap">
          {currentCars?.map((car) => (
            <CarCard car={car} />
          ))}
        </div>
        <button
          className="group p-2 rounded-lg w-54 border border-[#E0E0E0] text-[#4E4E4E] text-[14px] font-medium flex gap-2 justify-center items-center mt-6 cursor-pointer"
          onClick={() => navigate("/cars")}
        >
          Show all vehicles
          <i className="fa-solid fa-arrow-right-long transition-transform duration-300 group-hover:translate-x-2"></i>
        </button>
      </section>
    </>
  );
}
