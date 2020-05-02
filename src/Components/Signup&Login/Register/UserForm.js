import React, { Component } from "react";
import FormUserDetails from "./FormUserDetails";
import ClientOrWorker from "./ClientOrWorker";
import Confirm from "./Confirm";
import Success from "./Success";
import FormWorkerDetails from "./FormWorkerDetails";
import FormClientDetails from "./FormClientDetails";

export class UserForm extends Component {
  state = {
    step: 1,
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: "",
    hour_rate: "",
    phone_no: "",
    image: null,
    type: "none",
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

  settype = type => {
    this.setState({ type: type });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const {
      first_name,
      last_name,
      email,
      username,
      password,
      type,
      image,
      phone_no,
      hour_rate,
    } = this.state;
    const values = {
      first_name,
      last_name,
      email,
      username,
      password,
      type,
      image,
      phone_no,
      hour_rate,
    };

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <ClientOrWorker
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            settype={this.settype}
            values={values}
          />
        );
      case 3:
        if (values.type === "worker") {
          return (
            <FormWorkerDetails
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              prevStep={this.prevStep}
              values={values}
            />
          );
        } else if (values.type === "client") {
          return (
            <FormClientDetails
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              prevStep={this.prevStep}
              values={values}
            />
          );
        }
        return alert("please select client or worker");
      case 4:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
            history={this.props.history}
          />
        );
      case 5:
        return <Success />;
      default:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
    }
  }
}

export default UserForm;
