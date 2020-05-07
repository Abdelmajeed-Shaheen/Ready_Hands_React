import React from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MapIcon from "@material-ui/icons/Map";
import profile from "../../assets/images/profile.png";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import Rating from "@material-ui/lab/Rating";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));
const JobCard = ({ job, appliedjobs, applyToJob, navigatetomap, history }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Grid item xs={12} sm={4}>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar
              aria-label="recipe"
              className={classes.avatar}
              alt={job.client.user.username}
              src={profile}
            />
          }
          title={job.title}
          subheader={`Your Client is ${job.client.user.username}`}
        />
        <CardContent>
          <Typography variant="overline" color="textSecondary" component="p">
            {`From : ${moment(job.date_from).format("llll")}`}
            <br />
            {`To : ${moment(job.date_to).format("llll")} `}
            <br />
            Rating
            <Rating
              style={{ marginLeft: "4px" }}
              name="read-only"
              value={parseInt(job.rating_range)}
              size="small"
              readOnly
            />
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          {!appliedjobs.filter(appliedjob => appliedjob.job.id === job.id)
            .length ? (
            <Button
              variant="contained"
              style={{ backgroundColor: "#006064", color: "white" }}
              className={classes.button}
              endIcon={<Icon>check_circle_outline</Icon>}
              onClick={() => applyToJob(job.id)}
            >
              Apply
            </Button>
          ) : (
            <Typography
              variant="body2"
              component="p"
              style={{ color: "#006064" }}
            >
              Already Applied
            </Typography>
          )}
          <IconButton
            aria-label="show more"
            style={{ marginLeft: "auto" }}
            onClick={() => navigatetomap(job, history)}
          >
            <MapIcon />
          </IconButton>
          <IconButton
            className={clsx({
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography variant="overline">
              Service Type: {job.service.title}
            </Typography>
            <br />
            <Typography variant="overline">Price: {job.price}JD</Typography>
            <br />
            <Typography variant="overline">
              Number of Workers: {job.no_of_workers}
            </Typography>
            <br />
            <Typography variant="overline">
              Gender:
              {!job.gender ? "ANY" : job.gender === "M" ? "Male" : "Female"}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
};

const mapStateToProps = state => {
  return {
    appliedjobs: state.jobsState.appliedjobs,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    applyToJob: job_id => dispatch(actions.applyToJob(job_id)),
    navigatetomap: (job, history) =>
      dispatch(actions.navigateToMAp(job, history)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(JobCard);
