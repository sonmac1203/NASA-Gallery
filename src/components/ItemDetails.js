import React, { useState, useEffect } from 'react';
import {
  Button,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Container,
} from 'reactstrap';
import ReactPlayer from 'react-player';
import { DateTime } from 'luxon';
import { Link } from 'react-router-dom';

const ItemDetails = ({ match }) => {
  const [image, setImage] = useState({});
  const { date, title, hdurl, url, media_type, explanation, copyright } = image;

  useEffect(() => {
    console.log(match.params.date);

    fetch(
      `https://api.nasa.gov/planetary/apod?date=${match.params.date}&api_key=${process.env.REACT_APP_NASA_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setImage(data);
      });
    // .catch(() => setError(true));
  }, []);

  return (
    <Container className='pb-5'>
      <div className='d-flex justify-content-center'>
        <Link to='/'>
          <Button
            color='white'
            outline
            className='home-btn border border-dark mb-3'
          >
            <i className='fas fa-home home-button'></i>
          </Button>
        </Link>
      </div>
      <div>
        <Card className='main-card'>
          {media_type === 'image' ? (
            <CardImg
              alt={'Astronomy photo of the date on' + date}
              src={hdurl}
              top
              width='100%'
            />
          ) : (
            <ReactPlayer
              url={url}
              playing={true}
              muted={true}
              loop={true}
              width='100%'
            />
          )}
          <CardBody>
            <CardTitle tag='h5'>{title}</CardTitle>
            <CardSubtitle className='mb-2 text-muted' tag='h6'>
              {DateTime.fromISO(date).toFormat('DD')}
              {copyright && <span> | By {copyright}</span>}
            </CardSubtitle>
            <CardText>{explanation}</CardText>
          </CardBody>
        </Card>
      </div>
    </Container>
  );
};

export default ItemDetails;
