import React, { Component } from "react";
// import Sliderbar from "../Sliderbar";
import axios from "axios";
//import {postRoom} from '../../action/AddRoom'
// import { connect } from "react-redux";
// import data from "./data";
// import Pagination from "react-bootstrap/Pagination";

class ListRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentWillMount() {
    axios
      .get("http://localhost:6001/room/LessorRoom", {
        params: { id: "5fd4b81c8780a00e780f05ce" },
      })
      .then((res) => {
        this.setState({ data: res.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      // Div Main
      <div id="layoutSidenav">
        {/* div navbar left */}

        {/* div containt */}
        <div id="layoutSidenav_content">
          <div class="mt-4">
            <h3>Rooms profile list</h3>
            <table
              id="dtOrderExample"
              className="table table-striped table-bordered table-sm"
              cellspacing="0"
              style={{ width: "100%" }}
            >
              <thead>
                <tr>
                  <th classNamw="th-sm" scope="col">
                    #
                  </th>
                  <th classNamw="th-sm" scope="col">
                    Room name{" "}
                  </th>
                  <th classNamw="th-sm" scope="col">
                    Price{" "}
                  </th>
                  <th classNamw="th-sm" scope="col">
                    Room owner{" "}
                  </th>
                </tr>
              </thead>
              <tbody>
                return(
                <tr>
                  <th scope="row">1</th>
                  {/* <td>{this.state.address}</td>
                  <td>{item.fields.price}</td>
                  <td>{item.fields.slug}</td> */}
                  <td>
                    <a href="/lessor/{{this._id}}/update" class="btn btn-link">
                      Sửa
                    </a>
                    <a
                      href=""
                      class="btn btn-link"
                      data-id={this.state.slug}
                      data-toggle="modal"
                      data-target="#delete-rooms"
                    >
                      Xóa
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
            <a class="btn btn-primary" href="/lessor">
              Quay về danh sách
            </a>
          </div>

          <div id="delete-rooms" class="modal" tabindex="-1">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">Xóa phòng</h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <p>Bạn chắc chắn muốn xóa phòng này ?</p>
                </div>
                <div class="modal-footer">
                  <button
                    id="btn-delete-rooms"
                    type="button"
                    class="btn btn-danger"
                  >
                    Xóa
                  </button>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Đóng
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListRoom;
