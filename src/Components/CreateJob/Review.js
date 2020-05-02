import React, { Component } from "react";

export default class Review extends Component {
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
          <div className=" col-6 mx-auto ">
            <div className="row py-5 ">
              <div className="col">
                <h3 className="text-white text-center">
                  Take a final look and press confirm if everything is ok
                </h3>
              </div>
              <button
                className="btn btn-primary mt-5"
                onClick={this.continue}
                style={{
                  position: "absolute",
                  right: 0,

                  color: "white",
                  backgroundColor: "#00695c",
                  borderColor: "#00695c",
                }}
              >
                Confirm
              </button>
              <button
                className="btn btn-warning mt-5"
                onClick={this.back}
                style={{
                  position: "absolute",
                  left: 0,
                }}
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
