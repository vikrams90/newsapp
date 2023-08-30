import React from "react";

const NewsSkeleton = () => {
  return (
    <div className='card mb-3 p-3'>
      <div className='row g-2'>
        <div className='col-md-4 d-flex align-items-center'>
          <span className='placeholder col-12 h-100'></span>
        </div>
        <div className='col-md-8'>
          <div className='card-body'>
            <span className='placeholder col-12'></span>
            <span className='placeholder col-12'></span>
            <span className='placeholder col-12'></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSkeleton;
