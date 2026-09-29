import { useEffect, useState } from "react";
import heroImg from "../../assets/imges/landing-page/car 2 1.png";
import bgFrame from "../../assets/imges/landing-page/Frame.png";
import DownloadButton from "../DownloadButton/DownloadButton";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative overflow-hidden min-h-screen pt-28 md:pt-24">
      
      <div className="absolute top-0 right-0 -z-10 w-[400px] md:w-[500px] hidden sm:block pointer-events-none select-none">
        <img src={bgFrame} className="w-full h-full " alt="" />
      </div>

      <div className="max-w-screen-xl mx-auto px-4 md:pl-5 grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-4">
        <div className="flex flex-col gap-5 z-10 text-center md:text-left">
          <h1
            className={`text-4xl md:text-5xl font-semibold leading-tight transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            Find, book and
            <br />
            rent a car{" "}
            <span className="relative inline-block text-primary">
              Easily
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 120 15"
                fill="none"
              >
                <path
                  d="M4 9C35 14 75 13 118 2"
                  stroke="#1572D3"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p
            className={`text-neutral-500 max-w-sm mx-auto md:mx-0 transition-all duration-700 ease-out delay-150 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            Get a car wherever and whenever you need it with your IOS and
            Android devices.
          </p>

         <DownloadButton isVisible={isVisible}/>
        </div>

        <div className="relative flex justify-center md:justify-end overflow-hidden md:overflow-visible">
          <img
            src={heroImg}
            className={`w-full max-w-md md:max-w-none md:w-full h-auto object-contain object-bottom-right md:-mr-10 lg:-mr-16 translate-y-20 transition-all duration-3000 ease-out ${
              isVisible
                ? "opacity-100 scale-100 translate-x-0"
                : "opacity-0 scale-50 translate-x-24"
            }`}
            alt="Blue sports car"
          />
        </div>
      </div>
    </section>
  );
}
