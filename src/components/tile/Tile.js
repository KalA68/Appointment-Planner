import React from "react";

export const Tile = ({dataTile}) => {

  return (
    <div className="tile-container">
      {Object.values(dataTile).map( (value, i) => {
        if(i === 0) {
          return <p className='tile-title' key={i}>{value}</p>
          } else {
           return <p className='tile'>{value}</p>} }
      )}
    </div>
  );
};
