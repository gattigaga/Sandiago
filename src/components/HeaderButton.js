import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { TouchableNativeFeedback } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Container = styled.View`
  width: 48px;
  height: 72px;
  justify-content: center;
  align-items: center;
`;

const StyledIcon = styled(Icon)`
  font-size: 32px;
  color: white;
`;

const HeaderButton = ({ icon, onPress }) => (
  <TouchableNativeFeedback onPress={onPress}>
    <Container>
      <StyledIcon name={icon} />
    </Container>
  </TouchableNativeFeedback>
);

HeaderButton.propTypes = {
  icon: PropTypes.string,
  onPress: PropTypes.func
};

export default HeaderButton;
