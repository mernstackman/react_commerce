import styled, { css } from "styled-components";
import styleToCss from "style-object-to-css-string";

// Label's text --> move this into standalone component
const Label = styled.span`
  display: inline-block;
  cursor: pointer;
  padding: 0 5px;
`;

export default Label;
