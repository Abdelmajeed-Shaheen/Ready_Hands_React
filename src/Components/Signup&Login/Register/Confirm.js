import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../redux/actions";
import { List, ListItem, ListItemText } from "@material-ui/core/";

export class Confirm extends Component {
  confirm = (values) => {
    const userData = {
      username: values.username,
      password: values.password,
      first_name: values.first_name,
      last_name: values.last_name,
    };
    let clientorworker = {};
    const type = values.type;
    if (type === "worker") {
      clientorworker = {
        phone_no: values.phone_no,
        hour_rate: values.hour_rate,
      };
    } else {
      clientorworker = {
        phone_no: values.phone_no,
      };
    }
    this.props.signup(userData, this.props.history, clientorworker, type);
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { first_name, last_name, username, type, phone_no, hour_rate },
    } = this.props; // wow clever
    return (
      <div className="regback">
        <div className=" bg-transparent  align-ceneter">
          <div className=" col-4 mx-auto py-5">
            <div className="row">
              <div className="col">
                <h3 className="text-white text-center">Confirm Information</h3>
              </div>
            </div>
            <List style={{ backgroundColor: "white", borderRadius: "25px" }}>
              <ListItem>
                <ListItemText primary="First Name" secondary={first_name} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Last Name" secondary={last_name} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Username" secondary={username} />
              </ListItem>
              <ListItem>
                <ListItemText primary="You Are A" secondary={type} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Phone Number" secondary={phone_no} />
              </ListItem>
              {type === "worker" && (
                <ListItem>
                  <ListItemText primary="Hour Rate" secondary={hour_rate} />
                </ListItem>
              )}
            </List>
            <p style={{ color: "red" }}>
              {this.props.errors ? this.props.errors.username : ""}
            </p>
            <br />

            <button
              className="btn btn-primary mt-5"
              onClick={() => this.confirm(this.props.values)}
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
    );
  }
}

const mapStateToProps = (state) => {
  return {
    errors: state.errorsState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (userData, history, clientorworker, type) =>
      dispatch(actions.signup(userData, history, clientorworker, type)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Confirm);
