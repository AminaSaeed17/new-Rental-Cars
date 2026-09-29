import { useContext, useState } from "react";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import { carContext } from "../../Context/CarsContext";
import CarCard from "../../Components/CarCard/CarCard";
import Loading from "../../Components/Loading/Loading";
import HeaderShare from "../../Components/HeaderShare/HeaderShare";

export default function Cars() {
  const { cars, loading } = useContext(carContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");

  const cardsPerPage = 12;
  const filteredCars = cars?.filter((car) => {
    const searchTerm = search.toLowerCase();

    return (
      car.car?.toLowerCase().includes(searchTerm) ||
      car.car_model?.toLowerCase().includes(searchTerm) ||
      car.car_color?.toLowerCase().includes(searchTerm)
    );
  });

  const totalPages = Math.ceil((filteredCars?.length || 0) / cardsPerPage);

  const startIndex = (currentPage - 1) * cardsPerPage;

  const currentCars = filteredCars?.slice(
    startIndex,
    startIndex + cardsPerPage,
  );

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;

    setCurrentPage(page);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const getPaginationPages = () => {
    // If there are only a few pages, show all
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, index) => index + 1);
    }

    // Beginning
    if (currentPage <= 3) {
      return [1, 2, 3, "...", totalPages];
    }

    // End
    if (currentPage >= totalPages - 2) {
      return [1, "...", totalPages - 2, totalPages - 1, totalPages];
    }

    // Middle
    return [
      1,
      "...",
      currentPage - 1,
      currentPage,
      currentPage + 1,
      "...",
      totalPages,
    ];
  };

  function handelSearch() {}

  return (
    <section className="p-15">
      <Breadcrumb />

      <div className="flex flex-col gap-16 items-center">
        <div className="search w-[85%] flex justify-between items-center rounded-xl mb-5 py-3 pr-3 pl-8 shadow-[0_6px_12px_0_#135EAC1F] mt-16">
          <div className="relative pl-5 w-full ">
            <input
              className="form-control w-6/12 outline-none"
              id="exampleDataList"
              placeholder="Search By Name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <i className="fa-solid fa-location-dot absolute left-0 top-1 text-[#959595]"></i>
          </div>
          <button
            onClick={() => handelSearch()}
            className="btn btn-danger p-2 bg-primary rounded-lg w-[159px]"
          >
            Search
          </button>
        </div>
        <div className="text-center">
          <HeaderShare title={'POPULAR RENTAL DEALS'} subTitle={'Most popular cars rental deals'}/>
        </div>

        <div className="flex justify-center gap-8 gap-y-16 flex-wrap">
          { loading? <Loading/> : currentCars?.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>

        {totalPages > 1 && (
          <nav aria-label="Page navigation example">
            <ul className="flex -space-x-px text-sm">
              <li>
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium rounded-s-base text-sm px-3 h-10 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
              </li>

              {getPaginationPages().map((page, index) => {
                if (page === "...") {
                  return (
                    <li key={`dots-${index}`}>
                      <span className="flex items-center justify-center w-10 h-10 border border-default-medium text-gray-500 bg-neutral-secondary-medium">
                        ...
                      </span>
                    </li>
                  );
                }

                return (
                  <li key={page}>
                    <button
                      onClick={() => handlePageChange(page)}
                      aria-current={currentPage === page ? "page" : undefined}
                      className={`flex items-center justify-center box-border border border-default-medium font-medium text-sm w-10 h-10 focus:outline-none ${
                        currentPage === page
                          ? "text-fg-brand bg-neutral-tertiary-medium hover:text-fg-brand"
                          : "text-body bg-neutral-secondary-medium hover:bg-neutral-tertiary-medium hover:text-heading"
                      }`}
                    >
                      {page}
                    </button>
                  </li>
                );
              })}

              <li>
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium rounded-e-base text-sm px-3 h-10 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </section>
  );
}
