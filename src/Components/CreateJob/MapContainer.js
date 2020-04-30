import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const mapStyles = {
  width: "70%",
  height: "70%",
  marginLeft: 200,
  marginTop: 40,
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: 31.9506347,
          lng: 35.9208867,
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: " AIzaSyA66cVvOv - sT65Mb7nX2NvuTGp61DBPn3Q",
})(MapContainer);
