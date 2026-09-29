import carSection from "../../assets/imges/landing-page/sec-5/Audi 1.png";

export default function WhyChoose() {
  const features = [
    {
      title: "Best price guaranteed",
      desc: "Find a lower price? We'll refund you 100% of the difference.",
      icon: <i className="fa-solid fa-unlock-keyhole"></i>,
    },
    {
      title: "Experience driver",
      desc: "Don't have driver? Don't worry, we have many experienced driver for you.",
      icon: <i className="fa-solid fa-user"></i>,
    },
    {
      title: "24 hour car delivery",
      desc: "Book your car anytime and we will deliver it directly to you.",
      icon: <i className="fa-solid fa-user"></i>,
    },
    {
      title: "24/7 technical support",
      desc: "Have a question? Contact Rentcars support any time when you have problem.",
      icon: <i className="fa-solid fa-comments"></i>,
    },
  ];

  return (
    <section className="overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center relative">
        <div className="z-10 w-full lg:w-1/2 flex items-center justify-center pt-10 lg:pt-0">
          <img
            src={carSection}
            alt="carSection"
            className="w-full max-w-sm sm:max-w-lg lg:max-w-none object-contain object-center lg:translate-y-12 lg:-translate-x-20"
          />
          <div
            className="hidden lg:block absolute -left-50 -z-1 h-full w-222.5 pointer-events-none select-none bg-[#1572D31A]"
            style={{
              clipPath: "polygon(49% 0, 100% 100%, 49% 76%, 0 100%)",
            }}
          />
        </div>
        
        <div className="w-full lg:w-1/2 lg:max-w-175 px-4 sm:px-8 lg:px-0 lg:pr-3 py-10 sm:py-14 lg:py-16">
          <button className="px-6 sm:px-8 py-3 sm:py-4 bg-[#1572D31A] rounded-lg font-medium text-sm mb-5">
            WHY CHOOSE US
          </button>

          <h2 className="font-semibold text-[24px] sm:text-[28px] md:text-[38px] leading-snug text-[#333333] mb-8 sm:mb-10">
            We offer the best experience with our rental deals
          </h2>

          <div className="flex flex-col gap-6 sm:gap-10">
            {features.map((f, i) => (
              <div key={i} className="flex gap-3 sm:gap-4 items-start">
                <div className="w-12 h-12 sm:w-16 sm:h-16 shrink-0 rounded-lg bg-[#1572D31A] text-primary text-lg sm:text-xl flex items-center justify-center">
                  {f.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-base text-[#1B1B1B] mb-1">
                    {f.title}
                  </h3>
                  <p className="text-sm text-[#6B6B6B] leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}