import React, { useState, useEffect } from 'react';
import { Container } from 'reactstrap';
import Grid from './Grid';
import BigPhoto from './BigPhoto';

const APODView = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.nasa.gov/planetary/apod?start_date=2021-12-23&end_date=2022-01-12&api_key=${process.env.REACT_APP_NASA_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
      });
    // .catch(() => setError(true));
  }, []);

  return (
    <Container>
      <div>
        <BigPhoto />
      </div>
      <div>
        <Grid images={images} />
      </div>
    </Container>
  );
};

export default APODView;
