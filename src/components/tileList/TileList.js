import React from "react";
import {Tile} from '../tile/Tile';

export const TileList = ({dataTiles}) => {

  return (
    <div>
      {dataTiles.map( (dataTile, i) => <Tile dataTile={dataTile} key={i}/>)}
    </div>
  );
};
