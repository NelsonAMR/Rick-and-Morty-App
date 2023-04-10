import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import "./Pagination.css";

function Pagination({ page, info, setPage }) {
  const [width, setWidth] = useState(window.innerWidth);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  const pageChange = (data) => {
    setPage(data.selected + 1);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <div>
      <ReactPaginate
        className="pagination"
        nextLabel="Next"
        previousLabel="Prev"
        previousClassName="btn btn-primary fs-5 prev"
        nextClassName="btn btn-primary fs-5 next"
        activeClassName="active-btn"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        forcePage={page === 1 ? 0 : page - 1}
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={width < 576 ? 1 : 2}
        pageCount={info?.pages}
        onPageChange={pageChange}
      />
    </div>
  );
}

export default Pagination;
