import React, { useState } from 'react';
import {
  Button,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Collapse,
  Tooltip,
  Badge,
} from 'reactstrap';
import ReactPlayer from 'react-player';
import { DateTime } from 'luxon';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const GridItem = ({
  image: { date, title, hdurl, url, media_type, explanation, copyright },
  emphasized,
}) => {
  const [favorite, setFavorite] = useState(false);
  const [expand, setExpand] = useState(false);

  const domain = window.location.href;
  const shareableLink = domain + 'photos/' + date;

  const [tooltipOpen, setTooltipOpen] = useState(false);

  const turnOffTooltip = () => {
    setTooltipOpen(true);
    setTimeout(() => {
      setTooltipOpen(false);
    }, 1500);
  };

  const capitalize = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

  return (
    <Card className={`main-card mb-4 ${emphasized && 'px-4 mt-3 pt-4'}`}>
      <div className='media'>
        {emphasized && media_type && (
          <Badge color='secondary'>{capitalize(media_type)} of the day</Badge>
        )}
        {media_type === 'image' ? (
          <CardImg
            alt={'Astronomy photo of the date on ' + date}
            src={hdurl}
            top
            width='100%'
            className='potd-img'
          />
        ) : media_type === 'video' ? (
          <ReactPlayer
            url={url}
            playing={true}
            muted={true}
            loop={true}
            width='100%'
          />
        ) : (
          <CardImg
            alt='Placeholder image'
            src='https://via.placeholder.com/150'
            top
            width='100%'
            className='potd-img'
          />
        )}
      </div>
      <CardBody>
        <Link to={`/photos/${date}`} target='_blank'>
          <CardTitle tag='h5'>{title}</CardTitle>
        </Link>
        <CardSubtitle className='mb-2 text-muted' tag='h6'>
          {DateTime.fromISO(date).toFormat('DD')}
          {copyright && <span> | By {copyright}</span>}
        </CardSubtitle>
        <div className='d-flex'>
          <Button
            color='white'
            className='like-btn border border-danger text-danger mr-1'
            onClick={() => setFavorite(!favorite)}
          >
            <i className={`mr-2 ${favorite ? 'fas' : 'far'} fa-heart`}></i>
            Like
          </Button>
          <Button
            color='white'
            outline
            className='info-btn border border-dark ml-2 mr-1'
            onClick={() => setExpand(!expand)}
          >
            <i
              className={`mr-1 fas ${
                expand ? 'fa-chevron-down' : 'fa-chevron-right'
              }`}
            ></i>{' '}
            More
          </Button>
          <CopyToClipboard text={shareableLink}>
            <Button
              color='white'
              className='share-btn border border-dark ml-2'
              id={`share-button-${date}`}
              onClick={turnOffTooltip}
            >
              <i className='mr-2 fas fa-share '></i>
              Share
            </Button>
          </CopyToClipboard>
          <Tooltip
            placement='top'
            target={`share-button-${date}`}
            trigger='click'
            isOpen={tooltipOpen}
          >
            Copied!
          </Tooltip>
        </div>
      </CardBody>
      <Collapse isOpen={expand}>
        <Card className='dropdown-card'>
          <CardBody className='pt-0'>{explanation}</CardBody>
        </Card>
      </Collapse>
    </Card>
  );
};

export default GridItem;
