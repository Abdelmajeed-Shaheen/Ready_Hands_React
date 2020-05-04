import React, { Component } from "react";

export default class ContactInfo extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <div className="regback">
        <div className=" bg-transparent  align-ceneter">
          <div className=" col-6 mx-auto ">
            <div className="row py-5 ">
              <div className="col">
                <h3 className="text-white text-center">
                  Please Fill these information
                </h3>
              </div>
            </div>
            <div className="row py-2">
              <div class="form-group col-xs-4 col-md-4">
                <label for="name" class="control-label">
                  Phone Number
                </label>
                <input
                  required
                  type="text"
                  className="form-control"
                  id="phoneNumber"
                  value={values.phoneNumber}
                  onChange={handleChange("phoneNumber")}
                  placeholder="phone number..."
                />
              </div>
              <div class="form-group col-xs-4 col-md-4">
                <label for="name" class="control-label">
                  Email
                </label>
                <input
                  required
                  type="text"
                  className="form-control"
                  id="email"
                  value={values.email}
                  onChange={handleChange("email")}
                  placeholder="phone number..."
                />
              </div>
              <div class="form-group col-xs-4 col-md-4">
                <label for="name" class="control-label">
                  Address
                </label>
                <input
                  required
                  type="text"
                  className="form-control"
                  id="address"
                  value={values.address}
                  onChange={handleChange("address")}
                  placeholder="phone number..."
                />
              </div>
            </div>
            <button
              className="btn btn-primary mt-5"
              onClick={this.continue}
              style={{
                position: "absolute",
                right: 0,
                marginTop: 20,
                color: "white",
                backgroundColor: "#00695c",
                borderColor: "#00695c",
              }}
            >
              Continue
            </button>
            <button
              className="btn btn-warning mt-5"
              onClick={this.back}
              style={{
                position: "absolute",
                left: 0,
                marginTop: 20,
              }}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    );
  }
}
