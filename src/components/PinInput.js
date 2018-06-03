import React, { Component, createRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.View`
  margin-bottom: 16px;
`;

const InputContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Input = styled.TextInput`
  width: 48px;
  font-family: Roboto-Bold;
  font-size: 32px;
  color: ${({ color }) => color};
  text-align: center;
`;

export const ErrorText = styled.Text`
  font-family: Roboto-Regular;
  font-size: 12px;
  color: #ff5252;
  text-align: center;
`;

class PinInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      focusIndex: 0
    };

    this.inputs = props.value.map(createRef);
    this.updateInput = this.updateInput.bind(this);
  }

  /**
   * Handle user input per value part
   *
   * @param {number} index Value part index
   * @returns {function} Callback
   * @memberof PinInput
   */
  updateInput(index) {
    const { value, onChange } = this.props;

    const assign = (inputIndex, newPart) => (_, index) => {
      return inputIndex === index ? newPart : value[index];
    };
    const isValid = index < value.length - 1;

    return newPart => {
      const newValue = value.map(assign(index, newPart));
      onChange(newValue);

      if (isValid) {
        this.inputs[index + 1].current.focus();
      }
    };
  }

  render() {
    const { style, value, isError, errorText } = this.props;
    const { focusIndex } = this.state;

    return (
      <Container style={style}>
        <InputContainer>
          {value.map((_, index) => {
            const ref = this.inputs[index];
            const isFocused = focusIndex === index;
            const currentPart = value[index];
            const focusColor = isFocused ? "#ffb142" : "white";
            const fontColor = isError ? "#ff5252" : focusColor;

            return (
              <Input
                key={index}
                innerRef={ref}
                keyboardType="phone-pad"
                value={currentPart}
                maxLength={1}
                underlineColorAndroid={fontColor}
                color={fontColor}
                onFocus={() => this.setState({ focusIndex: index })}
                onChangeText={this.updateInput(index)}
              />
            );
          })}
        </InputContainer>
        {isError && <ErrorText>{errorText}</ErrorText>}
      </Container>
    );
  }
}

PinInput.propTypes = {
  style: PropTypes.array,
  value: PropTypes.array,
  onChange: PropTypes.func,
  isError: PropTypes.bool,
  errorText: PropTypes.string
};

export default PinInput;
