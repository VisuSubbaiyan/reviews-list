import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StyledTextInput } from './TextInput.styled';

/**
`TextInput` component represent text-input
*/
class TextInput extends Component {
  /**
   @property {Object} props - Incoming react property
   @property {string | number} props.value - text-input value
   @property {string} props.placeholder - placeholder text
   @property {function} props.onChange - Event handler for change event
   @returns {React.Element} - React component responsible for rendering inputbox
  */
  static propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    onChange: PropTypes.func.isRequired
  }

  state = {
    value: this.props.value,
    disabled: !!this.props.disabled
  }

  handleOnChange = event => {
    this.setState({ value: event.target.value });
    this.props.onChange(event.target.value, event);
  }

  render() {
    const { value, disabled } = this.state;
    
    return (
      <StyledTextInput
        value={value}
        onChange={this.handleOnChange}
        placeholder={this.props.placeholder}
        disabled={disabled}
        css={this.props.css}
      />
    );
  }
}

export default TextInput;
