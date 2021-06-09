import React from 'react';
import './Pagination.css'
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
const Pagination = ({ newsPerPage, totalNews, paginate, currentPage, handleNextBtn, handlePrevBtn, maxPageNumberLimit, minPageNumberLimit }) => {
  const pageNumbers = [];


  for (let i = 1; i <= Math.ceil(totalNews / newsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='pt-3 text-center page_numbers'>
      {currentPage > 1 && <button className='icon' onClick={handlePrevBtn}><GrFormPrevious /><GrFormPrevious /></button>}
      {pageNumbers.map(number => {
        if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
          return <button className={`${currentPage == number && 'active'} number`} onClick={() => paginate(number)} key={number}>{number}</button>
        } else {
          return null
        }
      }
      )}
      {pageNumbers.length > currentPage && <button className='icon' onClick={handleNextBtn}><GrFormNext /><GrFormNext /></button>}

    </div>
  );
};

export default Pagination;