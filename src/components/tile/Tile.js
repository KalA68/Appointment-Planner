import React from "react";

export const Tile = ({dataTile}) => {
    const array = Object.values(dataTile);
  return (
    <div className="tile-container">
      {array.map( (value, i) => {
        if(i === 0) {
           return <p className='tile-title' key={i}>{value}</p>
          } else {
            for(i>0; i<array.length; i++) 
            return <p className='tile' key={i}>{value}</p>} 
          })}  
    </div>
  );
};
