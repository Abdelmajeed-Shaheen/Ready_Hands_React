import React, { Component } from "react";
import MapPicker from "./MapPicker";
import Flatpickr from "react-flatpickr";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";

class CreateJob extends Component {
  state = {
    title: "",
    service: "",
    price: 0,
    rating_range: "",
    date_from: "",
    date_to: "",
    no_of_workers: 0,
    longitude: "",
    latitude: "",
    gender: "",
  };
  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  setlonglat = position => {
    const lat = position.lat;
    const lng = position.lng;
    this.setState({ longitude: lng, latitude: lat });
  };

  render() {
    const {
      title,
      service,
      price,
      rating_range,
      date_from,
      date_to,
      no_of_workers,
      gender,
      longitude,
      latitude,
    } = this.state;
    const items = [];

    for (let i = 1; i <= 5; i++) {
      items.push(
        <label
          className="dropdown-item"
          onClick={() => this.setState({ rating_range: i })}
        >
          {i}
        </label>
      );
    }
    const serviceslist = this.props.services.map(service => (
      <label
        className="dropdown-item"
        onClick={() => this.setState({ service: service.title })}
      >
        {service.title}
      </label>
    ));
    return (
      <div className="content">
        <div className="container-fluid">
          <div className="row ">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header card-header-warning">
                  <h4 className="card-title">Create A Job</h4>
                </div>
                <div className="card-body">
                  <div className="row mb-3">
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>Title</label>
                        <input
                          type="text"
                          className="form-control"
                          id="title"
                          value={title}
                          name="title"
                          onChange={this.handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="form-group">
                        <label>No of Workers</label>
                        <input
                          type="number"
                          className="form-control"
                          id="no_of_workers"
                          value={no_of_workers}
                          min={0}
                          name="no_of_workers"
                          onChange={this.handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="form-group">
                        <label>Price</label>
                        <input
                          type="number"
                          className="form-control"
                          id="price"
                          value={price}
                          min={0}
                          name="price"
                          onChange={this.handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row  mb-3">
                    <div className="col-md-5 mr-2">
                      <div className="form-group">
                        <label>Date From</label>
                        <Flatpickr
                          data-enable-time
                          className="string"
                          value={date_from}
                          onChange={date_from => {
                            this.setState({
                              date_from: date_from[0].toISOString(),
                            });
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="form-group">
                        <label>Date To</label>
                        <Flatpickr
                          data-enable-time
                          value={date_to}
                          onChange={date_to => {
                            this.setState({
                              date_to: date_to[0].toISOString(),
                            });
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row my-5">
                    <div className="col-md-4">
                      <div className="dropdown">
                        <button
                          className="btn btn-info dropdown-toggle btn-block"
                          type="button"
                          id="dropdownMenuButton"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          {service ? service : "Service"}
                        </button>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton"
                        >
                          {serviceslist}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="dropdown mr-3">
                        <button
                          className="btn btn-info dropdown-toggle btn-block"
                          type="button"
                          id="dropdownMenuButton"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          {gender
                            ? gender === "M"
                              ? "Male"
                              : "Female"
                            : "Gender"}
                        </button>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <label
                            className="dropdown-item"
                            onClick={() => this.setState({ gender: "F" })}
                          >
                            Female
                          </label>
                          <label
                            className="dropdown-item"
                            onClick={() => this.setState({ gender: "M" })}
                          >
                            Male
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="dropdown mr-3">
                        <button
                          className="btn btn-info dropdown-toggle btn-block"
                          type="button"
                          id="dropdownMenuButton"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          {rating_range ? rating_range : "Minimum Rating"}
                        </button>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton"
                        >
                          {items}
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    className="btn btn-success pull-right"
                    style={{
                      backgroundColor: "#006064",
                      borderColor: "#006064",
                    }}
                    onClick={() =>
                      this.props.createJob(this.state, this.props.history)
                    }
                  >
                    Create
                  </button>
                  <div className="clearfix"></div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <MapPicker setlonglat={this.setlonglat} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    services: state.jobsState.services,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createJob: (job, history) => dispatch(actions.createJob(job, history)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CreateJob);
