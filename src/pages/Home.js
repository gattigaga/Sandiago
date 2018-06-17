import React from "react";
import PropTypes from "prop-types";
import { StatusBar } from "react-native";
import styled from "styled-components";

import HeaderButton from "../components/HeaderButton";
import AccountListContainer from "../components/AccountListContainer";

const Container = styled.View`
  flex: 1;
  background-color: #474787;
`;

const Home = ({ navigation }) => (
  <Container>
    <StatusBar hidden />
    <AccountListContainer navigation={navigation} />
  </Container>
);

Home.navigationOptions = () => ({
  headerTintColor: "white",
  headerStyle: {
    backgroundColor: "#474787",
    elevation: 0,
    height: 72
  },
  headerLeft: <HeaderButton icon="ios-add" />,
  headerRight: <HeaderButton icon="ios-settings" />
});

Home.propTypes = {
  navigation: PropTypes.object
};

export default Home;
