import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

/*Radio*/
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import "./signup.css";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

function FormPage() {
  const classes = useStyles();

  return (
    <div
      className="main"
      style={{
        marginTop: 20,
        marginLeft: "auto",
        marginRight: "auto",
        width: "400px",
      }}
    >
      <label
        style={{
          fontSize: 20,
          marginLeft: 170,
        }}
      >
        Signup
      </label>
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            {/* <AccountCircle /> */}
            <img
              src="https://img.icons8.com/bubbles/40/000000/login-rounded-right.png"
              alt=""
            />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="First Name" />
          </Grid>
        </Grid>
      </div>
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            {/* <AccountCircle /> */}
            <img
              src="https://img.icons8.com/bubbles/40/000000/login-rounded-right.png"
              alt=""
            />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Last Name" />
          </Grid>
        </Grid>
      </div>
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            {/* <AccountCircle /> */}
            <img
              src="https://img.icons8.com/bubbles/40/000000/login-rounded-right.png"
              alt=""
            />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Username" />
          </Grid>
        </Grid>
      </div>
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            {/* <EmailRoundedIcon /> */}
            <img
              src="https://img.icons8.com/bubbles/40/000000/email.png"
              alt=""
            />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Email" />
          </Grid>
        </Grid>
      </div>
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            {/* <VisibilityOffIcon /> */}
            <img
              src="https://img.icons8.com/bubbles/40/000000/password.png"
              alt=""
            />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Password" />
          </Grid>
        </Grid>
      </div>
      <div className={classes.margin}>
        <FormControl component="fieldset">
          <FormLabel component="legend">
            <img
              src="https://img.icons8.com/bubbles/40/000000/groups.png"
              alt=""
            />
          </FormLabel>
          <RadioGroup aria-label="gender" name="gender1">
            <FormControlLabel
              value="Client"
              control={<Radio />}
              label="Client"
              labelPlacement="end"
              style={{
                marginLeft: 50,
                marginTop: 0,
              }}
            />
            <FormControlLabel
              value="Worker"
              control={<Radio />}
              label="Worker"
              labelPlacement="end"
              style={{
                marginLeft: 50,
              }}
            />
            <ButtonGroup
              variant="text"
              color="primary"
              aria-label="text primary button group"
              style={{ marginLeft: 90, marginTop: 10 }}
            >
              <Button style={{ width: "100px" }}>
                <img
                  src="https://img.icons8.com/bubbles/50/000000/long-arrow-up.png"
                  alt="Signup"
                />
              </Button>
              <Button style={{ width: "100px" }}>
                <img
                  src="https://img.icons8.com/bubbles/50/000000/close-window.png"
                  alt="Cancel"
                />
              </Button>
            </ButtonGroup>
            {/* <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            {/* <AccountCircle /> */}
            {/* <img
              src="https://img.icons8.com/bubbles/40/000000/groups.png"
              alt=""
            />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Type" />
          </Grid>
        </Grid> */}
          </RadioGroup>
          <Grid>
            <Grid
              item
              style={{
                paddingBottom: 10,
                marginLeft: 70,
                marginTop: 25,
                fontSize: 20,
              }}
            >
              <label>Login with existing account</label>
            </Grid>
          </Grid>
        </FormControl>
      </div>
    </div>
  );
}
export default FormPage;
