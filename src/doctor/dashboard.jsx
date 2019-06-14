import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';
import { globalLoader } from '../actions/commonActions';
import { logOut } from '../_shared/commonFunction'

class DoctorDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            upcomingData: [],
            pastData: [],
        }
    }

    componentDidMount = () => {
        if (localStorage.userType === "doctor" && localStorage.userId && localStorage.userToken) {
            globalLoader(false);
        }

        else {
            this.props.history.push('/doctor/login')
        }

    }
    logOut = () => {
        logOut(this);
    }

    render() {

        return (
            <div>
                <header className="home-header d-flex flex-wrap p-3 align-items-center">

                    <div className="logo-wrapper-home">
                        <Link to='/'>
                            <img src="/assets/img/logo-blue.png" />
                        </Link>
                    </div>
                    <ul className="ml-auto list-unstyled menu-wrapper">
                        <li>
                            <Link to='/doctor/login'>
                                <img src="/assets/img/doctor.png" />
                                <span>My Account</span>
                            </Link>
                        </li>
                        <li onClick={() => this.logOut()}>
                            <span className="link-color cursor">
                                <img src="/assets/img/patients.png" />
                                <span>Logout</span>
                            </span>
                        </li>

                    </ul>

                </header>
                <section className="min-height-less-header text-light bg-own-blue">
                    <div className="container-fluid pt-3">
                        <div className="row">

                            <div className="col-12 text-right ">
                                <Link to='/patient/appointment'>
                                    <button className="btn white-btn btn-own">Book An Appointment</button>
                                </Link>
                            </div>

                            <h3 className="col-12 pt-3">Patient Dashboard</h3>

                            <div className="col-12 pb-4">

                                <h5 className="pt-2 pb-2">Upcoming Appointment</h5>

                                <div className="data-table">
                                    <table className="table mb-0">
                                        <thead>
                                            <tr>
                                                <th>
                                                    Appointment Type
                                        </th>
                                                <th>
                                                    Date and Time
                                        </th>
                                                <th>
                                                    Doctor
                                        </th>
                                                <th>
                                                    Location
                                        </th>
                                                <th>Cancel Appointment</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    Appointment Type
                                        </td>
                                                <td>
                                                    Date and Time
                                        </td>
                                                <td>
                                                    Doctor
                                        </td>
                                                <td>
                                                    Location
                                        </td>
                                                <td>Cancel Appointment</td>
                                            </tr>
                                        </tbody>

                                    </table>
                                </div>
                            </div>

                            <div className="col-12">

                                <h5 className="pt-2 pb-2">Past Appointment</h5>

                                <div className="data-table">
                                    <table className="table mb-0">
                                        <thead>
                                            <tr>
                                                <th>
                                                    Appointment Type
                                                </th>
                                                <th>
                                                    Date and Time
                                                </th>
                                                <th>
                                                    Doctor
                                                 </th>
                                                <th>Attended</th>
                                                <th>
                                                    Location
                                                </th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    Appointment Type
                                        </td>
                                                <td>
                                                    Date and Time
                                        </td>
                                                <td>
                                                    Doctor
                                        </td>
                                                <td>Yes</td>
                                                <td>
                                                    Location
                                        </td>
                                                <td>Cancel Appointment</td>
                                            </tr>
                                        </tbody>

                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        )
    }


}

export default withRouter(DoctorDashboard);