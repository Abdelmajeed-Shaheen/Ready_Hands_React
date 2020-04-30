import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function JobCreationDetail() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    Cleaning: false,
    CoffeeMan: false,
    Organizer: false,
    Male: false,
    Female: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { Cleaning, CoffeeMan, Organizer } = state;
  const { Male, Female } = state;

  const [range, setType] = React.useState("");

  const handleSelect = (event) => {
    setType(event.target.value);
  };

  return (
    <div className={classes.root}>
      <FormControl
        required
        component="fieldset"
        className={classes.formControl}
      >
        <FormLabel component="legend">Working Type</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={Cleaning}
                onChange={handleChange}
                name="Cleaning"
              />
            }
            label="Cleaning"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={CoffeeMan}
                onChange={handleChange}
                name="CoffeeMan"
              />
            }
            label="Coffee Man"
          />
          <FormControlLabel
            style={{ paddingBottom: 10 }}
            control={
              <Checkbox
                checked={Organizer}
                onChange={handleChange}
                name="Organizer"
              />
            }
            label="Organizer"
          />
          <TextField
            style={{ paddingBottom: 10 }}
            required
            id="standard-required"
            label="Number of Workers: "
            defaultValue="2"
          />
          <TextField
            style={{ paddingBottom: 10 }}
            required
            id="standard-required"
            label="Price Per Hour in JD: "
            defaultValue="2"
          />
        </FormGroup>
      </FormControl>
      <FormControl className={classes.formControl} style={{ width: 100 }}>
        <InputLabel id="demo-simple-select-label">Worker Range</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={range}
          onChange={handleSelect}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </Select>
      </FormControl>
      <FormControl
        required
        component="fieldset"
        className={classes.formControl}
      >
        <FormLabel component="legend">Worker Gender</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={Male} onChange={handleChange} name="Male" />
            }
            label="Male"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={Female}
                onChange={handleChange}
                name="Female"
              />
            }
            label="Female"
          />
        </FormGroup>
      </FormControl>
    </div>
  );
}
