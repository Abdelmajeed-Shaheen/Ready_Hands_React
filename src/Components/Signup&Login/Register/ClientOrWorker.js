import React, { Component } from "react";

export class ClientOrWorker extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, settype } = this.props;
    return (
      <div className="regback">
        <div className=" bg-transparent  align-ceneter">
          <div className=" col-6 mx-auto ">
            <div className="row py-5 ">
              <div className="col">
                <h3 className="text-white text-center">User Type</h3>
              </div>
            </div>
            <div className="row py-2">
              <div className="col">
                <h3 className="text-white text-center">
                  {values.type !== "none"
                    ? `You Are A ${values.type}`
                    : "Are You A Client OR A Worker ??"}
                </h3>
              </div>
            </div>
            <div className="row py-3">
              <div className="col">
                <button
                  className=" btn btn-block homebtn"
                  onClick={() => settype("worker")}
                >
                  I am A Worker
                </button>
              </div>
              <div className="col">
                <button
                  className=" btn btn-block homebtn"
                  onClick={() => settype("client")}
                >
                  I am A Client
                </button>
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

export default ClientOrWorker;
