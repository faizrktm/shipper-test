import React from 'react';
import styled from 'styled-components';

import { selectColor, getImageSize } from '../../helper/theme';

const ProfilePicture = ({ size, ...props }) => (
  <PictureWrapper size={size}>
    <Picture {...props} size={size} />
  </PictureWrapper>
);

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
