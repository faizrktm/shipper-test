import styled from "styled-components";

import { selectColor, getTextSize } from "../../helper/theme";

const Text = styled.span`
  font-size: ${({ size }) => getTextSize(size)};
  font-weight: ${({ weight }) => weight || 'normal'};
  color: ${({ color }) => selectColor(color || 'text')};
`;

export default Text;
