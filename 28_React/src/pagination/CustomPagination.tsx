import React from "react";
import Pagination from "react-bootstrap/Pagination";
import PropTypes from "prop-types";

const CustomPagination = ({
  itemsCount,
  itemsPerPage,
  currentPage,
  setCurrentPage,
}: {
  itemsCount: number;
  itemsPerPage: number;
  currentPage: number;
  setCurrentPage: (i: number) => void;
}): JSX.Element => {
  const pagesCount: number = Math.ceil(itemsCount / itemsPerPage);
  const pageNumbers = [] as JSX.Element[];

  for (let i = 1; i <= pagesCount; i++) {
    pageNumbers.push(
      <Pagination.Item key={i} active={i === currentPage} onClick={() => setCurrentPage(i)}>
        {i}
      </Pagination.Item>
    );
  }

  return (
    <React.Fragment>
      <Pagination size="sm">
        <Pagination.Prev onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1} />
        {pageNumbers}
        <Pagination.Next onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === pagesCount} />
      </Pagination>
    </React.Fragment>
  );
};

CustomPagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default CustomPagination;
