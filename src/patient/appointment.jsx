import React, { Component } from 'react';
import { globalLoader } from '../actions/commonActions';
import { withRouter, Link } from 'react-router-dom';
import DatePicker from "react-datepicker";

class PatientAppointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appointmentDate: null,
      appointmentType: '',
    }
  }
  componentWillMount = () => {
    if (!localStorage.userToken) {
      this.props.history.push('/')
    }
  }

  componentDidMount = () => {
    globalLoader(false)
  }

  render() {
    return (
      <div className>
        <div className="container-fluid">
          <div className="row">
            <div className="container page-wrapper ">
              <div className="row">
                <div className="col-12 px-0">
                  {/* start content container */}
                  <div className="container-fluid h-100">
                    <div className="row h-100 min-vh-100">
                      <div className="col-md-7 col-12 bg-wrapper" style={{ backgroundImage: 'url(/assets/img/img-4.png)' }}>
                        <div className="h-100 d-flex flex-wrap align-items-center justify-content-center">
                          <div className="appointment-txt-wrapper py-5">
                            <div className="make-an-txt">Make an </div>
                            <div className="appointment-txt pb-2">Appointment</div>
                            <div>Please let us know when and where you’d like to see us.</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5 col-12 bg-white right-side-form">
                        <div className="px-0 px-md-2 px-lg-3">
                          <div className="form-heading-logo link-color text-center py-4">
                            <Link to="/patient/dashboard">
                              <img src="/assets/img/logo-blue.png" />
                            </Link>
                          </div>
                          <form className="form-own pt-3">
                            <div className="form-group-icon form-group-icon-select form-group">
                              <select className="form-control" value={this.state.appointmentType}>
                                <option disabled value="">Appointment Type</option>
                                <option>Select</option>


                              </select>
                              <div className="icon-wrapper">
                                <img src="/assets/img/drop-down.png" />
                              </div>
                            </div>
                            <div className="form-group-icon form-group-icon-select form-group">
                              <select className="form-control">
                                <option>Select</option>
                              </select>
                              <div className="icon-wrapper">
                                <img src="/assets/img/drop-down.png" />
                              </div>
                            </div>
                            <div className="form-group-icon form-group-icon-select form-group">
                              <select className="form-control">
                                <option>Select</option>
                              </select>
                              <div className="icon-wrapper">
                                <img src="/assets/img/drop-down.png" />
                              </div>
                            </div>
                            <div className="form-group-icon form-group-icon-select form-custom-date form-group">
                              <DatePicker
                                selected={this.state.appointmentDate}
                                // onChange={(ev)=>this.changeValueDate(ev)}
                                placeholderText="Choose Date"
                                className="form-control"
                                minDate={new Date()}
                                showMonthDropdown
                                showYearDropdown
                                dropdownMode="select"
                              />
                              <div className="icon-wrapper">
                                <img src="/assets/img/calendar.png" />
                              </div>
                            </div>
                            <div className="form-group-icon form-group-icon-select form-group">
                              <select className="form-control">
                                <option>Select</option>
                              </select>
                              <div className="icon-wrapper">
                                <img src="/assets/img/drop-down.png" />
                              </div>
                            </div>
                            <div className="form-group-icon form-group-icon-select form-group">
                              <select className="form-control">
                                <option>Select</option>
                              </select>
                              <div className="icon-wrapper">
                                <img src="/assets/img/drop-down.png" />
                              </div>
                            </div>
                            <div className="pb-3 pb-md-4">
                              <button className="btn full-width-btn blue-btn curve-btn-own">
                                Available Appointments
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }

}

export default withRouter(PatientAppointment);