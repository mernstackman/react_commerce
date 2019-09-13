import styled from "styled-components";
import PropTypes from "prop-types";

const Circle = styled.div`
  display: ${props => props.display || "inline-flex"};
  justify-content: center;
  align-items: center;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 50%;
  font-size: ${props => Math.round(props.size * (75 / 100))}px;
`;

Circle.defaultProps = {
  size: 24,
  display: "inline-flex"
};

Circle.PropTypes = {
  display: PropTypes.string,
  size: PropTypes.number
};

export default Circle;
