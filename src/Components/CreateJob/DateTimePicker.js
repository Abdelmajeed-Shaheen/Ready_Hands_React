import React, { Component } from "react";

export default class DateAndTimePicker extends Component {
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
                <h3 className="text-white text-center">Date and Time</h3>
              </div>
            </div>
            <div className="row py-2">
              <div className="col">
                <label style={{ color: "#e0e2e4" }}>Date from</label>
                <input
                  type="date"
                  class="form-control"
                  name="date from"
                  required
                  value={values.dateFrom}
                  onChange={handleChange("dateFrom")}
                />
              </div>
              <div className="col">
                <label style={{ color: "#e0e2e4" }}>Date To</label>
                <input
                  type="date"
                  class="form-control"
                  name="date to"
                  required
                  value={values.dateTo}
                  onChange={handleChange("dateTo")}
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label style={{ color: "#e0e2e4" }}>Time From</label>
                <input
                  type="time"
                  class="form-control"
                  name="time To"
                  value={values.timeTo}
                  onChange={handleChange("timeTo")}
                  required
                />
              </div>

              <div className="col">
                <label style={{ color: "#e0e2e4" }}>Time To</label>
                <input
                  type="time"
                  class="form-control"
                  name="time From"
                  value={values.timeFrom}
                  onChange={handleChange("timeFrom")}
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
