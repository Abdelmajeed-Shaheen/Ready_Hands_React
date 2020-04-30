import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    marginLeft: 450,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
    fontSize: 20,
  },
}));

export default function DateAndTimePicker() {
  const classes = useStyles();

  return (
    <div>
      <h3 style={{ marginLeft: 450 }}>
        Please choose the time duration you need workers
      </h3>
      <div>
        <form className={classes.container} noValidate>
          <TextField
            id="datetime-local"
            label="From: "
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField
            id="datetime-local"
            label="To: "
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>
      </div>
    </div>
  );
}
