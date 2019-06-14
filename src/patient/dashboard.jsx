import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';
import { globalLoader } from '../actions/commonActions';
import { logOut } from '../_shared/commonFunction'

class PatientDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            upcomingData: [],
            pastData: [],
        }
    }

    componentDidMount = () => {
        if (localStorage.userType === "patient" && localStorage.userId && localStorage.userToken) {
            globalLoader(false);
        }

        else {
            this.props.history.push('/patient/login')
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
                                                    Emergency
                                        </td>
                                                <td>
                                                   22/05/2019 10:00 AM
                                        </td>
                                                <td>
                                                    Dinesh Shah
                                        </td>
                                                <td>
                                                    B-115, Dwaraka Sec 10
                                        </td>
                                                <td>Cancel Appointment</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Routine
                                        </td>
                                                <td>
                                                   27/05/2019 11:00 AM
                                        </td>
                                                <td>
                                                    Mohan Jajoria
                                        </td>
                                                <td>
                                                   A-11, Janakpuri
                                        </td>
                                                <td>Cancel Appointment</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Emergency
                                        </td>
                                                <td>
                                                   05/06/2019 02:00 PM
                                        </td>
                                                <td>
                                                    Sonali Tripathi
                                        </td>
                                                <td>
                                                 H-17, Rajouri Garden
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
                                                Emergency
                                        </td>
                                                <td>
                                                    04/04/2019 11:30 AM
                                        </td>
                                                <td>
                                                    Amit Vashisht
                                        </td>
                                                <td>Yes</td>
                                                <td>
                                                    B-110, Karol Bagh
                                        </td>
                                                <td>Delete Appointment</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                Routine
                                        </td>
                                                <td>
                                                    12/04/2019 03:30 PM
                                        </td>
                                                <td>
                                                    Sneha Jain
                                        </td>
                                                <td>No</td>
                                                <td>
                                                A-11, Janakpuri
                                        </td>
                                                <td>Delete Appointment</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                Emergency
                                        </td>
                                                <td>
                                                    24/04/2019 10:00 AM
                                        </td>
                                                <td>
                                                    Komal Rana
                                        </td>
                                                <td>Yes</td>
                                                <td>
                                                    B-110, Karol Bagh
                                        </td>
                                                <td>Delete Appointment</td>
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

export default withRouter(PatientDashboard);