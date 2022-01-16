import React, { useState, useEffect } from 'react';
import {
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
import Loading from './Loading';

const ItemDetails = ({ match }) => {
  const [image, setImage] = useState({});
  const { date, title, hdurl, url, media_type, explanation, copyright } = image;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.nasa.gov/planetary/apod?date=${match.params.date}&api_key=${process.env.REACT_APP_NASA_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setImage(data);
        setLoading(false);
      });
    // .catch(() => setError(true));
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <Container className='pb-5'>
      <div>
        <Card className='main-card'>
          {media_type === 'image' ? (
            <CardImg
              alt={'Astronomy photo of the date on ' + date}
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
