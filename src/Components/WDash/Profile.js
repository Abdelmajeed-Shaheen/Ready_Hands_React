import React from "react";
import { connect } from "react-redux";
import profile from "../../assets/images/profile.png";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const Profile = ({ user }) => {
  return (
    <div className="content">
      <div className="container-fluid">
        <div className="row py-5">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="card card-profile">
              <div className="card-avatar">
                <img className="img" src={profile} alt="profile" />
              </div>
              <div className="card-body">
                <h6 className="card-category text-gray">Worker</h6>
                <h4 className="card-title">{`${user.user.first_name} ${user.user.last_name}`}</h4>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    Username: {user.user.username}
                  </li>
                  <li className="list-group-item">
                    Phone Number: {user.phone_no}
                  </li>
                  <li className="list-group-item">
                    <Box component="fieldset" mb={3} borderColor="transparent">
                      <Typography component="legend">Read only</Typography>
                      <Rating
                        name="read-only"
                        value={parseInt(user.rating)}
                        readOnly
                      />
                    </Box>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.userState.user,
  };
};

export default connect(mapStateToProps)(Profile);
