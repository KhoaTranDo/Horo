import React, { useEffect, useState } from "react";
import axios from "axios";
const moment = require("moment");
export default function ListRoom(props) {
  let [Room, setRoom] = useState([]);
  useEffect(() => {
    axios
      .get(
        `http://localhost:6001/room/LessorRoom/${localStorage.getItem("id")}`
      )
      .then((res) => {
        //  document.getElementById("error-changPassword").innerHTML =
        //  res.data.msg;
        setRoom(res.data);
      })
      .catch((error) => {
        //  document.getElementById("error-changPassword").innerHTML =
        //    error.response.data.msg;
      });
  }, []);
  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };
  const status = (status) => {
    if (status === 0) {
      return <span class="mj_btn btn btn-success">Active</span>;
    } else {
      return <span class="mj_btn btn btn-success">Hiden</span>;
    }
  };
  return (
    <>
      {/* List Room */}
      <div className="card">
        <div className="card-body">
          {/* Dashboard */}
          <main>
            <div className="container-fluid">
              <h2 className="mt-30 page-title">Dashboard</h2>
        
              <div className="row">
                <div className="col-xl-3 col-md-6">
              <div className="dashboard-report-card purple">
                <div className="card-content">
                  <span className="card-title">Your Room </span>
                  <span className="card-count">{Room.length}</span>
                </div>
                <div className="card-media">
                  <i className="fab fa-rev" />
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="dashboard-report-card red">
                <div className="card-content">
                  <span className="card-title">Order Cancel</span>
                  <span className="card-count">0</span>
                </div>
                <div className="card-media">
                  <i className="far fa-times-circle" />
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="dashboard-report-card info">
                <div className="card-content">
                  <span className="card-title">Order Process</span>
                  <span className="card-count">5</span>
                </div>
                <div className="card-media">
                  <i className="fas fa-sync-alt rpt_icon" />
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="dashboard-report-card success">
                <div className="card-content">
                  <span className="card-title">Today Income</span>
                  <span className="card-count">50,000,000 VNĐ</span>
                </div>
                <div className="card-media">
                  <i className="fas fa-money-bill rpt_icon" />
                </div>
              </div>
            </div>
            {/* End Dashboard */}
                <div className="col-xl-12 col-md-12">
                  <div className="card card-static-2 mb-30">
                    <div className="card-title-2">
                      <h4>Recent Orders</h4>
                      <a href="orders.html" className="view-btn hover-btn">
                        View All
                      </a>
                    </div>
                    <div className="card-body-table">
                      <div className="table-responsive">
                        <table className="table ucp-table table-hover">
                          <thead>
                            <tr>
                              <th style={{ width: 130 }}>Order ID</th>
                              <th style={{ width: 130 }}>Describe</th>
                              <th style={{ width: 200 }}>Date Create</th>
                              <th style={{ width: 200 }}>Type Room</th>
                              <th style={{ width: 130 }}>Price</th>
                              <th style={{ width: 130 }}>Status</th>
                              <th style={{ width: 100 }}>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {Room.map((item, index) => (
                              <>
                                <tr>
                                  <td>{item.properties.title}</td>
                                  <td>{item.properties.describe}</td>
                                  <td>
                                    {moment(item.properties.date).format(
                                      "dddd, MMMM Do YYYY, h:mm:ss"
                                    )}
                                  </td>
                                  <td>{item.properties.roomtype}</td>
                                  <td>
                                    {formatNumber(item.properties.prices) +
                                      "VND"}
                                  </td>
                                  <td>{status(item.properties.status)}</td>
                                  <td>
                                    <i className="fas fa-edit" />
                                  </td>
                                </tr>
                              </>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          {/* End Dashboard */}
        </div>
      </div>
    </>
  );
}
