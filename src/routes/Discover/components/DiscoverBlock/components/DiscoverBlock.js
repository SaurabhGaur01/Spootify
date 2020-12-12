import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import DiscoverItem from './DiscoverItem';
import '../styles/_discover-block.scss';

const scrollContainer = (id, { isNegative } = {}) =>{
  return () => {
    const scrollableContainer = document.getElementById(id);
    const amount = isNegative ? -scrollableContainer.offsetWidth : scrollableContainer.offsetWidth;

    scrollableContainer.scrollLeft = scrollableContainer.scrollLeft + amount;
  };
}

const DiscoverBlock = ({ 
  text, 
  id, 
  data, 
  imagesKey 
}) => (
  <div className="discover-block">
    <div className="discover-block__header">
      <h2>{text}</h2>
      <span />
      {
        data.length ? (
          <div className="animate__animated animate__fadeIn">
            <FontAwesomeIcon
              icon={faChevronLeft}
              onClick={scrollContainer(id, { isNegative: true })}
            />
            <FontAwesomeIcon
              icon={faChevronRight}
              onClick={scrollContainer(id)}
            />
          </div>
        ) : null
      }
    </div>
    <div className="discover-block__row" id={id}>
      {data.map(({ [imagesKey]: images, name }) => (
        <DiscoverItem key={name} images={images} name={name} />
      ))}
    </div>
  </div>
);

DiscoverBlock.propTypes = {
  text: PropTypes.string.isRequired,
  imagesKey: PropTypes.string,
  id: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({})),
};

DiscoverBlock.defaultProps = {
  imagesKey: 'images',
  data: [],
}

export default DiscoverBlock;