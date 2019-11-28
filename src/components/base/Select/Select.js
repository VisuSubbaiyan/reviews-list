import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StyledSelect from './Select.style';

/**
 * `Select` - HTML select (need to modify the options custom options )
 */
class Select extends Component {
  static defaultProps = {
    selected: '',
    options: [{ value: '1', name: '1' }, { value: '2', name: '2' }],
    disabled: false
  }

  /**
   * @property {boolean} selected - current selected value
   * @property {Array<Object>} options - options to be rendered in select box
   * @property {boolean} disabled - idicate that select box is disabled or not
   * @property {function} onChange - handle select options
   */
  static propsTypes = {
    selected: PropTypes.any,
    options: PropTypes.arrayOf(PropTypes.object),
    disabled: PropTypes.bool,
    onChange: PropTypes.func
  }

  state = {
    selected: this.props.selected,
    disabled: this.props.disabled
  }

  componentWillReceiveProps({ disabled }) {
    if (this.props.disabled !== disabled) {
      this.setState({ disabled });
    }
  }

  handleOnChange = event => {
    this.setState({ selected: event.target.value });
    this.props.onChange(event.target.value, event); // Passing event object also for future reference 
  }

  render() {
    return (
      <StyledSelect
        onChange={this.handleOnChange}
        selected={this.state.selected}
        disabled={this.state.disabled}
        css={this.props.css}
      >
        {this.props.options.map(({ value, name }) => <option value={value} key={name}>{name}</option>)}
      </StyledSelect>
    );
  }
}

export default Select;
