import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const mapStyles = {
  width: "70%",
  height: "70%",
  marginLeft: 200,
  marginTop: 40,
};

export class MapContainer extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    return (
      <div className="regback">
        <div className=" bg-transparent  align-ceneter">
          <div className="row mx-auto ">
            <Map
              google={this.props.google}
              zoom={14}
              style={mapStyles}
              initialCenter={{
                lat: 31.9506347,
                lng: 35.9208867,
              }}
            />
          </div>
          <div className="row">
            <button
              className="btn btn-primary mt-5"
              onClick={this.continue}
              style={{
                position: "absolute",
                right: 0,
                bottom: 0,
                color: "white",
                backgroundColor: "#00695c",
                borderColor: "#00695c",
              }}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: " AIzaSyA66cVvOv - sT65Mb7nX2NvuTGp61DBPn3Q",
})(MapContainer);
