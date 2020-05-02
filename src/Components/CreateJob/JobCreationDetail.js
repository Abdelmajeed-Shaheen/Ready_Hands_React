import React, { Component } from "react";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

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
          <div className=" col-6 mx-auto ">
            <div className="row py-5 ">
              <div className="col">
                <h3 className="text-white text-center">
                  Please Fill these information
                </h3>
              </div>
            </div>
            <div className="row py-2">
              <FormControl required component="fieldset">
                <FormLabel component="legend">Working Type</FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox name="Cleaning" />}
                    label="Cleaning"
                    value={values.workingType}
                    onSelect={handleSelect("workingType")}
                  />
                  <FormControlLabel
                    control={<Checkbox name="CoffeeMan" />}
                    label="Coffee Man"
                    value={values.workingType}
                    onSelect={handleSelect("workingType")}
                  />
                  <FormControlLabel
                    style={{ paddingBottom: 10 }}
                    control={<Checkbox name="Organizer" />}
                    label="Organizer"
                    value={values.workingType}
                    onSelect={handleSelect("workingType")}
                  />
                  <TextField
                    style={{ paddingBottom: 10 }}
                    required
                    id="standard-required"
                    label="Number of Workers: "
                    value={values.numberOfWorkers}
                    onChange={handleChange("numberOfWorkers")}
                  />
                  <TextField
                    style={{ paddingBottom: 10 }}
                    required
                    id="standard-required"
                    label="Price Per Hour in JD: "
                    value={values.pricePerHour}
                    onChange={handleChange("pricePerHour")}
                  />
                </FormGroup>
              </FormControl>
              <FormControl style={{ width: 100 }}>
                <InputLabel id="demo-simple-select-label">
                  Worker Range
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={values.workerRange}
                  onSelect={handleSelect("numberOfWorkers")}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                </Select>
              </FormControl>
              <FormControl required component="fieldset">
                <FormLabel component="legend">Worker Gender</FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox name="Male" />}
                    label="Male"
                    value={values.workerGender}
                    onSelect={handleSelect("numberOfWorkers")}
                  />
                  <FormControlLabel
                    control={<Checkbox name="Female" />}
                    label="Female"
                    value={values.workerGender}
                    onSelect={handleSelect("numberOfWorkers")}
                  />
                </FormGroup>
              </FormControl>
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
