import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

/*Date and time Picker */
// import DateAndTimePicker from "./DateTimePicker";
/*fill job information*/
// import JobCreationDetail from "./JobCreationDetail";
/*contact info*/
// import ContactInfo from "./ContactInfo";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ["First Step", "Second Step", "Third Step"];
}

function getStepContent(step) {
  // let component=null;
  switch (step) {
    case 0:
      return "this is first step in registeration";
    case 1:
      return "Second Step";
    case 2:
      return "Third Step";

    default:
      return "Unknown step";
  }
}

export default function Register() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  //   const isStepOptional = (step) => {
  //     return step === 1;
  //   };

  const isStepSkipped = step => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography
              style={{ marginLeft: 550 }}
              className={classes.instructions}
            >
              All steps completed - Your post's ready!
            </Typography>
            <Button
              style={{ position: "absolute", bottom: 0, right: 0 }}
              onClick={handleReset}
              className={classes.button}
            >
              Reset
            </Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
            <div>
              <Button
                style={{ position: "absolute", bottom: 0, left: 0 }}
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.button}
              >
                Back
              </Button>

              <Button
                style={{ position: "absolute", bottom: 0, right: 0 }}
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
