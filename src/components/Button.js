import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { TouchableNativeFeedback } from "react-native";

const Container = styled.View`
  width: 100%;
  padding-vertical: 16px;
  background-color: ${({ isInverted }) => (isInverted ? "white" : "#474787")};
`;

const Text = styled.Text`
  font-family: Roboto-Bold;
  font-size: 18px;
  text-align: center;
  color: ${({ isInverted }) => (isInverted ? "#474787" : "white")};
`;

const Button = ({ style, isInverted, caption, onPress }) => (
  <TouchableNativeFeedback onPress={onPress}>
    <Container style={style} isInverted={isInverted}>
      <Text isInverted={isInverted}>{caption}</Text>
    </Container>
  </TouchableNativeFeedback>
);

Button.propTypes = {
  style: PropTypes.array,
  isInverted: PropTypes.bool,
  caption: PropTypes.string,
  onPress: PropTypes.func
};

Button.defaultProps = {
  caption: "Button"
};

export default Button;
