import React, { Component } from "react";

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <div className="regback">
        <div className=" bg-transparent  align-ceneter">
          <div className=" col-6 mx-auto ">
            <div className="row py-5 ">
              <div className="col">
                <h3 className="text-white text-center">User Information</h3>
              </div>
            </div>
            <div className="row py-2">
              <div className="col">
                <label
                  htmlFor="first_name"
                  style={{ color: "white", fontWeight: "bolder" }}
                >
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="first_name"
                  value={values.first_name}
                  name="first_name"
                  placeholder="First Name"
                  onChange={handleChange("first_name")}
                  required
                />
              </div>
              <div className="col">
                <label
                  htmlFor="last_name"
                  style={{ color: "white", fontWeight: "bolder" }}
                >
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="last_name"
                  value={values.last_name}
                  name="last_name"
                  placeholder="Last Name"
                  onChange={handleChange("last_name")}
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label
                  htmlFor="username"
                  style={{ color: "white", fontWeight: "bolder" }}
                  className="mt-5"
                >
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  value={values.username}
                  name="username"
                  placeholder="Username"
                  onChange={handleChange("username")}
                  required
                />
              </div>
              <div className="col">
                <label
                  htmlFor="password"
                  style={{ color: "white", fontWeight: "bolder" }}
                  className="mt-5"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={values.password}
                  name="password"
                  placeholder="Password"
                  onChange={handleChange("password")}
                  required
                />
              </div>
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
          </div>
        </div>
      </div>
    );
  }
}

export default FormUserDetails;
