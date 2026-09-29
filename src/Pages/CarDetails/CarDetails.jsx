import { useContext } from "react";
import { useParams } from "react-router-dom";
import { carContext } from "../../Context/CarsContext";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import carSection from "../../assets/imges/landing-page/sec-5/Audi 1.png";
import Loading from "../../Components/Loading/Loading";

export default function CarDetails() {
  const { id } = useParams();

  const { cars, loading } = useContext(carContext);

  const car = cars?.find((car) => car.id === Number(id));

 

  console.log(car);

  return (
    <>
    {loading? <Loading/> : <section className="p-15 h-[100vh] relative">
        <div
                className="absolute -left-70 -z-1 h-full w-[890px] pointer-events-none select-none bg-[#1572D31A]"
                style={{
                  clipPath: "polygon(49% 0, 100% 100%, 49% 76%, 0 100%)",
                }}
              />
        <Breadcrumb />
        <div className="flex ">
          <div className="flex items-center ">
            <div className="z-10 w-full h-full flex items-center justify-center">
              <img
                src={carSection}
                alt="carSection"
                className="object-contain object-center translate-y-20 -translate-x-20"
              />
            </div>
          </div>
          <div className="flex flex-col gap-14 px-10">
            <div >
              <button className="px-8 py-4 bg-[#1572D31A] rounded-lg font-medium text-sm mb-5">
                WHY CHOOSE US
              </button>

              <h2 className="font-semibold text-[28px] md:text-[38px] leading-snug text-[#333333] mb-10">
                We offer the best experience with our rental deals
              </h2>
            </div>
            <div className="text-[#959595] flex flex-col gap-5">
              <p>
                <i className="fa-solid fa-palette"></i> {car.car_color}{" "}
              </p>
              <p>
                <i className="fa-regular fa-calendar"></i>{" "}
                {car.car_model_year}{" "}
              </p>

              <p>
                <span
                  className={`${car.availability ? "text-green-500" : "text-red-500"}, flex`}
                >
                  <span
                    className={`inline-block w-4 h-4 rounded-full mr-1 ${
                      car.availability ? "bg-green-500" : "bg-red-500"
                    }`}
                  ></span>
                  {car.availability ? "Available" : "Not Available"}
                </span>
              </p>
              <p>
                <i className="fa-solid fa-car-rear"></i> 4 Doors
              </p>
            </div>
          </div>
        </div>
      </section>}
      
    </>
  );
}
