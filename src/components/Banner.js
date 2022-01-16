import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className='mb-3 welcome'>
      <Link to='/'>
        <h1 className='site-name mb-0'>NASALLERY</h1>
      </Link>
      <h4 className='banner-subtitle mb-4'>
        An astronomy art a day keeps the doctor away
      </h4>
    </div>
  );
};

export default Banner;
