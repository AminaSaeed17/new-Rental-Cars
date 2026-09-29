import { Link, useLocation } from "react-router-dom";

export default function Breadcrumb() {
  const location = useLocation();

  const isCarsPage = location.pathname === "/cars";
  const isDetailsPage = location.pathname.startsWith(`/cars/`);

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center gap-2">
        <li>
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-primary transition-colors"
          >
            <i className="fa-solid fa-house text-xs"></i>
            Home
          </Link>
        </li>

        {(isCarsPage || isDetailsPage) && (
          <>
            <li>
              <i className="fa-solid fa-chevron-right text-xs text-gray-400"></i>
            </li>

            <li>
              {isDetailsPage ? (
                <Link
                  to="/cars"
                  className="text-sm font-medium text-gray-500 hover:text-primary transition-colors"
                >
                  Cars
                </Link>
              ) : (
                <span className="text-sm font-medium text-gray-500">Cars</span>
              )}
            </li>
          </>
        )}

        {isDetailsPage && (
          <>
            <li>
              <i className="fa-solid fa-chevron-right text-xs text-gray-400"></i>
            </li>

            <li>
              <span className="text-sm font-medium text-gray-400">
                Car Details
              </span>
            </li>
          </>
        )}
      </ol>
    </nav>
  );
}
