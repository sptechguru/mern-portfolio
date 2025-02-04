import React from "react";

const Spin_loader = () => {
  const spinner = {
    color: '#854CE6',
    cursor: 'pointer',
    width: '3.5rem',
    height: '3.5rem'
  };

  return (
    <>
      <div className="d-flex justify-content-center py-5">
        <div className="spinner-border" role="status" style={spinner}>
          <span className="sr-only">Loading...</span>
        </div>
      </div>        
    </>
  );
};

export default Spin_loader;
