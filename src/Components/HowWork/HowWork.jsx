export default function HowWork() {
  return (
    <>
      <section className="flex justify-center items-center flex-col py-16">
        <div className="text-center">
          <button className="px-8 py-4 bg-[#1572D31A] rounded-lg font-medium text-sm mb-5">
            HOW IT WORK
          </button>
          <p className="font-medium text-[38px] ">
            Rent with following 3 working steps
          </p>
        </div>
        <div className="flex gap-40 mt-25 flex-wrap justify-center">
          <div className="flex flex-col items-center">
            <div className="w-[112px] h-[112px] rounded-2xl bg-secondary flex justify-center items-center">
              <i className="fa-solid fa-location-dot text-primary text-5xl"></i>
            </div>
            <div className="w-[165px] text-center">
                <h2 className="font-medium text-xl ">Choose location</h2>
                <p className="font-medium text-sm text-[#6D6D6D] mt-5">
                  Choose your and find your best car
                </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[112px] h-[112px] rounded-2xl bg-secondary flex justify-center items-center">
              <i className="fa-solid fa-calendar-days text-primary text-5xl"></i>
            </div>
            <div className="w-[200px] text-center">
                <h2 className="font-medium text-xl ">Pick-up date</h2>
                <p className="font-medium text-sm text-[#6D6D6D] mt-5">
                  Select your pick up date and time to book your car
                </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[112px] h-[112px] rounded-2xl bg-secondary flex justify-center items-center">
              <i class="fa-solid fa-car text-primary text-5xl"></i>
            </div>
            <div className="w-[230px] text-center">
                <h2 className="font-medium text-xl ">Book your car</h2>
                <p className="font-medium text-sm text-[#6D6D6D] mt-5">
                  Book your car and we will deliver it directly to you
                </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
