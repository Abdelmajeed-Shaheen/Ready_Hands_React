import React, { Component } from "react";
import LocationPicker from "react-location-picker";

/* Default position */
const defaultPosition = {
  lat: 31.9506347,
  lng: 35.9208867,
};

class MapPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address: "Please Drag The Marker To The Wanted Location ",
    };

    // Bind
    this.handleLocationChange = this.handleLocationChange.bind(this);
  }

  handleLocationChange({ position, address, places }) {
    // Set new location
    this.setState({ address });
    this.props.setlonglat(position);
  }

  render() {
    return (
      <div>
        <div className="alert alert-success" style={{ fontWeight: "bolder" }}>
          {this.state.address}
        </div>
        <div>
          <LocationPicker
            containerElement={<div style={{ height: "100%" }} />}
            mapElement={<div style={{ height: "470px" }} />}
            defaultPosition={defaultPosition}
            onChange={this.handleLocationChange}
            radius={-1}
            zoom={18}
          />
        </div>
      </div>
    );
  }
}

export default MapPicker;
