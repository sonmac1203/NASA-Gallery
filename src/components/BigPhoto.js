import React, { useState, useEffect } from 'react';
import { Row, Col } from 'reactstrap';
import GridItem from './GridItem';

const BigPhoto = ({ loading }) => {
  const [image, setImage] = useState({});

  useEffect(() => {
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=cu6I7GeFFLTVypfkbudGhhUCMiu0yofX3JJjiQBh`
    )
      .then((res) => res.json())
      .then((data) => {
        setImage(data);
      });
  }, []);

  return (
    !loading && (
      <Row className='justify-content-center'>
        <Col lg='12'>
          <GridItem image={image} emphasized />
        </Col>
      </Row>
    )
  );
};

export default BigPhoto;
