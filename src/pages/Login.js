import React, { Component } from "react";
import { StatusBar } from "react-native";
import styled from "styled-components";
import { Formik } from "formik";

import Logo from "../components/Logo";
import PinInput from "../components/PinInput";
import Button from "../components/Button";

const Container = styled.View`
  flex-grow: 1;
  padding: 24px;
  background-color: #474787;
  align-items: center;
  justify-content: center;
`;

const StyledLogo = styled(Logo)`
  margin-bottom: 64px;
`;

const StyledButton = styled(Button)`
  margin-top: 32px;
`;

class Login extends Component {
  constructor(props) {
    super(props);

    this.validate = this.validate.bind(this);
  }

  /**
   * Validate form
   *
   * @param {object} values Form input
   * @returns {object} Error messages
   * @memberof Login
   */
  validate(values) {
    const { pin } = values;
    const errors = {};

    if (!pin) {
      errors.pin = "PIN is required";
    }

    return errors;
  }

  render() {
    const blankPin = [...Array(6)].map(() => "");

    return (
      <Container>
        <StatusBar hidden />
        <StyledLogo />
        <Formik
          initialValues={{ pin: blankPin }}
          onSubmit={() => {}}
          validate={this.validate}
        >
          {({ values, errors, setFieldValue, handleSubmit, isSubmitting }) => [
            <PinInput
              label="Enter your PIN"
              value={values.pin}
              onChange={value => setFieldValue("pin", value)}
            />,
            <StyledButton caption="LOGIN" onPress={handleSubmit} isInverted />
          ]}
        </Formik>
      </Container>
    );
  }
}

Login.navigationOptions = () => ({
  header: null
});

export default Login;
