import React, { useState, useEffect } from 'react';
import { Container } from 'reactstrap';
import Grid from './Grid';
import BigPhoto from './BigPhoto';
import Loading from './Loading';

const APODView = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.nasa.gov/planetary/apod?start_date=2021-12-23&end_date=2022-01-12&api_key=${process.env.REACT_APP_NASA_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
        setLoading(false);
      });
    // .catch(() => setError(true));
  }, []);

  return (
    <Container>
      <div>
        <BigPhoto loading={loading} />
      </div>
      <div>{loading ? <Loading /> : <Grid images={images} />}</div>
    </Container>
  );
};

export default APODView;
