import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { TouchableNativeFeedback } from "react-native";

const Container = styled.View`
  padding: 24px;
  border-bottom-width: 0.5;
  border-bottom-color: rgba(255, 255, 255, 0.2);
`;

const Name = styled.Text`
  font-family: Roboto-Bold;
  font-size: 18px;
  color: white;
  margin-bottom: 8px;
`;

const Description = styled.Text`
  font-family: Roboto-Regular;
  font-size: 14px;
  color: white;
`;

const Date = styled.Text`
  font-family: Roboto-Regular;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
  text-align: right;
  margin-bottom: 8px;
`;

const Account = ({ name, description, date, onPress }) => (
  <TouchableNativeFeedback onPress={onPress}>
    <Container>
      <Date>{date}</Date>
      <Name>{name}</Name>
      <Description>{description}</Description>
    </Container>
  </TouchableNativeFeedback>
);

Account.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.string,
  onPress: PropTypes.func
};

export default Account;
