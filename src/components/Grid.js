import React from 'react';
import GridItem from './GridItem';

const Grid = ({ images }) => {
  return (
    <div className='card-columns'>
      {images &&
        images.length > 0 &&
        images.map((image, k) => <GridItem image={image} key={k} />)}
    </div>
  );
};
export default Grid;
