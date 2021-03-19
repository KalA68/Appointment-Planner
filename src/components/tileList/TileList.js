import React from "react";
import {Tile} from '../tile/Tile';

export const TileList = (props) => {
  const objArray = Object.values(props);
  return (
    <div>
      {objArray.map( (contact, i) => <Tile value={contact.name} key={i}/>)}
    </div>
  );
};
