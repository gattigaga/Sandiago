import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Text = styled.Text`
  color: white;
  font-family: Lobster-Regular;
  font-size: 48px;
`;

const Logo = ({ style }) => <Text style={style}>Sandiago</Text>;

Logo.propTypes = {
  style: PropTypes.array
};

export default Logo;
