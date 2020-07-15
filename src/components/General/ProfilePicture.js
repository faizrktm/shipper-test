import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { selectColor, getImageSize, sizes } from '../../helper/theme';

/**
 *
 * @param {string} size
 *
 * The rest of the props indicated by spread operator is the
 * initial props from img itself, ex: src, alt, etc.
 */
const ProfilePicture = ({ size, ...props }) => (
  <PictureWrapper size={size}>
    <Picture {...props} size={size} />
  </PictureWrapper>
);

ProfilePicture.defaultProps = {
  size: 'medium',
};

ProfilePicture.propTypes = {
  size: PropTypes.oneOf(sizes),
};

export default ProfilePicture;

const PictureWrapper = styled.div`
  width: ${({ size }) => getImageSize(size)};
  height: ${({ size }) => getImageSize(size)};
  border-radius: 50%;
  border: 1px solid ${selectColor('border')};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Picture = styled.img`
  width: ${({ size }) => `calc(${getImageSize(size)} - 0.2rem)`};
  width: ${({ size }) => `calc(${getImageSize(size)} - 0.2rem)`};
  border-radius: 50%;
  object-fit: contain;
`;
