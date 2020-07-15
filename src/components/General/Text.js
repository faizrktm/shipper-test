import styled from 'styled-components';
import PropTypes from 'prop-types';

import { selectColor, getTextSize, sizes } from '../../helper/theme';

/**
 *
 * @param {string} size
 * @param {string} weight
 * @param {string} color
 */
const Text = styled.span`
  font-size: ${({ size }) => getTextSize(size)};
  font-weight: ${({ weight }) => weight};
  color: ${({ color }) => selectColor(color)};
`;

Text.defaultProps = {
  size: 'medium',
  color: 'text',
  weight: 'normal',
};

Text.propTypes = {
  size: PropTypes.oneOf(sizes),
  color: PropTypes.string,
  weight: PropTypes.string,
};

export default Text;
