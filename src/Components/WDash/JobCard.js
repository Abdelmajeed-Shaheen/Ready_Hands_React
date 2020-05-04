import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import test from "../../assets/images/test1.png";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
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
const JobCard = ({ job }) => {
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
            <Avatar aria-label="recipe" className={classes.avatar}>
              {job.client.user.username[0].toUpperCase()}
            </Avatar>
          }
          title={job.title}
          subheader={`from ${job.date_from.substring(0, 10)}
           to ${job.date_to.substring(0, 10)} `}
        />
        <CardMedia
          className={classes.media}
          image={test}
          title="Paella dish"
          onClick={() =>
            window.open(
              "https://www.google.com/maps/search/?api=1&query=" +
                job.address.longitude +
                "," +
                job.address.latitude
            )
          }
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Your Client is {job.client.user.username}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            endIcon={<Icon>check_circle_outline</Icon>}
          >
            Apply
          </Button>
          <IconButton
            className={clsx(classes.expand, {
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
            <Typography paragraph>Service Type: {job.service.title}</Typography>
            <Typography paragraph>Price: {job.price}JD</Typography>
            <Typography paragraph>
              Starts at: {job.date_from.substring(11, 16)}
            </Typography>
            <Typography paragraph>
              Minimum Rating: {job.rating_range}
            </Typography>
            <Typography paragraph>
              Number of Workers: {job.no_of_workers} , Gender: {job.gender}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
};
export default JobCard;
