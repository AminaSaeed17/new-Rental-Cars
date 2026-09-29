import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavLogo from "../../assets/imges/nav/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    handleScroll(); 
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Become a renter", to: "/" },
    { label: "Rental deals", to: "/" },
    { label: "How it work", to: "/" },
    { label: "Why choose us", to: "/" },
  ];

  return (
    <nav
      className={`fixed w-full z-20 top-0 start-0 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md"
          : "bg-transparent shadow-none"
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={NavLogo} className="h-7" alt="Cars Logo" />
        </Link>
        <div className="flex md:order-2 items-center space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="hidden sm:inline-block text-black rounded-lg px-6 py-2.5 font-medium leading-5 hover:bg-neutral-100 transition-colors"
          >
            Sign in
          </button>
          <button
            type="button"
            className="text-white bg-primary hover:bg-brand-strong rounded-lg px-6 py-2.5 font-medium focus:ring-4 focus:ring-brand-medium shadow-sm leading-5 text-sm transition-colors focus:outline-none"
          >
            Sign up
          </button>
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
            className="relative inline-flex items-center justify-center p-2 w-10 h-10 text-body rounded-lg md:hidden hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-brand-medium transition-colors"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="none"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth={2}
                  d="M5 7h14M5 12h14M5 17h14"
                />
              )}
            </svg>
          </button>
        </div>
        <div className="hidden md:flex md:items-center md:w-auto md:order-1">
          <ul className="flex md:flex-row md:space-x-8 rtl:space-x-reverse font-medium">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="block py-2 px-3 text-navText hover:text-primary transition-colors md:p-0"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div
          id="navbar-sticky"
          className={`md:hidden w-full order-3 overflow-hidden bg-white transition-[max-height,opacity] duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-1 p-4 font-medium border border-default rounded-xl bg-neutral-secondary-soft shadow-md">
            {navLinks.map((link, i) => (
              <li
                key={link.to}
                className={`transition-all duration-300 ${
                  isOpen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
                }`}
                style={{ transitionDelay: isOpen ? `${i * 60}ms` : "0ms" }}
              >
                <Link
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className="block py-2.5 px-3 rounded-lg text-navText hover:bg-white hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2 border-t border-default mt-2 sm:hidden">
              <button
                type="button"
                className="w-full text-left py-2.5 px-3 rounded-lg font-medium hover:bg-white transition-colors"
              >
                Sign in
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}