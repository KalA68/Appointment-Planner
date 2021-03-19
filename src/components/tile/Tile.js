import React from "react";

export const Tile = (props) => {
  const data = Object.values(props);
  return (
    <div className="tile-container">
      {data.map( (dataItem, i) => {
        if(i === 0) {
          return <p className='tile-title' key={i}>{dataItem}</p>
          } else {
            return <p className='tile'>{dataItem}</p>
          
      }
      })}
    </div>
  );
};
