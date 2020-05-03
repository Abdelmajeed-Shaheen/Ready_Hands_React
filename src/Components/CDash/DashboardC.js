import React from "react";

const DashboardC = () => {
  return (
    <div className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card card-stats">
              <div className="card-header card-header-warning card-header-icon">
                <div className="card-icon">
                  <i className="material-icons">content_copy</i>
                </div>
                <p className="card-category">Used Space</p>
                <h3 className="card-title">
                  49/50
                  <small>GB</small>
                </h3>
              </div>
              <div className="card-footer">
                <div className="stats">
                  <i className="material-icons text-danger">warning</i>
                  Get More Space...
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card card-stats">
              <div className="card-header card-header-success card-header-icon">
                <div className="card-icon">
                  <i className="material-icons">store</i>
                </div>
                <p className="card-category">Revenue</p>
                <h3 className="card-title">$34,245</h3>
              </div>
              <div className="card-footer">
                <div className="stats">
                  <i className="material-icons">date_range</i> Last 24 Hours
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card card-stats">
              <div className="card-header card-header-danger card-header-icon">
                <div className="card-icon">
                  <i className="material-icons">info_outline</i>
                </div>
                <p className="card-category">Fixed Issues</p>
                <h3 className="card-title">75</h3>
              </div>
              <div className="card-footer">
                <div className="stats">
                  <i className="material-icons">local_offer</i> Tracked from
                  Github
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card card-stats">
              <div className="card-header card-header-info card-header-icon">
                <div className="card-icon">
                  <i className="fa fa-twitter"></i>
                </div>
                <p className="card-category">Followers</p>
                <h3 className="card-title">+245</h3>
              </div>
              <div className="card-footer">
                <div className="stats">
                  <i className="material-icons">update</i> Just Updated
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="card">
              <div className="card-header card-header-warning">
                <h4 className="card-title">Employees Stats</h4>
                <p className="card-category">
                  New employees on 15th September, 2016
                </p>
              </div>
              <div className="card-body table-responsive">
                <table className="table table-hover">
                  <thead className="text-warning">
                    <th>ID</th>
                    <th>Name</th>
                    <th>Salary</th>
                    <th>Country</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Dakota Rice</td>
                      <td>$36,738</td>
                      <td>Niger</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Minerva Hooper</td>
                      <td>$23,789</td>
                      <td>Curaçao</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="card">
              <div className="card-header card-header-warning">
                <h4 className="card-title">Employees Stats</h4>
                <p className="card-category">
                  New employees on 15th September, 2016
                </p>
              </div>
              <div className="card-body table-responsive">
                <table className="table table-hover">
                  <thead className="text-warning">
                    <th>ID</th>
                    <th>Name</th>
                    <th>Salary</th>
                    <th>Country</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Dakota Rice</td>
                      <td>$36,738</td>
                      <td>Niger</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Minerva Hooper</td>
                      <td>$23,789</td>
                      <td>Curaçao</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardC;
