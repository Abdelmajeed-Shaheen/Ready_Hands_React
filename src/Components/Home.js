import React from "react";
import worker from "../assets/images/worker.png";
import user from "../assets/images/user.jpg";

const Home = () => {
  return (
    <>
      <div className="row">
        <div className="col-6">
          <div className="home">
            <div class="overlay-div"></div>
            <img
              src={user}
              style={{ height: "632px", width: "655px" }}
              alt="user"
            />
            <button className="btn">Find a Worker</button>
          </div>
        </div>

        <div className="col-6">
          <div className="home2">
            <div class="overlay-div"></div>
            <img
              src={worker}
              style={{
                height: "632px",
                width: "625px",
              }}
              alt="worker"
            />

            <button className="btn">Find a Job</button>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#00695c" }}>
        <h1
          className="display-3 py-5 text under-and-over"
          style={{
            fontFamily: "Comic Sans MS",
            color: "white",
          }}
        >
          About Us
        </h1>
        <div className="col">
          <h4
            className="display-5 py-5 text"
            style={{
              fontFamily: "Comic Sans MS",
              color: "white",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            aliquet ligula at eros mollis, pharetra facilisis risus ornare.
            Donec scelerisque enim non odio tempor, non mollis magna euismod.
            Nam sit amet risus urna. Curabitur eu varius ligula. Phasellus eu
            risus et lorem commodo pulvinar at non ligula. In eget hendrerit
            nisi, at scelerisque ante. Quisque id faucibus diam. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Nunc sollicitudin neque
            nec dapibus pellentesque. Suspendisse id purus vitae nunc dignissim
            aliquam.
          </h4>
        </div>
      </div>
    </>
  );
};

export default Home;
