import aboutImg1 from "../../assets/imges/landing-page/sec-6/Rectangle 8 (1).png";
import aboutImg2 from "../../assets/imges/landing-page/sec-6/girl.png";
import SliderModule from "react-slick";
import HeaderShare from "../HeaderShare/HeaderShare";

const Slider = SliderModule.default ?? SliderModule;

function Star() {
  return (
    <svg
      className="w-5 h-5 text-amber-300"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
    </svg>
  );
}

const testimonials = [
  {
    image: aboutImg1,
    rating: "5.0",
    text: "I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.",
    name: "Charlie Johnson",
    location: "From New York, US",
  },
  {
    image: aboutImg2,
    rating: "5.0",
    text: "The service was amazing and the whole experience was smooth and comfortable. I would definitely use it again.",
    name: "Sarah Williams",
    location: "From London, UK",
  },
  {
    image: aboutImg1,
    rating: "4.9",
    text: "Everything was well organized and the car was in excellent condition. The team was very helpful and professional.",
    name: "Michael Brown",
    location: "From Paris, France",
  },
];

export default function AboutUs() {
  const settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{ breakpoint: 1024, settings: { slidesToShow: 1 } }],
  };

  return (
    <section className="bg-bg-secondary flex flex-col gap-20 py-10 sm:py-14 lg:py-16 px-4 sm:px-6 md:px-10 overflow-hidden">
      <div className="flex flex-col items-center">
        <HeaderShare title={'TESTIMONIALS'} subTitle={'What people say about us?'}/>
      </div>

      <div className="[&_.slick-track]:flex [&_.slick-slide]:h-auto [&_.slick-slide>div]:h-full">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-2 h-full">
              <div className="flex flex-col md:flex-row h-full rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)] bg-white">
                <div className="w-full md:w-1/2 h-56 sm:h-64 md:h-auto">
                  <img
                    className="w-full h-full object-cover"
                    src={testimonial.image}
                    alt={`testimonial-${index + 1}`}
                  />
                </div>

                <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col justify-center gap-5 md:gap-6">
                  <div>
                    <p className="text-xl md:text-2xl font-medium text-[#383838]">
                      <span className="text-[40px] sm:text-[48px] md:text-[64px]">
                        {testimonial.rating}
                      </span>{" "}
                      stars
                    </p>

                    <div className="flex items-center space-x-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} />
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-6 md:gap-16">
                    <p className="text-base md:text-lg text-[#282828]">
                      “{testimonial.text}”
                    </p>

                    <div>
                      <h3 className="font-medium text-lg sm:text-xl md:text-2xl text-[#252525]">
                        {testimonial.name}
                      </h3>
                      <p className="text-[#838383] text-[14px]">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
