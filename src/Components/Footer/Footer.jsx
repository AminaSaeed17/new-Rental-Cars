import { Link } from "react-router-dom";
import logoFooter from "../../assets/imges/footer/logo-footer.png";
export default function Footer() {
  return (
    <>
      <footer className="bg-[#051C34]">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0 flex flex-col gap-8">
              <Link to="/" className="flex items-center text-[#FFFFFF]">
                <img
                  src={logoFooter}
                  className="h-7 me-3"
                  alt="FlowBite Logo"
                />
              </Link>
              <ul className="text-body font-medium text-textFooter text-[14px]">
                <li className="mb-4">
                  <Link to="/" className="hover:underline">
                    <i class="fa-solid fa-location-dot"></i> 25566 Hc 1,
                    Glenallen, Alaska, 99588, USA{" "}
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/" className="hover:underline">
                    <i class="fa-solid fa-phone"></i> +603 4784 273 12
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/" className="hover:underline">
                    <i class="fa-regular fa-envelope"></i> rentcars@gmail.com
                  </Link>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-10 sm:grid-cols-4">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-heading uppercase text-[#FFFFFF]">
                  Our Product
                </h2>
                <ul className="text-body font-medium text-textFooter text-[14px]">
                  <li className="mb-4">
                    <Link to="/" className="hover:underline">
                      Career
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/" className="hover:underline">
                      Car
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/" className="hover:underline">
                      Packages
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/" className="hover:underline">
                      Features
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/" className="hover:underline">
                      Priceline
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-heading uppercase text-[#FFFFFF]">
                  Resources
                </h2>
                <ul className="text-body font-medium text-[#D6D6D6] text-[14px]">
                  <li className="mb-4">
                    <Link to="/" className="hover:underline">
                      Download
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/" className="hover:underline">
                      Help Centre
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/" className="hover:underline">
                      Guides
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/" className="hover:underline">
                      Partner Network
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/" className="hover:underline">
                      Cruises
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/" className="hover:underline">
                      Developer
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-heading uppercase text-[#FFFFFF]">
                  About Rentcars
                </h2>
                <ul className="text-body font-medium text-textFooter text-[14px]">
                  <li className="mb-4">
                    <Link to="/" className="hover:underline ">
                      Why choose us
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/" className="hover:underline">
                      Investor Relations
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/" className="hover:underline">
                      Our Story
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/" className="hover:underline">
                      Press Center
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/" className="hover:underline">
                      Advertise
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-heading uppercase text-[#FFFFFF]">
                  Follow Us
                </h2>
                <ul className="text-body font-medium flex gap-4 text-textFooter text-[14px]">
                  <li className="mb-4">
                    <Link to="#" className="hover:underline">
                      <i className="fa-brands fa-square-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline">
                      <i className="fa-brands fa-square-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline">
                      <i className="fa-brands fa-youtube"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-default border-[#575757] sm:mx-auto lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between text-[12px] text-textFooter">
            <span className="text-sm text-body sm:text-center">
              Copyright 2023 ・ Rentcars, All Rights Reserved
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
