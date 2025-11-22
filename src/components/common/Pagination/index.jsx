import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [];

  if (totalPages <= 5) {
    // show all pages
    for (let i = 1; i <= totalPages; i++) pages.push(i);
  } else {
    // logic with ellipsis
    if (currentPage <= 2) {
      pages.push(1, 2, 3, "...", totalPages);
    } else if (currentPage >= totalPages - 1) {
      pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
    } else {
      pages.push(
        1,
        "...",
        currentPage - 1,
        currentPage,
        currentPage + 1,
        "...",
        totalPages
      );
    }
  }

  return (
    <div className="flex items-center gap-4 mt-10 justify-center text-white text-sm">
      {/* Previous */}
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="flex items-center gap-1 disabled:opacity-40"
      >
        <IoChevronBack />
        Previous
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-3">
        {pages.map((page, index) =>
          page === "..." ? (
            <span key={index} className="opacity-50">
              ...
            </span>
          ) : (
            <button
              key={index}
              onClick={() => onPageChange(page)}
              className={`px-3 py-1 rounded-md border border-white/20 ${
                currentPage === page
                  ? "bg-white/10 border-white/40 text-white"
                  : "text-gray-300"
              }`}
            >
              {page}
            </button>
          )
        )}
      </div>

      {/* Next */}
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="flex items-center gap-1 disabled:opacity-40"
      >
        Next
        <IoChevronForward />
      </button>
    </div>
  );
};

export default Pagination;
