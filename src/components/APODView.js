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
      `https://api.nasa.gov/planetary/apod?count=51&api_key=cu6I7GeFFLTVypfkbudGhhUCMiu0yofX3JJjiQBh`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
        setLoading(false);
      });
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
