import React, { Component } from "react";
import { List, ListItem, ListItemText } from "@material-ui/core/";

export default class Review extends Component {
  // what does this do?
  confirm = (values) => {
    const postData = {
      dateFrom: values.dateFrom,
      dateTo: values.dateTo,
      timeFrom: values.timeFrom,
      timeTo: values.timeTo,
      workingType: values.workingType,
      workerRange: values.workerRange,
      workerGender: values.workerGender,
      numberOfWorkers: values.numberOfWorkers,
      pricePerHour: values.pricePerHour,
      email: values.email,
      phoneNumber: values.phoneNumber,
      address: values.address,
    };
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const {
      values: {
        dateFrom,
        dateTo,
        timeFrom,
        timeTo,
        workingType,
        workerRange,
        workerGender,
        numberOfWorkers,
        pricePerHour,
        email,
        phoneNumber,
        address,
      },
    } = this.props;
    return (
      <div className="regback">
        <div className=" bg-transparent  align-ceneter">
          <div className=" col-4 mx-auto py-5 ">
            <div className="row ">
              <div className="col">
                <h3 className="text-white text-center">
                  Take a final look and press confirm if everything is ok
                </h3>
              </div>
            </div>
            <div
              className="row"
              style={{
                backgroundColor: "white",
                borderRadius: "25px",
                height: "300px",
                overflowY: "scroll",
              }}
            >
              {/* this list should be a .map()
              You can make an array of objects with two properties
              for primary and secondary
             */}
              <List>
                <ListItem>
                  <ListItemText primary="Date from" secondary={dateFrom} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Date to" secondary={dateTo} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Time from" secondary={timeFrom} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Time to" secondary={timeTo} />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Working type"
                    secondary={workingType}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Worker range"
                    secondary={workerRange}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Worker gender"
                    secondary={workerGender}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Number of workers"
                    secondary={numberOfWorkers}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Price per hour"
                    secondary={pricePerHour}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Email" secondary={email} />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Phone number"
                    secondary={phoneNumber}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Address" secondary={address} />
                </ListItem>
              </List>
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
    );
  }
}
