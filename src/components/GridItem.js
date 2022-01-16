import React, { useState } from 'react';
import {
  Button,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Collapse,
  UncontrolledTooltip,
} from 'reactstrap';
import ReactPlayer from 'react-player';
import { DateTime } from 'luxon';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const GridItem = ({
  image: { date, title, hdurl, url, media_type, explanation, copyright },
}) => {
  const [favorite, setFavorite] = useState(false);
  const [expand, setExpand] = useState(false);

  const domain = window.location.href;
  const shareableLink = domain + 'photos/' + date;

  return (
    <div>
      <Card className='main-card mb-4'>
        {media_type === 'image' ? (
          <CardImg alt='Card image cap' src={hdurl} top width='100%' />
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
          <Link to={`/photos/${date}`}>
            <CardTitle tag='h5'>{title}</CardTitle>
          </Link>
          <CardSubtitle className='mb-2 text-muted' tag='h6'>
            {DateTime.fromISO(date).toFormat('DD')}
            {copyright && <span> | By {copyright}</span>}
          </CardSubtitle>
          <div className='d-flex'>
            <Button
              color='white'
              outline
              className='info-btn border border-dark mr-1'
              onClick={() => setExpand(!expand)}
            >
              <i
                className={`mr-1 fas ${
                  expand ? 'fa-chevron-down' : 'fa-chevron-right'
                }`}
              ></i>{' '}
              More
            </Button>
            <Button
              color='white'
              className='like-btn border border-danger ml-2 text-danger mr-1'
              onClick={() => setFavorite(!favorite)}
            >
              <i className={`mr-2 ${favorite ? 'fas' : 'far'} fa-heart`}></i>
              Like
            </Button>
            <CopyToClipboard text={shareableLink}>
              <Button
                color='white'
                className='share-btn border border-dark ml-2'
                id='ShareButton'
              >
                <i className='mr-2 fas fa-share '></i>
                Share
              </Button>
            </CopyToClipboard>
            <UncontrolledTooltip
              placement='top'
              target='ShareButton'
              trigger='click'
            >
              Copied!
            </UncontrolledTooltip>
          </div>
        </CardBody>
        <Collapse isOpen={expand}>
          <Card className='dropdown-card'>
            <CardBody>{explanation}</CardBody>
          </Card>
        </Collapse>
      </Card>
    </div>
  );
};

export default GridItem;
