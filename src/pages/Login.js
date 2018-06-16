import React, { Component } from "react";
import PropTypes from "prop-types";
import { StatusBar } from "react-native";
import { StackActions, NavigationActions } from "react-navigation";
import styled from "styled-components";
import { Formik } from "formik";
import { connect } from "react-redux";

import { setUserSession } from "../store/actions";
import Logo from "../components/Logo";
import PinInput from "../components/PinInput";
import Button from "../components/Button";

const Container = styled.View`
  flex: 1;
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

export class Login extends Component {
  constructor(props) {
    super(props);

    this.validate = this.validate.bind(this);
    this.submit = this.submit.bind(this);
    this.redirect = this.redirect.bind(this);
  }

  componentDidMount() {
    const { me } = this.props;

    if (me && me.isLoggedIn) {
      this.redirect();
    }
  }

  /**
   * Redirect to Home
   *
   * @memberof Login
   */
  redirect() {
    const { navigation } = this.props;

    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: "Home" })]
    });

    navigation.dispatch(resetAction);
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

  /**
   * Submit form
   *
   * @param {object} values Form values
   * @param {object} formikActions Action related to Formik
   * @memberof Login
   */
  async submit(values, formikActions) {
    const { me, saveSession } = this.props;
    const { pin } = values;

    try {
      if (me) {
        if (me.pin !== pin) {
          throw new Error();
        }

        saveSession({ isLoggedIn: true });
      } else {
        saveSession({
          pin,
          isLoggedIn: true
        });
      }

      this.redirect();
    } catch (error) {
      console.error(error);
      alert("Sorry, Failed to login !");
    }
  }

  render() {
    const { me } = this.props;
    const blankPin = [...Array(6)].map(() => "");

    return (
      <Container>
        <StatusBar hidden />
        <StyledLogo />
        <Formik
          initialValues={{ pin: blankPin }}
          onSubmit={this.submit}
          validate={this.validate}
        >
          {({ values, errors, setFieldValue, handleSubmit, isSubmitting }) => [
            <PinInput
              label="Enter your PIN"
              value={values.pin}
              onChange={value => setFieldValue("pin", value)}
            />,
            <StyledButton
              caption={me ? "LOGIN" : "REGISTER"}
              onPress={handleSubmit}
              isInverted
            />
          ]}
        </Formik>
      </Container>
    );
  }
}

Login.navigationOptions = () => ({
  header: null
});

Login.propTypes = {
  navigation: PropTypes.object,
  me: PropTypes.object,
  saveSession: PropTypes.func
};

const mapStateToProps = ({ userSession }) => ({
  me: userSession
});

const mapDispatchToProps = dispatch => ({
  saveSession: user => dispatch(setUserSession(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
