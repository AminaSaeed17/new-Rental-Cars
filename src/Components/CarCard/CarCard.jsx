import { Link, useNavigate } from "react-router-dom";
import { carsImg } from "../../assets/BrandsImg";
export default function CarCard({ car }) {
  const navigate = useNavigate();
  return (
    <>
      <div
        key={car.id}
        className="h-105 block w-[256px] p-6 rounded-2xl shadow-card"
      >
          {/* <img className="rounded-base" src={car1} alt /> */}
          
        <Link to="#" className="flex justify-center">
            <img className="rounded-base" src={carsImg[(car.id - 1) % carsImg.length]} alt />
        </Link>
           
        <div>
          <Link to="#">
            <p className="mt-6 mb-2 font-medium tracking-tight text-heading">
              {car.car}
            </p>
          </Link>
          <p className="mb-6 text-body font-medium text-[12px] flex gap-1.5 items-center">
            {car.car_model}
          </p>
          <div className="flex flex-col gap-2 text-[#959595]">
            <div className="flex justify-between text-[12px]">
              <p>
                <i className="fa-solid fa-palette"></i> {car.car_color}{" "}
              </p>
              <p>
                <i className="fa-regular fa-calendar"></i>{" "}
                {car.car_model_year}{" "}
              </p>
            </div>
            <div className="flex justify-between text-[12px]">
              <p>
                <span
                  className={`${car.availability ? "text-green-500" : "text-red-500"}, flex justify-center`}
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
          <hr className="text-[#E0E0E0] my-6" />

          <div>
            <div className="flex justify-between">
              <p className="text-[#595959]">price</p>
              <p className="font-semibold">
                {car.price}{" "}
                <span className="text-[#9C9C9C] font-normal">/day</span>
              </p>
            </div>
            <button
              onClick={() => navigate(`/cars/${car.id}`)}
              className="group p-2 rounded-lg w-full bg-primary text-white flex gap-2 justify-center items-center mt-6 cursor-pointer"
            >
              Rent Now
              <i className="fa-solid fa-arrow-right-long transition-transform duration-300 group-hover:translate-x-2"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
