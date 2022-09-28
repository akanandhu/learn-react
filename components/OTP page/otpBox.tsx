import React, { Component } from 'react';
import OtpInput from 'react-otp-input';

export default class extends Component {
  state = { otp: '' };

  handleChange = (otp: any) => this.setState({ otp });

  render() {
    return (
      <OtpInput className='bg-black'
        value={this.state.otp}
        onChange={this.handleChange}
        numInputs={4}
        separator={<span>-</span>}
        containerStyle={false}
        isInputNum={true}
      />
    );
  }
}