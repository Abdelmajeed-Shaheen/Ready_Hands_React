import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import MapContainer from "./MapContainer";
import DateTimePicker from "./DateTimePicker";
import Review from "./Review";
import JobCreationDetail from "./JobCreationDetail";
import ContactInfo from "./ContactInfo";

export class CreatePost extends Component {
  state = {
    step: 1,
    dateFrom: "",
    dateTo: "",
    timeFrom: "",
    timeTo: "",
    email: "",
    workingType: "",
    workerRange: "",
    workerGender: "",
    numberOfWorkers: 1,
    pricePerHour: 1.0,
    phoneNumber: "",
    address: "",
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  settype = (type) => {
    this.setState({ type: type });
  };

  // Handle fields change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  handleSelect = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    if (this.props.user && this.props.user.user.type !== "none")
      return <Redirect to="/home" />;
    const { step } = this.state;
    const {
      dateFrom,
      dateTo,
      timeFrom,
      timeTo,
      email,
      workingType,
      workerRange,
      workerGender,
      numberOfWorkers,
      pricePerHour,
      phoneNumber,
      address,
    } = this.state;
    const values = {
      dateFrom,
      dateTo,
      timeFrom,
      timeTo,
      email,
      workingType,
      workerRange,
      workerGender,
      numberOfWorkers,
      pricePerHour,
      phoneNumber,
      address,
    };

    switch (step) {
      case 1:
        return (
          <MapContainer
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <DateTimePicker
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <JobCreationDetail
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
            handleSelect={this.handleSelect}
            handleChange={this.handleChange}
          />
        );
      case 4:
        return (
          <ContactInfo
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
            history={this.props.history}
          />
        );
      case 5:
        return <Review prevStep={this.prevStep} />;
      default:
        return (
          <MapContainer
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
    }
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};
export default connect(mapStateToProps)(CreatePost);
