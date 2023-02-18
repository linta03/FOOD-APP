import React, { useState } from "react";

const Accordian = ({ title, description, isShow ,setIsVisible}) => {

    // this function sets the visibility of the accordion to true
  const handleShow = () => {
    setIsVisible(true);
  };
    // this function sets the visibility of the accordion to false
  const handleHide = () => {
    setIsVisible(false);
  };

  return (
    <div className="bg-purple-200 border-2 border-purple-100-400 m-5 p-4 rounded-md drop-shadow-xl">
      <h1 className="text-lg font-bold font-mono">{title}?</h1>
      <span>
        {isShow ? (
          <>
            <button
              onClick={handleHide}
              className="bg-purple-800 text-white w-14 rounded-md font-normal mr-2"
            >
              Hide
            </button>
            <p>{description}</p>
          </>
        ) : (
          <button
            onClick={handleShow}
            className="bg-purple-800 text-white w-14 rounded-md font-normal mr-2"
          >
            Show
          </button>
        )}
      </span>
    </div>
  );
};

export default Accordian;
