import React from "react";
import CustomPagination from "./CustomPagination";

const PaginationWrapper = (): JSX.Element => {
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const itemsPerPage = 10; // Adjust as needed
  const totalItems = 100; // Replace with your actual data length

  // Calculate the items to display based on current page
  const startIndex: number = (currentPage - 1) * itemsPerPage;
  const endIndex: number = startIndex + itemsPerPage;

  // Sample data (replace with your actual data)
  const data: string[] = Array.from({ length: totalItems }, (_, index) => `Item ${index + 1}`).slice(startIndex, endIndex);

  return (
    <React.Fragment>
      <div>
        <h3>My Paginated List</h3>
        <ul>
          {data.map(
            (item: string): JSX.Element => (
              <li key={item}>{item}</li>
            )
          )}
        </ul>
        <CustomPagination
          itemsCount={totalItems}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </React.Fragment>
  );
};

export default PaginationWrapper;
