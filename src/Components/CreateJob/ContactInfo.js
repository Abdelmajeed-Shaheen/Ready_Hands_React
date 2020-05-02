import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";

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
              <form noValidate autoComplete="off">
                <TextField
                  required
                  id="standard-basic"
                  label="Phone number"
                  style={{ marginLeft: 30, paddingRight: 10 }}
                  value={values.phoneNumber}
                  onChange={handleChange("phoneNumber")}
                />
                <TextField
                  required
                  id="standard-basic"
                  label="Email"
                  style={{ paddingRight: 10 }}
                  value={values.email}
                  onChange={handleChange("email")}
                />
                <TextField
                  required
                  id="standard-basic"
                  label="Address"
                  value={values.address}
                  onChange={handleChange("address")}
                />
              </form>
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
              Continue
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
    );
  }
}
