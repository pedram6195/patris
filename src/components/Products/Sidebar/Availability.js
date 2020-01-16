import React, { Component } from "react";
import Switch from "react-switch";

import FilterBox from "../../reusable/Sidebar/FilterBox";

export default class Availability extends Component {
  state = {
    checked: false
  };

  handleSwitchChange = checked => {
    this.setState({ checked });
  };

  render() {
    return (
      <FilterBox header="فقط کالاهای موجود" id="availability" center>
        <label>
          <Switch
            onChange={this.handleSwitchChange}
            checked={this.state.checked}
          />
        </label>
      </FilterBox>
    );
  }
}
