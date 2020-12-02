import React, { Component } from 'react'
import { RoomContext } from '../context';
import { Link } from 'react-router-dom';
import moment from 'moment';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import defaultBcg from '../images/room-2.jpeg';
const formatter =new Intl.NumberFormat('en');
export default class Booknow extends Component {
    constructor (props){
        super(props);
        this.state = {
        slug: this.props.match.params.slug,
        defaultBcg,
        startDate: new Date(),
        endDate: new Date(),
    };
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
    this.handleChangeStart = this.handleChangeStart.bind(this);
    }
    handleChangeStart(date) {
        this.setState({
        startDate: date
        });
    }
    handleChangeEnd(date) {
        this.setState({
        endDate: date
        });
    }
    calculateDaysLeft(startDate, endDate) {
        if (!moment.isMoment(startDate)) startDate = moment(startDate);
        if (!moment.isMoment(endDate)) endDate = moment(endDate);
        return endDate.diff(startDate, "months");
    }
    static contextType = RoomContext;
    render() {
        const { getRoom } = this.context;
        const room = getRoom(this.state.slug);
        const { startDate, endDate } = this.state;
        const daysLeft = this.calculateDaysLeft(startDate, endDate);
    if(!room){
        return (<div className="container roomerror">
            <div className="row my-5">
                <div className="col-md-6 col-12 mx-auto">
                    <div className="card shadow-lg border-0 p-4 error">
                        <h1 className="text-center display-4">SORRY</h1>
                        <h3>No such room could be found...</h3>
                        <Link to="/rooms" className="btn btn-warning mt-4 ">Back to Rooms</Link>
                    </div>
                </div>
            </div>
        </div>);
        }
        const {name,capacity,size,price,
            MayLanh,
            TiVi,
            MayGiat,
            ChoDeXe,
            CuaSo,
            BanCong,
            MayLocNuoc,
            LoViSong,
            BepGa,
            TuLanh,
            GacLung,
            images} = room;
        const [mainImg, ...defaultBcg] = images;
        return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-10 mx-auto col-12 card shadow-lg border-0 p-4">
                    <div>
                        <h1 className="display-4">Booking</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-12 my-auto">
                            <img src={mainImg || defaultBcg} className="img-fluid" alt="selected room" />
                        </div>
                        <div className="col-md-6 col-12 my-auto">
                            <h1>Rooms Details</h1>
                            <table className="table">
                                <thead className="thead-light">
                                    <tr>
                                        <th>Room Type</th>
                                        <td>{name}</td>
                                    </tr>
                                    <tr>
                                        <th>Capacity</th>
                                        <td>{capacity}</td>
                                    </tr>
                                    <tr>
                                        <th>Size</th>
                                        <td>{size} M2.</td>
                                    </tr>
                                    <tr>
                                        <th>Air-Conditioner</th>
                                        <td>{MayLanh === true ? `Included`: `Not Included`}</td>
                                    </tr>
                                    <tr>
                                        <th>Television</th>
                                        <td>{TiVi ===true ? `Included`: `Not Included`}</td>
                                    </tr>
                                    <tr>
                                        <th>Washing Machine</th>
                                        <td>{MayGiat ===true ? `Included`: `Not Included`}</td>
                                    </tr>
                                    <tr>
                                        <th>Parking Space</th>
                                        <td>{ChoDeXe ===true ? `Included`: `Not Included`}</td>
                                    </tr>
                                    <tr>
                                        <th>Window</th>
                                        <td>{CuaSo ===true ? `Included`: `Not Included`}</td>
                                    </tr>
                                    <tr>
                                        <th>Balcony</th>
                                        <td>{BanCong ===true ? `Included`: `Not Included`}</td>
                                    </tr>
                                    <tr>
                                        <th>Water Purifier</th>
                                        <td>{MayLocNuoc ===true ? `Included`: `Not Included`}</td>
                                    </tr>
                                    <tr>
                                        <th>Microwave</th>
                                        <td>{LoViSong ===true ? `Included`: `Not Included`}</td>
                                    </tr>
                                    <tr>
                                        <th>Gas stove</th>
                                        <td>{BepGa ===true ? `Included`: `Not Included`}</td>
                                    </tr>
                                    <tr>
                                        <th>Fridge</th>
                                        <td>{TuLanh ===true ? `Included`: `Not Included`}</td>
                                    </tr>
                                    <tr>
                                        <th>Mezzanine</th>
                                        <td>{GacLung ===true ? `Included`: `Not Included`}</td>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <div className="row my-3">
                        <div className="col-md-6 col-12">
                            <div className="form-group">
                                <label htmlFor="Fromdate" className="font-weight-bolder mr-3">From Month </label>
                                <DatePicker selected={this.state.startDate} onChange={this.handleChangeStart} dateFormat="MM/yyyy"
      showMonthYearPicker className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="form-group">
                                <label htmlFor="Todate" className="font-weight-bolder mr-3">To Month </label>
                                <DatePicker selected={this.state.endDate} onChange={this.handleChangeEnd} dateFormat="MM/yyyy"
      showMonthYearPicker className="form-control" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <h6 className="font-weight-bolder">Number of months : {daysLeft}</h6>
                            <mark>Please make sure Checkin time is from 7 am to 5 pm</mark>
                        </div>
                        <div className="col-md-6 col-12">
                            <h6 className="font-weight-bold">Price per month : <span className="badge badge-info">{formatter.format(price)} VNĐ</span></h6>
                            <h6 className="font-weight-bold">Total Price to be paid : <span className="text-primary">{formatter.format(daysLeft*price)} VNĐ</span></h6>
                        </div>
                    </div>
                    <div className="row my-4">
                        <div className="col-md-6 col-12">
                            <div className="form-group">
                                <label htmlFor="payment" className="font-weight-bolder">Payment Options</label>
                                <select className="form-control">
                                    <option disabled>Select payment option</option>
                                    <option value="Credit">Credit Card</option>
                                    <option value="Debit">Debit Card</option>
                                    <option value="checkin">Pay during Checkin</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6 col-12 my-auto">
                            <div className="col-md-6 col-12 float-right">
                                <button className="btn btn-block btn-outline-primary" data-toggle="modal" data-target="#thanks">Confirm </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="thanks">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body p-4">
                            <h3>Thank you </h3>
                            <p className="lead">Your room is booked successfully.
                            Please wait for a response from the owner...
                            </p>
                        </div>
                        <div className="modal-footer">
                            <Link to="/" className="btn btn-dark">Goto Home</Link>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}