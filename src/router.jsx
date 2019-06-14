import React from 'react';
import {Switch, Route } from 'react-router-dom';
import DoctorRouter from './doctor/doctorRouter';
import PatientRouter from './patient/patientRouter.jsx';
import Home from './home'

const Router = () =>  {
  return (
   
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/doctor' component={DoctorRouter}/>
      <Route path='/patient' component={PatientRouter}/>
    </Switch>
  )
  }
  export default Router