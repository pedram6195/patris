import React, { Component } from "react";
import Switch from "react-switch";

export default class Availability extends Component {
  state = {
    checked: false
  };

  handleSwitchChange = checked => {
    this.setState({ checked });
  };

  render() {
    return (
      <div className="availablity">
        <input type="checkbox" id="availablity-toggle" />
        <label htmlFor="availablity-toggle" className="availablity-head">
          <h3>فقط کالاهای موجود</h3>
          <i className="fas fa-chevron-down"></i>
        </label>
        <div className="availablity-content">
          <hr />
          <label>
            <Switch
              onChange={this.handleSwitchChange}
              checked={this.state.checked}
            />
          </label>
        </div>
      </div>
    );
  }
}
