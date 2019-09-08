import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import styleToCss from "style-object-to-css-string";
import { VCenter, VHCenter, HCenter, SpreadEvenly } from "mixins";

const Container = styled.div`
  ${props => css`
    display: ${props.display || "flex"};
    margin: ${props.margin || "0"};
  `}

  ${props => {
    if (props.vcenter) return VCenter;
    if (props.hcenter) return HCenter;
    if (props.vhcenter) return VHCenter;
    if (props.spreadEven) return SpreadEvenly;
  }}

  ${props => props.containerStyle && styleToCss(containerStyle)}
`;

Container.propTypes = {
  containerStyle: PropTypes.object,
  display: PropTypes.string,
  margin: PropTypes.string
};

export default Container;
