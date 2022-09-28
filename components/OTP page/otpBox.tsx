import React, { Component } from 'react';



export default class App extends Component {
  state = { otp: '' };

  handleChange = (otp:any) => this.setState({ otp });

  render() {
    return (
      <OtpInput
        value={this.state.otp}
        onChange={this.handleChange}
        numInputs={6}
        separator={<span>-</span>}
      />
    );
  }
}