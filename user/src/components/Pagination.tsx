interface PaginationProps {
  itemsPerPage: number;
  totalItems: number;
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  itemsPerPage,
  totalItems,
  currentPage,
  onPageChange,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex flex-row justify-center space-x-4 items-center mt-6 mb-6">
      {pageNumbers.map((number) => (
        <div
          key={number}
          className="border-solid border-2 border-indigo-500 rounded-full h-8 w-8 flex items-center justify-center"
        >
          <a
            className={`cursor-pointer ${
              currentPage === number
                ? "text-indigo-700"
                : "hover:text-indigo-700"
            }`}
            onClick={() => onPageChange(number)}
          >
            {number}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Pagination;
