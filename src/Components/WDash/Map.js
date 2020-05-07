import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";
import moment from "moment";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { mapStyles } from "./mapStyles";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";

const Maps = ({ jobs, applyToJob, appliedjobs, mappinjob, navigateToMAp }) => {
  useEffect(() => {
    navigateToMAp(null);
  }, []);
  const [selectedJob, setSelectedJob] = useState(mappinjob);
  const markerslist = jobs.map(job => (
    <Marker
      position={{ lat: job.latitude, lng: job.longitude }}
      onClick={() => setSelectedJob(job)}
    />
  ));
  const CustomSkinMap = withScriptjs(
    withGoogleMap(() => (
      <GoogleMap
        defaultZoom={15}
        defaultCenter={{
          lat: 31.9506347,
          lng: 35.9208867,
        }}
        defaultOptions={{
          scrollwheel: true,
          zoomControl: true,
          styles: mapStyles,
        }}
      >
        {markerslist}
        {selectedJob && (
          <InfoWindow
            position={{
              lat: selectedJob.latitude,
              lng: selectedJob.longitude,
            }}
            onCloseClick={() => setSelectedJob(null)}
          >
            <div>
              <h5 className="card-title">{selectedJob.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                {`from : ${moment(selectedJob.date_from).format("llll")}`}
              </h6>
              <h6 className="card-subtitle mb-2 text-muted">
                {`to : ${moment(selectedJob.date_to).format("llll")} `}
              </h6>
              <p className="card-text">Price: {selectedJob.price} JOD</p>
              <p className="card-text">
                Gender:{" "}
                {!selectedJob.gender
                  ? "ANY"
                  : selectedJob.gender === "M"
                  ? "Male"
                  : "Female"}
              </p>
              <p className="card-text">
                <Box component="fieldset" mb={3} borderColor="transparent">
                  <Typography component="legend">Rating</Typography>
                  <Rating
                    name="read-only"
                    value={parseInt(selectedJob.rating_range)}
                    readOnly
                  />
                </Box>
              </p>
              <p className="card-text">
                No. Workers: {selectedJob.no_of_workers}
              </p>
              {!appliedjobs.filter(
                appliedjob => appliedjob.job.id === selectedJob.id
              ).length ? (
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => applyToJob(selectedJob.id)}
                  style={{ backgroundColor: "#006064", borderColor: "#006064" }}
                >
                  Apply
                </button>
              ) : (
                <h6 className="card-subtitle mb-2" style={{ color: "#006064" }}>
                  Already Applied
                </h6>
              )}
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    ))
  );
  const postition = navigator.geolocation.getCurrentPosition(
    console.log,
    console.log
  );
  return (
    <CustomSkinMap
      googleMapURL="https://maps.google.com/maps/api/js?libraries=geometry&key=AIzaSyCKB7OSirN7IC8iSVD7nR1-mkj7YFpQm6E"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `100vh` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  );
};

const mapStateToProps = state => {
  return {
    jobs: state.jobsState.jobs,
    appliedjobs: state.jobsState.appliedjobs,
    mappinjob: state.jobsState.mappinjob,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    applyToJob: job_id => dispatch(actions.applyToJob(job_id)),
    navigateToMAp: () => dispatch(actions.navigateToMAp()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Maps);
