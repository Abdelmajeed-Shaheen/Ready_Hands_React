import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <header className="masthead">
        <div className="container h-100">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-lg-10 align-self-end">
              <h1 className="text-uppercase text-white font-weight-bold">
                The Service You Want , When Ever You Need
              </h1>
            </div>
            <div className="col-lg-8 align-self-baseline">
              <div className="row mt-5">
                <div className="col mr-5">
                  <Link to="/register" style={{ textDecoration: "none" }}>
                    <button className=" btn btn-block homebtn">
                      Find A Job
                    </button>
                  </Link>
                </div>
                <div className="col">
                  <Link to="/create/job" style={{ textDecoration: "none" }}>
                    <button className=" btn btn-block homebtn">
                      Find A Worker
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="page-section" id="services">
        <div className="container">
          <h2 className="text-center mt-0">At Your Service</h2>
          <hr className="divider my-4" />
          <div className="row">
            <div className="col-lg-4 col-md-6 text-center">
              <div className="mt-5">
                <i className="homeicon fas fa-4x fa-business-time mb-4"></i>
                <h3 className="h4 mb-2">Always On Time</h3>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 text-center">
              <div className="mt-5">
                <i className="homeicon fas fa-4x fa-globe text mb-4"></i>
                <h3 className="h4 mb-2">Always Available</h3>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 text-center">
              <div className="mt-5">
                <i className="homeicon fas fa-4x fa-heart text mb-4"></i>
                <h3 className="h4 mb-2">Serve with Love</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="page-section  bg-dark text-white" id="contact">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="mt-0">Let's Get In Touch!</h2>
              <hr className="divider my-4" />
              <p className=" mb-5">
                Give us a call or send us an email and we will get back to you
                as soon as possible!
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
              <i className="fas fa-phone fa-3x mb-3 text-muted"></i>
              <div>+962 1234567</div>
            </div>
            <div className="col-lg-4 mr-auto text-center">
              <i className="fas fa-envelope fa-3x mb-3 text-muted"></i>
              <a
                className="d-block"
                href="mailto:contact@contact@ReadyHands.com"
              >
                contact@ReadyHands.com
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-light py-5">
        <div className="container">
          <div className="small text-center text-muted">
            Copyright © 2020 - ALPHA
          </div>
        </div>
      </footer>
    </>
  );
};
const mapStateToProps = state => {
  return {
    user: state.userState.user,
  };
};

export default connect(mapStateToProps)(Home);
