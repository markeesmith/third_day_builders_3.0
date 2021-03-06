import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';

const GalleryPickerItemStyles = styled.div`
  display: ${(props) => (props.isMobile ? 'inline-block' : 'block')};
  height: ${(props) => (props.isMobile ? '70%' : '20%')};
  ${(props) => !props.isMobile && `width: 90%`};
  ${(props) => props.isMobile && `width: 33%`};
  margin: ${(props) => (props.isMobile ? '2vh 1vh' : '2vh auto')};
  text-align: center;

  a:focus,
  a:active {
    outline: 0;
    border: none;
    outline-style: none;
    -moz-outline-style: none;
  }

  img {
    vertical-align: middle;
    height: 100%;
    width: ${(props) => (props.isMobile ? '100%' : 'auto')};
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    ${(props) => props.isMobile && `object-fit: contain`};
  }

  #selectedPhoto {
    ${(props) =>
      props.isMobile
        ? 'filter: drop-shadow(0 -3px 0 #501414) drop-shadow(0 3px 0 #501414) drop-shadow(-3px 0 0 #501414) drop-shadow(3px 0 0 #501414)'
        : 'border: 4px solid #501414'};
  }
`;

function keyPress(event, f, pos) {
  if (event.charCode === 13) {
    f(pos);
  }
}

const GalleryPickerItem = ({ url, photo, onPickerSelection, currPhoto }) => {
  if (photo === currPhoto) {
    return (
      <GalleryPickerItemStyles isMobile={isMobile}>
        <a
          onClick={() => onPickerSelection(photo)}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => {
            keyPress(e, onPickerSelection, photo);
          }}
        >
          <img
            id="selectedPhoto"
            sizes="100%"
            src={`${url}${photo}-1024.jpg`}
            alt="Main Gallery"
          />
        </a>
      </GalleryPickerItemStyles>
    );
  }
  return (
    <GalleryPickerItemStyles isMobile={isMobile}>
      <a
        onClick={() => onPickerSelection(photo)}
        role="button"
        tabIndex={0}
        onKeyPress={(e) => {
          keyPress(e, onPickerSelection, photo);
        }}
      >
        <img sizes="100%" src={`${url}${photo}-1024.jpg`} alt="Main Gallery" />
      </a>
    </GalleryPickerItemStyles>
  );
};

GalleryPickerItem.propTypes = {
  url: PropTypes.string.isRequired,
  photo: PropTypes.number.isRequired,
  onPickerSelection: PropTypes.func.isRequired,
  currPhoto: PropTypes.number.isRequired,
};

export default GalleryPickerItem;
