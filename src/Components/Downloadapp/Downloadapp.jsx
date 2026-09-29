import { useEffect, useState } from "react";
import downloadIMG from "../../assets/imges/landing-page/sec-7/iPhone-14.png";
import DownloadButton from "../DownloadButton/DownloadButton";

export default function Downloadapp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="flex flex-col lg:flex-row lg:justify-between items-center gap-10 lg:gap-0 px-4 sm:px-6 lg:px-10 py-8 lg:py-5 overflow-hidden">
      
      <div className="w-full lg:w-auto">
        <div className="flex flex-col gap-8 lg:gap-10">
          <div className="flex flex-col gap-4 sm:gap-6">
            <p className="font-semibold text-[32px] sm:text-[40px] lg:text-[48px] leading-tight text-[#282828]">
              Download Rentcars <br /> App for{" "}
              <span className="text-primary">FREE</span>
            </p>
            <p className="text-[#3E3E3E]">
              For faster, easier booking and exclusive deals.
            </p>
            <DownloadButton isVisible={isVisible} />
          </div>

          <form className="w-full max-w-md lg:max-w-none">
            <div className="mb-5">
              <input
                type="text"
                id="text"
                className="bg-[#CEDCFF] text-heading text-sm text-[#000000] rounded-[61px] block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                placeholder="Name"
                required
              />
            </div>
            <div className="mb-5">
              <input
                type="tel"
                id="phone"
                className="bg-[#CEDCFF] text-heading text-sm text-[#000000] rounded-[61px] block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                placeholder="Phone"
                required
              />
            </div>
            <div className="mb-5">
              <input
                type="email"
                id="email"
                className="bg-[#CEDCFF] text-heading text-sm text-[#000000] rounded-[61px] block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                placeholder="Email"
                required
              />
            </div>
            <button
              type="submit"
              className="text-white bg-primary font-medium leading-5 mx-auto block rounded-lg text-sm p-2 w-[159px]"
            >
              Send
            </button>
          </form>
        </div>
      </div>
      
      <div className="flex items-end justify-center lg:justify-end lg:translate-y-20">
        <img
          className="h-64 sm:h-80 lg:h-100 w-auto object-contain"
          src={downloadIMG}
          alt="downloadIMG"
        />
      </div>
    </section>
  );
}