import React, { useState } from "react";
import { connect } from "react-redux";
import JobCard from "./JobCard";
import { mapStyles } from "./mapStyles";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";

const Maps = ({ jobs }) => {
  const [selectedJob, setSelectedJob] = useState(null);
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
              <h2>{selectedJob.title}</h2>
              <p>{selectedJob.service.title}</p>
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
  };
};

export default connect(mapStateToProps)(Maps);
