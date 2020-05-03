import React, { Component } from "react";

export default class JobCreationDetail extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleSelect, handleChange } = this.props;
    return (
      <div className="regback">
        <div className=" bg-transparent  align-ceneter">
          <div className=" col-9 mx-auto ">
            <div className="row py-5 ">
              <div className="col">
                <h3 className="text-white text-center">
                  Please Fill these information
                </h3>
              </div>
            </div>
            <div className="row py-2">
              <div className="dropdown mr-3">
                <button
                  className="btn btn-info dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Worker Type
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                  value={values.workingType}
                >
                  <label
                    className="dropdown-item"
                    value={values.workingType}
                    onSelect={handleSelect("workingType")}
                  >
                    Cleaner
                  </label>
                  <label
                    className="dropdown-item"
                    value={values.workingType}
                    onSelect={handleSelect("workingType")}
                  >
                    Organizer
                  </label>
                  <label
                    className="dropdown-item"
                    value={values.workingType}
                    onSelect={handleSelect("workingType")}
                  >
                    Coffee Man
                  </label>
                </div>
              </div>
              <div className="dropdown mr-3">
                <button
                  className="btn btn-info dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Gender
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <label
                    className="dropdown-item"
                    value={values.workerGender}
                    onSelect={handleSelect("workerGender")}
                  >
                    Female
                  </label>
                  <label
                    className="dropdown-item"
                    value={values.workerGender}
                    onSelect={handleSelect("workerGender")}
                  >
                    Male
                  </label>
                </div>
              </div>
              <div className="dropdown mr-3">
                <button
                  className="btn btn-info dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Worker range
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <label
                    className="dropdown-item"
                    value={values.workerRange}
                    onSelect={handleSelect("workerRange")}
                  >
                    1
                  </label>
                  <label
                    className="dropdown-item"
                    value={values.workerRange}
                    onSelect={handleSelect("workerRange")}
                  >
                    2
                  </label>
                  <label
                    className="dropdown-item"
                    value={values.workerRange}
                    onSelect={handleSelect("workerRange")}
                  >
                    3
                  </label>
                  <label
                    className="dropdown-item"
                    value={values.workerRange}
                    onSelect={handleSelect("workerRange")}
                  >
                    4
                  </label>
                  <label
                    className="dropdown-item"
                    value={values.workerRange}
                    onSelect={handleSelect("workerRange")}
                  >
                    5
                  </label>
                </div>
              </div>
              <div className=" col-xs-4 mr-3">
                <label style={{ color: "white", fontWeight: "bolder" }}>
                  Number of workers
                </label>
                <input
                  required
                  type="text"
                  className="form-control"
                  value={values.numberOfWorkers}
                  onChange={handleChange("numberOfWorkers")}
                  style={{ width: 150 }}
                />
              </div>
              <div>
                <label style={{ color: "white", fontWeight: "bolder" }}>
                  Price per hour
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={values.pricePerHour}
                  onChange={handleChange("pricePerHour")}
                  required
                  style={{ width: 150 }}
                />
              </div>
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
    );
  }
}
